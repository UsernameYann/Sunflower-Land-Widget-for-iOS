// ====================================
// 🌻 SFL WIDGET V3 - SIMPLIFIED API
// ====================================
// Uses the new token-free API: https://sfl.world/api/v1/prices

// ==== CONFIGURATION ====
const API_URL = "https://sfl.world/api/v1/prices";
const HISTORY_SOURCE_URL = "https://raw.githubusercontent.com/UsernameYann/Extractor_sfl.world/main/daily_minmax_all.json";
const HISTORY_FILE = "sfl_history_30d.json";
const MAX_DAYS = 30;
const MIN_INTERVAL_MINUTES = 15;
const HISTORY_REFRESH_AFTER_UTC_MINUTES = 30; // 00:30 UTC

// ==== NOTIFICATION CONFIGURATION ====
const NOTIFICATIONS_ENABLED = __ENABLE_NOTIFICATIONS__;

// ==== GLOBAL THRESHOLDS ====
const GREEN_THRESHOLD = __GREEN_THRESHOLD__;   // 0% = new historical minimum
const RED_THRESHOLD = __RED_THRESHOLD__;   // 100% = new historical maximum
const NOTIFICATION_MIN_INTERVAL_MINUTES = 15; 
const GROUP_NOTIFICATIONS_BY_ZONE = true; 
const NOTIFICATION_RETENTION_DAYS = 1;

// ==== FILTERS ====
// FILTER supports:
// - "all"
// - category name(s): ["fruits", "resources"]
// - exact item name(s): ["Sunflower", "Obsidian"]
// - mix of both: ["fruits", "Sunflower"]
// - item ids (number/string): [201, "663"]
const FILTER_CATEGORY = __FILTER_CATEGORY__; // Controls both widget display and notifications.

// ==== API NAME → DATA MAPPING ====
const ITEM_MAPPING = {
  // Vegetables
  "Sunflower": { id: 201, emoji: "🌻", category: "vegetables" },
  "Potato": { id: 202, emoji: "🥔", category: "vegetables" },
  "Pumpkin": { id: 203, emoji: "🎃", category: "vegetables" },
  "Carrot": { id: 204, emoji: "🥕", category: "vegetables" },
  "Cabbage": { id: 205, emoji: "🥬", category: "vegetables" },
  "Beetroot": { id: 206, emoji: "🌰", category: "vegetables" },
  "Cauliflower": { id: 207, emoji: "🥦", category: "vegetables" },
  "Parsnip": { id: 208, emoji: "🥕", category: "vegetables" },
  "Radish": { id: 209, emoji: "🫜", category: "vegetables" },
  "Wheat": { id: 210, emoji: "🌾", category: "vegetables" },
  "Kale": { id: 211, emoji: "🥬", category: "vegetables" },
  "Eggplant": { id: 215, emoji: "🍆", category: "vegetables" },
  "Corn": { id: 216, emoji: "🌽", category: "vegetables" },
  "Soybean": { id: 251, emoji: "🫛", category: "vegetables" },
  "Rice": { id: 253, emoji: "🌾", category: "vegetables" },
  "Tomato": { id: 255, emoji: "🍅", category: "vegetables" },
  "Barley": { id: 257, emoji: "🌾", category: "vegetables" },
  "Rhubarb": { id: 258, emoji: "🥬", category: "vegetables" },
  "Zucchini": { id: 259, emoji: "🥒", category: "vegetables" },
  "Yam": { id: 260, emoji: "🍠", category: "vegetables" },
  "Broccoli": { id: 261, emoji: "🥦", category: "vegetables" },
  "Pepper": { id: 262, emoji: "🌶️", category: "vegetables" },
  "Onion": { id: 263, emoji: "🧅", category: "vegetables" },
  "Turnip": { id: 264, emoji: "🥬", category: "vegetables" },
  "Artichoke": { id: 265, emoji: "🥦", category: "vegetables" },
  
  // Fruits
  "Apple": { id: 212, emoji: "🍎", category: "fruits" },
  "Blueberry": { id: 213, emoji: "🫐", category: "fruits" },
  "Orange": { id: 214, emoji: "🍊", category: "fruits" },
  "Banana": { id: 217, emoji: "🍌", category: "fruits" },
  "Grape": { id: 252, emoji: "🍇", category: "fruits" },
  "Olive": { id: 254, emoji: "🫒", category: "fruits" },
  "Lemon": { id: 256, emoji: "🍋", category: "fruits" },
  "Duskberry": { id: 266, emoji: "🌝", category: "fruits" },
  "Lunara": { id: 267, emoji: "🌙", category: "fruits" },
  "Celestine": { id: 268, emoji: "✨", category: "fruits" },
  
  // Animals (products)
  "Egg": { id: 605, emoji: "🥚", category: "animals" },
  "Honey": { id: 614, emoji: "🍯", category: "animals" },
  "Leather": { id: 641, emoji: "🧳", category: "animals" },
  "Wool": { id: 642, emoji: "🧶", category: "animals" },
  "Merino Wool": { id: 643, emoji: "🐑", category: "animals" },
  "Feather": { id: 644, emoji: "🪶", category: "animals" },
  "Milk": { id: 645, emoji: "🥛", category: "animals" },
  
  // Resources
  "Wood": { id: 601, emoji: "🪵", category: "resources" },
  "Stone": { id: 602, emoji: "🪨", category: "resources" },
  "Iron": { id: 603, emoji: "⚒️", category: "resources" },
  "Gold": { id: 604, emoji: "⚜️", category: "resources" },
  "Crimstone": { id: 636, emoji: "♦️", category: "resources" },
  "Obsidian": { id: 663, emoji: "⚫", category: "resources" },
  "Salt": { id: 665, emoji: "🧂", category: "resources" },
  
  // Pet items
  "Ruffroot": { id: 2631, emoji: "🌿", category: "pet" },
  "Chewed Bone": { id: 2632, emoji: "🦴", category: "pet" },
  "Heart Leaf": { id: 2633, emoji: "💚", category: "pet" },
  "Moonfur": { id: 2634, emoji: "🌙", category: "pet" },
  "Ribbon": { id: 2636, emoji: "🎀", category: "pet" },
  "Dewberry": { id: 2637, emoji: "🫐", category: "pet" },
  "Wild Grass": { id: 2638, emoji: "🌱", category: "pet" },
  "Frost Pebble": { id: 2639, emoji: "❄️", category: "pet" },
  
  // Fishing bait
  "Capsule Bait": { id: 2986, emoji: "🎣", category: "baits" },
  "Umbrella Bait": { id: 2987, emoji: "☂️", category: "baits" },
  "Crimson Baitfish": { id: 2988, emoji: "🐟", category: "baits" }
};

function getCategoryFromName(itemName) {
  const mapping = ITEM_MAPPING[itemName];
  return mapping ? mapping.category : "other";
}

function normalizeFilterSelection(selection) {
  if (selection === "all") {
    return { all: true, categories: new Set(), itemNames: new Set(), itemIds: new Set() };
  }

  const selected = Array.isArray(selection) ? selection : [selection];
  const categories = new Set(Object.values(ITEM_MAPPING).map(v => String(v.category).toLowerCase()));

  const normalized = {
    all: false,
    categories: new Set(),
    itemNames: new Set(),
    itemIds: new Set(),
  };

  for (const raw of selected) {
    if (raw == null) continue;

    const value = String(raw).trim();
    if (!value) continue;
    if (value.toLowerCase() === "all") {
      normalized.all = true;
      continue;
    }

    if (typeof raw === "number" || /^\d+$/.test(value)) {
      normalized.itemIds.add(String(raw));
      continue;
    }

    const lower = value.toLowerCase();
    if (categories.has(lower)) {
      normalized.categories.add(lower);
      continue;
    }

    normalized.itemNames.add(value);
  }

  return normalized;
}

function filterItemsByCategory(items, category) {
  const normalized = normalizeFilterSelection(category);
  if (normalized.all) return items;

  return items.filter(item => {
    const itemCategory = getCategoryFromName(item.name).toLowerCase();
    const itemId = String(item.id);

    return normalized.categories.has(itemCategory)
      || normalized.itemNames.has(item.name)
      || normalized.itemIds.has(itemId);
  });
}
function round(v) { return v != null ? v.toFixed(4) : "—"; }

function getPositionColor(ratio) {
  const percent = ratio * 100;
  
  if (percent <= 10) return new Color("#00FF00");
  else if (percent <= 20) return new Color("#66FF66");
  else if (percent <= 35) return new Color("#99FF99");
  else if (percent <= 45) return new Color("#CCFFCC");
  else if (percent <= 55) return Color.white();
  else if (percent <= 65) return new Color("#FFCCCC");
  else if (percent <= 80) return new Color("#FF9999");
  else if (percent <= 90) return new Color("#FF6666");
  else return new Color("#FF0000");
}

function formatDayUtc(ts) {
  return new Date(ts).toISOString().slice(0, 10);
}

function dayStartUtcMs(day) {
  return Date.parse(`${day}T00:00:00Z`);
}

function toNumber(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function hasP2PPayload(payload) {
  return !!(payload && payload.data && payload.data.p2p);
}

function normalizeDailyRows(rows) {
  if (!Array.isArray(rows)) return [];

  const normalized = [];
  for (const row of rows) {
    const day = row?.d || row?.day || row?.date;
    const min = toNumber(row?.min ?? row?.mini ?? row?.low ?? row?.bottom);
    const max = toNumber(row?.max ?? row?.maxi ?? row?.high ?? row?.top);
    if (!day || min == null || max == null) continue;
    normalized.push({ d: day, min, max });
  }

  return normalized;
}

function normalizeRemoteHistory(remoteJson) {
  const byId = {};

  const ingest = (idCandidate, nameCandidate, value) => {
    const idFromCandidate = String(idCandidate || "").match(/^\d+$/) ? String(idCandidate) : null;
    const idFromValue = value?.id != null && String(value.id).match(/^\d+$/) ? String(value.id) : null;
    const idFromName = nameCandidate && ITEM_MAPPING[nameCandidate] ? String(ITEM_MAPPING[nameCandidate].id) : null;
    const id = idFromCandidate || idFromValue || idFromName;
    if (!id) return;

    const rows = Array.isArray(value)
      ? value
      : (value?.days || value?.history || value?.data || []);

    const normalized = normalizeDailyRows(rows);
    if (normalized.length) byId[id] = normalized;
  };

  if (Array.isArray(remoteJson)) {
    for (const row of remoteJson) {
      ingest(row?.id, row?.name, row);
    }
    return byId;
  }

  const root = remoteJson?.items || remoteJson;
  if (!root || typeof root !== "object") return byId;

  for (const [key, value] of Object.entries(root)) {
    if (key.startsWith("_")) continue;
    ingest(key, key, value);
  }

  return byId;
}

function getRecentDailyRows(dailyRows, nowTs) {
  const oneDay = 24 * 60 * 60 * 1000;
  if (!Array.isArray(dailyRows)) return [];
  return dailyRows.filter(row => {
    const dayTs = dayStartUtcMs(row.d);
    if (!Number.isFinite(dayTs)) return false;
    return nowTs - dayTs <= MAX_DAYS * oneDay;
  });
}

function getClosestDailyRefPrice(dailyRows, targetTs) {
  if (!dailyRows.length) return null;
  const closest = dailyRows.reduce((best, row) => {
    const ts = dayStartUtcMs(row.d);
    if (!Number.isFinite(ts)) return best;
    if (!best) return { row, diff: Math.abs(ts - targetTs) };
    const diff = Math.abs(ts - targetTs);
    return diff < best.diff ? { row, diff } : best;
  }, null);
  if (!closest) return null;
  return (closest.row.min + closest.row.max) / 2;
}

function getRangeFromDailyRows(dailyRows, todayState, nowPrice) {
  let bottom = Number.POSITIVE_INFINITY;
  let top = Number.NEGATIVE_INFINITY;

  for (const row of dailyRows) {
    bottom = Math.min(bottom, row.min);
    top = Math.max(top, row.max);
  }

  if (todayState) {
    bottom = Math.min(bottom, todayState.min);
    top = Math.max(top, todayState.max);
  }

  bottom = Math.min(bottom, nowPrice);
  top = Math.max(top, nowPrice);

  if (!Number.isFinite(bottom) || !Number.isFinite(top)) return null;
  return { bottom, top };
}

function pruneNotificationState(notifications, nowTs) {
  if (!notifications || typeof notifications !== "object") return {};
  const keepAfter = nowTs - NOTIFICATION_RETENTION_DAYS * 24 * 60 * 60 * 1000;
  const cleaned = {};
  for (const [id, state] of Object.entries(notifications)) {
    const ts = Number(state?.timestamp);
    if (!Number.isFinite(ts) || ts < keepAfter) continue;
    cleaned[id] = state;
  }
  return cleaned;
}

function sanitizeTodayStateById(byId) {
  if (!byId || typeof byId !== "object") return {};
  const cleaned = {};
  for (const [id, row] of Object.entries(byId)) {
    const min = toNumber(row?.min);
    const max = toNumber(row?.max);
    const last = toNumber(row?.last);
    if (min == null || max == null || last == null) continue;
    cleaned[id] = {
      min: Math.min(min, max),
      max: Math.max(min, max),
      last,
      updatedAt: Number(row?.updatedAt) || 0,
    };
  }
  return cleaned;
}

const fm = FileManager.iCloud();
const dir = fm.documentsDirectory();
const histPath = fm.joinPath(dir, HISTORY_FILE);
const now = new Date();
const nowTS = now.getTime();
const todayUtc = formatDayUtc(nowTS);
const nowUtcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
let history = {};

if (fm.fileExists(histPath)) {
  try { 
    history = JSON.parse(fm.readString(histPath)); 
  } catch {
    history = {};
  }
}

if (!history || typeof history !== "object") history = {};
if (!history._notifications) history._notifications = {};
if (!history._today || typeof history._today !== "object") history._today = {};

history._notifications = pruneNotificationState(history._notifications, nowTS);

if (history._today.day !== todayUtc) {
  history._today = { day: todayUtc, byId: {} };
}

if (!history._today.byId || typeof history._today.byId !== "object") {
  history._today.byId = {};
}
history._today.byId = sanitizeTodayStateById(history._today.byId);

let minmaxById = history._minmaxById || null;
const canRefreshBaselineToday = nowUtcMinutes >= HISTORY_REFRESH_AFTER_UTC_MINUTES;
const shouldRefreshBaseline = (
  !minmaxById && canRefreshBaselineToday
) || (
  history._historyDateUtc !== todayUtc &&
  canRefreshBaselineToday
);

if (shouldRefreshBaseline) {
  try {
    const histReq = new Request(HISTORY_SOURCE_URL);
    histReq.timeoutInterval = 60;

    let remoteHistory;
    try {
      remoteHistory = await histReq.loadJSON();
    } catch {
      const fallbackReq = new Request(HISTORY_SOURCE_URL);
      fallbackReq.timeoutInterval = 60;
      const rawText = await fallbackReq.loadString();
      remoteHistory = JSON.parse(rawText);
    }

    const normalized = normalizeRemoteHistory(remoteHistory);

    if (!Object.keys(normalized).length) {
      throw new Error("Empty remote history payload");
    }

    minmaxById = normalized;
    history._minmaxById = normalized;
    history._historyDateUtc = todayUtc;
    history._historyGeneratedAt = remoteHistory?.generatedAtUtc || remoteHistory?.generatedAt || null;
    history._historySourceError = null;
  } catch (e) {
    if (!minmaxById) {
      minmaxById = {};
      history._minmaxById = {};
      history._historyDateUtc = null;
      history._historyGeneratedAt = null;
      history._historySourceError = `${e.message || e}`;
    }
  }
}

if (!minmaxById || typeof minmaxById !== "object") {
  minmaxById = {};
}

let json;
const apiInterval = MIN_INTERVAL_MINUTES * 60 * 1000;
const cachedApi = history._api;
const hasValidCachedApi = !!(
  cachedApi &&
  cachedApi.ts &&
  nowTS - cachedApi.ts < apiInterval &&
  hasP2PPayload(cachedApi.json)
);

if (hasValidCachedApi) {
  json = cachedApi.json;
} else {
  try {
    const req = new Request(API_URL);
    req.timeoutInterval = 30; 
    json = await req.loadJSON();
    if (!hasP2PPayload(json)) {
      throw new Error("Invalid or missing API data structure");
    }

    history._api = {
      ts: nowTS,
      json,
    };
  } catch (e) {
    const hasFallbackApi = !!(cachedApi && hasP2PPayload(cachedApi.json));

    if (hasFallbackApi) {
      json = cachedApi.json;
    } else {
      let alert = new Alert();
      alert.title = "API V2 Error";
      alert.message = `${e.message || e}\n\nCheck your network connection.`;
      await alert.present();
      Script.complete();
      return;
    }
  }
}

let items = [];
const p2pData = json.data.p2p;
for (const [itemName, price] of Object.entries(p2pData)) {
  const mapping = ITEM_MAPPING[itemName];
  if (!mapping) continue;

  if (!price || typeof price !== "number" || price <= 0) {
    continue;
  }

  items.push({
    name: itemName,
    price,
    id: mapping.id,
    displayName: `${mapping.emoji} ${itemName}`
  });
}

function buildProcessedItem(item) {
  const id = String(item.id);
  const dailyRows = getRecentDailyRows(minmaxById[id] || [], nowTS);

  const todayState = history._today.byId[id];
  if (!dailyRows.length && !todayState) return null;

  const nowPrice = item.price;
  const price24h = getClosestDailyRefPrice(dailyRows, nowTS - 24 * 3600 * 1000);
  const price7d = getClosestDailyRefPrice(dailyRows, nowTS - 7 * 24 * 3600 * 1000);
  const range = getRangeFromDailyRows(dailyRows, todayState, nowPrice);
  if (!range) return null;

  const top = range.top;
  const bottom = range.bottom;
  const ratio = top !== bottom ? (nowPrice - bottom) / (top - bottom) : 0.5;

  const change24h = price24h != null && price24h > 0 ? ((nowPrice - price24h) / price24h) * 100 : null;
  const change7d = price7d != null && price7d > 0 ? ((nowPrice - price7d) / price7d) * 100 : null;

  return {
    id,
    name: item.name,
    displayName: item.displayName,
    now: nowPrice,
    price24h,
    price7d,
    top,
    bottom,
    ratio,
    change24h,
    change7d,
  };
}

const filteredItems = filterItemsByCategory(items, FILTER_CATEGORY);

for (const item of filteredItems) {
  const id = String(item.id);
  const current = history._today.byId[id];
  if (!current) {
    history._today.byId[id] = {
      min: item.price,
      max: item.price,
      last: item.price,
      updatedAt: nowTS,
    };
  } else {
    current.min = Math.min(current.min, item.price);
    current.max = Math.max(current.max, item.price);
    current.last = item.price;
    current.updatedAt = nowTS;
  }
}

const processedItems = filteredItems.map(buildProcessedItem).filter(Boolean);

const notificationCandidates = processedItems
  .map(buildNotificationCandidate)
  .filter(Boolean);

await sendGroupedNotifications(notificationCandidates);

let data = processedItems;

function buildNotificationCandidate(item) {
  if (!NOTIFICATIONS_ENABLED) return;
  
  const percent = item.ratio * 100;
  const itemId = item.id.toString();

  const currentZone = percent <= GREEN_THRESHOLD
    ? "green"
    : (percent >= RED_THRESHOLD ? "red" : "neutral");
  
  if (currentZone === "neutral") {
    return;
  }
  
  const lastNotification = history._notifications[itemId];
  
  let shouldNotify = false;
  
  if (!lastNotification) {
    shouldNotify = true;
  } else if (lastNotification.zone !== currentZone) {
    shouldNotify = true;
  } else if (lastNotification.zone === currentZone) {
    let isNewRecord = false;
    if (currentZone === "green" && item.now < lastNotification.price) {
      isNewRecord = true;
    } else if (currentZone === "red" && item.now > lastNotification.price) {
      isNewRecord = true;
    }
    
    if (isNewRecord) {
      shouldNotify = true;
    }
  }
  
  if (!shouldNotify) return;
  
  if (lastNotification && (nowTS - lastNotification.timestamp) < (NOTIFICATION_MIN_INTERVAL_MINUTES * 60 * 1000)) {
    return;
  }
  
  let title = "";
  let body = "";
  
  if (currentZone === "red") {
    title = "🔴 Sell";
    body = `${item.displayName}: ${round(item.now)} (${Math.round(percent)}%)`;
  } else if (currentZone === "green") {
    title = "🟢 Buy";
    body = `${item.displayName}: ${round(item.now)} (${Math.round(percent)}%)`;
  }
  
  if (!title) return;

  return {
    itemId,
    zone: currentZone,
    percent,
    price: item.now,
    displayName: item.displayName,
    title,
    body,
  };
}

async function sendGroupedNotifications(candidates) {
  if (!NOTIFICATIONS_ENABLED || !candidates.length) return;

  const groups = { green: [], red: [] };
  for (const candidate of candidates) {
    if (candidate.zone === "green" || candidate.zone === "red") {
      groups[candidate.zone].push(candidate);
    }
  }

  if (GROUP_NOTIFICATIONS_BY_ZONE && groups.green.length > 0 && groups.red.length > 0) {
    const greenPreview = groups.green.slice(0, 3).map(i => i.displayName);
    const redPreview = groups.red.slice(0, 3).map(i => i.displayName);
    const greenRemaining = groups.green.length - greenPreview.length;
    const redRemaining = groups.red.length - redPreview.length;

    const greenLine = greenRemaining > 0
      ? `🟢 Buy: ${greenPreview.join(", ")} +${greenRemaining}`
      : `🟢 Buy: ${greenPreview.join(", ")}`;
    const redLine = redRemaining > 0
      ? `🔴 Sell: ${redPreview.join(", ")} +${redRemaining}`
      : `🔴 Sell: ${redPreview.join(", ")}`;

    let combined = new Notification();
    combined.title = `📊 ${groups.green.length + groups.red.length} signals detected`;
    combined.body = `${greenLine}\n${redLine}`;
    combined.sound = "default";
    await combined.schedule();

    for (const zone of ["green", "red"]) {
      for (const item of groups[zone]) {
        history._notifications[item.itemId] = {
          zone: item.zone,
          percent: item.percent,
          timestamp: nowTS,
          price: item.price,
        };
      }
    }
    return;
  }

  for (const zone of ["green", "red"]) {
    const zoneItems = groups[zone];
    if (!zoneItems.length) continue;

    let title = "";
    let body = "";

    if (!GROUP_NOTIFICATIONS_BY_ZONE || zoneItems.length === 1) {
      title = zoneItems[0].title;
      body = zoneItems[0].body;
    } else {
      const preview = zoneItems.slice(0, 3).map(i => i.displayName).join(", ");
      const remaining = zoneItems.length - 3;
      if (zone === "green") {
        title = `🟢 ${zoneItems.length} opportunities detected`;
        body = remaining > 0 ? `${preview} +${remaining} more` : `${preview}`;
      } else {
        title = `🔴 ${zoneItems.length} high prices detected`;
        body = remaining > 0 ? `${preview} +${remaining} more` : `${preview}`;
      }
    }

    let notification = new Notification();
    notification.title = title;
    notification.body = body;
    notification.sound = "default";
    await notification.schedule();

    for (const item of zoneItems) {
      history._notifications[item.itemId] = {
        zone: item.zone,
        percent: item.percent,
        timestamp: nowTS,
        price: item.price,
      };
    }
  }
}

function addNamePricePosColumns(row, item, options) {
  const {
    nameWidth,
    nameLeftSpacer,
    priceWidth,
    posWidth,
  } = options;

  let nameCol = row.addStack();
  nameCol.size = new Size(nameWidth, 14);
  nameCol.layoutHorizontally();
  nameCol.addSpacer(nameLeftSpacer);
  let tName = nameCol.addText(item.displayName);
  tName.font = Font.systemFont(9);
  tName.textColor = Color.white();
  nameCol.addSpacer();

  let priceCol = row.addStack();
  priceCol.size = new Size(priceWidth, 14);
  let tPrice = priceCol.addText(round(item.now));
  tPrice.font = Font.systemFont(9);
  tPrice.textColor = getPositionColor(item.ratio);

  let posCol = row.addStack();
  posCol.size = new Size(posWidth, 14);
  let tPos = posCol.addText(`${Math.round(item.ratio * 100)}%`);
  tPos.font = Font.systemFont(9);
  tPos.textColor = getPositionColor(item.ratio);
}

function drawLine(item) {
  let row = widget.addStack(); row.centerAlignContent();

  addNamePricePosColumns(row, item, {
    nameWidth: 100,
    nameLeftSpacer: 6,
    priceWidth: 40,
    posWidth: 35,
  });
  
  let bottomCol = row.addStack(); bottomCol.size = new Size(40, 14);
  let tBottom = bottomCol.addText(round(item.bottom));
  tBottom.font = Font.systemFont(9); tBottom.textColor = new Color("#44FF44");
  
  let topCol = row.addStack(); topCol.size = new Size(40, 14);
  let tTop = topCol.addText(round(item.top));
  tTop.font = Font.systemFont(9); tTop.textColor = new Color("#FF4444");
  
  let change24hCol = row.addStack(); change24hCol.size = new Size(40, 14);
  let change24hText = item.change24h != null ? `${item.change24h > 0 ? '+' : ''}${item.change24h.toFixed(1)}%` : "—";
  let tChange24h = change24hCol.addText(change24hText);
  tChange24h.font = Font.systemFont(9);
  tChange24h.textColor = item.change24h != null && item.change24h > 0 ? new Color("#FF4444") : new Color("#44FF44");
  
  let changeCol = row.addStack(); changeCol.size = new Size(40, 14);
  let changeText = item.change7d != null ? `${item.change7d > 0 ? '+' : ''}${item.change7d.toFixed(1)}%` : "—";
  let tChange = changeCol.addText(changeText);
  tChange.font = Font.systemFont(9);
  tChange.textColor = item.change7d != null && item.change7d > 0 ? new Color("#FF4444") : new Color("#44FF44");
}

function drawSmallLine(item) {
  let row = widget.addStack();
  row.centerAlignContent();

  addNamePricePosColumns(row, item, {
    nameWidth: 80,
    nameLeftSpacer: 6,
    priceWidth: 42,
    posWidth: 25,
  });
}

data.sort((a, b) => a.ratio - b.ratio);

const widgetFamily = config.widgetFamily || "large";
let displayData = {};

function buildSignals(limit) {
  const buySignals = data.slice(0, limit);
  const sellStart = Math.max(data.length - limit, buySignals.length);
  const sellSignals = data.slice(sellStart).reverse();
  return { buySignals, sellSignals };
}

const signalLimit = widgetFamily === "large" ? 11 : 5;
displayData = buildSignals(signalLimit);

let widget = new ListWidget();
widget.backgroundColor = new Color("#1c1c1e");
widget.setPadding(6, 6, 6, 6);

function formatUsTimeNoMeridiem(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const usHours = hours % 12 || 12;
  return `${String(usHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

let updateTime = json.updatedAt ? 
  formatUsTimeNoMeridiem(new Date(json.updatedAt)) : 
  formatUsTimeNoMeridiem(now);
let headerText = updateTime;

function addCompactDivider() {
  const dividerRow = widget.addStack();
  dividerRow.layoutHorizontally();
  dividerRow.size = new Size(0, 1);
  dividerRow.backgroundColor = new Color("#666666");
  dividerRow.addSpacer();
}

if (widgetFamily === "small") {
  let header = widget.addStack();

  let titles = ["Item", headerText, "Pos"];

  titles.forEach((title, index) => {
    let col = header.addStack();
    if (index === 0) {
      col.size = new Size(80, 14);
      col.layoutHorizontally();
      col.addSpacer(4);
    }
    else if (index === 1) col.size = new Size(42, 14);
    else col.size = new Size(25, 14);
    let t = col.addText(title);
    t.font = Font.boldSystemFont(9);
    t.textColor = Color.white();
  });
  widget.addSpacer(0);
} else {
  let header = widget.addStack();

  let titles = ["Item", headerText, "Pos", "-30d", "+30d", "1d%", "7d%"];

  titles.forEach((title, index) => {
    let col = header.addStack(); 
    if (index === 0) {
      col.size = new Size(100, 14);
      col.layoutHorizontally();
      col.addSpacer(4);
    }
    else if (index === 1) col.size = new Size(40, 14); // Current price / update time column
    else if (index === 2) col.size = new Size(40, 14);
    else if (index === 3) col.size = new Size(40, 14);
    else if (index === 4) col.size = new Size(40, 14);
    else if (index === 5) col.size = new Size(40, 14);
    else col.size = new Size(35, 14);
    let t = col.addText(title); 
    t.font = Font.boldSystemFont(9); 
    t.textColor = Color.white();
  });
  widget.addSpacer(0);
}

if (widgetFamily === "small") {
  for (let item of displayData.sellSignals) {
    drawSmallLine(item);
  }

  if (displayData.sellSignals.length && displayData.buySignals.length) {
    addCompactDivider();
  }

  for (let item of displayData.buySignals) {
    drawSmallLine(item);
  }
} else if (widgetFamily === "medium") {
  for (let item of displayData.sellSignals) {
    drawLine(item);
  }

  if (displayData.sellSignals.length && displayData.buySignals.length) {
      addCompactDivider();
  }

  for (let item of displayData.buySignals) {
    drawLine(item);
  }
} else {

    let sellHeader = widget.addStack();
  sellHeader.addSpacer();
  let sellTitle = sellHeader.addText("High Prices");
  sellTitle.font = Font.boldSystemFont(9);
  sellTitle.textColor = new Color("#FF0000");
  sellHeader.addSpacer();
  widget.addSpacer(4);

  for (let item of displayData.sellSignals) {
    drawLine(item);
  }

  widget.addSpacer(2);

  let buyHeader = widget.addStack(); 
  buyHeader.addSpacer();
  let buyTitle = buyHeader.addText("Good Deals");
  buyTitle.font = Font.boldSystemFont(9);
  buyTitle.textColor = new Color("#00FF00");
  buyHeader.addSpacer();
  widget.addSpacer(4);

  for (let item of displayData.buySignals) {
    drawLine(item);
  }
}

fm.writeString(histPath, JSON.stringify(history));

Script.setWidget(widget);
Script.complete();
