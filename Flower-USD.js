let stockInfo = []

const DEFAULT_CONFIG = {
  coinId: "flower-2",
  cacheSeconds: 15,
}

if (typeof args.widgetParameter === "string") {
  stockInfo = args.widgetParameter.split(";")
}

const coinId = stockInfo[0] || DEFAULT_CONFIG.coinId
const cacheSeconds = Number(stockInfo[1]) > 0 ? Number(stockInfo[1]) : DEFAULT_CONFIG.cacheSeconds
const infoUrl = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&market_data=true`

const cacheKey = `flower_coingecko_cache_${coinId}`
const cacheTimeKey = `flower_coingecko_cache_time_${coinId}`

async function fetchWithUA(url, responseType = "json") {
  const req = new Request(url)
  req.headers = { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)" }
  req.headers["Cache-Control"] = "no-cache"
  req.headers["Pragma"] = "no-cache"
  req.timeoutInterval = 10
  if (responseType === "image") return await req.loadImage()
  return await req.loadJSON()
}

async function fetchWithRetry(url, responseType = "json", maxRetries = 2) {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fetchWithUA(url, responseType)
    } catch (error) {
      if (i === maxRetries) throw error
    }
  }
}

function readCache(allowStale = false) {
  try {
    const cachedData = Keychain.get(cacheKey)
    const cacheTime = Keychain.get(cacheTimeKey)
    if (!cachedData || !cacheTime) return null
    const age = Date.now() - parseInt(cacheTime, 10)
    if (!allowStale && age >= cacheSeconds * 1000) return null
    return JSON.parse(cachedData)
  } catch (e) {
  }
  return null
}

function writeCache(data) {
  try {
    Keychain.set(cacheKey, JSON.stringify(data))
    Keychain.set(cacheTimeKey, Date.now().toString())
  } catch (e) {
  }
}

async function getCachedLogo(url) {
  if (!url) return null
  const fm = FileManager.local()
  const logoPath = fm.joinPath(fm.documentsDirectory(), `crypto_logo_${coinId}.png`)

  try {
    if (fm.fileExists(logoPath)) {
      const modifiedAt = fm.modificationDate(logoPath)
      if (modifiedAt && Date.now() - modifiedAt.getTime() < 24 * 60 * 60 * 1000) {
        return fm.readImage(logoPath)
      }
    }

    const logo = await fetchWithRetry(url, "image")
    fm.writeImage(logoPath, logo)
    return logo
  } catch (e) {
    if (fm.fileExists(logoPath)) return fm.readImage(logoPath)
    return null
  }
}

function isFiniteNumber(value) {
  return typeof value === "number" && isFinite(value)
}

function toNumber(value) {
  const parsed = Number(value)
  return isFinite(parsed) ? parsed : null
}

function readUsdValue(value) {
  if (value && typeof value === "object") return toNumber(value.usd)
  return toNumber(value)
}

function colorForChange(value) {
  if (!isFiniteNumber(value)) return Color.gray()
  if (value > 0) return new Color("#1fc77a")
  if (value < 0) return new Color("#ff5a6b")
  return new Color("#f4b267")
}

function formatPercent(value) {
  if (!isFiniteNumber(value)) return "--"
  const prefix = value > 0 ? "+" : ""
  return prefix + value.toFixed(2) + "%"
}

function formatPrice(value) {
  if (!isFiniteNumber(value)) return "--"
  if (value >= 1) return value.toFixed(4)
  if (value >= 0.1) return value.toFixed(5)
  return value.toFixed(6)
}

function formatCompactUsd(value) {
  if (!isFiniteNumber(value)) return "--"
  const abs = Math.abs(value)
  if (abs >= 1000000000) return "$" + (value / 1000000000).toFixed(2) + "B"
  if (abs >= 1000000) return "$" + (value / 1000000).toFixed(2) + "M"
  if (abs >= 1000) return "$" + (value / 1000).toFixed(1) + "K"
  return "$" + value.toFixed(0)
}

function formatApiTime(value) {
  if (!value) return "--"
  const date = new Date(value)
  if (isNaN(date.getTime())) return "--"
  const formatter = new DateFormatter()
  formatter.dateFormat = "HH:mm"
  return formatter.string(date)
}

function addMetricCell(parent, title, value) {
  const cell = parent.addStack()
  cell.layoutVertically()

  const titleLabel = cell.addText(title)
  titleLabel.font = Font.mediumSystemFont(10)
  titleLabel.textColor = new Color("#8d93a1")

  cell.addSpacer(3)

  const valueLabel = cell.addText(formatPercent(value))
  valueLabel.font = Font.boldSystemFont(13)
  valueLabel.textColor = colorForChange(value)
  valueLabel.minimumScaleFactor = 0.7

  return cell
}

let apiData = readCache()

if (!apiData?.market_data?.current_price?.usd) {
  try {
    apiData = await fetchWithRetry(infoUrl)
    writeCache(apiData)
  } catch (e) {
    apiData = readCache(true)
    if (!apiData?.market_data?.current_price?.usd) {
      const w = new ListWidget()
      w.addText("Erreur reseau")
      w.addText("CoinGecko indisponible")
      Script.setWidget(w)
      Script.complete()
      return
    }
  }
}

const marketData = apiData.market_data
const currentPrice = readUsdValue(marketData.current_price)
const change1h = readUsdValue(marketData.price_change_percentage_1h_in_currency)
const change24h = readUsdValue(marketData.price_change_percentage_24h_in_currency)
const change7d = readUsdValue(marketData.price_change_percentage_7d_in_currency)
const change30d = readUsdValue(marketData.price_change_percentage_30d_in_currency)
const volume24h = readUsdValue(marketData.total_volume)
const lastUpdated = apiData.last_updated || marketData.last_updated
const logoUrl = apiData.image?.small || apiData.image?.thumb || apiData.image?.large || null
const logo = await getCachedLogo(logoUrl)

if (!isFiniteNumber(currentPrice)) {
  const w = new ListWidget()
  w.addText("Donnees corrompues")
  w.addText("Reponse CoinGecko invalide")
  Script.setWidget(w)
  Script.complete()
  return
}

const list = new ListWidget()
list.backgroundColor = new Color("#0d1016")
list.setPadding(14, 14, 14, 14)

const topRow = list.addStack()
topRow.centerAlignContent()

if (logo) {
  const logoView = topRow.addImage(logo)
  logoView.imageSize = new Size(30, 30)
  logoView.cornerRadius = 10
}

topRow.addSpacer()

const priceHeader = topRow.addStack()
priceHeader.layoutVertically()

const priceLabel = priceHeader.addText(formatPrice(currentPrice) + " USD")
priceLabel.font = Font.boldSystemFont(16)
priceLabel.textColor = Color.white()
priceLabel.rightAlignText()
priceLabel.minimumScaleFactor = 0.65

priceHeader.addSpacer(3)

const change24hLabel = priceHeader.addText("24H  " + formatPercent(change24h))
change24hLabel.font = Font.boldSystemFont(12)
change24hLabel.textColor = colorForChange(change24h)
change24hLabel.rightAlignText()

list.addSpacer(10)

const metricsRow = list.addStack()
metricsRow.centerAlignContent()
addMetricCell(metricsRow, "1h", change1h)
metricsRow.addSpacer()
addMetricCell(metricsRow, "7d", change7d)
metricsRow.addSpacer()
addMetricCell(metricsRow, "30d", change30d)

list.addSpacer(10)

const volumeTitle = list.addText("24h Vol")
volumeTitle.font = Font.mediumSystemFont(10)
volumeTitle.textColor = new Color("#8d93a1")

list.addSpacer(2)

const volumeValue = list.addText(formatCompactUsd(volume24h))
volumeValue.font = Font.boldSystemFont(10)
volumeValue.textColor = Color.white()

list.addSpacer(10)

const updRow = list.addStack()
updRow.centerAlignContent()
updRow.addSpacer()
const updLabel = updRow.addText("Upd : " + formatApiTime(lastUpdated))
updLabel.font = Font.mediumSystemFont(10)
updLabel.textColor = new Color("#8d93a1")
updRow.addSpacer()

Script.setWidget(list)
Script.complete()
