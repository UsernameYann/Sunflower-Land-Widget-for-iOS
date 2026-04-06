function getIngredientEmoji(ingredients) {
  if (ingredients.length === 0) {
    return '🌸';
  } else if (ingredients.includes('Gem')) {
    return '💎';
  } else if (ingredients.includes('Floater')) {
    return '🛟';
  } else {
    return ingredients.map(i => {
      if (i === 'Gem') return '💎';
      if (i === 'Floater') return '🛟';
      return i;
    }).join(', ');
  }
}

const BG_COLOR = Color.dynamic(new Color('#f2f2f7'), new Color('#1C1C1E'));
const ALT_BG_COLOR = Color.dynamic(new Color('#e5e5ea'), new Color('#252525'));

const WHITE_COLOR = Color.dynamic(Color.black(), new Color("#E5E5E7"));
const GRAY_COLOR = Color.dynamic(new Color('#8e8e93'), Color.gray());

const YELLOW_COLOR = Color.yellow();
const GREEN_COLOR = Color.green();

const PADDING = 0;
const LINE_SPACING = 0;
const COLUMN_SPACING = 0;

const FONT_SIZE = 12;
const SMALL_FONT_SIZE = 10;
const ING_EMOJI_SIZE = 10;

const NAME_COL_SIZE = new Size(80, 14);
const ING_COL_SIZE = new Size(14, 14);
const TIME_COL_SIZE = new Size(55, 14);

const MAX_AUCTIONS = 9;
const TWELVE_HOURS = 12 * 60 * 60 * 1000;

const SHOW_ALTERNATING_BG = true;
const ENABLE_TEXT_SCALING = false;
const TEXT_MIN_SCALE = 0.7;
const SHOW_LINE_LIMIT = true;
const CENTER_WIDGET_CONTENT = false;

const TIME_DISPLAY_UNITS = 2;

const auctions = [
  {name:"Speckled Kissing Fish",ingredients:["Floater"],startAt:1775440800000,endAt:1775441400000},
  {name:"Fisherman's Boat",ingredients:["Floater"],startAt:1775441400000,endAt:1775442000000},
  {name:"Sea Arch",ingredients:["Floater"],startAt:1775442000000,endAt:1775442600000},
  {name:"Speckled Kissing Fish",ingredients:["Floater"],startAt:1775458800000,endAt:1775459400000},
  {name:"Fisherman's Boat",ingredients:["Floater"],startAt:1775459400000,endAt:1775460000000},
  {name:"Speckled Kissing Fish",ingredients:["Floater"],startAt:1775476800000,endAt:1775477400000},
  {name:"Fisherman's Boat",ingredients:["Floater"],startAt:1775477400000,endAt:1775478000000},
  {name:"Sea Arch",ingredients:["Floater"],startAt:1775485200000,endAt:1775485800000},
  {name:"Speckled Kissing Fish",ingredients:["Floater"],startAt:1775494800000,endAt:1775495400000},
  {name:"Fisherman's Boat",ingredients:["Floater"],startAt:1775495400000,endAt:1775496000000},
  {name:"Speckled Kissing Fish",ingredients:["Floater"],startAt:1775512800000,endAt:1775513400000},
  {name:"Fisherman's Boat",ingredients:["Floater"],startAt:1775513400000,endAt:1775514000000},
  {name:"Spring Guardian",ingredients:["Floater"],startAt:1775529000000,endAt:1775529600000},
  {name:"Broccoli Hat",ingredients:["Floater"],startAt:1775529600000,endAt:1775530200000},
  {name:"Spring Guardian",ingredients:["Floater"],startAt:1775547000000,endAt:1775547600000},
  {name:"Broccoli Hat",ingredients:["Floater"],startAt:1775547600000,endAt:1775548200000},
  {name:"Spring Guardian",ingredients:["Floater"],startAt:1775565000000,endAt:1775565600000},
  {name:"Broccoli Hat",ingredients:["Floater"],startAt:1775565600000,endAt:1775566200000},
  {name:"Broccoli Hat",ingredients:["Floater"],startAt:1775583600000,endAt:1775584200000},
  {name:"Broccoli Hat",ingredients:["Floater"],startAt:1775601600000,endAt:1775602200000},
  {name:"Obsidian Necklace",ingredients:["Floater"],startAt:1775616600000,endAt:1775617200000},
  {name:"Victoria's Apron",ingredients:["Floater"],startAt:1775617200000,endAt:1775617800000},
  {name:"Obsidian Necklace",ingredients:["Floater"],startAt:1775634600000,endAt:1775635200000},
  {name:"Victoria's Apron",ingredients:["Floater"],startAt:1775635200000,endAt:1775635800000},
  {name:"Obsidian Necklace",ingredients:["Floater"],startAt:1775652600000,endAt:1775653200000},
  {name:"Victoria's Apron",ingredients:["Floater"],startAt:1775653200000,endAt:1775653800000},
  {name:"Obsidian Necklace",ingredients:["Floater"],startAt:1775670600000,endAt:1775671200000},
  {name:"Victoria's Apron",ingredients:["Floater"],startAt:1775671200000,endAt:1775671800000},
  {name:"Obsidian Necklace",ingredients:["Floater"],startAt:1775688600000,endAt:1775689200000},
  {name:"Victoria's Apron",ingredients:["Floater"],startAt:1775689200000,endAt:1775689800000},
  {name:"Beast Shoes",ingredients:["Floater"],startAt:1775704200000,endAt:1775704800000},
  {name:"Crimstone Spikes Hair",ingredients:["Floater"],startAt:1775704800000,endAt:1775705400000},
  {name:"Crimstone Spikes Hair",ingredients:["Floater"],startAt:1775722800000,endAt:1775723400000},
  {name:"Beast Shoes",ingredients:["Floater"],startAt:1775725800000,endAt:1775726400000},
  {name:"Crimstone Spikes Hair",ingredients:["Floater"],startAt:1775740800000,endAt:1775741400000},
  {name:"Beast Shoes",ingredients:["Floater"],startAt:1775747400000,endAt:1775748000000},
  {name:"Beast Shoes",ingredients:["Floater"],startAt:1775769000000,endAt:1775769600000},
  {name:"Pet",ingredients:["Floater"],startAt:1775775600000,endAt:1775776200000},
  {name:"Paw Aura",ingredients:["Floater"],startAt:1775791800000,endAt:1775792400000},
  {name:"Pet",ingredients:["Floater"],startAt:1775793600000,endAt:1775794200000},
  {name:"Pet",ingredients:["Floater"],startAt:1775811600000,endAt:1775812200000},
  {name:"Paw Aura",ingredients:["Floater"],startAt:1775813400000,endAt:1775814000000},
  {name:"Pet",ingredients:["Floater"],startAt:1775829600000,endAt:1775830200000},
  {name:"Paw Aura",ingredients:["Floater"],startAt:1775835000000,endAt:1775835600000},
  {name:"Pet",ingredients:["Floater"],startAt:1775847600000,endAt:1775848200000},
  {name:"Paw Aura",ingredients:["Floater"],startAt:1775856600000,endAt:1775857200000}
];

const AuctionsFilters = {
  SPECKLED_KISSING_FISH: "__FILTER_SPECKLED_KISSING_FISH__",
  FISHERMAN_S_BOAT: "__FILTER_FISHERMAN_S_BOAT__",
  SEA_ARCH: "__FILTER_SEA_ARCH__",
  SPRING_GUARDIAN: "__FILTER_SPRING_GUARDIAN__",
  BROCCOLI_HAT: "__FILTER_BROCCOLI_HAT__",
  OBSIDIAN_NECKLACE: "__FILTER_OBSIDIAN_NECKLACE__",
  VICTORIA_S_APRON: "__FILTER_VICTORIA_S_APRON__",
  BEAST_SHOES: "__FILTER_BEAST_SHOES__",
  CRIMSTONE_SPIKES_HAIR: "__FILTER_CRIMSTONE_SPIKES_HAIR__",
  PET: "__FILTER_PET__",
  PAW_AURA: "__FILTER_PAW_AURA__"
};

function toFilterKey(name) {
  return String(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toUpperCase();
}

function isAuctionEnabledByName(name) {
  const filterKey = toFilterKey(name);
  if (!(filterKey in AuctionsFilters)) {
    return true;
  }

  return AuctionsFilters[filterKey] !== false;
}

const filteredAuctions = auctions.filter(auction => isAuctionEnabledByName(auction.name));

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  
  let units = [];
  if (d > 0) units.push(`${d}d`);
  if (h > 0) units.push(`${h}h`);
  if (m > 0) units.push(`${m.toString().padStart(2,'0')}`);
  if (s > 0 || units.length === 0) units.push(`${s.toString().padStart(2,'0')}`);
  
  return units.slice(0, TIME_DISPLAY_UNITS).join('');
}

const now = Date.now();
const upcoming = filteredAuctions
  .filter(a => a.endAt > now)
  .sort((a, b) => a.startAt - b.startAt)
  .slice(0, MAX_AUCTIONS);

async function setupNotifications() {
  const now = Date.now();
  const upcomingAuctions = filteredAuctions.filter(a => a.startAt > now && a.startAt < now + TWELVE_HOURS);
  const desiredIds = new Set(upcomingAuctions.map(a => `auction_${a.startAt}`));

  let pendingNotifications = await Notification.allPending();
  for (let notification of pendingNotifications) {
    if (notification.identifier && notification.identifier.startsWith('auction_') && !desiredIds.has(notification.identifier)) {
      try {
        await notification.remove();
      } catch (error) {
        // ignore
      }
    }
  }

  pendingNotifications = await Notification.allPending();
  let existingIds = new Set(
    pendingNotifications
      .filter(n => n.identifier && n.identifier.startsWith('auction_'))
      .map(n => n.identifier)
  );
  for (const auction of upcomingAuctions) {
    let ing = getIngredientEmoji(auction.ingredients);
    let notifId = `auction_${auction.startAt}`;
    if (!existingIds.has(notifId)) {
      let notif = new Notification();
      notif.identifier = notifId;
      notif.title = '🔔 Auction now!';
      notif.body = `${auction.name} ${ing} now!`;
      notif.sound = 'default';
      notif.setTriggerDate(new Date(auction.startAt));
      try {
        await notif.schedule();
      } catch (e) {}
    }
  }
}

await setupNotifications();

let widget = new ListWidget();
widget.setPadding(PADDING, PADDING, PADDING, PADDING);
widget.backgroundColor = BG_COLOR;

upcoming.forEach((auction, index) => {
  let name = auction.name;
  let ing = getIngredientEmoji(auction.ingredients);
  let timeLeft;
  let color;
  if (now < auction.startAt) {
    const msLeft = auction.startAt - now;
    timeLeft = formatTime(msLeft);
    if (msLeft < 3600000) {
      color = new Color(YELLOW_COLOR);
    } else {
      color = WHITE_COLOR;
    }
  } else if (now >= auction.startAt && now < auction.endAt) {
    timeLeft = 'Now!';
    color = new Color(GREEN_COLOR); 
  } else {
    timeLeft = '';
    color = WHITE_COLOR;
  }

  let nameDisplay = name;
  let ingDisplay = ing;
  let timeDisplay = timeLeft;

  let line = widget.addStack();
  line.layoutHorizontally();
  line.spacing = COLUMN_SPACING;
  line.setPadding(1, 15, 1, 0);
  
  if (SHOW_ALTERNATING_BG) {
    line.backgroundColor = index % 2 === 0 ? ALT_BG_COLOR : BG_COLOR;
  }

  if (CENTER_WIDGET_CONTENT) {
    line.addSpacer();
  }

  let colItem = line.addStack();
  colItem.size = NAME_COL_SIZE;
  colItem.layoutHorizontally();
  
  let nameTxt = colItem.addText(nameDisplay);
  nameTxt.font = Font.mediumMonospacedSystemFont(FONT_SIZE);
  nameTxt.textColor = WHITE_COLOR;
  nameTxt.leftAlignText();
  if (SHOW_LINE_LIMIT) {
    nameTxt.lineLimit = 1;
  }
  if (ENABLE_TEXT_SCALING) {
    nameTxt.minimumScaleFactor = TEXT_MIN_SCALE;
  }
  
  colItem.addSpacer();

  let colIng = line.addStack();
  colIng.size = ING_COL_SIZE;
  colIng.setPadding(1, 0, 0, 0);
  colIng.layoutHorizontally();
  colIng.addSpacer(0);
  
  let ingTxt = colIng.addText(ingDisplay);
  ingTxt.font = Font.systemFont(ING_EMOJI_SIZE);
  ingTxt.textColor = GRAY_COLOR;
  ingTxt.centerAlignText();
  if (SHOW_LINE_LIMIT) {
    ingTxt.lineLimit = 1;
  }
  
  colIng.addSpacer(0);

  let colTime = line.addStack();
  colTime.size = TIME_COL_SIZE;
  colTime.setPadding(0, 5, 0, 0);
  colTime.layoutHorizontally();
  colTime.addSpacer(0);

  let timeTxt = colTime.addText(timeDisplay);
  timeTxt.font = Font.mediumMonospacedSystemFont(FONT_SIZE);
  timeTxt.textColor = color;
  timeTxt.leftAlignText();
  if (SHOW_LINE_LIMIT) {
    timeTxt.lineLimit = 1;
  }
  
  colTime.addSpacer();

  if (CENTER_WIDGET_CONTENT) {
    line.addSpacer();
  }

});

if (upcoming.length === 0) {
  let txt = widget.addText('No upcoming auctions');
  txt.font = Font.systemFont(FONT_SIZE);
  txt.textColor = WHITE_COLOR;
}

widget.addSpacer(1);

let refreshTxt = widget.addText('Upd: ' + new Date().toLocaleTimeString('en-US', {hour12: true, hour: 'numeric', minute: '2-digit'}));
refreshTxt.font = Font.regularMonospacedSystemFont(SMALL_FONT_SIZE);
refreshTxt.textColor = WHITE_COLOR;
refreshTxt.centerAlignText();

Script.setWidget(widget);
Script.complete();