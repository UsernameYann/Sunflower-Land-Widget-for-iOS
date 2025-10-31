// Scriptable widget - Upcoming auctions

const auctions = [
  {name:"Pet 1-50",ingredients:{},startAt:1762156800000,endAt:1762157400000},
  {name:"Pet 51-100",ingredients:{},startAt:1762185600000,endAt:1762186200000},
  {name:"Pet 101-150",ingredients:{},startAt:1762214400000,endAt:1762215000000},
  {name:"Pet 151-200",ingredients:{},startAt:1762243200000,endAt:1762243800000},
  {name:"Pet 201-250",ingredients:{},startAt:1762272000000,endAt:1762272600000},
  {name:"Pet 251-300",ingredients:{},startAt:1762300800000,endAt:1762301400000},
  {name:"Pet 301-350",ingredients:{},startAt:1762329600000,endAt:1762330200000},
  {name:"Pet 351-400",ingredients:{},startAt:1762358400000,endAt:1762359000000},
  {name:"Pet 401-450",ingredients:{},startAt:1762387200000,endAt:1762387800000},
  {name:"Pet 451-500",ingredients:{},startAt:1762416000000,endAt:1762416600000},
  {name:"Pet 501-550",ingredients:{},startAt:1762444800000,endAt:1762445400000},
  {name:"Pet 551-600",ingredients:{},startAt:1762473600000,endAt:1762474200000},
  {name:"Pet 601-650",ingredients:{},startAt:1762502400000,endAt:1762503000000},
  {name:"Pet 651-700",ingredients:{},startAt:1762531200000,endAt:1762531800000},
  {name:"Pet 701-750",ingredients:{},startAt:1762560000000,endAt:1762560600000},
  {name:"Pet 751-800",ingredients:{},startAt:1762588800000,endAt:1762589400000},
  {name:"Pet 801-850",ingredients:{},startAt:1762617600000,endAt:1762618200000},
  {name:"Pet 851-900",ingredients:{},startAt:1762646400000,endAt:1762647000000},
  {name:"Pet 901-950",ingredients:{},startAt:1762675200000,endAt:1762675800000},
  {name:"Pet 951-1000",ingredients:{},startAt:1762704000000,endAt:1762704600000},
  {name:"Pet 1001-1025",ingredients:{"Pet Cookie":1},startAt:1767596400000,endAt:1767597000000},
  {name:"Pet 1026-1050",ingredients:{"Pet Cookie":1},startAt:1767654000000,endAt:1767654600000},
  {name:"Pet 1051-1075",ingredients:{"Pet Cookie":1},startAt:1767711600000,endAt:1767712200000},
  {name:"Pet 1076-1100",ingredients:{"Pet Cookie":1},startAt:1767769200000,endAt:1767769800000},
  {name:"Pet 1101-1125",ingredients:{"Pet Cookie":1},startAt:1767826800000,endAt:1767827400000},
  {name:"Pet 1126-1150",ingredients:{"Pet Cookie":1},startAt:1767884400000,endAt:1767885000000},
  {name:"Pet 1151-1175",ingredients:{"Pet Cookie":1},startAt:1767942000000,endAt:1767942600000},
  {name:"Pet 1176-1200",ingredients:{"Pet Cookie":1},startAt:1767999600000,endAt:1768000200000},
  {name:"Pet 1201-1225",ingredients:{"Pet Cookie":1},startAt:1768057200000,endAt:1768057800000},
  {name:"Pet 1226-1250",ingredients:{"Pet Cookie":1},startAt:1768114800000,endAt:1768115400000}
];

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (d > 0) return `${d}d${h.toString().padStart(2,'0')}h${m.toString().padStart(2,'0')}`;
  if (h > 0) return `${h}h${m.toString().padStart(2,'0')}`;
  if (m > 0) return `${m}m${s.toString().padStart(2,'0')}`;
  return `${s}s`;
}


const now = Date.now();
const upcoming = auctions
  .filter(a => a.endAt > now)
  .sort((a, b) => a.startAt - b.startAt)
  .slice(0, 9);

// ====== NOTIFICATION SYSTEM FOR AUCTIONS ======
async function cleanupAuctionNotifications() {
  let pendingNotifications = await Notification.allPending();
  let removedCount = 0;
  for (let notification of pendingNotifications) {
    if (notification.identifier && notification.identifier.startsWith('auction_')) {
      try {
        await notification.remove();
        removedCount++;
      } catch (error) {
        // ignore
      }
    }
  }
  return removedCount;
}

function getUpcomingAuctions(auctions) {
  const now = Date.now();
  const TWELVE_HOURS = 12 * 60 * 60 * 1000;
  return auctions.filter(a => a.startAt > now && a.startAt < now + TWELVE_HOURS);
}

async function scheduleAuctionNotifications(upcomingAuctions, existingIds) {
  let count = 0;
  for (const auction of upcomingAuctions) {
    let name = auction.name;
    let ing;
    if (Object.keys(auction.ingredients).length === 0) {
      ing = '🌸';
    } else if (auction.ingredients.Gem) {
      ing = '💎';
    } else if (auction.ingredients['Pet Cookie']) {
      ing = '🍪';
    } else {
      ing = Object.keys(auction.ingredients).map(i => {
        if (i === 'Gem') return '💎';
        if (i === 'Pet Cookie') return '🍪';
        return i;
      }).join(', ');
    }
    let notifId = `auction_${auction.startAt}`;
    if (!existingIds.has(notifId)) {
      let notif = new Notification();
      notif.identifier = notifId;
      notif.title = '🔔 Auction now!';
      notif.body = `${name} ${ing} now!`;
      notif.setTriggerDate(new Date(auction.startAt));
      try {
        await notif.schedule();
        count++;
      } catch (e) {}
    }
  }
  return count;
}

async function manageAuctionNotifications() {
  await cleanupAuctionNotifications();
  let pendingNotifications = await Notification.allPending();
  let existingIds = new Set(pendingNotifications.map(n => n.identifier));
  let upcomingAuctions = getUpcomingAuctions(auctions);
  let scheduled = await scheduleAuctionNotifications(upcomingAuctions, existingIds);
}

manageAuctionNotifications();

let widget = new ListWidget();
widget.setPadding(8, 8, 8, 8);
widget.backgroundColor = new Color('#181818');

for (const auction of upcoming) {
  let name = auction.name;
  let ing;
  if (Object.keys(auction.ingredients).length === 0) {
    ing = '🌸';
  } else if (auction.ingredients.Gem) {
    ing = '💎';
  } else if (auction.ingredients['Pet Cookie']) {
    ing = '🍪';
  } else {
    ing = Object.keys(auction.ingredients).map(i => {
      if (i === 'Gem') return '💎';
      if (i === 'Pet Cookie') return '🍪';
      return i;
    }).join(', ');
  }
  let timeLeft;
  let color;
  if (now < auction.startAt) {
    const msLeft = auction.startAt - now;
    timeLeft = formatTime(msLeft);
    if (msLeft < 3600000) {
      color = new Color('#FFFF00');
    } else {
      color = Color.white();
    }
  } else if (now >= auction.startAt && now < auction.endAt) {
    timeLeft = 'Now!';
    color = new Color('#00FF00'); 
  } else {
    timeLeft = '';
    color = Color.white();
  }

  let nameDisplay = name;
  let ingDisplay = ing;
  let timeDisplay = timeLeft;

  let line = widget.addStack();
  line.layoutHorizontally();
  line.spacing = 0;

  line.addSpacer(5);

  let colItem = line.addStack();
  colItem.size = new Size(70, 12);
  colItem.layoutHorizontally();
  let nameTxt = colItem.addText(nameDisplay);
  nameTxt.font = Font.systemFont(10);
  nameTxt.textColor = Color.white();
  nameTxt.lineLimit = 1;
  nameTxt.leftAlignText();
  colItem.addSpacer();

  let colIng = line.addStack();
  colIng.size = new Size(13, 12);
  colIng.layoutVertically();
  let ingTxt = colIng.addText(ingDisplay);
  ingTxt.font = Font.systemFont(10);
  ingTxt.textColor = Color.gray();
  ingTxt.lineLimit = 1;
  ingTxt.centerAlignText();

  let colTime = line.addStack();
  colTime.size = new Size(53, 12);
  colTime.layoutHorizontally();
  colTime.addSpacer();
  let timeTxt = colTime.addText(timeDisplay);
  timeTxt.font = Font.systemFont(10);
  timeTxt.textColor = color;
  timeTxt.lineLimit = 1;
  timeTxt.rightAlignText();

  line.addSpacer(5);

  widget.addSpacer(2); 
}

if (upcoming.length === 0) {
  let txt = widget.addText('No upcoming auctions');
  txt.font = Font.systemFont(10);
  txt.textColor = Color.white();
}

widget.addSpacer(5); 
let refreshTxt = widget.addText('Updated: ' + new Date().toLocaleTimeString('en-US', {hour12: true, hour: 'numeric', minute: '2-digit'}));
refreshTxt.font = Font.systemFont(8);
refreshTxt.textColor = Color.white();
refreshTxt.centerAlignText();

Script.setWidget(widget);
Script.complete();
