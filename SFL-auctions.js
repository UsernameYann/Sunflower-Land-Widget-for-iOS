function getIngredientEmoji(ingredients) {
  if (ingredients.length === 0) {
    return '🌸';
  } else if (ingredients.includes('Gem')) {
    return '💎';
  } else if (ingredients.includes('Pet Cookie')) {
    return '🍪';
  } else {
    return ingredients.map(i => {
      if (i === 'Gem') return '💎';
      if (i === 'Pet Cookie') return '🍪';
      return i;
    }).join(', ');
  }
}

const themeMode = __THEME_MODE__;

const BG_COLOR = themeMode === 'dark' ? new Color('#1C1C1E') : new Color('#f2f2f7');
const ALT_BG_COLOR = themeMode === 'dark' ? new Color('#252525') : new Color('#e5e5ea');
const WHITE_COLOR = themeMode === 'dark' ? new Color("#E5E5E7") : Color.black();
const GRAY_COLOR = themeMode === 'dark' ? Color.gray() : new Color('#8e8e93');
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
    {name:"Pet 801-850",ingredients:[],startAt:1762617600000,endAt:1762618200000},
    {name:"Pet 851-900",ingredients:[],startAt:1762646400000,endAt:1762647000000},
    {name:"Pet 901-950",ingredients:[],startAt:1762675200000,endAt:1762675800000},
    {name:"Pet 951-1000",ingredients:[],startAt:1762704000000,endAt:1762704600000},
    {name:"Paw Prints Rug",ingredients:[],startAt:1763344800000,endAt:1763345400000},
    {name:"Paw Prints Rug",ingredients:[],startAt:1763362800000,endAt:1763363400000},
    {name:"Paw Prints Rug",ingredients:[],startAt:1763380800000,endAt:1763381400000},
    {name:"Paw Prints Rug",ingredients:[],startAt:1763398800000,endAt:1763399400000},
    {name:"Paw Prints Rug",ingredients:[],startAt:1763416800000,endAt:1763417400000},
    {name:"Pet Bed",ingredients:[],startAt:1763521200000,endAt:1763521800000},
    {name:"Pet Bed",ingredients:[],startAt:1763539200000,endAt:1763539800000},
    {name:"Pet Bed",ingredients:[],startAt:1763557200000,endAt:1763557800000},
    {name:"Pet Bed",ingredients:[],startAt:1763575200000,endAt:1763575800000},
    {name:"Pet Bed",ingredients:[],startAt:1763593200000,endAt:1763593800000},
    {name:"Moon Fox Statue",ingredients:[],startAt:1763697600000,endAt:1763698200000},
    {name:"Moon Fox Statue",ingredients:[],startAt:1763715600000,endAt:1763716200000},
    {name:"Squirrel Onesie",ingredients:["Gem"],startAt:1763960400000,endAt:1763961000000},
    {name:"Squirrel Onesie",ingredients:["Gem"],startAt:1763978400000,endAt:1763979000000},
    {name:"Squirrel Onesie",ingredients:["Gem"],startAt:1763996400000,endAt:1763997000000},
    {name:"Squirrel Onesie",ingredients:["Gem"],startAt:1764014400000,endAt:1764015000000},
    {name:"Squirrel Onesie",ingredients:["Gem"],startAt:1764032400000,endAt:1764033000000},
    {name:"Training Whistle",ingredients:["Gem"],startAt:1764136800000,endAt:1764137400000},
    {name:"Training Whistle",ingredients:["Gem"],startAt:1764154800000,endAt:1764155400000},
    {name:"Training Whistle",ingredients:["Gem"],startAt:1764172800000,endAt:1764173400000},
    {name:"Training Whistle",ingredients:["Gem"],startAt:1764190800000,endAt:1764191400000},
    {name:"Training Whistle",ingredients:["Gem"],startAt:1764208800000,endAt:1764209400000},
    {name:"Cleaver Knife",ingredients:["Gem"],startAt:1764572400000,endAt:1764573000000},
    {name:"Cleaver Knife",ingredients:["Gem"],startAt:1764590400000,endAt:1764591000000},
    {name:"Cleaver Knife",ingredients:["Gem"],startAt:1764608400000,endAt:1764609000000},
    {name:"Cleaver Knife",ingredients:["Gem"],startAt:1764626400000,endAt:1764627000000},
    {name:"Cleaver Knife",ingredients:["Gem"],startAt:1764644400000,endAt:1764645000000},
    {name:"Lunar Weapon",ingredients:["Gem"],startAt:1764748800000,endAt:1764749400000},
    {name:"Lunar Weapon",ingredients:["Gem"],startAt:1764766800000,endAt:1764767400000},
    {name:"Lunar Weapon",ingredients:["Gem"],startAt:1764784800000,endAt:1764785400000},
    {name:"Lunar Weapon",ingredients:["Gem"],startAt:1764802800000,endAt:1764803400000},
    {name:"Lunar Weapon",ingredients:["Gem"],startAt:1764820800000,endAt:1764821400000},
    {name:"Moon Fox Statue",ingredients:["Gem"],startAt:1764925200000,endAt:1764925800000},
    {name:"Moon Fox Statue",ingredients:["Gem"],startAt:1764943200000,endAt:1764943800000},
    {name:"Squirrel Onesie",ingredients:[],startAt:1765188000000,endAt:1765188600000},
    {name:"Squirrel Onesie",ingredients:[],startAt:1765206000000,endAt:1765206600000},
    {name:"Squirrel Onesie",ingredients:[],startAt:1765224000000,endAt:1765224600000},
    {name:"Squirrel Onesie",ingredients:[],startAt:1765242000000,endAt:1765242600000},
    {name:"Squirrel Onesie",ingredients:[],startAt:1765260000000,endAt:1765260600000},
    {name:"Training Whistle",ingredients:[],startAt:1765364400000,endAt:1765365000000},
    {name:"Training Whistle",ingredients:[],startAt:1765382400000,endAt:1765383000000},
    {name:"Training Whistle",ingredients:[],startAt:1765400400000,endAt:1765401000000},
    {name:"Training Whistle",ingredients:[],startAt:1765418400000,endAt:1765419000000},
    {name:"Training Whistle",ingredients:[],startAt:1765436400000,endAt:1765437000000},
    {name:"Cleaver Knife",ingredients:[],startAt:1765890000000,endAt:1765890600000},
    {name:"Cleaver Knife",ingredients:[],startAt:1765908000000,endAt:1765908600000},
    {name:"Cleaver Knife",ingredients:[],startAt:1765926000000,endAt:1765926600000},
    {name:"Cleaver Knife",ingredients:[],startAt:1765944000000,endAt:1765944600000},
    {name:"Cleaver Knife",ingredients:[],startAt:1765962000000,endAt:1765962600000},
    {name:"Lunar Weapon",ingredients:[],startAt:1766066400000,endAt:1766067000000},
    {name:"Lunar Weapon",ingredients:[],startAt:1766084400000,endAt:1766085000000},
    {name:"Lunar Weapon",ingredients:[],startAt:1766102400000,endAt:1766103000000},
    {name:"Lunar Weapon",ingredients:[],startAt:1766120400000,endAt:1766121000000},
    {name:"Lunar Weapon",ingredients:[],startAt:1766138400000,endAt:1766139000000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767596400000,endAt:1767597000000},
    {name:"Paw Prints Rug",ingredients:["Pet Cookie"],startAt:1767625200000,endAt:1767625800000},
    {name:"Pet Bed",ingredients:["Pet Cookie"],startAt:1767628800000,endAt:1767629400000},
    {name:"Moon Fox Statue",ingredients:["Pet Cookie"],startAt:1767632400000,endAt:1767633000000},
    {name:"Paw Prints Rug",ingredients:["Pet Cookie"],startAt:1767643200000,endAt:1767643800000},
    {name:"Pet Bed",ingredients:["Pet Cookie"],startAt:1767646800000,endAt:1767647400000},
    {name:"Moon Fox Statue",ingredients:["Pet Cookie"],startAt:1767650400000,endAt:1767651000000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767654000000,endAt:1767654600000},
    {name:"Paw Prints Rug",ingredients:["Pet Cookie"],startAt:1767661200000,endAt:1767661800000},
    {name:"Pet Bed",ingredients:["Pet Cookie"],startAt:1767664800000,endAt:1767665400000},
    {name:"Paw Prints Rug",ingredients:["Pet Cookie"],startAt:1767679200000,endAt:1767679800000},
    {name:"Pet Bed",ingredients:["Pet Cookie"],startAt:1767682800000,endAt:1767683400000},
    {name:"Paw Prints Rug",ingredients:["Pet Cookie"],startAt:1767697200000,endAt:1767697800000},
    {name:"Pet Bed",ingredients:["Pet Cookie"],startAt:1767700800000,endAt:1767701400000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767711600000,endAt:1767712200000},
    {name:"Training Whistle",ingredients:["Pet Cookie"],startAt:1767722400000,endAt:1767723000000},
    {name:"Training Whistle",ingredients:["Pet Cookie"],startAt:1767740400000,endAt:1767741000000},
    {name:"Training Whistle",ingredients:["Pet Cookie"],startAt:1767758400000,endAt:1767759000000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767769200000,endAt:1767769800000},
    {name:"Training Whistle",ingredients:["Pet Cookie"],startAt:1767776400000,endAt:1767777000000},
    {name:"Training Whistle",ingredients:["Pet Cookie"],startAt:1767794400000,endAt:1767795000000},
    {name:"Squirrel Onesie",ingredients:["Pet Cookie"],startAt:1767816000000,endAt:1767816600000},
    {name:"Lunar Weapon",ingredients:["Pet Cookie"],startAt:1767819600000,endAt:1767820200000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767826800000,endAt:1767827400000},
    {name:"Squirrel Onesie",ingredients:["Pet Cookie"],startAt:1767834000000,endAt:1767834600000},
    {name:"Lunar Weapon",ingredients:["Pet Cookie"],startAt:1767837600000,endAt:1767838200000},
    {name:"Squirrel Onesie",ingredients:["Pet Cookie"],startAt:1767852000000,endAt:1767852600000},
    {name:"Lunar Weapon",ingredients:["Pet Cookie"],startAt:1767855600000,endAt:1767856200000},
    {name:"Squirrel Onesie",ingredients:["Pet Cookie"],startAt:1767870000000,endAt:1767870600000},
    {name:"Lunar Weapon",ingredients:["Pet Cookie"],startAt:1767873600000,endAt:1767874200000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767884400000,endAt:1767885000000},
    {name:"Squirrel Onesie",ingredients:["Pet Cookie"],startAt:1767888000000,endAt:1767888600000},
    {name:"Lunar Weapon",ingredients:["Pet Cookie"],startAt:1767891600000,endAt:1767892200000},
    {name:"Cleaver Knife",ingredients:["Pet Cookie"],startAt:1767909600000,endAt:1767910200000},
    {name:"Autumn Guardian",ingredients:["Pet Cookie"],startAt:1767913200000,endAt:1767913800000},
    {name:"Winter Guardian",ingredients:["Pet Cookie"],startAt:1767920400000,endAt:1767921000000},
    {name:"Cleaver Knife",ingredients:["Pet Cookie"],startAt:1767927600000,endAt:1767928200000},
    {name:"Autumn Guardian",ingredients:["Pet Cookie"],startAt:1767931200000,endAt:1767931800000},
    {name:"Frozen Heart",ingredients:["Pet Cookie"],startAt:1767934800000,endAt:1767935400000},
    {name:"Winter Guardian",ingredients:["Pet Cookie"],startAt:1767938400000,endAt:1767939000000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767942000000,endAt:1767942600000},
    {name:"Cleaver Knife",ingredients:["Pet Cookie"],startAt:1767945600000,endAt:1767946200000},
    {name:"Autumn Guardian",ingredients:["Pet Cookie"],startAt:1767949200000,endAt:1767949800000},
    {name:"Frozen Heart",ingredients:["Pet Cookie"],startAt:1767952800000,endAt:1767953400000},
    {name:"Winter Guardian",ingredients:["Pet Cookie"],startAt:1767956400000,endAt:1767957000000},
    {name:"Cleaver Knife",ingredients:["Pet Cookie"],startAt:1767963600000,endAt:1767964200000},
    {name:"Autumn Guardian",ingredients:["Pet Cookie"],startAt:1767967200000,endAt:1767967800000},
    {name:"Frozen Heart",ingredients:["Pet Cookie"],startAt:1767970800000,endAt:1767971400000},
    {name:"Winter Guardian",ingredients:["Pet Cookie"],startAt:1767974400000,endAt:1767975000000},
    {name:"Cleaver Knife",ingredients:["Pet Cookie"],startAt:1767981600000,endAt:1767982200000},
    {name:"Autumn Guardian",ingredients:["Pet Cookie"],startAt:1767985200000,endAt:1767985800000},
    {name:"Frozen Heart",ingredients:["Pet Cookie"],startAt:1767988800000,endAt:1767989400000},
    {name:"Winter Guardian",ingredients:["Pet Cookie"],startAt:1767992400000,endAt:1767993000000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1767999600000,endAt:1768000200000},
    {name:"Frozen Heart",ingredients:["Pet Cookie"],startAt:1768006800000,endAt:1768007400000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1768057200000,endAt:1768057800000},
    {name:"Pet",ingredients:["Pet Cookie"],startAt:1768114800000,endAt:1768115400000}
];

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  if (totalSec < 60) {
    return `${totalSec}s`;
  }
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  let units = [];
  if (d > 0) units.push(`${d}d`);
  if (h > 0) units.push(`${h}h`);
  if (m > 0) units.push(`${m}m`);
  if (units.length === 0) units.push('0m');
  return units.slice(0, TIME_DISPLAY_UNITS).join('');
}

const now = Date.now();
const upcoming = auctions
  .filter(a => a.endAt > now)
  .sort((a, b) => a.startAt - b.startAt)
  .slice(0, MAX_AUCTIONS);

async function setupNotifications() {
  let pendingNotifications = await Notification.allPending();
  let existingIds = new Set(pendingNotifications.map(n => n.identifier));
  const now = Date.now();
  const upcomingAuctions = auctions.filter(a => a.startAt > now && a.startAt < now + TWELVE_HOURS);
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
      color = YELLOW_COLOR;
    } else {
      color = WHITE_COLOR;
    }
  } else if (now >= auction.startAt && now < auction.endAt) {
    timeLeft = 'Now!';
    color = GREEN_COLOR; 
  } else {
    timeLeft = '';
    color = WHITE_COLOR;
  }

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
  let nameTxt = colItem.addText(name);
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
  let ingTxt = colIng.addText(ing);
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
  let timeTxt = colTime.addText(timeLeft);
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