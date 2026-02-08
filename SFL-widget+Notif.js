const WIDGET_VERSION = "February 8th, 2026";

const SFL_USER_CONFIG = {
  FARM_ID: "__FARM_ID__",
  API_KEY: "__API_KEY__",
  enableNotifications: __ENABLE_NOTIFICATIONS__,
  themeMode: __THEME_MODE__,
  categoryFilters: {
    animal: __FILTER_ANIMAL__,

    resource: __FILTER_RESOURCE__,

    tree: __FILTER_TREE__,
    stone: __FILTER_STONE__,
    iron: __FILTER_IRON__,
    gold: __FILTER_GOLD__,
    crimstone: __FILTER_CRIMSTONE__,
    sunstone: __FILTER_SUNSTONE__,
    oil: __FILTER_OIL__,

    crop: __FILTER_CROP__,
    fruit: __FILTER_FRUIT__,
    flower: __FILTER_FLOWER__,
    beehive: __FILTER_BEEHIVE__,
    greenhouse: __FILTER_GREENHOUSE__,
    mushroom: __FILTER_MUSHROOM__,
    crafting: __FILTER_CRAFTING__,
    cooking: __FILTER_COOKING__,
    composter: __FILTER_COMPOSTER__,
    power: __FILTER_POWER__,
    crop_machine: __FILTER_CROP_MACHINE__,
    floating_island: __FILTER_FLOATING_ISLAND__,
    lava_pit: __FILTER_LAVA_PIT__,
    crab_trap: __FILTER_CRAB_TRAP__,
    daily: __FILTER_DAILY__,
    vip_chest: __FILTER_VIP_CHEST__,
    bud_box: __FILTER_BUD_BOX__,

    pet: __FILTER_PET__,
    pet_caress: __FILTER_PET_CARESS__,
    pet_feed: __FILTER_PET_FEED__,

    pet_neglect: __FILTER_PET_NEGLECT__,
    sick_animal: __FILTER_SICK_ANIMAL__,
    power_notification: __FILTER_POWER_NOTIFICATION__,
    trades: __FILTER_TRADES__,
    social_projects: __FILTER_SOCIAL_PROJECTS__,

    chicken: __FILTER_CHICKEN__,
    chickenLove: __FILTER_CHICKEN_LOVE__,
    cow: __FILTER_COW__,
    cowLove: __FILTER_COW_LOVE__,
    sheep: __FILTER_SHEEP__,
    sheepLove: __FILTER_SHEEP_LOVE__,
  },
};

globalThis.SFL_USER_CONFIG = globalThis.SFL_USER_CONFIG || SFL_USER_CONFIG;

const SECOND_TO_MS = 1000;
const MINUTE_TO_MS = 60 * SECOND_TO_MS;
const HOUR_TO_MS = 60 * MINUTE_TO_MS;
const EIGHT_HOURS_MS = 8 * HOUR_TO_MS;
const TEN_HOURS_MS = 10 * HOUR_TO_MS;
const TWELVE_HOURS_MS = 12 * HOUR_TO_MS;

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;

const GROUPING_TOLERANCE_SECONDS = SECONDS_PER_MINUTE;
const GROUPING_TOLERANCE_MINUTES = 1;
const NOTIFICATION_CHECK_INTERVAL_SECONDS = 15;
const NOTIFICATION_LOOKAHEAD_HOURS = 10;

const RESOURCE_RECOVERY_TIMES = {
  Tree: 2 * 60 * 60,
  Stone: 4 * 60 * 60,
  Iron: 8 * 60 * 60,
  Gold: 24 * 60 * 60,
  Crimstone: 24 * 60 * 60,
  Sunstone: 3 * 24 * 60 * 60,
  Oil: 20 * 60 * 60,
};

const CROPS_TIMES = {
  Sunflower: { harvestSeconds: 1 * 60 },
  Potato: { harvestSeconds: 5 * 60 },
  Rhubarb: { harvestSeconds: 10 * 60 },
  Pumpkin: { harvestSeconds: 30 * 60 },
  Zucchini: { harvestSeconds: 30 * 60 },
  Carrot: { harvestSeconds: 60 * 60 },
  Yam: { harvestSeconds: 60 * 60 },
  Cabbage: { harvestSeconds: 2 * 60 * 60 },
  Broccoli: { harvestSeconds: 2 * 60 * 60 },
  Soybean: { harvestSeconds: 3 * 60 * 60 },
  Beetroot: { harvestSeconds: 4 * 60 * 60 },
  Pepper: { harvestSeconds: 4 * 60 * 60 },
  Cauliflower: { harvestSeconds: 8 * 60 * 60 },
  Parsnip: { harvestSeconds: 12 * 60 * 60 },
  Eggplant: { harvestSeconds: 16 * 60 * 60 },
  Corn: { harvestSeconds: 20 * 60 * 60 },
  Onion: { harvestSeconds: 20 * 60 * 60 },
  Radish: { harvestSeconds: 24 * 60 * 60 },
  Wheat: { harvestSeconds: 24 * 60 * 60 },
  Turnip: { harvestSeconds: 24 * 60 * 60 },
  Kale: { harvestSeconds: 36 * 60 * 60 },
  Artichoke: { harvestSeconds: 36 * 60 * 60 },
  Barley: { harvestSeconds: 48 * 60 * 60 },
};

const FRUITS_TIMES = {
  Tomato: { plantSeconds: 2 * 60 * 60 },
  Lemon: { plantSeconds: 4 * 60 * 60 },
  Blueberry: { plantSeconds: 6 * 60 * 60 },
  Orange: { plantSeconds: 8 * 60 * 60 },
  Apple: { plantSeconds: 12 * 60 * 60 },
  Banana: { plantSeconds: 12 * 60 * 60 },
  Celestine: { plantSeconds: 6 * 60 * 60 },
  Lunara: { plantSeconds: 12 * 60 * 60 },
  Duskberry: { plantSeconds: 24 * 60 * 60 },
};

const FLOWERS_TIMES = {
  "Red Pansy": 1 * 24 * 60 * 60,
  "Yellow Pansy": 1 * 24 * 60 * 60,
  "Purple Pansy": 1 * 24 * 60 * 60,
  "White Pansy": 1 * 24 * 60 * 60,
  "Blue Pansy": 1 * 24 * 60 * 60,
  "Red Cosmos": 1 * 24 * 60 * 60,
  "Yellow Cosmos": 1 * 24 * 60 * 60,
  "Purple Cosmos": 1 * 24 * 60 * 60,
  "White Cosmos": 1 * 24 * 60 * 60,
  "Blue Cosmos": 1 * 24 * 60 * 60,
  "Prism Petal": 1 * 24 * 60 * 60,
  "Red Balloon Flower": 2 * 24 * 60 * 60,
  "Yellow Balloon Flower": 2 * 24 * 60 * 60,
  "Purple Balloon Flower": 2 * 24 * 60 * 60,
  "White Balloon Flower": 2 * 24 * 60 * 60,
  "Blue Balloon Flower": 2 * 24 * 60 * 60,
  "Red Daffodil": 2 * 24 * 60 * 60,
  "Yellow Daffodil": 2 * 24 * 60 * 60,
  "Purple Daffodil": 2 * 24 * 60 * 60,
  "White Daffodil": 2 * 24 * 60 * 60,
  "Blue Daffodil": 2 * 24 * 60 * 60,
  "Celestial Frostbloom": 2 * 24 * 60 * 60,
  "Red Carnation": 5 * 24 * 60 * 60,
  "Yellow Carnation": 5 * 24 * 60 * 60,
  "Purple Carnation": 5 * 24 * 60 * 60,
  "White Carnation": 5 * 24 * 60 * 60,
  "Blue Carnation": 5 * 24 * 60 * 60,
  "Red Lotus": 5 * 24 * 60 * 60,
  "Yellow Lotus": 5 * 24 * 60 * 60,
  "Purple Lotus": 5 * 24 * 60 * 60,
  "White Lotus": 5 * 24 * 60 * 60,
  "Blue Lotus": 5 * 24 * 60 * 60,
  "Primula Enigma": 5 * 24 * 60 * 60,
  "Red Edelweiss": 3 * 24 * 60 * 60,
  "Yellow Edelweiss": 3 * 24 * 60 * 60,
  "Purple Edelweiss": 3 * 24 * 60 * 60,
  "White Edelweiss": 3 * 24 * 60 * 60,
  "Blue Edelweiss": 3 * 24 * 60 * 60,
  "Red Gladiolus": 3 * 24 * 60 * 60,
  "Yellow Gladiolus": 3 * 24 * 60 * 60,
  "Purple Gladiolus": 3 * 24 * 60 * 60,
  "White Gladiolus": 3 * 24 * 60 * 60,
  "Blue Gladiolus": 3 * 24 * 60 * 60,
  "Red Lavender": 3 * 24 * 60 * 60,
  "Yellow Lavender": 3 * 24 * 60 * 60,
  "Purple Lavender": 3 * 24 * 60 * 60,
  "White Lavender": 3 * 24 * 60 * 60,
  "Blue Lavender": 3 * 24 * 60 * 60,
  "Red Clover": 3 * 24 * 60 * 60,
  "Yellow Clover": 3 * 24 * 60 * 60,
  "Purple Clover": 3 * 24 * 60 * 60,
  "White Clover": 3 * 24 * 60 * 60,
  "Blue Clover": 3 * 24 * 60 * 60,
};

const GREENHOUSE_TIMES = {
  Rice: { harvestSeconds: 32 * 60 * 60 },
  Olive: { harvestSeconds: 44 * 60 * 60 },
  Grape: { harvestSeconds: 12 * 60 * 60 },
};

const MUSHROOMS_TIMES = {
  Mushroom: 16 * 60 * 60,
};

function getMagicMushroomTimeSeconds(islandType) {
  const times = {
    basic: 48 * 60 * 60,
    petal_paradise: 36 * 60 * 60,
    desert: 24 * 60 * 60,
    volcano: 22 * 60 * 60,
  };
  return times[islandType] || 48 * 60 * 60; 
}

function getLavaPitTimeSeconds(farm) {
  let time = 72 * 60 * 60;
  if (farm && farm.boostsUsedAt && farm.boostsUsedAt["Obsidian Necklace"]) {
    time = time / 2;
  }
  if (farm && farm.boostsUsedAt && farm.boostsUsedAt["Magma Stone"]) {
    time = time * 0.85;
  }
  return time;
}

const POWER_COOLDOWN_TIMES = {
  "Instant Growth": 72 * 60 * 60,
  "Tree Blitz": 24 * 60 * 60,
  "Barnyard Rouse": 120 * 60 * 60,
  "Greenhouse Guru": 96 * 60 * 60,
  "Instant Gratification": 96 * 60 * 60,
  "Petal Blessed": 96 * 60 * 60,
  "Grease Lightning": 96 * 60 * 60,
};

const DEFAULT_HONEY_PRODUCTION_TIME = 24 * 60 * 60 * 1000;

if (typeof module !== "undefined") {
  module.exports = { getLavaPitTimeSeconds };
}

const WIDGET_LIMITS = {
  small: 9,
  medium: 9,
  large: 21,
};

const FONT_SIZES = {
  small: 12,
  medium: 12,
  large: 12,
};

const EMOJI_SIZES = {
  small: 10,
  medium: 10,
  large: 10,
};

const COLUMN_WIDTHS = {
  item: 160, 
  quantity: 50, 
  small: 95, 
};

const ROW_SPACING = {
  small: 0,
  medium: 0,
  large: 0,
};

const COOKING_BUILDINGS = {
  "Fire Pit": "Fire Pit",
  Kitchen: "Kitchen",
  Bakery: "Bakery",
  Deli: "Deli",
  "Smoothie Shack": "Smoothie Shack",
  "Fish Market": "Fish Market",
};

const RESOURCES_KEY = "sunflower_resources";
const CACHE_KEY = "sunflower_api_cache";
const CACHE_TIMESTAMP_KEY = "sunflower_cache_timestamp";
const LAST_API_CALL_KEY = "sunflower_last_api_call";

function logError(context, error, details = "") {
  const message = details
    ? `${context}: ${error} ${details}`
    : `${context}: ${error}`;
  console.log(`❌ ${message}`);
}

function logWarning(context, message) {
  console.log(`⚠️ ${context}: ${message}`);
}

function logInfo(context, message) {
  console.log(`ℹ️ ${context}: ${message}`);
}

function safeKeychain(operation, key, value = null) {
  try {
    if (operation === "get") {
      return Keychain.get(key);
    } else if (operation === "set" && value !== null) {
      Keychain.set(key, value);
      return true;
    }
  } catch (error) {
    logWarning(
      "Keychain",
      `Failed to ${operation} key '${key}' - ${error.message || error}`,
    );
    return null;
  }
}

function safeJSONParse(jsonString, context = "JSON", fallback = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    logWarning(
      context,
      `Failed to parse JSON data - ${error.message || error}`,
    );
    return fallback;
  }
}

function normalizeTs(ts) {
  if (ts === null || ts === undefined) return null;
  if (typeof ts === "number") return ts < 1e12 ? ts * 1000 : ts;
  return ts;
}

function getNextDailyReset() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  tomorrow.setUTCHours(0, 0, 0, 0);
  return tomorrow.getTime();
}

function getTodayStart() {
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);
  return now.getTime();
}

function getFirstMondayStartForTimestamp(ms) {
  const d = new Date(ms);
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth();
  const firstOfMonth = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));
  const day = firstOfMonth.getUTCDay();
  const diff = (1 - day + 7) % 7;
  const firstMonday = new Date(
    firstOfMonth.getTime() + diff * 24 * 60 * 60 * 1000,
  );
  return firstMonday.getTime();
}

function loadResources() {
  const data = safeKeychain("get", RESOURCES_KEY);
  return data ? safeJSONParse(data, "Resources", {}) : {};
}

function saveResources(resources) {
  return safeKeychain("set", RESOURCES_KEY, JSON.stringify(resources));
}

function timeRemainingSeconds(plantedAt, itemName, itemType = "resource") {
  let harvestSeconds;
  switch (itemType) {
    case "resource":
      harvestSeconds = RESOURCE_RECOVERY_TIMES[itemName];
      break;
    case "crop":
      harvestSeconds = CROPS_TIMES[itemName]
        ? CROPS_TIMES[itemName]["harvestSeconds"]
        : null;
      break;
    case "fruit":
      harvestSeconds = FRUITS_TIMES[itemName]
        ? FRUITS_TIMES[itemName]["plantSeconds"]
        : null;
      break;
    case "greenhouse":
      harvestSeconds = GREENHOUSE_TIMES[itemName]
        ? GREENHOUSE_TIMES[itemName]["harvestSeconds"]
        : null;
      break;
    case "flower":
      harvestSeconds = FLOWERS_TIMES[itemName];
      break;
    case "beehive":
      harvestSeconds = null;
      break;
    case "mushroom":
      harvestSeconds = MUSHROOMS_TIMES[itemName];
      break;
    default:
      harvestSeconds = RESOURCE_RECOVERY_TIMES[itemName];
  }

  if (!harvestSeconds) return 0;

  const currentTime = Date.now();
  const plantedAtMs = normalizeTs(plantedAt);
  const harvestTime = (plantedAtMs || 0) + harvestSeconds * 1000;
  const timeRemainingMs = harvestTime - currentTime;

  return timeRemainingMs / 1000;
}

function calculateAnimalTimes(itemData, currentTime) {
  const awakeAtMs = normalizeTs(itemData.awakeAt);
  const asleepAtMs = normalizeTs(itemData.asleepAt);
  const lovedAtMs = normalizeTs(itemData.lovedAt);

  const wakeTimeRemaining = (awakeAtMs - currentTime) / SECOND_TO_MS;
  let loveTimeRemaining = null;

  if (currentTime < awakeAtMs) {
    const sleepCycleDuration = awakeAtMs - asleepAtMs;
    const lovePeriodDuration = sleepCycleDuration / 3;

    const firstLoveAvailableAt = asleepAtMs + lovePeriodDuration;

    if (lovedAtMs) {
      const nextLoveAvailableAt = lovedAtMs + lovePeriodDuration;
      const actualLoveAvailableAt = Math.max(
        firstLoveAvailableAt,
        nextLoveAvailableAt,
      );
      loveTimeRemaining = (actualLoveAvailableAt - currentTime) / SECOND_TO_MS;
    } else {
      loveTimeRemaining = (firstLoveAvailableAt - currentTime) / SECOND_TO_MS;
    }
  }

  return {
    isAnimal: true,
    wakeTime: wakeTimeRemaining,
    loveTime: loveTimeRemaining,
  };
}

function addToAnimalGroup(
  groupedItems,
  itemName,
  itemData,
  remainingTime,
  isLoveTime,
) {
  const category = itemData.category || "animal";
  const itemType = itemData.name || itemData.type;
  const suffix = isLoveTime ? "_love" : "_wake";
  const idName = `${itemName}${suffix}`;

  for (const [, existingGroup] of Object.entries(groupedItems)) {
    if (
      existingGroup.type === itemType &&
      existingGroup.isLoveTime === isLoveTime
    ) {
      existingGroup.count++;
      existingGroup.totalAmount += itemData.amount || 0;
      existingGroup.ids.push(idName);

      if (!isLoveTime && itemData.hasReward && !existingGroup.hasReward) {
        existingGroup.hasReward = true;
      }

      if (remainingTime < existingGroup.remainingTime) {
        existingGroup.remainingTime = remainingTime;
      }
      return true;
    }
  }

  const groupKey = `${itemType}${suffix}`;
  groupedItems[groupKey] = {
    category: category,
    type: itemType,
    count: 1,
    totalAmount: itemData.amount || 0,
    remainingTime: remainingTime,
    ids: [idName],
    isReady: remainingTime <= 0,
    isLoveTime: isLoveTime,
    hasReward: !isLoveTime && itemData.hasReward ? true : false,
  };
  return false;
}

function addToPetGroup(groupedItems, itemName, itemData, remainingTime) {
  const action = itemData.action;
  const isNFT = itemData.isNFT;

  for (const [, existingGroup] of Object.entries(groupedItems)) {
    if (existingGroup.category === "pet" && existingGroup.action === action) {
      const timeDifference = Math.abs(
        remainingTime - existingGroup.remainingTime,
      );

      if (timeDifference <= GROUPING_TOLERANCE_SECONDS) {
        existingGroup.count++;
        existingGroup.ids.push(itemName);

        if (isNFT && !existingGroup.isNFT) {
          existingGroup.isNFT = true;
        }

        if (remainingTime < existingGroup.remainingTime) {
          existingGroup.remainingTime = remainingTime;
        }
        return true;
      }
    }
  }

  const actionLabel = action === "caress" ? "💕" : "🍖";
  const groupKey = `Pet_${action}_${Object.keys(groupedItems).length}`;
  groupedItems[groupKey] = {
    category: "pet",
    action: action,
    type: `Pet ${actionLabel}`,
    count: 1,
    remainingTime: remainingTime,
    ids: [itemName],
    isReady: remainingTime <= 0,
    isNFT: isNFT,
  };
  return false;
}

function addToGenericGroup(groupedItems, itemName, itemData, remainingTime) {
  const category = itemData.category || "resource";
  const itemType = itemData.name || itemData.type;
  const itemCount = itemData.count || 1;

  let foundGroup = false;
  for (let [, existingGroup] of Object.entries(groupedItems)) {
    if (existingGroup.type === itemType) {
      const timeDifference = Math.abs(
        remainingTime - existingGroup.remainingTime,
      );
      if (timeDifference <= GROUPING_TOLERANCE_SECONDS) {
        existingGroup.count += itemCount;
        existingGroup.totalAmount += itemData.amount || 0;
        existingGroup.ids.push(itemName);

        if (itemData.hasReward && !existingGroup.hasReward) {
          existingGroup.hasReward = true;
        }
        if (
          category === "beehive" &&
          itemData.hasSwarm &&
          !existingGroup.hasSwarm
        ) {
          existingGroup.hasSwarm = true;
        }

        if (remainingTime <= 0) {
          if (Math.abs(remainingTime) > Math.abs(existingGroup.remainingTime)) {
            existingGroup.remainingTime = remainingTime;
          }
        } else {
          if (remainingTime < existingGroup.remainingTime) {
            existingGroup.remainingTime = remainingTime;
          }
        }
        foundGroup = true;
        break;
      }
    }
  }

  if (!foundGroup) {
    const key = `${itemType}_${Object.keys(groupedItems).length}`;
    groupedItems[key] = {
      category: category,
      type: itemType,
      count: itemCount,
      totalAmount: itemData.amount || 0,
      remainingTime: remainingTime,
      ids: [itemName],
      isReady: remainingTime <= 0,
      hasReward: itemData.hasReward ? true : false,
      hasSwarm: itemData.hasSwarm || false,
      message: itemData.message || null,
    };
  }
}

function groupByReadyTimeWindow(
  upcomingItems,
  toleranceMinutes = GROUPING_TOLERANCE_MINUTES,
) {
  upcomingItems.sort((a, b) => a.readyTime - b.readyTime);
  const tolerance = toleranceMinutes * MINUTE_TO_MS;

  const groups = [];
  for (let item of upcomingItems) {
    let foundGroup = false;
    for (let group of groups) {
      if (Math.abs(item.readyTime - group.referenceTime) <= tolerance) {
        group.items.push(item);
        foundGroup = true;
        break;
      }
    }
    if (!foundGroup) {
      groups.push({ referenceTime: item.readyTime, items: [item] });
    }
  }
  return groups;
}

function getTimeRemaining(itemData) {
  const currentTime = Date.now();

  if (itemData.category === "daily") {
    if (!itemData.isCollected) {
      const todayStartMs = getTodayStart();
      const readySinceMs = currentTime - todayStartMs;
      return -(readySinceMs / 1000);
    }
    const nextResetAtMs = normalizeTs(itemData.nextResetAt);
    return (nextResetAtMs - currentTime) / 1000;
  }

  if (itemData.category === "bud_box") {
    if (!itemData.isCollected) {
      const todayStartMs = getTodayStart();
      const readySinceMs = currentTime - todayStartMs;
      return -(readySinceMs / 1000);
    }
    const nextResetAtMs = normalizeTs(itemData.nextResetAt);
    return (nextResetAtMs - currentTime) / 1000;
  }

  if (itemData.category === "pet" && itemData.action === "caress") {
    const napFinishedAtMs = normalizeTs(itemData.napFinishedAt);
    return (napFinishedAtMs - currentTime) / 1000;
  }

  if (itemData.category === "pet" && itemData.action === "feed") {
    const fedAtMs = normalizeTs(itemData.fedAt);
    if (!fedAtMs) return -1000;

    const fedDate = new Date(fedAtMs);
    const todayStartMs = getTodayStart();

    if (fedDate.getTime() >= todayStartMs) {
      const tomorrowStartMs = todayStartMs + SECONDS_PER_DAY * SECOND_TO_MS;
      return (tomorrowStartMs - currentTime) / 1000;
    }

    const readySinceMs = currentTime - todayStartMs;
    return -(readySinceMs / 1000);
  }

  if (itemData.category === "animal" && itemData.awakeAt && itemData.asleepAt) {
    return calculateAnimalTimes(itemData, currentTime);
  }

  if (itemData.category === "power" && itemData.nextAvailableAt) {
    const nextAvailableAtMs = normalizeTs(itemData.nextAvailableAt);
    return (nextAvailableAtMs - currentTime) / 1000;
  }

  if (itemData.category === "vip_chest") {
    const nowMs = Date.now();
    const availableAtMs = normalizeTs(itemData.availableAt) || 0;
    const availableUntilMs =
      normalizeTs(itemData.availableUntil) ||
      availableAtMs + 24 * 60 * 60 * 1000;
    const openedAtMs = normalizeTs(itemData.openedAt) || 0;
    const nextResetAtMs = normalizeTs(itemData.nextResetAt) || 0;

    if (nowMs >= availableAtMs && nowMs < availableUntilMs) {
      if (openedAtMs && openedAtMs >= availableAtMs) {
        return (nextResetAtMs - nowMs) / 1000;
      }
      return -1000;
    }

    if (nowMs < availableAtMs) {
      return (availableAtMs - nowMs) / 1000;
    }

    return (nextResetAtMs - nowMs) / 1000;
  }

  if (itemData.category === "beehive") {
    if (!itemData.readyAt) {
      return null;
    }
    const readyAtMs = normalizeTs(itemData.readyAt);
    return (readyAtMs - currentTime) / 1000;
  }

  if (itemData.category === "crafting" && itemData.readyAt) {
    const readyAtMs = normalizeTs(itemData.readyAt);
    return (readyAtMs - currentTime) / 1000;
  }

  if (itemData.category === "cooking" && itemData.readyAt) {
    const readyAtMs = normalizeTs(itemData.readyAt);
    return (readyAtMs - currentTime) / 1000;
  }

  if (itemData.category === "composter" && itemData.readyAt) {
    const readyAtMs = normalizeTs(itemData.readyAt);
    return (readyAtMs - currentTime) / 1000;
  }

  if (itemData.category === "crop_machine" && itemData.readyAt) {
    const readyAtMs = normalizeTs(itemData.readyAt);
    return (readyAtMs - currentTime) / 1000;
  }

  if (itemData.category === "crab_trap" && itemData.readyAt) {
    const readyAtMs = normalizeTs(itemData.readyAt);
    return (readyAtMs - currentTime) / 1000;
  }

  if (
    itemData.category === "floating_island" &&
    itemData.startAt &&
    itemData.endAt
  ) {
    if (currentTime < itemData.startAt) {
      return (itemData.startAt - currentTime) / 1000;
    } else {
      return -1;
    }
  }

  if (itemData.category === "mushroom" && itemData.harvestSeconds) {
    const plantedAtMs = normalizeTs(itemData.plantedAt);
    const harvestTime = (plantedAtMs || 0) + itemData.harvestSeconds * 1000;
    const timeRemainingMs = harvestTime - currentTime;
    return timeRemainingMs / 1000;
  }

  return timeRemainingSeconds(
    itemData.plantedAt || itemData.choppedAt,
    itemData.name || itemData.type,
    itemData.category || "resource",
  );
}

function getLastSuccessfulUpdateTime() {
  const lastUpdateTimestamp = safeKeychain("get", "LAST_SUCCESSFUL_API_UPDATE");
  if (!lastUpdateTimestamp) return null;

  const timestamp = parseInt(lastUpdateTimestamp);
  if (isNaN(timestamp)) return null;

  return timestamp;
}

function formatTime(timeRemainingSeconds, widgetFamily = "medium") {
  if (timeRemainingSeconds <= 0) {
    const readyFor = Math.abs(timeRemainingSeconds);

    const days = Math.floor(readyFor / SECONDS_PER_DAY);
    let remaining = readyFor % SECONDS_PER_DAY;
    const hours = Math.floor(remaining / SECONDS_PER_HOUR);
    remaining %= SECONDS_PER_HOUR;
    const minutes = Math.floor(remaining / SECONDS_PER_MINUTE);
    const seconds = Math.floor(remaining % SECONDS_PER_MINUTE);

    if (days > 0) return `Ready ${days}d ${hours}h ago`;
    else if (hours > 0) return `Ready ${hours}h ${minutes}m ago`;
    else if (minutes > 0) return `Ready ${minutes}m ${seconds}s ago`;
    else return `Ready ${seconds}s ago`;
  }

  const days = Math.floor(timeRemainingSeconds / SECONDS_PER_DAY);
  timeRemainingSeconds %= SECONDS_PER_DAY;
  const hours = Math.floor(timeRemainingSeconds / SECONDS_PER_HOUR);
  timeRemainingSeconds %= SECONDS_PER_HOUR;
  const minutes = Math.floor(timeRemainingSeconds / SECONDS_PER_MINUTE);
  const seconds = Math.floor(timeRemainingSeconds % SECONDS_PER_MINUTE);

  if (widgetFamily === "small") {
    if (days > 0) return `${days}d${hours}h`;
    else if (hours > 0) return `${hours}h${minutes}m`;
    else if (minutes > 0) return `${minutes}m`;
    else return `${seconds}s`;
  } else {
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    if (days > 0) {
      return `${days}d${h}h${m}m${s}s`;
    } else if (hours > 0) {
      return `${hours}h${m}m${s}s`;
    } else if (minutes > 0) {
      return `${minutes}min${s}s`;
    } else {
      return `${seconds}s`;
    }
  }
}

async function checkForUpdates() {
  try {
    const CACHE_KEY_UPDATES = "update_check_cache";
    const CACHE_DURATION_MS = 6 * 60 * 60 * 1000;

    const cachedResult = safeKeychain("get", CACHE_KEY_UPDATES);
    if (cachedResult) {
      const cacheData = safeJSONParse(cachedResult, "Update Cache");
      if (
        cacheData &&
        cacheData.timestamp &&
        cacheData.result &&
        cacheData.widgetVersion
      ) {
        if (cacheData.widgetVersion !== WIDGET_VERSION) {
          safeKeychain("set", CACHE_KEY_UPDATES, null);
        } else {
          const cacheAge = Date.now() - cacheData.timestamp;
          if (cacheAge < CACHE_DURATION_MS) {
            return cacheData.result;
          }
        }
      }
    }

    const request = new Request(
      "https://raw.githubusercontent.com/UsernameYann/Sunflower-Land-Widget-for-iOS/main/changelog.json",
    );
    request.timeoutInterval = 5;
    const changelogData = await request.loadJSON();

    let result = { updateAvailable: false };

    if (changelogData.versions && changelogData.versions.length > 0) {
      const latestVersion = changelogData.versions[0].date;

      const currentVersionDate = new Date(
        WIDGET_VERSION.replace(/(\d+)(st|nd|rd|th)/, "$1"),
      );
      const latestVersionDate = new Date(
        latestVersion.replace(/(\d+)(st|nd|rd|th)/, "$1"),
      );

      if (latestVersionDate > currentVersionDate) {
        result = {
          updateAvailable: true,
          latestVersion: latestVersion,
          message: `Update`,
        };
      }
    }

    const cacheData = {
      timestamp: Date.now(),
      result: result,
      widgetVersion: WIDGET_VERSION,
    };
    safeKeychain("set", CACHE_KEY_UPDATES, JSON.stringify(cacheData));

    return result;
  } catch (error) {
    console.log("⚠️ Impossible de vérifier les mises à jour:", error.message);
    return { updateAvailable: false };
  }
}

function getCurrentSocialProjectsSnapshot(allItems) {
  const snapshot = {};
  const villageProjects = allItems["__socialProjects"];
  if (!villageProjects || typeof villageProjects !== "object") return snapshot;

  const SOCIAL_PROJECT_LIMITS = {
    "Big Banana": 200,
    "Advanced Cooking Pot": 100,
    "Big Orange": 25,
    "Big Apple": 50,
    "Expert Cooking Pot": 50,
    "Basic Cooking Pot": 10,
  };

  for (const [projectName, limit] of Object.entries(SOCIAL_PROJECT_LIMITS)) {
    const project = villageProjects[projectName];
    if (project && typeof project.cheers === "number") {
      if (project.cheers >= limit) {
        snapshot[projectName] = {
          cheers: project.cheers,
          limit: limit,
          atLimit: true,
        };
      }
    }
  }

  return snapshot;
}

function shouldShowSocialProjectIcon(allItems) {
  try {
    if (!SFL_USER_CONFIG?.categoryFilters?.social_projects) return false;
    return Object.keys(getCurrentSocialProjectsSnapshot(allItems)).length > 0;
  } catch (error) {
    logError(
      "SocialProjects",
      "Error detecting social projects",
      error.message || error,
    );
    return false;
  }
}

function getCurrentPowerSnapshot(allItems) {
  const snapshot = {};
  const now = Date.now();
  const lookaheadLimitMs = EIGHT_HOURS_MS;

  for (const [itemName, itemData] of Object.entries(allItems)) {
    if (
      itemData.category === "power" &&
      itemData.nextAvailableAt &&
      itemName !== "Tree Blitz"
    ) {
      const nextAvailableAtMs = normalizeTs(itemData.nextAvailableAt);
      const timeRemainingMs = nextAvailableAtMs - now;
      if (timeRemainingMs > 0 && timeRemainingMs < lookaheadLimitMs) {
        snapshot[itemName] = {
          name: itemName,
          nextAvailableAt: nextAvailableAtMs,
        };
      }
    }
  }
  return snapshot;
}

function shouldShowPowerIcon(allItems) {
  try {
    if (!SFL_USER_CONFIG?.categoryFilters?.power_notification) return false;
    return Object.keys(getCurrentPowerSnapshot(allItems)).length > 0;
  } catch (error) {
    logError("Power", "Error detecting power icon", error.message || error);
    return false;
  }
}

function getCurrentPetNeglectSnapshot(allItems) {
  const snapshot = {};
  const now = Date.now();
  const lookaheadLimitMs = NOTIFICATION_LOOKAHEAD_HOURS * HOUR_TO_MS;

  for (const [, itemData] of Object.entries(allItems)) {
    if (
      itemData.category === "pet" &&
      itemData.action === "feed" &&
      itemData.fedAt
    ) {
      const fedAtMs = normalizeTs(itemData.fedAt);
      const neglectDays = itemData.neglectDays || 3;
      const neglectAtMs = fedAtMs + neglectDays * 24 * 60 * 60 * 1000;
      const timeUntilNeglectMs = neglectAtMs - now;
      if (
        timeUntilNeglectMs > EIGHT_HOURS_MS &&
        timeUntilNeglectMs < lookaheadLimitMs
      ) {
        const petId = itemData.petName || itemData.name || itemData.type;
        const fireDate = neglectAtMs - EIGHT_HOURS_MS;
        snapshot[petId] = {
          name: petId,
          fireDate: fireDate,
          neglectAtMs: neglectAtMs,
        };
      }
    }
  }
  return snapshot;
}

function getCurrentPetNeglectIconSnapshot(allItems) {
  const snapshot = {};
  const now = Date.now();
  const lookaheadLimitMs = EIGHT_HOURS_MS;

  for (const [, itemData] of Object.entries(allItems)) {
    if (
      itemData.category === "pet" &&
      itemData.action === "feed" &&
      itemData.fedAt
    ) {
      const fedAtMs = normalizeTs(itemData.fedAt);
      const neglectDays = itemData.neglectDays || 3;
      const neglectAtMs = fedAtMs + neglectDays * 24 * 60 * 60 * 1000;
      const timeUntilNeglectMs = neglectAtMs - now;
      if (timeUntilNeglectMs > 0 && timeUntilNeglectMs < lookaheadLimitMs) {
        const petId = itemData.petName || itemData.name || itemData.type;
        snapshot[petId] = { name: petId, neglectAtMs: neglectAtMs };
      }
    }
  }
  return snapshot;
}

function shouldShowPetNeglectIcon(allItems) {
  try {
    if (!SFL_USER_CONFIG?.categoryFilters?.pet_neglect) return false;
    return Object.keys(getCurrentPetNeglectIconSnapshot(allItems)).length > 0;
  } catch (error) {
    logError(
      "PetNeglect",
      "Error detecting pet neglect icon",
      error.message || error,
    );
    return false;
  }
}

function getCurrentCompletedTradesSnapshot(allItems) {
  const snapshot = {};
  const trades = allItems["__trades"];
  if (!trades || typeof trades !== "object") return snapshot;

  if (trades.listings && typeof trades.listings === "object") {
    for (const [tradeId, listing] of Object.entries(trades.listings)) {
      if (listing.fulfilledAt) {
        snapshot[`listing_${tradeId}`] = {
          type: "listing",
          fulfilledAt: listing.fulfilledAt,
        };
      }
    }
  }

  if (trades.offers && typeof trades.offers === "object") {
    for (const [tradeId, offer] of Object.entries(trades.offers)) {
      if (offer.fulfilledAt) {
        snapshot[`offer_${tradeId}`] = {
          type: "offer",
          fulfilledAt: offer.fulfilledAt,
        };
      }
    }
  }

  return snapshot;
}

function shouldShowTradesCompletedIcon(allItems) {
  try {
    if (!SFL_USER_CONFIG?.categoryFilters?.trades) return false;
    return Object.keys(getCurrentCompletedTradesSnapshot(allItems)).length > 0;
  } catch (error) {
    logError(
      "Trades",
      "Error detecting trades completed icon",
      error.message || error,
    );
    return false;
  }
}

function getCurrentSickAnimalsSnapshot(allItems) {
  const snapshot = {};
  const sickAnimals = allItems["__sickAnimals"];
  if (!sickAnimals) return snapshot;

  if (sickAnimals.barn && typeof sickAnimals.barn === "object") {
    for (const [animalId, animal] of Object.entries(sickAnimals.barn)) {
      if (animal.state === "sick") {
        snapshot[`barn_${animalId}`] = { type: animal.type, state: "sick" };
      }
    }
  }

  if (sickAnimals.henHouse && typeof sickAnimals.henHouse === "object") {
    for (const [animalId, animal] of Object.entries(sickAnimals.henHouse)) {
      if (animal.state === "sick") {
        snapshot[`henHouse_${animalId}`] = { type: animal.type, state: "sick" };
      }
    }
  }

  return snapshot;
}

function shouldShowSickAnimalIcon(allItems) {
  try {
    if (!SFL_USER_CONFIG?.categoryFilters?.sick_animal) return false;
    return Object.keys(getCurrentSickAnimalsSnapshot(allItems)).length > 0;
  } catch (error) {
    logError(
      "SickAnimals",
      "Error detecting sick animal icon",
      error.message || error,
    );
    return false;
  }
}

function detectNewlySickAnimals(allItems) {
  try {
    const SICK_ANIMALS_SNAPSHOT_KEY = "sfl_sick_animals_snapshot";
    const previousSnapshot = safeJSONParse(
      safeKeychain("get", SICK_ANIMALS_SNAPSHOT_KEY),
      "SickAnimalsSnapshot",
      {},
    );
    const currentSnapshot = getCurrentSickAnimalsSnapshot(allItems);

    const newlySick = [];
    for (const [animalKey, animalData] of Object.entries(currentSnapshot)) {
      if (!previousSnapshot[animalKey]) {
        newlySick.push(animalData);
      }
    }

    safeKeychain(
      "set",
      SICK_ANIMALS_SNAPSHOT_KEY,
      JSON.stringify(currentSnapshot),
    );

    return newlySick;
  } catch (error) {
    logError(
      "SickAnimalsNotif",
      "Error detecting newly sick animals",
      error.message || error,
    );
    return [];
  }
}

function detectNewlyCompletedTrades(allItems) {
  try {
    const TRADES_SNAPSHOT_KEY = "sfl_completed_trades_snapshot";
    const previousSnapshot = safeJSONParse(
      safeKeychain("get", TRADES_SNAPSHOT_KEY),
      "CompletedTradesSnapshot",
      {},
    );
    const currentSnapshot = getCurrentCompletedTradesSnapshot(allItems);

    const newlyCompleted = [];
    for (const [tradeKey, tradeData] of Object.entries(currentSnapshot)) {
      if (!previousSnapshot[tradeKey]) {
        newlyCompleted.push(tradeData);
      }
    }

    safeKeychain("set", TRADES_SNAPSHOT_KEY, JSON.stringify(currentSnapshot));

    return newlyCompleted;
  } catch (error) {
    logError(
      "TradesNotif",
      "Error detecting newly completed trades",
      error.message || error,
    );
    return [];
  }
}

function detectNewSocialProjectLimits(allItems) {
  try {
    const PROJECTS_SNAPSHOT_KEY = "sfl_social_projects_snapshot";
    const previousSnapshot = safeJSONParse(
      safeKeychain("get", PROJECTS_SNAPSHOT_KEY),
      "SocialProjectsSnapshot",
      {},
    );
    const currentSnapshot = getCurrentSocialProjectsSnapshot(allItems);

    const newlyLimited = [];
    for (const [projectName, projectData] of Object.entries(currentSnapshot)) {
      if (!previousSnapshot[projectName]) {
        newlyLimited.push({ name: projectName, ...projectData });
      }
    }

    safeKeychain("set", PROJECTS_SNAPSHOT_KEY, JSON.stringify(currentSnapshot));

    return newlyLimited;
  } catch (error) {
    logError(
      "SocialProjectsNotif",
      "Error detecting new social project limits",
      error.message || error,
    );
    return [];
  }
}

function processItems(allItems, options = {}) {
  const {
    mode = "notifications",
    currentTime = Date.now(),
    lookaheadHours = NOTIFICATION_LOOKAHEAD_HOURS,
  } = options;

  const isNotificationMode = mode === "notifications";
  const processedItems = [];
  const lookaheadLimitMs = currentTime + lookaheadHours * HOUR_TO_MS;
  const categoryFilters = SFL_USER_CONFIG.categoryFilters;

  for (const [itemName, itemData] of Object.entries(allItems)) {
    if (itemName.startsWith("__")) continue;
    if (!itemData || (!itemData.name && !itemData.type && !itemData.category))
      continue;

    if (itemData.category === "update") {
      if (!isNotificationMode) {
        processedItems.push({
          name: itemData.name || itemData.type,
          category: itemData.category,
          readyTime: currentTime,
          remainingSeconds: -1000, 
          totalAmount: itemData.amount || 0,
          emoji: getItemEmoji(
            itemData.name || itemData.type,
            itemData.category,
            itemData,
          ),
          hasReward: false,
          hasSwarm: false,
          message: itemData.message || null,
        });
      }
      continue;
    }

    if (!categoryFilters[itemData.category]) {
      if (itemData.category === "animal") {
        const typeLower = itemData.type.toLowerCase();
        if (
          !categoryFilters.animal &&
          !categoryFilters[typeLower] &&
          !categoryFilters[typeLower + "Love"]
        )
          continue;
      } else if (itemData.category === "resource") {
        const nameLower = (itemData.name || itemData.type).toLowerCase();
        if (!categoryFilters.resource && !categoryFilters[nameLower]) continue;
      } else {
        continue;
      }
    }

    if (itemData.category === "lava_pit") {
      const remainingSeconds =
        itemData.remainingSeconds != null ? itemData.remainingSeconds : null;
      const readyTime =
        remainingSeconds != null
          ? currentTime + remainingSeconds * SECOND_TO_MS
          : null;

      if (itemData.canCollect) {
        if (isNotificationMode && currentTime <= lookaheadLimitMs) {
          processedItems.push({
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: currentTime,
            remainingSeconds: 0,
            totalAmount: itemData.amount || 0,
            emoji: getItemEmoji(
              itemData.name || itemData.type,
              itemData.category,
            ),
            hasReward: false,
            hasSwarm: false,
          });
        } else if (!isNotificationMode) {
          processedItems.push({
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: currentTime,
            remainingSeconds: 0,
            totalAmount: itemData.amount || 0,
            emoji: getItemEmoji(
              itemData.name || itemData.type,
              itemData.category,
            ),
          });
        }
      } else if (remainingSeconds != null && remainingSeconds > 0) {
        if (!isNotificationMode || readyTime <= lookaheadLimitMs) {
          processedItems.push({
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: readyTime,
            remainingSeconds: remainingSeconds,
            totalAmount: itemData.amount || 0,
            emoji: getItemEmoji(
              itemData.name || itemData.type,
              itemData.category,
            ),
            hasReward: false,
            hasSwarm: false,
          });
        }
      }
      continue;
    }

    const timeResult = getTimeRemaining(itemData);

    if (timeResult === null) {
      continue;
    }

    if (timeResult.isAnimal) {
      const typeLower = itemData.type.toLowerCase();
      const wakeFilter = categoryFilters.animal || categoryFilters[typeLower];
      const loveFilter =
        categoryFilters.animal || categoryFilters[typeLower + "Love"];

      const wakeRemaining = timeResult.wakeTime;
      const wakeReadyTime = currentTime + wakeRemaining * SECOND_TO_MS;
      if (!isNotificationMode) {
        if (wakeFilter) {
          const item = {
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: wakeReadyTime,
            remainingSeconds: wakeRemaining,
            totalAmount: itemData.amount || 0,
            emoji: getItemEmoji(
              itemData.name || itemData.type,
              itemData.category,
            ),
            hasReward: itemData.hasReward || false,
          };
          item.isLoveTime = false;
          processedItems.push(item);
        }
      } else {
        if (
          wakeRemaining > 0 &&
          wakeFilter &&
          wakeReadyTime <= lookaheadLimitMs
        ) {
          const item = {
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: wakeReadyTime,
            remainingSeconds: wakeRemaining,
            totalAmount: itemData.amount || 0,
            emoji: getItemEmoji(
              itemData.name || itemData.type,
              itemData.category,
            ),
            hasReward: itemData.hasReward || false,
          };
          item.isLoveTime = false;
          processedItems.push(item);
        }
      }

      const loveRemaining = timeResult.loveTime;
      const loveReadyTime = currentTime + loveRemaining * SECOND_TO_MS;
      if (!isNotificationMode) {
        if (loveFilter && loveRemaining !== null) {
          const item = {
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: loveReadyTime,
            remainingSeconds: loveRemaining,
            totalAmount: itemData.amount || 0,
            emoji: "💖",
            hasReward: false,
          };
          item.isLoveTime = true;
          processedItems.push(item);
        }
      } else {
        if (
          loveRemaining !== null &&
          loveRemaining > 0 &&
          loveFilter &&
          loveReadyTime <= lookaheadLimitMs
        ) {
          const item = {
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: loveReadyTime,
            remainingSeconds: loveRemaining,
            totalAmount: itemData.amount || 0,
            emoji: "💖",
            hasReward: false,
          };
          item.isLoveTime = true;
          processedItems.push(item);
        }
      }
      continue;
    }

    if (itemData.category === "pet") {
      const remainingSeconds = timeResult;
      const readyTime = currentTime + remainingSeconds * SECOND_TO_MS;
      const action = itemData.action;

      if (!isNotificationMode) {
        const petName = itemData.petName || itemData.name || itemData.type;
        const item = {
          name: itemData.name,
          category: itemData.category,
          readyTime: readyTime,
          remainingSeconds: remainingSeconds,
          totalAmount: itemData.amount || 0,
          emoji: getItemEmoji(
            petName,
            itemData.category,
            action === "feed"
              ? { isPetFeed: true, isNFT: itemData.isNFT }
              : { isPetCaress: true, isNFT: itemData.isNFT },
          ),
          action: action,
          isNFT: itemData.isNFT,
          isPetFeed: action === "feed",
          isPetCaress: action === "caress",
        };
        processedItems.push(item);
      } else {
        if (remainingSeconds > 0 && readyTime <= lookaheadLimitMs) {
          const petName = itemData.petName || itemData.name || itemData.type;
          const item = {
            name: itemData.name,
            category: itemData.category,
            readyTime: readyTime,
            remainingSeconds: remainingSeconds,
            totalAmount: itemData.amount || 0,
            emoji: getItemEmoji(
              petName,
              itemData.category,
              action === "feed"
                ? { isPetFeed: true, isNFT: itemData.isNFT }
                : { isPetCaress: true, isNFT: itemData.isNFT },
            ),
            action: action,
            isNFT: itemData.isNFT,
            isPetFeed: action === "feed",
            isPetCaress: action === "caress",
          };
          processedItems.push(item);
        }
      }

      if (isNotificationMode && action === "feed" && itemData.fedAt) {
        const fedAtMs = normalizeTs(itemData.fedAt);
        const neglectDays = itemData.neglectDays || 3;
        const neglectAtMs = fedAtMs + neglectDays * 24 * 60 * 60 * 1000;
        const twelveHoursBeforeNeglect = neglectAtMs - TWELVE_HOURS_MS;

        if (
          currentTime < neglectAtMs &&
          currentTime >= twelveHoursBeforeNeglect
        ) {
          if (twelveHoursBeforeNeglect <= lookaheadLimitMs) {
            const petName = itemData.petName || itemData.name || itemData.type;
            processedItems.push({
              name: `⚠️ ${petName} neglect warning`,
              category: "pet",
              readyTime: twelveHoursBeforeNeglect,
              remainingSeconds: Math.max(
                0,
                (twelveHoursBeforeNeglect - currentTime) / 1000,
              ),
              totalAmount: 0,
              emoji: "💀",
              hasReward: false,
              hasSwarm: false,
              isPet: true,
              petAction: "neglect_warning",
            });
          }
        }
      }
      continue;
    }

    const remainingSeconds = timeResult;
    const readyTime = currentTime + remainingSeconds * SECOND_TO_MS;

    if (isNotificationMode) {
      if (remainingSeconds > 0 && readyTime <= lookaheadLimitMs) {
        processedItems.push({
          name: itemData.name || itemData.type,
          category: itemData.category,
          readyTime: readyTime,
          remainingSeconds: remainingSeconds,
          totalAmount: itemData.amount || 0,
          count: itemData.category === "crab_trap" ? itemData.amount || 1 : 1,
          emoji: getItemEmoji(
            itemData.name || itemData.type,
            itemData.category,
          ),
          hasReward: itemData.hasReward || false,
          hasSwarm: itemData.hasSwarm || false,
        });
      }
    } else {
      processedItems.push({
        name: itemData.name || itemData.type,
        category: itemData.category,
        readyTime: readyTime,
        remainingSeconds: remainingSeconds,
        totalAmount: itemData.amount || 0,
        count: itemData.category === "crab_trap" ? itemData.amount || 1 : 1,
        emoji: getItemEmoji(itemData.name || itemData.type, itemData.category),
        hasReward: itemData.hasReward || false,
        hasSwarm: itemData.hasSwarm || false,
      });
    }
  }

  return processedItems;
}

function getItemEmoji(itemType, category, groupData) {
  const emojis = {
    Tree: "🌳",
    Stone: "🪨",
    Iron: "⚒️",
    Gold: "⚜️",
    Crimstone: "♦️",
    Sunstone: "🏵️",
    Oil: "🛢️",
    Sunflower: "🌻",
    Potato: "🥔",
    Pumpkin: "🎃",
    Carrot: "🥕",
    Corn: "🌽",
    Wheat: "🌾",
    Cabbage: "🥬",
    Broccoli: "🥦",
    Rhubarb: "🥬",
    Zucchini: "🥒",
    Yam: "🍠",
    Soybean: "🫛",
    Beetroot: "🌰",
    Pepper: "🌶️",
    Cauliflower: "🥦",
    Parsnip: "🥕",
    Eggplant: "🍆",
    Onion: "🧅",
    Radish: "🫜",
    Turnip: "🥬",
    Kale: "🥬",
    Artichoke: "🥦",
    Barley: "🌾",
    Tomato: "🍅",
    Apple: "🍎",
    Banana: "🍌",
    Orange: "🍊",
    Lemon: "🍋",
    Blueberry: "🫐",
    Celestine: "✨",
    Lunara: "🌙",
    Duskberry: "🌝",
    Chicken: "🐔",
    Cow: "🐄",
    Sheep: "🐑",
    Rice: "🌾",
    Olive: "🫒",
    Grape: "🍇",
    Beehive: "🍯",
    "Lava Pit": "🔥",
    Mushroom: "🍄",
    "Magic Mushroom": "🍄‍🟫",
    "Maneki Neko": "🐱",
    "Pirate Chest": "🏴‍☠️",
    "VIP Chest": "💎",
    "Daily Rewards": "🎁",
    Shipments: "🚢",
  };

  if (category === "pet" && groupData) {
    return groupData.isNFT ? "🐶" : "🐱";
  }

  if (category === "flower") return "🌸";
  if (category === "crafting") return "🔨";
  if (category === "cooking") return "🍳";
  if (category === "composter") return "♻️";
  if (category === "crab_trap") return "🦀";
  if (category === "bud_box") return "👽";
  if (category === "crop_machine") return emojis[itemType] || "🚜";
  if (category === "power") return "⚡";
  if (category === "floating_island") return "🏝️";
  if (category === "update") return "🔄";
  if (itemType === "Desert Dig" || itemType === "Desert Dig:") return "🪏";

  return emojis[itemType] || "🌱";
}

function getSeasonEmoji(season) {
  const seasonEmojis = {
    winter: "❄️",
    spring: "🌸",
    summer: "☀️",
    autumn: "🍂",
  };
  return seasonEmojis[season] || "🌍";
}

function getEventEmoji(event) {
  const eventEmojis = {
    greatFreeze: "❄️",
    fishFrenzy: "🐟",
    sunshower: "🌦️",
    doubleDelivery: "📦",
    fullMoon: "🌕",
    tsunami: "🌊",
    insectPlague: "🐛",
    bountifulHarvest: "🌾",
    tornado: "🌪️",
  };
  return eventEmojis[event] || "";
}

function checkDailyReset(allItems, itemName, lastCollectedAt) {
  const todayStartUTC = getTodayStart();
  const nextResetAt = getNextDailyReset();

  if (!lastCollectedAt) {
    return;
  }

  if (lastCollectedAt >= todayStartUTC) {
    allItems[itemName] = {
      nextResetAt: nextResetAt,
      category: "daily",
      type: itemName,
      name: itemName,
      isCollected: true,
      amount: 0,
    };
  } else {
    allItems[itemName] = {
      nextResetAt: Date.now() - 1000,
      category: "daily",
      type: itemName,
      name: itemName,
      isCollected: false,
      amount: 0,
    };
  }
}

function parseDailyCollectibles(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.daily) return;

  if (
    apiData.farm &&
    apiData.farm.dailyRewards &&
    apiData.farm.dailyRewards.chest &&
    apiData.farm.dailyRewards.chest.collectedAt
  ) {
    checkDailyReset(
      allItems,
      "Daily Rewards",
      apiData.farm.dailyRewards.chest.collectedAt,
    );
  } else {
    checkDailyReset(allItems, "Daily Rewards", null);
  }

  let manekiFound = false;
  if (
    apiData.farm &&
    apiData.farm.collectibles &&
    apiData.farm.collectibles["Maneki Neko"]
  ) {
    const manekiArray = apiData.farm.collectibles["Maneki Neko"];
    if (
      Array.isArray(manekiArray) &&
      manekiArray.length > 0 &&
      manekiArray[0].shakenAt
    ) {
      checkDailyReset(allItems, "Maneki Neko", manekiArray[0].shakenAt);
      manekiFound = true;
    }
  }
  if (
    !manekiFound &&
    apiData.farm &&
    apiData.farm.home &&
    apiData.farm.home.collectibles &&
    apiData.farm.home.collectibles["Maneki Neko"]
  ) {
    const manekiArray = apiData.farm.home.collectibles["Maneki Neko"];
    if (
      Array.isArray(manekiArray) &&
      manekiArray.length > 0 &&
      manekiArray[0].shakenAt
    ) {
      checkDailyReset(allItems, "Maneki Neko", manekiArray[0].shakenAt);
      manekiFound = true;
    }
  }
  if (!manekiFound) {
    checkDailyReset(allItems, "Maneki Neko", null);
  }

  if (
    apiData.farm &&
    apiData.farm.pumpkinPlaza &&
    apiData.farm.pumpkinPlaza.pirateChest &&
    apiData.farm.pumpkinPlaza.pirateChest.openedAt
  ) {
    checkDailyReset(
      allItems,
      "Pirate Chest",
      apiData.farm.pumpkinPlaza.pirateChest.openedAt,
    );
  } else {
    checkDailyReset(allItems, "Pirate Chest", null);
  }

  if (
    apiData.farm &&
    apiData.farm.pumpkinPlaza &&
    apiData.farm.pumpkinPlaza.vipChest
  ) {
    if (SFL_USER_CONFIG.categoryFilters.vip_chest) {
      const vip = apiData.farm.pumpkinPlaza.vipChest;
      const openedAt = vip.openedAt || null;
      const now = Date.now();

      const firstMondayStart = getFirstMondayStartForTimestamp(now);
      const firstMondayEnd = firstMondayStart + 24 * 60 * 60 * 1000;

      const d = new Date(now);
      let year = d.getUTCFullYear();
      let month = d.getUTCMonth() + 1;
      if (month > 11) {
        month = 0;
        year++;
      }
      const firstOfNext = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));
      const day = firstOfNext.getUTCDay();
      const diff = (1 - day + 7) % 7;
      const nextFirstMondayStart =
        firstOfNext.getTime() + diff * 24 * 60 * 60 * 1000;

      allItems["VIP Chest"] = {
        availableAt: firstMondayStart,
        availableUntil: firstMondayEnd,
        nextResetAt: nextFirstMondayStart,
        openedAt: openedAt,
        type: "VIP Chest",
        name: "VIP Chest",
        category: "vip_chest",
        amount: 0,
      };
    }
  }

  if (apiData.farm && apiData.farm.desert && apiData.farm.desert.digging) {
    const digging = apiData.farm.desert.digging;
    const collectedAt =
      digging.streak && digging.streak.collectedAt
        ? digging.streak.collectedAt
        : digging.collectedAt || null;
    checkDailyReset(allItems, "Desert Dig", collectedAt ? collectedAt : null);
  }

  if (
    apiData.farm &&
    apiData.farm.shipments &&
    apiData.farm.shipments.restockedAt
  ) {
    checkDailyReset(allItems, "Shipments", apiData.farm.shipments.restockedAt);
  }
}

function parseResources(apiData, allItems) {
  const resourceTypes = {
    trees: {
      name: "Tree",
      key: "wood",
      timestamp: "choppedAt",
      filter: "tree",
    },
    stones: {
      name: "Stone",
      key: "stone",
      timestamp: "minedAt",
      filter: "stone",
    },
    iron: { name: "Iron", key: "stone", timestamp: "minedAt", filter: "iron" },
    gold: { name: "Gold", key: "stone", timestamp: "minedAt", filter: "gold" },
    crimstones: {
      name: "Crimstone",
      key: "stone",
      timestamp: "minedAt",
      filter: "crimstone",
    },
    sunstones: {
      name: "Sunstone",
      key: "stone",
      timestamp: "minedAt",
      filter: "sunstone",
    },
    oilReserves: {
      name: "Oil",
      key: "oil",
      timestamp: "drilledAt",
      filter: "oil",
    },
  };

  for (let [resourceType, config] of Object.entries(resourceTypes)) {
    const showResource =
      SFL_USER_CONFIG.categoryFilters.resource ||
      SFL_USER_CONFIG.categoryFilters[config.filter];
    if (!showResource) continue;

    if (apiData.farm && apiData.farm[resourceType]) {
      for (let [resourceId, resourceInfo] of Object.entries(
        apiData.farm[resourceType],
      )) {
        if (!resourceInfo[config.key]) continue;

        let resource = resourceInfo[config.key];
        if (!resource[config.timestamp]) continue;

        let resourceName = `${config.name} ${resourceId}`;
        allItems[resourceName] = {
          plantedAt: resource[config.timestamp],
          type: config.name,
          name: config.name,
          category: "resource",
          amount: resource.amount || 0,
          hasReward: resource.reward ? true : false,
        };
      }
    }
  }
}

function parseLavaPits(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.lava_pit) return;
  if (apiData.farm && apiData.farm.lavaPits) {
    for (let [pitId, pitInfo] of Object.entries(apiData.farm.lavaPits)) {
      const startedAt = pitInfo.startedAt || pitInfo.createdAt || null;
      const removedAt = pitInfo.removedAt || pitInfo.collectedAt || null;

      if (removedAt) {
        continue;
      }

      const pitName = `Lava Pit ${pitId}`;
      const durationSeconds = getLavaPitTimeSeconds(apiData.farm);
      const endAt = startedAt ? startedAt + durationSeconds * 1000 : null;
      const now = Date.now();
      const remainingSeconds = endAt ? Math.round((endAt - now) / 1000) : null;
      const isRunning = !!startedAt && !removedAt;
      const canCollect = endAt ? now >= endAt && !removedAt : false;

      allItems[pitName] = {
        startedAt: startedAt,
        removedAt: removedAt,
        endAt: endAt,
        remainingSeconds: remainingSeconds,
        isRunning: isRunning,
        canCollect: canCollect,
        type: "Lava Pit",
        name: "Lava Pit",
        category: "lava_pit",
        amount: 0,
      };
    }
  }
}

function parseCrops(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.crop) return;
  if (apiData.farm && apiData.farm.crops) {
    for (let [cropId, cropInfo] of Object.entries(apiData.farm.crops)) {
      if (cropInfo.crop && cropInfo.crop.plantedAt && cropInfo.crop.name) {
        let cropName = `${cropInfo.crop.name} ${cropId}`;
        allItems[cropName] = {
          plantedAt: cropInfo.crop.plantedAt,
          type: cropInfo.crop.name,
          name: cropInfo.crop.name,
          category: "crop",
          amount: parseFloat(cropInfo.crop.amount) || 0,
          hasReward: cropInfo.crop.reward ? true : false,
        };
      }
    }
  }
}

function parseFruits(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.fruit) return;
  if (apiData.farm && apiData.farm.fruitPatches) {
    for (let [patchId, patchInfo] of Object.entries(
      apiData.farm.fruitPatches,
    )) {
      if (patchInfo.fruit && patchInfo.fruit.name) {
        let fruit = patchInfo.fruit;
        let plantedAt = fruit.plantedAt;
        let harvestedAt = fruit.harvestedAt || 0;

        let timestampToUse = harvestedAt === 0 ? plantedAt : harvestedAt;

        if (timestampToUse) {
          let fruitName = `${fruit.name} ${patchId}`;
          allItems[fruitName] = {
            plantedAt: timestampToUse,
            type: fruit.name,
            name: fruit.name,
            category: "fruit",
            amount: parseFloat(fruit.amount) || 0,
            hasReward: fruit.reward ? true : false,
          };
        }
      }
    }
  }
}

function parseAnimals(apiData, allItems) {
  const categoryFilters = SFL_USER_CONFIG.categoryFilters;
  if (apiData.farm && apiData.farm.henHouse && apiData.farm.henHouse.animals) {
    for (let [animalId, animalInfo] of Object.entries(
      apiData.farm.henHouse.animals,
    )) {
      if (
        animalInfo.type === "Chicken" &&
        animalInfo.awakeAt &&
        animalInfo.asleepAt
      ) {
        if (
          !categoryFilters.animal &&
          !categoryFilters.chicken &&
          !categoryFilters.chickenLove
        )
          continue;
        let animalName = `${animalInfo.type} ${animalId}`;
        allItems[animalName] = {
          awakeAt: animalInfo.awakeAt,
          asleepAt: animalInfo.asleepAt,
          lovedAt: animalInfo.lovedAt || null,
          type: animalInfo.type,
          name: animalInfo.type,
          category: "animal",
          amount: 0,
          state: animalInfo.state || "unknown",
          hasReward: animalInfo.reward ? true : false,
        };
      }
    }
  }

  if (apiData.farm && apiData.farm.barn && apiData.farm.barn.animals) {
    for (let [animalId, animalInfo] of Object.entries(
      apiData.farm.barn.animals,
    )) {
      if (
        (animalInfo.type === "Cow" || animalInfo.type === "Sheep") &&
        animalInfo.awakeAt &&
        animalInfo.asleepAt
      ) {
        const typeLower = animalInfo.type.toLowerCase();
        if (
          !categoryFilters.animal &&
          !categoryFilters[typeLower] &&
          !categoryFilters[typeLower + "Love"]
        )
          continue;
        let animalName = `${animalInfo.type} ${animalId}`;
        allItems[animalName] = {
          awakeAt: animalInfo.awakeAt,
          asleepAt: animalInfo.asleepAt,
          lovedAt: animalInfo.lovedAt || null,
          type: animalInfo.type,
          name: animalInfo.type,
          category: "animal",
          amount: 0,
          state: animalInfo.state || "unknown",
          hasReward: animalInfo.reward ? true : false,
        };
      }
    }
  }
}

function parseFlowers(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.flower) return;
  if (apiData.farm && apiData.farm.flowers && apiData.farm.flowers.flowerBeds) {
    for (let [bedId, bedInfo] of Object.entries(
      apiData.farm.flowers.flowerBeds,
    )) {
      if (bedInfo.flower && bedInfo.flower.plantedAt && bedInfo.flower.name) {
        let flowerName = `${bedInfo.flower.name} ${bedId}`;
        allItems[flowerName] = {
          plantedAt: bedInfo.flower.plantedAt,
          type: bedInfo.flower.name,
          name: bedInfo.flower.name,
          category: "flower",
          amount: parseFloat(bedInfo.flower.amount) || 0,
          hasReward: bedInfo.flower.reward ? true : false,
        };
      }
    }
  }
}

function parseBeehives(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.beehive) return;
  if (apiData.farm && apiData.farm.beehives) {
    for (let [hiveId, hiveInfo] of Object.entries(apiData.farm.beehives)) {
      if (hiveInfo.honey && hiveInfo.honey.updatedAt !== undefined) {
        const now = Date.now();
        const honeyProducedMs = hiveInfo.honey.produced || 0;
        const honeyUpdatedAtMs = hiveInfo.honey.updatedAt;
        const flowers = (hiveInfo.flowers || [])
          .slice()
          .sort((a, b) => a.attachedAt - b.attachedAt);

        const currentProducedMs = flowers.reduce((produced, flower) => {
          const start = Math.max(honeyUpdatedAtMs, flower.attachedAt || 0);
          const end = Math.min(now, flower.attachedUntil || 0);
          const rate = flower.rate ?? 1;
          if (end > start) {
            return produced + Math.max(end - start, 0) * rate;
          }
          return produced;
        }, honeyProducedMs);

        let honeyLeftMs = Math.max(
          0,
          DEFAULT_HONEY_PRODUCTION_TIME - currentProducedMs,
        );
        let readyAt = now;

        if (honeyLeftMs > 0) {
          const events = [];
          flowers.forEach((flower) => {
            const rate = flower.rate ?? 1;
            const rawStart = flower.attachedAt || 0;
            const rawEnd = flower.attachedUntil || 0;
            const start = Math.max(now, rawStart);
            const end = rawEnd;
            if (end > now) {
              if (start > now) {
                events.push({ t: start, delta: rate });
              }
              events.push({ t: end, delta: -rate });
            }
          });
          events.sort((a, b) => a.t - b.t || a.delta - b.delta);

          let speed = flowers.reduce((acc, flower) => {
            const rate = flower.rate ?? 1;
            return (
              acc +
              ((flower.attachedAt || 0) <= now &&
              (flower.attachedUntil || 0) > now
                ? rate
                : 0)
            );
          }, 0);

          let prev = now;
          let finished = false;

          for (const ev of events) {
            const dt = ev.t - prev;
            if (dt > 0 && speed > 0) {
              const produced = dt * speed;
              if (produced >= honeyLeftMs) {
                const timeNeeded = honeyLeftMs / speed;
                readyAt = prev + timeNeeded;
                finished = true;
                break;
              }
              honeyLeftMs -= produced;
            }
            speed += ev.delta;
            prev = ev.t;
          }

          if (!finished) {
            if (speed > 0 && honeyLeftMs > 0) {
              readyAt = prev + honeyLeftMs / speed;
              finished = true;
            }
          }

          if (!finished) {
            readyAt = undefined;
          }
        }

        let hiveName = `Beehive ${hiveId}`;
        allItems[hiveName] = {
          readyAt: readyAt,
          type: "Beehive",
          name: "Beehive",
          category: "beehive",
          amount: 0,
          hasSwarm: hiveInfo.swarm || false,
        };
      }
    }
  }
}

function parseGreenhouse(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.greenhouse) return;

  if (apiData.farm && apiData.farm.greenhouse && apiData.farm.greenhouse.pots) {
    for (let [potId, potInfo] of Object.entries(apiData.farm.greenhouse.pots)) {
      if (potInfo.plant && potInfo.plant.plantedAt && potInfo.plant.name) {
        let plantName = `${potInfo.plant.name} Greenhouse ${potId}`;
        allItems[plantName] = {
          plantedAt: potInfo.plant.plantedAt,
          type: potInfo.plant.name,
          name: potInfo.plant.name,
          category: "greenhouse",
          amount: parseFloat(potInfo.plant.amount) || 0,
        };
      }
    }
  }
}

function parseMushrooms(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.mushroom) return;

  if (apiData.farm && apiData.farm.mushrooms) {
    let mushrooms = apiData.farm.mushrooms;
    const uncollectedMushrooms = mushrooms.mushrooms || {};

    if (mushrooms.spawnedAt) {
      const baseItem = {
        plantedAt: mushrooms.spawnedAt,
        type: "Mushroom",
        name: "Mushroom",
        category: "mushroom",
        amount: 0,
      };

      let wildTotal = 0;
      let hasWild = false;
      for (let [, mush] of Object.entries(uncollectedMushrooms)) {
        if (mush.name === "Wild Mushroom") {
          wildTotal += mush.amount || 0;
          hasWild = true;
        }
      }

      if (hasWild) {
        baseItem.harvestSeconds = 1;
        baseItem.amount = wildTotal;
        baseItem.isUncollected = true;
        const now = Date.now();
        baseItem.plantedAt = Math.min(baseItem.plantedAt || now, now - 1000);
      }

      allItems["Mushroom"] = baseItem;
    }

    if (mushrooms.magicSpawnedAt) {
      const islandType = apiData.farm.island
        ? apiData.farm.island.type
        : "basic";
      const harvestSeconds = getMagicMushroomTimeSeconds(islandType);

      const magicItem = {
        plantedAt: mushrooms.magicSpawnedAt,
        type: "Magic Mushroom",
        name: "Magic Mushroom",
        category: "mushroom",
        amount: 0,
        harvestSeconds: harvestSeconds,
      };

      let magicTotal = 0;
      let hasMagic = false;
      for (let [, mush] of Object.entries(uncollectedMushrooms)) {
        if (mush.name === "Magic Mushroom") {
          magicTotal += mush.amount || 0;
          hasMagic = true;
        }
      }

      if (hasMagic) {
        magicItem.harvestSeconds = 1;
        magicItem.amount = magicTotal;
        magicItem.isUncollected = true;
        const now = Date.now();
        magicItem.plantedAt = Math.min(magicItem.plantedAt || now, now - 1000);
      }

      allItems["Magic Mushroom"] = magicItem;
    }
  }
}

function parseCrafting(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.crafting) return;

  if (apiData.farm && apiData.farm.craftingBox) {
    let craftingBox = apiData.farm.craftingBox;

    if (
      craftingBox.status === "crafting" &&
      craftingBox.item &&
      craftingBox.readyAt
    ) {
      let itemName = craftingBox.item.collectible || "Unknown Item";
      allItems[`Crafting: ${itemName}`] = {
        readyAt: craftingBox.readyAt,
        type: itemName,
        name: itemName,
        category: "crafting",
        amount: 1,
      };
    }
  }
}

function parseCooking(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.cooking) return;

  if (apiData.farm && apiData.farm.buildings) {
    const cookingBuildings = [
      "Fire Pit",
      "Kitchen",
      "Bakery",
      "Deli",
      "Smoothie Shack",
    ];

    for (let buildingType of cookingBuildings) {
      if (apiData.farm.buildings[buildingType]) {
        for (let building of apiData.farm.buildings[buildingType]) {
          if (building.crafting) {
            for (let craft of building.crafting) {
              if (craft.readyAt && craft.name) {
                let cookingName = `${craft.name} (${COOKING_BUILDINGS[buildingType] || buildingType})`;
                allItems[cookingName] = {
                  readyAt: craft.readyAt,
                  type: craft.name,
                  name: craft.name,
                  category: "cooking",
                  amount: craft.amount || 1,
                };
              }
            }
          }
        }
      }
    }
  }
}

function parseComposters(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.composter) return;

  if (apiData.farm && apiData.farm.buildings) {
    const composterTypes = [
      "Premium Composter",
      "Turbo Composter",
      "Compost Bin",
    ];

    for (let composterType of composterTypes) {
      if (apiData.farm.buildings[composterType]) {
        for (let composter of apiData.farm.buildings[composterType]) {
          if (composter.producing && composter.producing.readyAt) {
            let producing = composter.producing;
            let itemsDesc = Object.entries(producing.items || {})
              .map(([item, amount]) => `${amount} ${item}`)
              .join(", ");

            let composterName = `${composterType}: ${itemsDesc}`;
            allItems[composterName] = {
              readyAt: producing.readyAt,
              type: composterType,
              name: composterType,
              category: "composter",
              amount: Object.values(producing.items || {}).reduce(
                (a, b) => a + b,
                0,
              ),
            };
          }
        }
      }
    }
  }
}

function parseFishMarket(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.cooking) return;

  if (
    apiData.farm &&
    apiData.farm.buildings &&
    apiData.farm.buildings["Fish Market"]
  ) {
    for (let building of apiData.farm.buildings["Fish Market"]) {
      if (building.processing) {
        for (let item of building.processing) {
          if (item.readyAt && item.name) {
            let itemName = `${item.name} (${COOKING_BUILDINGS["Fish Market"] || "Fish Market"})`;
            allItems[itemName] = {
              readyAt: item.readyAt,
              type: item.name,
              name: item.name,
              category: "cooking",
              amount: 1,
            };
          }
        }
      }
    }
  }
}

function parsePowers(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.power) return;
  const hasLunasCrescent =
    apiData.farm &&
    apiData.farm.wardrobe &&
    apiData.farm.wardrobe["Luna's Crescent"] > 0;
  if (
    apiData.farm &&
    apiData.farm.bumpkin &&
    apiData.farm.bumpkin.previousPowerUseAt
  ) {
    const powers = apiData.farm.bumpkin.previousPowerUseAt;

    for (let [powerName, lastUsedAt] of Object.entries(powers)) {
      if (POWER_COOLDOWN_TIMES[powerName]) {
        const cooldownSeconds =
          POWER_COOLDOWN_TIMES[powerName] * (hasLunasCrescent ? 0.5 : 1);
        const nextAvailableAt = lastUsedAt + cooldownSeconds * 1000;

        allItems[powerName] = {
          usedAt: lastUsedAt,
          nextAvailableAt: nextAvailableAt,
          type: powerName,
          name: powerName,
          category: "power",
          amount: 1,
        };
      }
    }
  }
}

function parseCropMachine(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.crop_machine) return;
  if (
    apiData.farm &&
    apiData.farm.buildings &&
    apiData.farm.buildings["Crop Machine"]
  ) {
    for (let machine of apiData.farm.buildings["Crop Machine"]) {
      if (machine.queue && Array.isArray(machine.queue)) {
        for (let i = 0; i < machine.queue.length; i++) {
          const entry = machine.queue[i];
          if (entry && entry.crop) {
            let readyAtMs = null;
            if (entry.readyAt) {
              readyAtMs =
                typeof entry.readyAt === "number" && entry.readyAt < 1e12
                  ? entry.readyAt * 1000
                  : entry.readyAt;
            } else if (entry.growsUntil) {
              readyAtMs = entry.growsUntil;
            }

            if (!readyAtMs) continue;

            const name =
              `${entry.crop} (Crop Machine ${machine.id || ""} #${i + 1})`.trim();
            allItems[name] = {
              readyAt: readyAtMs,
              type: entry.crop,
              name: entry.crop,
              category: "crop_machine",
              amount: entry.seeds || entry.amount || 1,
            };
          }
        }
      }
    }
  }
}

function parseCrabTraps(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.crab_trap) return;
  if (
    apiData.farm &&
    apiData.farm.crabTraps &&
    apiData.farm.crabTraps.trapSpots
  ) {
    const trapSpots = Object.values(apiData.farm.crabTraps.trapSpots);
    const activeTraps = trapSpots.filter(
      (spot) => spot.waterTrap && spot.waterTrap.readyAt,
    );

    if (activeTraps.length > 0) {
      const earliestReadyAt = Math.min(
        ...activeTraps.map((spot) => spot.waterTrap.readyAt),
      );

      allItems["Crab Trap"] = {
        readyAt: earliestReadyAt,
        type: "Crab Trap",
        name: "Crab Trap",
        category: "crab_trap",
        amount: activeTraps.length,
      };
    }
  }
}

function parseFloatingIsland(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.floating_island) return;
  if (apiData.farm && apiData.farm.floatingIsland) {
    const floatingIsland = apiData.farm.floatingIsland;
    const petalPuzzleSolvedAt = floatingIsland.petalPuzzleSolvedAt;
    const todayStart = getTodayStart();

    if (petalPuzzleSolvedAt && petalPuzzleSolvedAt >= todayStart) {
      return;
    }

    const schedule = floatingIsland.schedule || [];
    const now = Date.now();

    schedule.forEach((period, index) => {
      const startAt = period.startAt;
      const endAt = period.endAt;

      if (now < endAt) {
        const isActive = now >= startAt && now <= endAt;
        const shouldAdd = startAt - now > 0 || isActive;

        if (shouldAdd) {
          const remainingSeconds = isActive
            ? 0
            : Math.round((startAt - now) / 1000);
          const key = `Floating Island ${index + 1}`;
          allItems[key] = {
            startAt: startAt,
            endAt: endAt,
            remainingSeconds: remainingSeconds,
            isActive: isActive,
            type: "Floating Island",
            name: "Floating Island",
            category: "floating_island",
          };
        }
      }
    });
  }
}

function parsePets(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.pet) return;

  const pets = apiData.farm?.pets;
  if (!pets) return;

  if (pets.nfts) {
    for (const [petId, petData] of Object.entries(pets.nfts)) {
      const name = petData.name || `Pet #${petId}`;
      const pettedAt = petData.pettedAt || 0;
      const fedAt = petData.requests?.fedAt || 0;

      if (SFL_USER_CONFIG.categoryFilters.pet_caress) {
        const napFinishedAt = pettedAt + 2 * 60 * 60 * 1000;
        allItems[`${name} (caress)`] = {
          category: "pet",
          action: "caress",
          isNFT: true,
          petId: petId,
          petName: name,
          pettedAt: pettedAt,
          napFinishedAt: napFinishedAt,
        };
      }

      if (SFL_USER_CONFIG.categoryFilters.pet_feed) {
        allItems[`${name} (feed)`] = {
          category: "pet",
          action: "feed",
          isNFT: true,
          petId: petId,
          petName: name,
          fedAt: fedAt,
          neglectDays: 7,
        };
      }
    }
  }

  if (pets.common) {
    for (const [petName, petData] of Object.entries(pets.common)) {
      const pettedAt = petData.pettedAt || 0;
      const fedAt = petData.requests?.fedAt || 0;

      if (SFL_USER_CONFIG.categoryFilters.pet_caress) {
        const napFinishedAt = pettedAt + 2 * 60 * 60 * 1000;
        allItems[`${petName} (caress)`] = {
          category: "pet",
          action: "caress",
          isNFT: false,
          petName: petName,
          pettedAt: pettedAt,
          napFinishedAt: napFinishedAt,
        };
      }

      if (SFL_USER_CONFIG.categoryFilters.pet_feed) {
        allItems[`${petName} (feed)`] = {
          category: "pet",
          action: "feed",
          isNFT: false,
          petName: petName,
          fedAt: fedAt,
          neglectDays: 3,
        };
      }
    }
  }
}

function parseSeasonAndEvents(apiData, allItems) {
  if (apiData.farm && apiData.farm.season) {
    allItems["__season"] = { season: apiData.farm.season.season };
  }
  if (apiData.farm && apiData.farm.calendar && apiData.farm.calendar.dates) {
    const today = new Date().toISOString().split("T")[0];
    for (const dateObj of apiData.farm.calendar.dates) {
      if (dateObj.date === today) {
        allItems["__event"] = { event: dateObj.name };
        break;
      }
    }
  }
}

const BUD_ORDER = [
  "Plaza",
  "Woodlands",
  "Cave",
  "Sea",
  "Castle",
  "Port",
  "Retreat",
  "Saphiro",
  "Snow",
  "Beach",
];

function getDailyBudBoxType(ms) {
  const daysSinceEpoch = Math.floor(ms / (1000 * 60 * 60 * 24)) + 2;
  const index = daysSinceEpoch % BUD_ORDER.length;
  return BUD_ORDER[index];
}

function parseBuds(apiData, allItems) {
  if (apiData.farm && apiData.farm.buds) {
    const playerBudTypes = [];
    for (let [, budInfo] of Object.entries(apiData.farm.buds)) {
      if (budInfo && budInfo.type) {
        playerBudTypes.push(budInfo.type);
      }
    }
    allItems.__playerBudTypes = playerBudTypes;
  }
}

function parseBudBox(apiData, allItems) {
  if (!SFL_USER_CONFIG.categoryFilters.bud_box) return;
  if (!(apiData.farm && apiData.farm.pumpkinPlaza)) return;

  const openedAt =
    apiData.farm.pumpkinPlaza.budBox &&
    apiData.farm.pumpkinPlaza.budBox.openedAt
      ? apiData.farm.pumpkinPlaza.budBox.openedAt
      : 0;
  const todayType = getDailyBudBoxType(Date.now());
  const playerBudTypes = allItems.__playerBudTypes || [];

  if (playerBudTypes.includes(todayType)) {
    const itemName = `Bud Box: ${todayType}`;
    checkDailyReset(allItems, itemName, openedAt ? openedAt : null);

    if (allItems[itemName] && allItems[itemName].isCollected === false) {
      allItems[itemName].type = "Bud Box";
      allItems[itemName].category = "bud_box";
      allItems[itemName].hasBud = true;
    } else {
      delete allItems[itemName];
    }
  }

  const tomorrowMs = Date.now() + 24 * 60 * 60 * 1000;
  const tomorrowType = getDailyBudBoxType(tomorrowMs);

  if (playerBudTypes.includes(tomorrowType)) {
    const tomorrowItemName = `Bud Box: ${tomorrowType}`;
    const nextResetAt = getNextDailyReset();

    allItems[tomorrowItemName] = {
      nextResetAt: nextResetAt,
      category: "bud_box",
      type: "Bud Box",
      name: tomorrowItemName,
      isCollected: true, 
      amount: 0,
      hasBud: true,
    };
  }
}

async function loadFromAPI() {
  const API_RATE_LIMIT_SECONDS = 15;
  const CACHE_EXPIRATION_MINUTES = 600;

  try {
    const cacheTimestamp = safeKeychain("get", CACHE_TIMESTAMP_KEY);
    const currentTime = Date.now();
    const lastApiCallTime = safeKeychain("get", LAST_API_CALL_KEY);

    if (lastApiCallTime) {
      const elapsedSeconds = (currentTime - parseInt(lastApiCallTime)) / 1000;
      if (elapsedSeconds < API_RATE_LIMIT_SECONDS) {
        const cachedData = safeKeychain("get", CACHE_KEY);
        if (cachedData) {
          const parsedData = safeJSONParse(cachedData, "Cache");
          if (parsedData) {
            saveResources(parsedData);
            console.log("ℹ️ Rate-limit: serving cached data");
            return parsedData;
          }
        }
        console.log("ℹ️ Rate-limit: no cache found, using stored resources");
        return loadResources();
      }
    }

    if (cacheTimestamp) {
      const cacheAgeMinutes =
        (currentTime - parseInt(cacheTimestamp)) / 1000 / 60;
      if (cacheAgeMinutes >= CACHE_EXPIRATION_MINUTES) {
        logInfo(
          "Cache",
          `Expired (age ${cacheAgeMinutes.toFixed(1)} min), forcing API refresh`,
        );
      }
    }

    if (!SFL_USER_CONFIG.API_KEY || SFL_USER_CONFIG.API_KEY === "__API_KEY__") {
      throw new Error(
        "API Key not configured. Please set your API Key in the configuration. Get it from: Game -> Settings -> General -> API Key",
      );
    }

    let request = new Request(
      `https://api.sunflower-land.com/community/farms/${SFL_USER_CONFIG.FARM_ID}`,
    );
    request.timeoutInterval = 3;
    request.headers = {
      "x-api-key": SFL_USER_CONFIG.API_KEY,
    };
    let apiData = await request.loadJSON();

    safeKeychain("set", "RAW_API_CACHE_KEY", JSON.stringify(apiData, null, 2));

    safeKeychain("set", LAST_API_CALL_KEY, currentTime.toString());

    let allItems = {};

    parseResources(apiData, allItems);
    parseLavaPits(apiData, allItems);

    parseCrops(apiData, allItems);
    parseFruits(apiData, allItems);
    parseFlowers(apiData, allItems);
    parseGreenhouse(apiData, allItems);
    parseMushrooms(apiData, allItems);

    parseAnimals(apiData, allItems);
    parseBeehives(apiData, allItems);
    parsePets(apiData, allItems);

    parseCrafting(apiData, allItems);
    parseCooking(apiData, allItems);
    parseFishMarket(apiData, allItems);
    parseComposters(apiData, allItems);
    parseCropMachine(apiData, allItems);
    parseCrabTraps(apiData, allItems);
    parsePowers(apiData, allItems);

    parseFloatingIsland(apiData, allItems);
    parseDailyCollectibles(apiData, allItems);
    parseBuds(apiData, allItems);
    parseBudBox(apiData, allItems);
    parseSeasonAndEvents(apiData, allItems);

    allItems["__socialProjects"] =
      apiData.farm?.socialFarming?.villageProjects || {};

    allItems["__trades"] = apiData.farm?.trades || {};

    const sickAnimals = {};
    if (apiData.farm?.barn?.animals) {
      sickAnimals.barn = apiData.farm.barn.animals;
    }
    if (apiData.farm?.henHouse?.animals) {
      sickAnimals.henHouse = apiData.farm.henHouse.animals;
    }
    allItems["__sickAnimals"] = sickAnimals;

    const updateInfo = await checkForUpdates();
    if (updateInfo.updateAvailable) {
      allItems["update_available"] = {
        message: updateInfo.message,
        category: "update",
        type: "Update Available",
        name: "Update Available",
        amount: 0,
      };
    }

    saveResources(allItems);
    console.log(`✅ ${Object.keys(allItems).length} items loaded from API`);

    safeKeychain("set", CACHE_KEY, JSON.stringify(allItems));
    safeKeychain("set", CACHE_TIMESTAMP_KEY, currentTime.toString());
    safeKeychain("set", "LAST_SUCCESSFUL_API_UPDATE", currentTime.toString());

    return allItems;
  } catch (error) {
    logError("API", "Sunflower Land API call failed", error.message || error);
    console.log("ℹ️ Fallback: Using cached data");

    let cachedData;
    cachedData = safeKeychain("get", CACHE_KEY);

    if (cachedData) {
      const fallbackData = safeJSONParse(cachedData, "Cache Fallback");
      if (fallbackData) {
        console.log("ℹ️ Fallback: Using cached data after API error");
        saveResources(fallbackData);
        return fallbackData;
      } else {
        logWarning("Cache", "Failed to parse cached fallback data");
      }
    }

    console.log("ℹ️ Fallback: Using demo data as final fallback");
    return loadResources();
  }
}

function handleNotificationError(operation, identifier, error) {
  logError(
    "Notifications",
    `Failed to ${operation} notification '${identifier}'`,
    error.message || error,
  );
}

async function cleanupAllSFLNotifications() {
  let pendingNotifications = await Notification.allPending();
  let removedCount = 0;

  for (let notification of pendingNotifications) {
    if (notification.identifier && notification.identifier.startsWith("sfl_")) {
      try {
        await notification.remove();
        removedCount++;
      } catch (error) {
        logError(
          "Notifications",
          `Failed to remove notification '${notification.identifier}'`,
          error.message || error,
        );
      }
    }
  }

  console.log(`🧹 Cleaned up ${removedCount} existing SFL notifications`);
  return removedCount;
}

function getUpcomingItems(allItems) {
  return processItems(allItems, {
    mode: "notifications",
    currentTime: Date.now(),
    lookaheadHours: NOTIFICATION_LOOKAHEAD_HOURS,
  });
}

function groupNotificationsByTime(upcomingItems) {
  return groupByReadyTimeWindow(upcomingItems, GROUPING_TOLERANCE_MINUTES);
}

async function createGroupNotifications(groups, existingNotificationIds) {
  let newNotificationsCount = 0;
  let currentUpcomingIds = new Set();

  for (let group of groups) {
    let groupId = `sfl_group_${Math.floor(group.referenceTime / 1000)}`;
    currentUpcomingIds.add(groupId);

    if (!existingNotificationIds.has(groupId)) {
      let uniqueItemsMap = new Map();

      for (let item of group.items) {
        let groupKey = item.name;

        if (item.category === "pet" && item.action) {
          groupKey = item.action === "feed" ? "Pet_feed" : "Pet_caress";
        }

        if (uniqueItemsMap.has(groupKey)) {
          let existing = uniqueItemsMap.get(groupKey);
          const itemCount = item.count || 1;
          existing.count = (existing.count || 0) + itemCount;
          existing.totalAmount += item.totalAmount || 0;

          if (item.isNFT && !existing.isNFT) {
            existing.isNFT = true;
            existing.emoji = "🐶";
          }

          if (item.hasReward && !existing.hasReward) {
            existing.hasReward = true;
          }
          if (item.hasSwarm && !existing.hasSwarm) {
            existing.hasSwarm = true;
          }
        } else {
          const petActionLabel =
            item.category === "pet"
              ? item.action === "feed"
                ? " 🍖"
                : " 💕"
              : "";
          const itemCount = item.count || 1;
          uniqueItemsMap.set(groupKey, {
            name: item.category === "pet" ? `Pet${petActionLabel}` : item.name,
            emoji: item.emoji,
            totalAmount: item.totalAmount || 0,
            hasReward: item.hasReward || false,
            hasSwarm: item.hasSwarm || false,
            count: itemCount,
            category: item.category,
            isNFT: item.isNFT || false,
          });
        }
      }

      let notificationBody = createNotificationBody(uniqueItemsMap, group);

      let notification = new Notification();
      notification.identifier = groupId;
      notification.title = "🌸 Wake up, Bumpkin!";
      notification.body = notificationBody;
      notification.sound = "default";

      notification.setTriggerDate(new Date(group.referenceTime));

      try {
        await notification.schedule();
        newNotificationsCount++;
      } catch (error) {
        handleNotificationError("schedule", groupId, error);
      }
    }
  }

  return { newNotificationsCount, currentUpcomingIds };
}

function createNotificationBody(uniqueItemsMap, group) {
  if (uniqueItemsMap.size === 1) {
    let item = Array.from(uniqueItemsMap.values())[0];
    let count = item.count || group.items.length;
    let countText = count > 1 ? ` x${count}` : "";
    let totalText = "";

    let specialIndicators = "";
    if (item.hasReward) specialIndicators += " 🎁";
    if (item.hasSwarm) specialIndicators += " 🐝";

    return `${item.name} is ready ${item.emoji}${countText}${totalText}${specialIndicators}`;
  } else {
    let itemSummaries = Array.from(uniqueItemsMap.entries()).map(([, item]) => {
      let itemCount = item.count || 1;
      let countText = itemCount > 1 ? ` x${itemCount}` : "";
      let totalText = "";

      let specialIndicators = "";
      if (item.hasReward) specialIndicators += " 🎁";
      if (item.hasSwarm) specialIndicators += " 🐝";

      return `${item.name}${countText}${totalText} ${item.emoji}${specialIndicators}`;
    });
    return itemSummaries.join(", ");
  }
}

async function cleanupObsoleteNotifications(
  pendingNotifications,
  currentUpcomingIds,
) {
  let removedNotificationsCount = 0;

  for (let notification of pendingNotifications) {
    if (
      notification.identifier &&
      notification.identifier.startsWith("sfl_group_")
    ) {
      if (!currentUpcomingIds.has(notification.identifier)) {
        try {
          await notification.remove();
          removedNotificationsCount++;
        } catch (error) {
          handleNotificationError("remove", notification.identifier, error);
        }
      }
    }
  }

  return removedNotificationsCount;
}

async function manageNotifications() {
  let allItems = loadResources();
  let pendingNotifications = await Notification.allPending();
  let existingNotificationIds = new Set(
    pendingNotifications.map((n) => n.identifier),
  );

  let upcomingItems = getUpcomingItems(allItems);

  let groups = groupNotificationsByTime(upcomingItems);

  let { newNotificationsCount, currentUpcomingIds } =
    await createGroupNotifications(groups, existingNotificationIds);

  let removedNotificationsCount = await cleanupObsoleteNotifications(
    pendingNotifications,
    currentUpcomingIds,
  );

  let sickAnimalResult = await notifySickAnimals(allItems);
  let tradesResult = await notifyCompletedTrades(allItems);
  let socialProjectsResult = await notifySocialProjectLimits(allItems);

  let powerResult = await notifyPowerWarning(allItems, existingNotificationIds);
  let petNeglectResult = await notifyPetNeglectWarning(
    allItems,
    existingNotificationIds,
  );

  console.log(
    `🔔 Smart notification summary: ${newNotificationsCount} new groups, ${removedNotificationsCount} removed, ${groups.length} total groups`,
  );
  if (sickAnimalResult.triggered) {
    console.log(
      `   + Sick animal alert: ${sickAnimalResult.count} animal(s) sick`,
    );
  }
  if (tradesResult.triggered) {
    console.log(`   + Trades completed: ${tradesResult.count} trade(s)`);
  }
  if (socialProjectsResult.triggered) {
    console.log(
      `   + Social projects: ${socialProjectsResult.count} project(s) at limit`,
    );
  }
  if (powerResult.scheduled > 0) {
    console.log(
      `   + Power warnings scheduled: ${powerResult.scheduled} source(s)`,
    );
  }
  if (powerResult.cleaned > 0) {
    console.log(`   + Power warnings cleaned: ${powerResult.cleaned}`);
  }
  if (petNeglectResult.scheduled > 0) {
    console.log(
      `   + Pet neglect warnings scheduled: ${petNeglectResult.scheduled} pet(s)`,
    );
  }
  if (petNeglectResult.cleaned > 0) {
    console.log(
      `   + Pet neglect warnings cleaned: ${petNeglectResult.cleaned}`,
    );
  }

  return {
    scheduled: newNotificationsCount,
    removed: removedNotificationsCount,
    upcoming: groups.length,
    sickAnimals: sickAnimalResult,
    trades: tradesResult,
    socialProjects: socialProjectsResult,
    power: powerResult,
    petNeglect: petNeglectResult,
  };
}

async function notifySickAnimals(allItems) {
  if (
    !SFL_USER_CONFIG.enableNotifications ||
    !SFL_USER_CONFIG.categoryFilters.sick_animal
  ) {
    return { triggered: false };
  }

  try {
    const newlySick = detectNewlySickAnimals(allItems);

    if (newlySick.length === 0) {
      return { triggered: false };
    }

    const animalTypes = newlySick.map((a) => a.type).join(", ");
    const count = newlySick.length;
    const title = `🤢 Animal Sick!`;
    const body = `${count} ${animalTypes}`;

    let notification = await new Notification();
    notification.title = title;
    notification.body = body;
    notification.identifier = `sfl_sick_animal_${Date.now()}`;
    await notification.schedule();

    logInfo("SickAnimalNotif", `Notified: ${body}`);
    return { triggered: true, count: count };
  } catch (error) {
    handleNotificationError("schedule", "sick_animal", error);
    return { triggered: false, error: error.message };
  }
}

async function notifyCompletedTrades(allItems) {
  if (
    !SFL_USER_CONFIG.enableNotifications ||
    !SFL_USER_CONFIG.categoryFilters.trades
  ) {
    return { triggered: false };
  }

  try {
    const newlyCompleted = detectNewlyCompletedTrades(allItems);

    if (newlyCompleted.length === 0) {
      return { triggered: false };
    }

    const count = newlyCompleted.length;
    const title = `💰 Deal Completed!`;
    const body = `${count} ${count === 1 ? "deal is" : "deals are"} completed`;

    let notification = await new Notification();
    notification.title = title;
    notification.body = body;
    notification.identifier = `sfl_trade_${Date.now()}`;
    await notification.schedule();

    logInfo("TradesNotif", `Notified: ${body}`);
    return { triggered: true, count: count };
  } catch (error) {
    handleNotificationError("schedule", "trades", error);
    return { triggered: false, error: error.message };
  }
}

async function notifySocialProjectLimits(allItems) {
  if (
    !SFL_USER_CONFIG.enableNotifications ||
    !SFL_USER_CONFIG.categoryFilters.social_projects
  ) {
    return { triggered: false };
  }

  try {
    const newlyLimited = detectNewSocialProjectLimits(allItems);

    if (newlyLimited.length === 0) {
      return { triggered: false };
    }

    const projectNames = newlyLimited.map((p) => p.name).join(", ");
    const count = newlyLimited.length;
    const title = `👷 Social Project Completed!`;
    const body = `${count} ${projectNames}`;

    let notification = await new Notification();
    notification.title = title;
    notification.body = body;
    notification.identifier = `sfl_social_project_${Date.now()}`;
    await notification.schedule();

    logInfo("SocialProjectsNotif", `Notified: ${body}`);
    return { triggered: true, count: count };
  } catch (error) {
    handleNotificationError("schedule", "social_projects", error);
    return { triggered: false, error: error.message };
  }
}

async function notifyPowerWarning(allItems, existingNotificationIds) {
  if (
    !SFL_USER_CONFIG.enableNotifications ||
    !SFL_USER_CONFIG.categoryFilters.power_notification
  ) {
    return { scheduled: 0, cleaned: 0 };
  }

  try {
    let scheduledCount = 0;
    let cleanedCount = 0;

    const now = Date.now();
    for (const [itemName, itemData] of Object.entries(allItems)) {
      if (
        !itemData ||
        itemData.category !== "power" ||
        !itemData.nextAvailableAt ||
        itemName === "Tree Blitz"
      ) {
        continue;
      }
      const nextAvailableAtMs = normalizeTs(itemData.nextAvailableAt);
      const timeRemainingMs = nextAvailableAtMs - now;
      if (
        timeRemainingMs <= EIGHT_HOURS_MS ||
        timeRemainingMs >= TEN_HOURS_MS
      ) {
        continue;
      }
      const notifId = `sfl_power_${itemName}`;
      const fireDate = new Date(nextAvailableAtMs - EIGHT_HOURS_MS);

      if (fireDate.getTime() <= now) {
        continue;
      }

      if (!existingNotificationIds.has(notifId)) {
        let notification = new Notification();
        notification.identifier = notifId;
        notification.title = `⚡ Soon!`;
        notification.body = `${itemName} in <8h`;
        notification.sound = "default";
        notification.setTriggerDate(fireDate);

        try {
          await notification.schedule();
          scheduledCount++;
          logInfo(
            "PowerNotif",
            `Scheduled: ${itemName} at ${fireDate.toLocaleTimeString()}`,
          );
        } catch (error) {
          handleNotificationError("schedule", notifId, error);
        }
      }
    }

    const pendingNotifications = await Notification.allPending();
    for (let notif of pendingNotifications) {
      if (notif.identifier && notif.identifier.startsWith("sfl_power_")) {
        const itemName = notif.identifier.replace("sfl_power_", "");
        const triggerDate = notif.nextTriggerDate;
        const isInPast = triggerDate && triggerDate.getTime() < now;

        const powerExists =
          allItems[itemName] && allItems[itemName].category === "power";
        if (isInPast || !powerExists) {
          try {
            await notif.remove();
            cleanedCount++;
            logInfo(
              "PowerNotif",
              `Cleaned up: ${itemName} (${isInPast ? "past" : "no longer exists"})`,
            );
          } catch (error) {
            logWarning(
              "PowerNotif",
              `Failed to clean ${itemName}: ${error.message}`,
            );
          }
        }
      }
    }

    return { scheduled: scheduledCount, cleaned: cleanedCount };
  } catch (error) {
    handleNotificationError("schedule", "power_notification", error);
    return { scheduled: 0, cleaned: 0 };
  }
}

async function notifyPetNeglectWarning(allItems, existingNotificationIds) {
  if (
    !SFL_USER_CONFIG.enableNotifications ||
    !SFL_USER_CONFIG.categoryFilters.pet_neglect
  ) {
    return { scheduled: 0, cleaned: 0 };
  }

  try {
    const neglectPets = getCurrentPetNeglectSnapshot(allItems);
    let scheduledCount = 0;
    let cleanedCount = 0;

    for (const [petId, petData] of Object.entries(neglectPets)) {
      const notifId = `sfl_pet_neglect_${petId}`;
      const fireDate = new Date(petData.fireDate); 

      if (!existingNotificationIds.has(notifId)) {
        let notification = new Notification();
        notification.identifier = notifId;
        notification.title = `💀 Pet Neglect!`;
        notification.body = `${petData.name} neglected in <8h`;
        notification.sound = "default";
        notification.setTriggerDate(fireDate);

        try {
          await notification.schedule();
          scheduledCount++;
          logInfo(
            "PetNeglectNotif",
            `Scheduled: ${petData.name} at ${fireDate.toLocaleTimeString()}`,
          );
        } catch (error) {
          handleNotificationError("schedule", notifId, error);
        }
      }
    }

    const pendingNotifications = await Notification.allPending();
    const now = Date.now();
    for (let notif of pendingNotifications) {
      if (notif.identifier && notif.identifier.startsWith("sfl_pet_neglect_")) {
        const petId = notif.identifier.replace("sfl_pet_neglect_", "");
        const triggerDate = notif.nextTriggerDate;
        const isInPast = triggerDate && triggerDate.getTime() < now;

        const petStillAtRisk = neglectPets[petId] !== undefined;

        if (isInPast || !petStillAtRisk) {
          try {
            await notif.remove();
            cleanedCount++;
            logInfo(
              "PetNeglectNotif",
              `Cleaned up: ${petId} (${isInPast ? "past" : "no longer at risk"})`,
            );
          } catch (error) {
            logWarning(
              "PetNeglectNotif",
              `Failed to clean ${petId}: ${error.message}`,
            );
          }
        }
      }
    }

    return { scheduled: scheduledCount, cleaned: cleanedCount };
  } catch (error) {
    handleNotificationError("schedule", "pet_neglect", error);
    return { scheduled: 0, cleaned: 0 };
  }
}

const DEBUG_WIDGET = false; 

function getThemeColors(themeMode) {
  const isDarkMode = themeMode === "light" ? false : true;

  return {
    BG_COLOR: isDarkMode ? new Color("#1C1C1E") : new Color("#f2f2f7"),
    ALT_BG_COLOR: isDarkMode ? new Color("#252525") : new Color("#e5e5ea"),
    TEXT_COLOR: isDarkMode ? new Color("#E5E5E7") : Color.black(),
    INFO_COLOR: isDarkMode ? new Color("#0A84FF") : new Color("#007AFF"),
    BOTTOM_TEXT_COLOR: isDarkMode ? new Color("#E5E5E7") : Color.black(),
    isDarkMode: isDarkMode,
  };
}

function groupItemsByTime(allItems) {
  const processedItems = processItems(allItems, {
    mode: "widget",
    currentTime: Date.now(),
  });

  let groupedItems = {};

  for (const item of processedItems) {
    if (item.emoji === "💖") {
      addToAnimalGroup(
        groupedItems,
        item.name,
        item,
        item.remainingSeconds,
        true,
      );
    } else if (item.isPetFeed || item.isPetCaress) {
      addToPetGroup(groupedItems, item.name, item, item.remainingSeconds);
    } else {
      addToGenericGroup(groupedItems, item.name, item, item.remainingSeconds);
    }
  }

  return groupedItems;
}

function sortAndFilterGroups(groupedItems) {
  if (Object.keys(groupedItems).length === 0) {
    return [];
  }

  const sortedGroups = Object.values(groupedItems).sort((a, b) => {
    if (a.isReady && !b.isReady) return -1;
    if (!a.isReady && b.isReady) return 1;
    return a.remainingTime - b.remainingTime;
  });

  let filteredGroups = sortedGroups;

  filteredGroups = sortedGroups.filter((group) => {
    if (group.remainingTime <= 0) {
      let readyForSeconds = Math.abs(group.remainingTime);
      let readyForDays = readyForSeconds / SECONDS_PER_DAY;
      return readyForDays < 7;
    }
    return true;
  });

  if (config.widgetFamily === "large") {
    const overdueItems = filteredGroups.filter((group) => {
      if (group.remainingTime <= 0) {
        let readyForSeconds = Math.abs(group.remainingTime);
        let readyForDays = readyForSeconds / SECONDS_PER_DAY;
        return readyForDays >= 1;
      }
      return false;
    });

    const nonOverdueItems = filteredGroups.filter((group) => {
      if (group.remainingTime <= 0) {
        let readyForSeconds = Math.abs(group.remainingTime);
        let readyForDays = readyForSeconds / SECONDS_PER_DAY;
        return readyForDays < 1;
      }
      return group.remainingTime > 0;
    });

    const sortedOverdueItems = overdueItems.sort((a, b) => {
      return Math.abs(a.remainingTime) - Math.abs(b.remainingTime);
    });

    const limitedOverdueItems = sortedOverdueItems.slice(0, 2);

    filteredGroups = [...limitedOverdueItems, ...nonOverdueItems];

    filteredGroups.sort((a, b) => {
      if (a.isReady && !b.isReady) return -1;
      if (!a.isReady && b.isReady) return 1;
      return a.remainingTime - b.remainingTime;
    });
  } else if (
    config.widgetFamily === "small" ||
    config.widgetFamily === "medium"
  ) {
    filteredGroups = filteredGroups.filter((group) => {
      if (group.remainingTime <= 0) {
        let readyForSeconds = Math.abs(group.remainingTime);
        let readyForDays = readyForSeconds / SECONDS_PER_DAY;
        return readyForDays < 1;
      }
      return true;
    });
  }

  const maxItems = WIDGET_LIMITS[config.widgetFamily] || WIDGET_LIMITS.medium;
  return filteredGroups.slice(0, maxItems);
}

function renderWidgetRows(widget, displayedGroups, themeColors) {
  const isDarkMode = themeColors.isDarkMode;
  let rowIndex = 0;

  for (let group of displayedGroups) {
    const emoji = getItemEmoji(group.type, group.category, group);
    let itemName = group.type;

    if (group.category === "update" && group.message) {
      itemName = group.message;
    }

    if (group.category === "bud_box") {
      itemName = "Bud Box";
    }

    let petActionEmoji = "";
    if (group.category === "pet") {
      const match = itemName.match(/(.*?)\s*(💕|🍖)$/);
      if (match) {
        itemName = match[1].trim();
        petActionEmoji = match[2];
      }
    }

    let indicators = "";
    if (group.isLoveTime) {
      indicators += "💖";
    }
    if (group.hasReward) {
      indicators += "🎁";
    }
    if (group.category === "beehive" && group.hasSwarm) {
      indicators += "🐝";
    }

    if (indicators.length > 0) {
      let maxNameLength;
      switch (config.widgetFamily) {
        case "small":
          maxNameLength = 10;
          break;
        case "medium":
          maxNameLength = 18;
          break;
        case "large":
          maxNameLength = 18;
          break;
        default:
          maxNameLength = 18;
      }

      if (itemName.length > maxNameLength) {
        itemName = itemName.substring(0, maxNameLength - 2) + "..";
      }
    }

    const finalItemName = itemName;

    const quantity = `x${group.count}`;
    const totalText = "";

    let timeStatus = formatTime(group.remainingTime, config.widgetFamily);

    if (group.category === "update") {
      timeStatus = "Now";
    }

    let fontSize = FONT_SIZES[config.widgetFamily] || FONT_SIZES.medium;
    let emojiSize = EMOJI_SIZES[config.widgetFamily] || EMOJI_SIZES.medium;

    let rowStack = widget.addStack();
    rowStack.layoutHorizontally();
    rowStack.spacing = 0;

    rowStack.setPadding(1, 0, 1, 0);

    rowStack.backgroundColor =
      rowIndex % 2 === 0 ? themeColors.ALT_BG_COLOR : themeColors.BG_COLOR;

    rowStack.addSpacer(15);

    let col1Stack = rowStack.addStack();
    if (config.widgetFamily === "small") {
      col1Stack.size = new Size(COLUMN_WIDTHS.small, 14);
    } else {
      col1Stack.size = new Size(COLUMN_WIDTHS.item, 14);
    }
    col1Stack.layoutHorizontally();

    let emojiStack = col1Stack.addStack();
    emojiStack.setPadding(1, 0, 0, 0);
    let emojiText = emojiStack.addText(`${emoji} `);
    emojiText.font = Font.mediumMonospacedSystemFont(emojiSize);
    emojiText.lineLimit = 1;

    let col1Text = col1Stack.addText(finalItemName);
    col1Text.font = Font.mediumMonospacedSystemFont(fontSize);
    col1Text.lineLimit = 1;

    let petActionEmojiText = null;
    if (petActionEmoji) {
      let petActionStack = col1Stack.addStack();
      petActionStack.setPadding(1, 0, 0, 0);
      petActionEmojiText = petActionStack.addText(` ${petActionEmoji}`);
      petActionEmojiText.font = Font.systemFont(8);
      petActionEmojiText.lineLimit = 1;
    }

    let indicatorText = null;
    if (indicators.length > 0) {
      let indicatorStack = col1Stack.addStack();
      indicatorStack.setPadding(1, 0, 0, 0);
      indicatorText = indicatorStack.addText(` ${indicators}`);
      indicatorText.font = Font.systemFont(8);
      indicatorText.lineLimit = 1;
    }

    col1Stack.addSpacer();

    let col2Text;

    if (config.widgetFamily !== "small") {
      rowStack.addSpacer(5);

      let col2Stack = rowStack.addStack();
      col2Stack.size = new Size(60, 14);
      col2Text = col2Stack.addText(`${quantity}${totalText}`);
      col2Text.font = Font.mediumMonospacedSystemFont(fontSize);
      col2Text.centerAlignText();
      col2Text.lineLimit = 1;

      rowStack.addSpacer(5);
    } else {
      rowStack.addSpacer(0);
    }

    let col3Stack = rowStack.addStack();
    col3Stack.layoutHorizontally();

    let col3Width;
    switch (config.widgetFamily) {
      case "small":
        col3Width = 55;
        break;
      case "medium":
        col3Width = 90;
        break;
      case "large":
        col3Width = 90;
        break;
      default:
        col3Width = 90;
    }
    col3Stack.size = new Size(col3Width, 14);

    let col3Text = col3Stack.addText(timeStatus);
    col3Text.font = Font.mediumMonospacedSystemFont(fontSize);
    col3Text.lineLimit = 1;

    rowStack.addSpacer();

    rowStack.addSpacer(5);

    emojiText.textColor = themeColors.TEXT_COLOR;
    col1Text.textColor = themeColors.TEXT_COLOR;

    if (petActionEmojiText) {
      petActionEmojiText.textColor = themeColors.TEXT_COLOR;
    }

    if (indicatorText) {
      indicatorText.textColor = themeColors.TEXT_COLOR;
    }

    if (config.widgetFamily !== "small" && col2Text) {
      col2Text.textColor = themeColors.TEXT_COLOR;
    }

    if (group.category === "update") {
      col3Text.textColor = isDarkMode
        ? new Color("#FF8C42")
        : new Color("#FF6B35");
    } else if (group.remainingTime <= 0) {
      let readyForSeconds = Math.abs(group.remainingTime);
      let readyForDays = readyForSeconds / SECONDS_PER_DAY;

      if (readyForDays >= 1) {
        col3Text.textColor = isDarkMode ? Color.red() : new Color("#CC0000");
      } else {
        col3Text.textColor = isDarkMode ? Color.green() : new Color("#008000");
      }
    } else {
      let remainingHours = group.remainingTime / SECONDS_PER_HOUR;

      if (remainingHours <= 1) {
        col3Text.textColor = isDarkMode ? Color.yellow() : new Color("#B8860B");
      } else {
        col3Text.textColor = themeColors.TEXT_COLOR;
      }
    }

    let spacing = ROW_SPACING[config.widgetFamily] || ROW_SPACING.medium;
    widget.addSpacer(spacing);

    rowIndex++;
  }
}

async function createWidget(allItems = null) {
  if (!allItems) {
    allItems = loadResources();
  }

  let season = allItems["__season"] ? allItems["__season"].season : null;
  let event = allItems["__event"] ? allItems["__event"].event : null;

  let widget = new ListWidget();

  const themeMode = SFL_USER_CONFIG.themeMode || "dark";
  const themeColors = getThemeColors(themeMode);

  if (!config.widgetFamily) {
    config.widgetFamily = "medium";
  }

  widget.backgroundColor = themeColors.BG_COLOR;
  widget.setPadding(0, 0, 0, 0); 

  let groupedItems = groupItemsByTime(allItems);

  if (Object.keys(groupedItems).length === 0) {
    let noData = widget.addText("No items tracked");
    noData.font = Font.mediumMonospacedSystemFont(12);
    noData.textColor = themeColors.TEXT_COLOR;
    noData.centerAlignText();

    widget.addSpacer(10);

    let infoText = widget.addText("Loading from API...");
    infoText.font = Font.mediumMonospacedSystemFont(10);
    infoText.textColor = themeColors.INFO_COLOR;
    infoText.centerAlignText();
  } else {
    let displayedGroups = sortAndFilterGroups(groupedItems);

    renderWidgetRows(widget, displayedGroups, themeColors);
  }

  widget.addSpacer(0);

  let showPowerIcon = shouldShowPowerIcon(allItems);
  let showPetNeglectIcon = shouldShowPetNeglectIcon(allItems);
  let showSocialProjectIcon = shouldShowSocialProjectIcon(allItems);
  let showTradesCompletedIcon = shouldShowTradesCompletedIcon(allItems);
  let showSickAnimalIcon = shouldShowSickAnimalIcon(allItems);

  if (DEBUG_WIDGET) {
    console.log("[DEBUG] allItems:", allItems);
  }

  let bottomStack = widget.addStack();
  bottomStack.layoutHorizontally();
  bottomStack.spacing = 0;
  const bottomPad = config.widgetFamily === "small" ? 6 : 8;
  bottomStack.setPadding(2, bottomPad, 2, bottomPad); 

  const BOTTOM_TEXT_COLOR = themeColors.BOTTOM_TEXT_COLOR;

  let sideWidth;
  let centerWidth;
  switch (config.widgetFamily) {
    case "small":
      sideWidth = 40; 
      centerWidth = 70;
      break;
    case "medium":
      sideWidth = 50; 
      centerWidth = 110;
      break;
    case "large":
      sideWidth = 50; 
      centerWidth = 110;
      break;
    default:
      sideWidth = 28;
      centerWidth = 90;
  }

  bottomStack.addSpacer();

  let leftStack = bottomStack.addStack();
  leftStack.layoutHorizontally();
  leftStack.size = new Size(sideWidth, 0);
  leftStack.addSpacer(); 

  if (season) {
    let seasonStack = leftStack.addStack();
    seasonStack.size = new Size(12, 12);
    seasonStack.setPadding(1, 0, 0, 0);
    let seasonText = seasonStack.addText(getSeasonEmoji(season));
    seasonText.font = Font.regularMonospacedSystemFont(9);
    seasonText.textColor = BOTTOM_TEXT_COLOR;
  }

  if (event) {
    let eventStack = leftStack.addStack();
    eventStack.size = new Size(12, 12);
    eventStack.setPadding(1, 0, 0, 0);
    let eventText = eventStack.addText(getEventEmoji(event));
    eventText.font = Font.regularMonospacedSystemFont(9);
    eventText.textColor = BOTTOM_TEXT_COLOR;
  }

  let centerStack = bottomStack.addStack();
  centerStack.layoutHorizontally();
  centerStack.size = new Size(centerWidth, 0);

  let centerPaddingLeft;
  switch (config.widgetFamily) {
    case "small":
      centerPaddingLeft = 17;
      break;
    case "medium":
      centerPaddingLeft = 35;
      break;
    case "large":
      centerPaddingLeft = 35;
      break;
    default:
      centerPaddingLeft = 35;
  }
  centerStack.setPadding(0, centerPaddingLeft, 0, 0);

  const lastUpdateTime = getLastSuccessfulUpdateTime();
  let refreshIcon = centerStack.addImage(
    SFSymbol.named("arrow.clockwise").image,
  );
  refreshIcon.imageSize = new Size(11, 11);
  refreshIcon.tintColor = BOTTOM_TEXT_COLOR;

  if (lastUpdateTime) {
    let updateDateText = centerStack.addDate(new Date(lastUpdateTime));
    updateDateText.applyTimerStyle();
    updateDateText.font = Font.regularMonospacedSystemFont(10);
    updateDateText.textColor = BOTTOM_TEXT_COLOR;
    updateDateText.lineLimit = 1;
  } else {
    let updateFallback = centerStack.addText("--");
    updateFallback.font = Font.regularMonospacedSystemFont(10);
    updateFallback.textColor = BOTTOM_TEXT_COLOR;
    updateFallback.lineLimit = 1;
  }

  let rightStack = bottomStack.addStack();
  rightStack.layoutHorizontally();
  rightStack.size = new Size(sideWidth, 0);
  rightStack.spacing = 1;

  if (showPowerIcon) {
    let powerStack = rightStack.addStack();
    powerStack.size = new Size(12, 12);
    powerStack.setPadding(1, 0, 0, 0);
    let powerIcon = powerStack.addText("⚡");
    powerIcon.font = Font.regularMonospacedSystemFont(9);
    powerIcon.textColor = new Color("#FFD700");
  }

  if (showPetNeglectIcon) {
    let neglectStack = rightStack.addStack();
    neglectStack.size = new Size(12, 12);
    neglectStack.setPadding(1, 0, 0, 0);
    let neglectIcon = neglectStack.addText("💀");
    neglectIcon.font = Font.regularMonospacedSystemFont(9);
    neglectIcon.textColor = new Color("#FF4444");
  }

  if (showSocialProjectIcon) {
    let socialStack = rightStack.addStack();
    socialStack.size = new Size(12, 12);
    socialStack.setPadding(1, 0, 0, 0);
    let socialIcon = socialStack.addText("👷");
    socialIcon.font = Font.regularMonospacedSystemFont(9);
    socialIcon.textColor = new Color("#00BFFF");
  }

  if (showTradesCompletedIcon) {
    let tradesStack = rightStack.addStack();
    tradesStack.size = new Size(12, 12);
    tradesStack.setPadding(1, 0, 0, 0);
    let tradesIcon = tradesStack.addText("💰");
    tradesIcon.font = Font.regularMonospacedSystemFont(9);
    tradesIcon.textColor = new Color("#9B59B6");
  }

  if (showSickAnimalIcon) {
    let sickAnimalStack = rightStack.addStack();
    sickAnimalStack.size = new Size(12, 12);
    sickAnimalStack.setPadding(1, 0, 0, 0);
    let sickAnimalIcon = sickAnimalStack.addText("🤢");
    sickAnimalIcon.font = Font.regularMonospacedSystemFont(9);
    sickAnimalIcon.textColor = new Color("#FF6B35");
  }

  rightStack.addSpacer(); 

  bottomStack.addSpacer();

  return widget;
}

async function main() {
  console.log("🌻 Starting Sunflower Land widget...");

  const allItems = await loadFromAPI();

  if (SFL_USER_CONFIG.enableNotifications) {
    if (!config.runsInWidget) {
      await manageNotifications();
    } else {
      let lastNotificationCheck = 0;
      const lastCheckData = safeKeychain("get", "sfl_last_notification_check");
      if (lastCheckData) {
        lastNotificationCheck = parseInt(lastCheckData) || 0;
      } else {
        logWarning(
          "Keychain",
          "Failed to get last notification check time, using default",
        );
      }

      let currentTime = Date.now();
      let timeSinceLastCheck = (currentTime - lastNotificationCheck) / 1000;

      if (timeSinceLastCheck >= NOTIFICATION_CHECK_INTERVAL_SECONDS) {
        await manageNotifications();
        safeKeychain(
          "set",
          "sfl_last_notification_check",
          currentTime.toString(),
        );
      }
    }
  } else {
    console.log("ℹ️ Notifications disabled by user configuration");
    await cleanupAllSFLNotifications();
  }

  let widget = await createWidget(allItems);

  if (config.runsInWidget) {
    Script.setWidget(widget);
  } else {
    widget.presentMedium();
  }

  console.log("✅ Widget created successfully!");
}

await main();
Script.complete();
