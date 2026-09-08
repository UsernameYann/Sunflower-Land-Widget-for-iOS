// Widget Scriptable: Faction weekly grid (Kitchen, Pet, Minigames)

const CACHE_KEY = "RAW_API_CACHE_KEY";

const colorPanelBg = new Color("#000000");
const colorText = new Color("#c0cbdc");
const colorTextLight = new Color("#ffffff");
const colorCard = new Color("#1c1c1e");
const colorCardAlt = new Color("#242426");
const colorGray = new Color("#8e8e93");
const colorGreen = new Color("#30d158");
const colorGreenBg = new Color("#153018");

const DAY_MS = 24 * 60 * 60 * 1000;
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const LABEL_CELL_WIDTH = 120;
const DAY_CELL_WIDTH = 24;
const ROW_HEIGHT = 18;

function safeNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function getWeekKey(date = new Date()) {
  const START_DATE = new Date("2024-06-24T00:00:00Z");
  const proposedDate = new Date(date);
  proposedDate.setUTCHours(0, 0, 0, 0);
  const dayDiff = Math.floor((proposedDate.getTime() - START_DATE.getTime()) / DAY_MS);
  const weekNumber = Math.floor(dayDiff / 7);
  const start = new Date(START_DATE);
  start.setUTCDate(START_DATE.getUTCDate() + weekNumber * 7);
  return start.toISOString().substring(0, 10);
}

function weekDates() {
  const weekStart = new Date(getWeekKey());
  return new Array(7).fill(0).map((_, i) => new Date(weekStart.getTime() + i * DAY_MS));
}

function getRemainingWeekDaysUtc(date = new Date()) {
  const todayUtc = new Date(date);
  todayUtc.setUTCHours(0, 0, 0, 0);

  const weekStart = new Date(`${getWeekKey(todayUtc)}T00:00:00Z`);
  const elapsedDays = Math.floor((todayUtc.getTime() - weekStart.getTime()) / DAY_MS);
  const clampedElapsedDays = Math.max(0, Math.min(6, elapsedDays));

  return 7 - clampedElapsedDays;
}

function dayKey(date) {
  return date.toISOString().slice(0, 10);
}

function shortLabel(value, max = 8) {
  const text = String(value || "").trim();
  return text.length <= max ? text : `${text.slice(0, max - 3)}...`;
}

function minigameLabel(id) {
  const base = String(id || "").replace(/-/g, " ");
  return base.replace(/\b\w/g, (c) => c.toUpperCase());
}

function minigameDoneForDay(game, id, date) {
  const history = game?.minigames?.games?.[id]?.history?.[dayKey(date)];
  if (!history) return false;

  return !!history.prizeClaimedAt;
}

const cacheValue = Keychain.get(CACHE_KEY);
if (!cacheValue) {
  const alert = new Alert();
  alert.title = "Cache introuvable";
  alert.message = `Aucune donnee trouvee pour la cle "${CACHE_KEY}".`;
  await alert.present();
}

let game = {};
if (cacheValue) {
  game = JSON.parse(cacheValue).farm || {};
}
const dates = weekDates();
const remainingWeekDays = getRemainingWeekDaysUtc();
const inventory = game?.inventory || {};

const kitchenRequests = (game?.faction?.kitchen?.requests || []).slice(0, 3);
const petRequests = (game?.faction?.pet?.requests || []).slice(0, 4);

const prizeGameIds = Object.keys(game?.minigames?.prizes || {});
const playedGameIds = Object.keys(game?.minigames?.games || {});
const selectedMinigames = [...new Set([...prizeGameIds, ...playedGameIds])].slice(0, 6);

const kitchenRows = kitchenRequests.map((request, idx) => ({
  label: `${request?.item || `item${idx + 1}`} x${safeNumber(request?.amount, 0)}`,
  highlightLabel:
    safeNumber(inventory[request?.item], 0) >=
      safeNumber(request?.amount, 0) * 10 * remainingWeekDays &&
    safeNumber(request?.amount, 0) > 0,
  values: new Array(7)
    .fill(0)
    .map((_, i) => {
      const value = Math.min(999, safeNumber(request?.dailyFulfilled?.[i + 1], 0));
      return value === 0 ? "❌" : String(value);
    }),
}));

const petRows = petRequests.map((request, idx) => ({
  label: `${request?.food || `item${idx + 1}`} x${safeNumber(request?.quantity, 0)}`,
  highlightLabel:
    safeNumber(inventory[request?.food], 0) >=
      safeNumber(request?.quantity, 0) * 10 * remainingWeekDays &&
    safeNumber(request?.quantity, 0) > 0,
  values: new Array(7)
    .fill(0)
    .map((_, i) => {
      const value = Math.min(999, safeNumber(request?.dailyFulfilled?.[i + 1], 0));
      return value === 0 ? "❌" : String(value);
    }),
}));

const miniRows = selectedMinigames.map((id) => ({
  label: minigameLabel(id),
  values: dates.map((d) => (minigameDoneForDay(game, id, d) ? "✅" : "❌")),
}));

const now = Date.now();
const week = getWeekKey(new Date(now));
const lastWeek = getWeekKey(new Date(new Date(week).getTime() - 7 * DAY_MS));
const lastWeekStreak = safeNumber(
  game?.faction?.history?.[lastWeek]?.collectivePet?.streak,
  0,
);
const petQualifiesForBoost = !!game?.faction?.pet?.qualifiesForBoost;
const boostCooldownUntil = safeNumber(game?.faction?.boostCooldownUntil, 0);
const isBoostCooldown = boostCooldownUntil > now;

let petBoostPercent = 0;
if (!isBoostCooldown && petQualifiesForBoost) {
  if (lastWeekStreak >= 2 && lastWeekStreak < 4) petBoostPercent = 10;
  else if (lastWeekStreak >= 4 && lastWeekStreak < 6) petBoostPercent = 20;
  else if (lastWeekStreak >= 6 && lastWeekStreak < 8) petBoostPercent = 30;
  else if (lastWeekStreak >= 8) petBoostPercent = 50;
}

const isPetBoostActive = petBoostPercent > 0;
const isContributingMemberForThisWeek =
  petRequests.length > 0 &&
  petRequests.every((request) =>
    Object.values(request?.dailyFulfilled || {}).some((value) => safeNumber(value, 0) > 0),
  );

function addVerticalDivider(row) {
  const divider = row.addStack();
  divider.size = new Size(1, ROW_HEIGHT);
  divider.backgroundColor = colorGray;
}

function addHorizontalDivider(container) {
  const divider = container.addStack();
  divider.size = new Size(0, 1);
  divider.backgroundColor = colorGray;
}

function addCell(
  row,
  text,
  width,
  align = "center",
  header = false,
  alt = false,
  customBgColor = null,
  customTextColor = null,
) {
  const cell = row.addStack();
  cell.size = new Size(width, ROW_HEIGHT);
  cell.backgroundColor =
    customBgColor || (header ? colorTextLight : alt ? colorCardAlt : colorCard);
  cell.layoutHorizontally();
  cell.centerAlignContent();

  const value = cell.addText(String(text ?? ""));
  value.font = header ? Font.boldMonospacedSystemFont(8) : Font.mediumMonospacedSystemFont(8);
  value.textColor = customTextColor || (header ? colorPanelBg : colorText);
  value.lineLimit = 1;

  if (align === "left") {
    value.leftAlignText();
  } else if (align === "right") {
    value.rightAlignText();
  } else {
    value.centerAlignText();
  }
}

function addTable(
  widget,
  title,
  rows,
  {
    headerLabel = title,
    headerLabelBgColor = null,
    headerLabelTextColor = null,
    highlightLabelColumn = false,
    highlightLabelResolver = null,
    highlightValueGte10 = false,
  } = {},
) {
  const table = widget.addStack();
  table.layoutVertically();

  const headerRow = table.addStack();
  headerRow.layoutHorizontally();
  addVerticalDivider(headerRow);
  addCell(
    headerRow,
    headerLabel,
    LABEL_CELL_WIDTH,
    "left",
    true,
    false,
    headerLabelBgColor,
    headerLabelTextColor,
  );
  addVerticalDivider(headerRow);
  DAYS.forEach((day) => {
    addCell(headerRow, day, DAY_CELL_WIDTH, "center", true);
    addVerticalDivider(headerRow);
  });

  addHorizontalDivider(table);

  const safeRows = rows.length > 0 ? rows : [{ label: "-", values: new Array(7).fill("0") }];
  safeRows.forEach((rowData, idx) => {
    const row = table.addStack();
    row.layoutHorizontally();
    const rowLabelHighlighted =
      (typeof highlightLabelResolver === "function" && !!highlightLabelResolver(rowData, idx)) ||
      highlightLabelColumn;

    addVerticalDivider(row);
    addCell(
      row,
      shortLabel(rowData.label, 24),
      LABEL_CELL_WIDTH,
      "left",
      false,
      idx % 2 === 1,
      rowLabelHighlighted ? colorGreenBg : null,
      rowLabelHighlighted ? colorGreen : null,
    );
    addVerticalDivider(row);
    rowData.values.forEach((value) => {
      const isHighValue =
        highlightValueGte10 &&
        typeof value === "string" &&
        /^\d+$/.test(value) &&
        Number(value) >= 10;

      addCell(
        row,
        value,
        DAY_CELL_WIDTH,
        "center",
        false,
        idx % 2 === 1,
        isHighValue ? colorGreenBg : null,
        isHighValue ? colorGreen : null,
      );
      addVerticalDivider(row);
    });
    addHorizontalDivider(table);
  });
}

const widget = new ListWidget();
widget.backgroundColor = colorPanelBg;
widget.setPadding(8, 8, 8, 8);

addTable(widget, "KITCHEN", kitchenRows, {
  highlightLabelResolver: (rowData) => !!rowData.highlightLabel,
  highlightValueGte10: true,
});
addTable(widget, "PET", petRows, {
  headerLabel: isPetBoostActive ? `PET +${petBoostPercent}%` : "PET",
  headerLabelBgColor: isContributingMemberForThisWeek ? colorGreenBg : null,
  headerLabelTextColor: isContributingMemberForThisWeek ? colorGreen : null,
  highlightLabelResolver: (rowData) => !!rowData.highlightLabel,
  highlightValueGte10: true,
});
addTable(widget, "MINI GAME", miniRows);

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  await widget.presentLarge();
}

Script.complete();
