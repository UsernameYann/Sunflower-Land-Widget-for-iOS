// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: magic;

// ====== CONFIGURATION ======
// ⚠️ CHANGE YOUR FARM ID HERE:
const FARM_ID = "XXXXX"; // Replace with your actual farm ID

// ====== TIME CONSTANTS ======

const RESOURCE_RECOVERY_TIMES = {
    "Tree": 2 * 60 * 60, "Stone": 4 * 60 * 60, "Iron": 8 * 60 * 60,
    "Gold": 24 * 60 * 60, "Crimstone": 24 * 60 * 60, "Sunstone": 3 * 24 * 60 * 60,
    "Oil": 20 * 60 * 60
};

const CROPS_TIMES = {
    "Sunflower": { "harvestSeconds": 1 * 60 },
    "Potato": { "harvestSeconds": 5 * 60 },
    "Rhubarb": { "harvestSeconds": 10 * 60 },
    "Pumpkin": { "harvestSeconds": 30 * 60 },
    "Zucchini": { "harvestSeconds": 30 * 60 },
    "Carrot": { "harvestSeconds": 60 * 60 },
    "Yam": { "harvestSeconds": 60 * 60 },
    "Cabbage": { "harvestSeconds": 2 * 60 * 60 },
    "Broccoli": { "harvestSeconds": 2 * 60 * 60 },
    "Soybean": { "harvestSeconds": 3 * 60 * 60 },
    "Beetroot": { "harvestSeconds": 4 * 60 * 60 },
    "Pepper": { "harvestSeconds": 4 * 60 * 60 },
    "Cauliflower": { "harvestSeconds": 8 * 60 * 60 },
    "Parsnip": { "harvestSeconds": 12 * 60 * 60 },
    "Eggplant": { "harvestSeconds": 16 * 60 * 60 },
    "Corn": { "harvestSeconds": 20 * 60 * 60 },
    "Onion": { "harvestSeconds": 20 * 60 * 60 },
    "Radish": { "harvestSeconds": 24 * 60 * 60 },
    "Wheat": { "harvestSeconds": 24 * 60 * 60 },
    "Turnip": { "harvestSeconds": 24 * 60 * 60 },
    "Kale": { "harvestSeconds": 36 * 60 * 60 },
    "Artichoke": { "harvestSeconds": 36 * 60 * 60 },
    "Barley": { "harvestSeconds": 48 * 60 * 60 },
};

const FRUITS_TIMES = {
    "Tomato": { "plantSeconds": 2 * 60 * 60 },
    "Lemon": { "plantSeconds": 4 * 60 * 60 },
    "Blueberry": { "plantSeconds": 6 * 60 * 60 },
    "Orange": { "plantSeconds": 8 * 60 * 60 },
    "Apple": { "plantSeconds": 12 * 60 * 60 },
    "Banana": { "plantSeconds": 12 * 60 * 60 },
    "Celestine": { "plantSeconds": 6 * 60 * 60 },
    "Lunara": { "plantSeconds": 12 * 60 * 60 },
    "Duskberry": { "plantSeconds": 24 * 60 * 60 },
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
    "Rice": { "harvestSeconds": 32 * 60 * 60 },
    "Olive": { "harvestSeconds": 44 * 60 * 60 },
    "Grape": { "harvestSeconds": 12 * 60 * 60 },
};
const MUSHROOMS_TIMES = {
    "Mushroom": 16 * 60 * 60, 
    "Magic Mushroom": 24 * 60 * 60,
};

const CRAFTING_TIMES = {
    "Basic Bear": 5 * 60, 
    "Chef Bear": 10 * 60, 
    "Construction Bear": 15 * 60,
    "Angel Bear": 20 * 60, 
    "Badass Bear": 25 * 60, 
    "Bear Trap": 25 * 60,
    "Brilliant Bear": 30 * 60, 
    "Classy Bear": 35 * 60, 
    "Farmer Bear": 35 * 60,
    "Sunflower Bear": 35 * 60, 
    "Rich Bear": 40 * 60, 
    "Rainbow Artist Bear": 40 * 60,
    "Devil Bear": 40 * 60,
    "Valentine Bear": 45 * 60, 
    "Easter Bear": 45 * 60, 
    "Eggplant Bear": 45 * 60,
    "Genie Bear": 45 * 60, 
    "Vampire Bear": 45 * 60,
    "White Tulips": 15 * 60, 
    "Potted Sunflower": 15 * 60, 
    "Potted Potato": 20 * 60,
    "Potted Pumpkin": 25 * 60, 
    "Cactus": 20 * 60, 
    "Dirt Path": 10 * 60,
    "Bush": 15 * 60,
    "Shrub": 15 * 60, 
    "Fence": 10 * 60, 
    "Stone Fence": 15 * 60,
    "Pine Tree": 20 * 60, 
    "Field Maple": 25 * 60, 
    "Red Maple": 30 * 60,
    "Golden Maple": 35 * 60,
    "Giant Potato": 60 * 60, 
    "Giant Pumpkin": 60 * 60, 
    "Giant Cabbage": 60 * 60,
    "Giant Carrot": 60 * 60,
    "Crimson Cap": 30 * 60, 
    "Toadstool Seat": 25 * 60, 
    "Chestnut Fungi Stool": 35 * 60,
    "Mahogany Cap": 40 * 60,
    "Christmas Stocking": 30 * 60, 
    "Golden Christmas Stocking": 45 * 60,
    "Cozy Fireplace": 40 * 60, 
    "Christmas Rug": 35 * 60, 
    "Christmas Candle": 25 * 60,
    "Festive Tree": 45 * 60, 
    "Santa Penguin": 30 * 60, 
    "Penguin Pool": 40 * 60,
    "Snowman": 25 * 60, 
    "Festive Toy Train": 45 * 60,
    "Goldcrest Mosaic Rug": 45 * 60, 
    "Sandy Mosaic Rug": 45 * 60, 
    "Twilight Rug": 45 * 60,
    "Orchard Rug": 45 * 60, 
    "Carrot Rug": 45 * 60, 
    "Beetroot Rug": 45 * 60,
    "Harlequin Rug": 45 * 60, 
    "Large Rug": 45 * 60,
    "Golden Fence": 60 * 60, 
    "Golden Stone Fence": 60 * 60, 
    "Golden Pine Tree": 60 * 60,
    "Golden Tree": 60 * 60, 
    "Golden Bush": 60 * 60, 
    "Golden Cow": 90 * 60,
};

const COOKING_TIMES = {
    "Mashed Potato": 30, 
    "Pumpkin Soup": 3 * 60, 
    "Reindeer Carrot": 5 * 60,
    "Mushroom Soup": 10 * 60, 
    "Popcorn": 12 * 60, 
    "Bumpkin Broth": 20 * 60,
    "Cabbers n Mash": 40 * 60, 
    "Boiled Eggs": 60 * 60, 
    "Kale Stew": 2 * 60 * 60,
    "Kale Omelette": 3.5 * 60 * 60, 
    "Gumbo": 4 * 60 * 60,
    "Sunflower Crunch": 10 * 60, 
    "Mushroom Jacket Potatoes": 10 * 60,
    "Fruit Salad": 30 * 60, 
    "Pancakes": 60 * 60, 
    "Roast Veggies": 2 * 60 * 60,
    "Club Sandwich": 3 * 60 * 60, 
    "Bumpkin Salad": 3.5 * 60 * 60,
    "Bumpkin ganoush": 5 * 60 * 60, 
    "Goblin's Treat": 6 * 60 * 60,
    "Apple Pie": 4 * 60 * 60, 
    "Orange Cake": 4 * 60 * 60, 
    "Kale & Mushroom Pie": 4 * 60 * 60,
    "Sunflower Cake": 6.5 * 60 * 60, 
    "Honey Cake": 8 * 60 * 60, 
    "Potato Cake": 10.5 * 60 * 60,
    "Blueberry Jam": 12 * 60 * 60, 
    "Fermented Carrots": 24 * 60 * 60,
    "Sauerkraut": 24 * 60 * 60, 
    "Cheese": 20 * 60, 
    "Blue Cheese": 3 * 60 * 60,
    "Purple Smoothie": 30 * 60, 
    "Orange Juice": 45 * 60, 
    "Apple Juice": 60 * 60,
    "Power Smoothie": 1.5 * 60 * 60, 
    "Bumpkin Detox": 2 * 60 * 60, 
    "Banana Blast": 3 * 60 * 60,
    "Rapid Roast": 10, 
    "Fried Tofu": 90 * 60, 
    "Rice Bun": 300 * 60, 
    "Antipasto": 180 * 60,
    "Pizza Margherita": 20 * 60 * 60, 
    "Rhubarb Tart": 60, 
    "Chowder": 60 * 60 * 8,
    "Bumpkin Roast": 60 * 60 * 12, 
    "Goblin Brunch": 60 * 60 * 12, 
    "Beetroot Blaze": 30,
    "Steamed Red Rice": 4 * 60 * 60, 
    "Tofu Scramble": 3 * 60 * 60, 
    "Fried Calamari": 5 * 60 * 60,
    "Fish Burger": 2 * 60 * 60, 
    "Fish Omelette": 5 * 60 * 60, 
    "Ocean's Olive": 2 * 60 * 60,
    "Seafood Basket": 5 * 60 * 60, 
    "Fish n Chips": 4 * 60 * 60, 
    "Sushi Roll": 60 * 60,
    "Caprese Salad": 3 * 60 * 60, 
    "Spaghetti al Limone": 15 * 60 * 60, 
    "Pumpkin Cake": 60 * 60 * 10.5,
    "Cornbread": 60 * 60 * 12, 
    "Carrot Cake": 60 * 60 * 13, 
    "Cabbage Cake": 60 * 60 * 15,
    "Beetroot Cake": 60 * 60 * 22, 
    "Cauliflower Cake": 60 * 60 * 22, 
    "Parsnip Cake": 60 * 60 * 24,
    "Eggplant Cake": 60 * 60 * 24, 
    "Radish Cake": 60 * 60 * 24, 
    "Wheat Cake": 60 * 60 * 24,
    "Lemon Cheesecake": 30 * 60 * 60, 
    "Fancy Fries": 60 * 60 * 24, 
    "Fermented Fish": 60 * 60 * 24,
    "Shroom Syrup": 10, 
    "Honey Cheddar": 12 * 60 * 60, 
    "Grape Juice": 3 * 60 * 60,
    "The Lot": 3.5 * 60 * 60, 
    "Carrot Juice": 60 * 60, 
    "Quick Juice": 30 * 60,
    "Slow Juice": 24 * 60 * 60, 
    "Sour Shake": 60 * 60,
};

const COOKING_BUILDINGS = {
    "Fire Pit": "Four", "Kitchen": "Cuisine", "Bakery": "Boulangerie",
    "Deli": "Épicerie Fine", "Smoothie Shack": "Bar à Smoothie"
};

const COMPOSTER_PRODUCTION_TIME = {
    "Compost": 24 * 60 * 60, 
    "Premium Compost": 36 * 60 * 60, 
    "Special Compost": 48 * 60 * 60,
};

const POWER_COOLDOWN_TIMES = {
    "Instant Growth": 72 * 60 * 60,   
    "Tree Blitz": 24 * 60 * 60,        
    "Barnyard Rouse": 120 * 60 * 60,  
    "Greenhouse Guru": 96 * 60 * 60,  
    "Instant Gratification": 96 * 60 * 60, 
    "Petal Blessed": 96 * 60 * 60,     
    "Grease Lightning": 96 * 60 * 60,  
};

// ====== APP CONSTANTS ======

const SECOND_TO_MS = 1000;
const MINUTE_TO_MS = 60 * SECOND_TO_MS;
const HOUR_TO_MS = 60 * MINUTE_TO_MS;

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;
const GROUPING_TOLERANCE_SECONDS = SECONDS_PER_MINUTE;

const NOTIFICATION_CHECK_INTERVAL_SECONDS = 15;
const NOTIFICATION_LOOKAHEAD_HOURS = 10;
const GROUPING_TOLERANCE_MINUTES = 1;

const RESOURCES_KEY = 'sunflower_resources';
const CACHE_KEY = 'sunflower_api_cache';
const CACHE_TIMESTAMP_KEY = 'sunflower_cache_timestamp';
const LAST_API_CALL_KEY = 'sunflower_last_api_call';

const WIDGET_LIMITS = {
    small: 9,
    medium: 9,
    large: 22
};

const FONT_SIZES = {
    small: 10,
    medium: 10,
    large: 11
};

const COLUMN_WIDTHS = {
    item: 130,
    quantity: 80,
    small: 88     
};

const ROW_SPACING = {
    small: 1,
    medium: 1,
    large: 1
};

// ====== UTILITY FUNCTIONS ======

function logError(context, error, details = '') {
    const message = details ? `${context}: ${error} ${details}` : `${context}: ${error}`;
    console.log(`❌ ${message}`);
}

function logWarning(context, message) {
    console.log(`⚠️ ${context}: ${message}`);
}

function logInfo(context, message) {
    console.log(`ℹ️ ${context}: ${message}`);
}

function handleKeychainError(operation, keyName, error) {
    logWarning('Keychain', `Failed to ${operation} key '${keyName}' - ${error.message || error}`);
    return null;
}

function handleAPIError(context, error, fallbackAction = null) {
    logError('API', `${context} failed`, error.message || error);
    if (fallbackAction) {
        logInfo('Fallback', `Using ${fallbackAction}`);
    }
}

function handleNotificationError(action, identifier, error) {
    logError('Notifications', `Failed to ${action} notification '${identifier}'`, error.message || error);
}

async function safeAsyncOperation(operation, context, fallback = null) {
    try {
        return await operation();
    } catch (error) {
        logError(context, 'Async operation failed', error.message || error);
        return fallback;
    }
}

function safeKeychain(operation, key, value = null) {
    try {
        if (operation === 'get') {
            return Keychain.get(key);
        } else if (operation === 'set' && value !== null) {
            Keychain.set(key, value);
            return true;
        }
    } catch (error) {
        return handleKeychainError(operation, key, error);
    }
}

/**
 * Safely parses JSON with error handling and fallback
 * @param {string} jsonString - The JSON string to parse
 * @param {string} context - Context for error logging
 * @param {*} fallback - Value to return if parsing fails
 * @returns {*} Parsed object or fallback value
 */
function safeJSONParse(jsonString, context = 'JSON', fallback = null) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        logWarning(context, `Failed to parse JSON data - ${error.message || error}`);
        return fallback;
    }
}

/**
 * Loads saved resources from device keychain
 * @returns {Object} Saved resources or empty object
 */
function loadResources() {
    const data = safeKeychain('get', RESOURCES_KEY);
    return data ? safeJSONParse(data, 'Resources', {}) : {};
}

/**
 * Saves resources to device keychain with error handling
 * @param {Object} resources - Resources data to save
 * @returns {boolean} True if successful, false otherwise
 */
function saveResources(resources) {
    return safeKeychain('set', RESOURCES_KEY, JSON.stringify(resources));
}

function timeRemainingSeconds(plantedAt, itemName, itemType = 'resource') {
    let harvestSeconds;
    switch(itemType) {
        case 'resource': 
            harvestSeconds = RESOURCE_RECOVERY_TIMES[itemName]; 
            break;
        case 'crop': 
            harvestSeconds = CROPS_TIMES[itemName] ? CROPS_TIMES[itemName]["harvestSeconds"] : null;
            break;
        case 'fruit': 
            harvestSeconds = FRUITS_TIMES[itemName] ? FRUITS_TIMES[itemName]["plantSeconds"] : null;
            break;
        case 'greenhouse': 
            harvestSeconds = GREENHOUSE_TIMES[itemName] ? GREENHOUSE_TIMES[itemName]["harvestSeconds"] : null;
            break;
        case 'flower': 
            harvestSeconds = FLOWERS_TIMES[itemName]; 
            break;
        case 'beehive': 
            harvestSeconds = null; 
            break;
        case 'mushroom': 
            harvestSeconds = MUSHROOMS_TIMES[itemName]; 
            break;
        case 'crafting': 
            harvestSeconds = CRAFTING_TIMES[itemName]; 
            break;
        case 'cooking': 
            harvestSeconds = COOKING_TIMES[itemName]; 
            break;
        case 'composter': 
            if (itemName in COMPOSTER_PRODUCTION_TIME) {
                harvestSeconds = COMPOSTER_PRODUCTION_TIME[itemName];
            } else if (itemName === "Composter") {
                harvestSeconds = 24 * 60 * 60;
            }
            break;
        default: 
            harvestSeconds = RESOURCE_RECOVERY_TIMES[itemName];
    }
    
    if (!harvestSeconds) return 0;
    
    const currentTime = Date.now();
    const harvestTime = plantedAt + (harvestSeconds * 1000);
    const timeRemainingMs = harvestTime - currentTime;
    
    return timeRemainingMs / 1000;
}

/**
 * Calculate animal wake and love times with simplified logic
 * @param {Object} itemData - Animal data with awakeAt, asleepAt, lovedAt
 * @param {number} currentTime - Current timestamp
 * @returns {Object} Wake and love time calculations
 */
function calculateAnimalTimes(itemData, currentTime) {
    const wakeTimeRemaining = (itemData.awakeAt - currentTime) / SECOND_TO_MS;
    
    let loveTimeRemaining = null;
    
    if (currentTime < itemData.awakeAt) {
        const sleepCycleDuration = itemData.awakeAt - itemData.asleepAt;
        const lovePeriodDuration = sleepCycleDuration / 3;
        
        const firstLoveAvailableAt = itemData.asleepAt + lovePeriodDuration;
        
        if (itemData.lovedAt) {
            const nextLoveAvailableAt = itemData.lovedAt + lovePeriodDuration;
            const actualLoveAvailableAt = Math.max(firstLoveAvailableAt, nextLoveAvailableAt);
            loveTimeRemaining = (actualLoveAvailableAt - currentTime) / SECOND_TO_MS;
        } else {
            loveTimeRemaining = (firstLoveAvailableAt - currentTime) / SECOND_TO_MS;
        }
        
        if (loveTimeRemaining < 0) {
            loveTimeRemaining = 0;
        }
    }
    
    return {
        isAnimal: true,
        wakeTime: wakeTimeRemaining,
        loveTime: loveTimeRemaining
    };
}

/**
 * Helper function to add or update animal group
 * @param {Object} groupedItems - Existing groups
 * @param {string} itemName - Animal name
 * @param {Object} itemData - Animal data
 * @param {number} remainingTime - Time remaining
 * @param {boolean} isLoveTime - Whether this is love time
 * @returns {boolean} True if added to existing group, false if new group created
 */
function addToAnimalGroup(groupedItems, itemName, itemData, remainingTime, isLoveTime) {
    const category = itemData.category || 'animal';
    const itemType = itemData.name || itemData.type;
    const suffix = isLoveTime ? '_love' : '_wake';
    const idName = `${itemName}${suffix}`;
    
    for (const [existingKey, existingGroup] of Object.entries(groupedItems)) {
        if (existingGroup.type === itemType && existingGroup.isLoveTime === isLoveTime) {
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
        hasReward: !isLoveTime && itemData.hasReward ? true : false
    };
    return false;
}

function getTimeRemaining(itemData) {
    const currentTime = Date.now();
    
    if (itemData.category === 'animal' && itemData.awakeAt && itemData.asleepAt) {
        return calculateAnimalTimes(itemData, currentTime);
    }
    
    if (itemData.category === 'power' && itemData.nextAvailableAt) {
        return (itemData.nextAvailableAt - currentTime) / 1000;
    }
    
    if (itemData.category === 'beehive' && itemData.attachedUntil) {
        return (itemData.attachedUntil - currentTime) / 1000;
    }
    
    if (itemData.category === 'crafting' && itemData.readyAt) {
        return (itemData.readyAt - currentTime) / 1000;
    }
    
    if (itemData.category === 'cooking' && itemData.readyAt) {
        return (itemData.readyAt - currentTime) / 1000;
    }
    
    if (itemData.category === 'composter' && itemData.readyAt) {
        return (itemData.readyAt - currentTime) / 1000;
    }
    
    return timeRemainingSeconds(itemData.plantedAt || itemData.choppedAt, itemData.name || itemData.type, itemData.category || 'resource');
}

function formatTime(timeRemainingSeconds, widgetFamily = 'medium', isReady = false, readySinceSeconds = 0) {
    if (timeRemainingSeconds <= 0) {
        const readyFor = Math.abs(timeRemainingSeconds);
        if (readyFor <= 0) return "Ready!";
        
        const days = Math.floor(readyFor / SECONDS_PER_DAY);
        let remaining = readyFor % SECONDS_PER_DAY;
        const hours = Math.floor(remaining / SECONDS_PER_HOUR);
        remaining %= SECONDS_PER_HOUR;
        const minutes = Math.floor(remaining / SECONDS_PER_MINUTE);
        
        if (days > 0) return `Ready ${days}d ${hours}h ago`;
        else if (hours > 0) return `Ready ${hours}h ${minutes}m ago`;
        else if (minutes > 0) return `Ready ${minutes}m ago`;
        else return "Just ready!";
    }
    
    const days = Math.floor(timeRemainingSeconds / SECONDS_PER_DAY);
    timeRemainingSeconds %= SECONDS_PER_DAY;
    const hours = Math.floor(timeRemainingSeconds / SECONDS_PER_HOUR);
    timeRemainingSeconds %= SECONDS_PER_HOUR;
    const minutes = Math.floor(timeRemainingSeconds / SECONDS_PER_MINUTE);
    const seconds = Math.floor(timeRemainingSeconds % SECONDS_PER_MINUTE);

    if (widgetFamily === 'small') {
        if (days > 0) return `${days}d ${hours}h`;
        else if (hours > 0) return `${hours}h ${minutes}m`;
        else if (minutes > 0) return `${minutes}m`;
        else return `${seconds}s`;
    } else {
        if (days > 0) return `${days}d ${hours}h ${minutes}m`;
        else if (hours > 0) return `${hours}h ${minutes}m`;
        else if (minutes > 0) return `${minutes}m ${seconds}s`;
        else return `${seconds}s`;
    }
}

function getItemEmoji(itemType, category) {
    const emojis = {
        "Tree": "🌳", "Stone": "🪨", "Iron": "⚒️", "Gold": "⚜️", "Crimstone": "💎", "Sunstone": "🏵️", "Oil": "🛢️",
        "Sunflower": "🌻", "Potato": "🥔", "Pumpkin": "🎃", "Carrot": "🥕", "Corn": "🌽", "Wheat": "🌾", "Cabbage": "🥬", "Broccoli": "🥦",
        "Tomato": "🍅", "Apple": "🍎", "Banana": "🍌", "Orange": "🍊", "Lemon": "🍋", "Blueberry": "🫐",
        "Chicken": "🐔", "Cow": "🐄", "Sheep": "🐑",
        "Rice": "🍚", "Olive": "🫒", "Grape": "🍇",
        "Beehive": "🍯",
        "Mushroom": "🍄", "Magic Mushroom": "🍄‍🟫",
        "Basic Bear": "🐻", "Chef Bear": "👨‍🍳", "Construction Bear": "👷", 
        "Angel Bear": "😇", "Badass Bear": "😎", "Bear Trap": "🪤",
        "Brilliant Bear": "🤓", "Classy Bear": "🎩", "Farmer Bear": "👨‍🌾",
        "Sunflower Bear": "🌻", "Rich Bear": "💰", "Rainbow Artist Bear": "🎨",
        "Devil Bear": "😈", "Valentine Bear": "💕", "Easter Bear": "🐰",
        "Eggplant Bear": "🍆", "Genie Bear": "🧞", "Vampire Bear": "🧛",
        "Mashed Potato": "🥔", "Pumpkin Soup": "🍲", "Mushroom Soup": "🍄",
        "Pancakes": "🥞", "Apple Pie": "🥧", "Honey Cake": "🍰",
        "Cheese": "🧀", "Apple Juice": "🧃", "Premium Composter": "♻️",
        "Turbo Composter": "⚡", "Compost Bin": "🗂️",
    };
    
    if (category === 'flower') return "🌸";
    if (category === 'crafting') return "🔨";
    if (category === 'cooking') return "🍳";
    if (category === 'composter') return "♻️";
    if (category === 'power') return "⚡"; 
    
    return emojis[itemType] || "🌱";
}

function getReadySummary(allItems) {
    let totalReady = 0;
    for (const itemData of Object.values(allItems)) {
        const timeResult = getTimeRemaining(itemData);
        
        if (timeResult.isAnimal) {
            if (timeResult.wakeTime <= 0) totalReady++;
            if (timeResult.loveTime !== null && timeResult.loveTime <= 0) totalReady++;
        } else {
            if (timeResult <= 0) totalReady++;
        }
    }
    return { totalReady };
}

// ====== MAIN WIDGET ======

function groupItemsByTime(allItems) {
    const groupedItems = {};
    
    for (const [itemName, itemData] of Object.entries(allItems)) {
        const category = itemData.category || 'resource';
        const itemType = itemData.name || itemData.type;
        const timeResult = getTimeRemaining(itemData);
        
        if (timeResult.isAnimal) {
            const wakeRemaining = timeResult.wakeTime;
            const loveRemaining = timeResult.loveTime;
            
            addToAnimalGroup(groupedItems, itemName, itemData, wakeRemaining, false);
            
            if (loveRemaining !== null) {
                addToAnimalGroup(groupedItems, itemName, itemData, loveRemaining, true);
            }
            
            continue;
        }
        
        const remaining = timeResult;
        const isLoveTime = false;
        
        let foundGroup = false;
        for (let [existingKey, existingGroup] of Object.entries(groupedItems)) {
            if (existingGroup.type === itemType) {
                const timeDifference = Math.abs(remaining - existingGroup.remainingTime);
                if (timeDifference <= GROUPING_TOLERANCE_SECONDS) {
                    existingGroup.count++;
                    existingGroup.totalAmount += itemData.amount || 0;
                    existingGroup.ids.push(itemName);
                    
                    if (itemData.hasReward && !existingGroup.hasReward) {
                        existingGroup.hasReward = true;
                    }
                    
                    if (itemData.category === 'beehive' && itemData.hasSwarm && !existingGroup.hasSwarm) {
                        existingGroup.hasSwarm = true;
                    }
                    
                    if (isLoveTime) {
                        existingGroup.isLoveTime = true;
                    }
                    
                    if (remaining <= 0) {
                        if (Math.abs(remaining) > Math.abs(existingGroup.remainingTime)) {
                            existingGroup.remainingTime = remaining;
                        }
                    } else {
                        if (remaining < existingGroup.remainingTime) {
                            existingGroup.remainingTime = remaining;
                        }
                    }
                    foundGroup = true;
                    break;
                }
            }
        }
        
        if (!foundGroup) {
            let key = `${itemType}_${Object.keys(groupedItems).length}`;
            groupedItems[key] = {
                category: category, 
                type: itemType, 
                count: 1, 
                totalAmount: itemData.amount || 0,
                remainingTime: remaining, 
                ids: [itemName], 
                isReady: remaining <= 0, 
                hasReward: itemData.hasReward ? true : false,
                hasSwarm: itemData.hasSwarm || false
            };
            
            if (isLoveTime) {
                groupedItems[key].isLoveTime = true;
            }
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
    
    filteredGroups = sortedGroups.filter(group => {
        if (group.remainingTime <= 0) {
            let readyForSeconds = Math.abs(group.remainingTime);
            let readyForDays = readyForSeconds / SECONDS_PER_DAY;
            return readyForDays < 7; 
        }
        return true;
    });
    
    if (config.widgetFamily === 'large') {
        const overdueItems = filteredGroups.filter(group => {
            if (group.remainingTime <= 0) {
                let readyForSeconds = Math.abs(group.remainingTime);
                let readyForDays = readyForSeconds / SECONDS_PER_DAY;
                return readyForDays >= 1; 
            }
            return false;
        });
        
        const nonOverdueItems = filteredGroups.filter(group => {
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
    } else if (config.widgetFamily === 'small' || config.widgetFamily === 'medium') {
        filteredGroups = filteredGroups.filter(group => {
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

function renderWidgetRows(widget, displayedGroups) {
    for (let group of displayedGroups) {
        const emoji = getItemEmoji(group.type, group.category);
        let itemName = group.type;
        
        if (group.isLoveTime) {
            itemName = `${itemName} ❤️`;
        }
        
        if (group.hasReward) {
            itemName = `${itemName} 🎁`;
        }
        
        if (group.category === 'beehive' && group.hasSwarm) {
            itemName = `${itemName} 🐝`;
        }
        
        const quantity = `x${group.count}`;
        const totalText = group.totalAmount > 0 ? ` (${group.totalAmount.toFixed(1)})` : "";
        
        let timeStatus = formatTime(group.remainingTime, config.widgetFamily);
        
        let fontSize = FONT_SIZES[config.widgetFamily] || FONT_SIZES.medium;
        
        let rowStack = widget.addStack();
        rowStack.layoutHorizontally();
        rowStack.spacing = 0;
        
        let col1Stack = rowStack.addStack();
        if (config.widgetFamily === 'small') {
            col1Stack.size = new Size(COLUMN_WIDTHS.small, 0);  
        } else {
            col1Stack.size = new Size(COLUMN_WIDTHS.item, 0);
        }
        col1Stack.layoutHorizontally();
        let col1Text = col1Stack.addText(`${emoji} ${itemName}`);
        col1Text.font = Font.systemFont(fontSize);
        col1Text.lineLimit = 1;
        col1Stack.addSpacer();
        
        let col2Text;
        
        if (config.widgetFamily !== 'small') {
            rowStack.addSpacer(12);
            
            let col2Stack = rowStack.addStack();
            col2Stack.size = new Size(65, 0);
            col2Text = col2Stack.addText(`${quantity}${totalText}`);
            col2Text.font = Font.systemFont(fontSize);
            col2Text.centerAlignText();
            col2Text.lineLimit = 1;
            
            rowStack.addSpacer(32);
        } else {
            rowStack.addSpacer(0);
        }
        
        let col3Stack = rowStack.addStack();
        let col3Text = col3Stack.addText(timeStatus);
        col3Text.font = Font.systemFont(fontSize);
        col3Text.rightAlignText();
        col3Text.lineLimit = 1;
        
        col1Text.textColor = new Color("#E5E5E7");
        
        if (config.widgetFamily !== 'small' && col2Text) {
            col2Text.textColor = new Color("#E5E5E7");
        }
        
        if (group.remainingTime <= 0) {
            let readyForSeconds = Math.abs(group.remainingTime);
            let readyForDays = readyForSeconds / SECONDS_PER_DAY;
            
            if (readyForDays >= 1) {
                col3Text.textColor = Color.red();
            } else {
                col3Text.textColor = Color.green();
            }
        } else {
            let remainingHours = group.remainingTime / SECONDS_PER_HOUR;
            
            if (remainingHours <= 1) {
                col3Text.textColor = Color.yellow();
            } else {
                col3Text.textColor = new Color("#E5E5E7");
            }
        }
        
        let spacing = ROW_SPACING[config.widgetFamily] || ROW_SPACING.medium;
        widget.addSpacer(spacing);
    }
}

async function createWidget() {
    let allItems = loadResources();
    let widget = new ListWidget();
    
    widget.backgroundColor = new Color("#1C1C1E");
    
    let groupedItems = groupItemsByTime(allItems);
    
    if (Object.keys(groupedItems).length === 0) {
        let noData = widget.addText("No items tracked");
        noData.font = Font.systemFont(12);
        noData.textColor = new Color("#8E8E93");
        noData.centerAlignText();
        
        widget.addSpacer(10);
        
        let infoText = widget.addText("Loading from API...");
        infoText.font = Font.systemFont(10);
        infoText.textColor = new Color("#007AFF");
        infoText.centerAlignText();
    } else {
        let displayedGroups = sortAndFilterGroups(groupedItems);
        
        renderWidgetRows(widget, displayedGroups);
    }
    
    widget.addSpacer();
    let updateTime = widget.addText(`Updated: ${new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}`);
    updateTime.font = Font.systemFont(8);
    updateTime.textColor = new Color("#E5E5E7"); 
    updateTime.centerAlignText();
    
    return widget;
}

// ====== SUNFLOWER LAND API ======

function parseResources(apiData, allItems) {
    const resourceTypes = {
        "trees": { name: "Tree", key: "wood", timestamp: "choppedAt" },
        "stones": { name: "Stone", key: "stone", timestamp: "minedAt" },
        "iron": { name: "Iron", key: "stone", timestamp: "minedAt" },
        "gold": { name: "Gold", key: "stone", timestamp: "minedAt" },
        "crimstones": { name: "Crimstone", key: "stone", timestamp: "minedAt" },
        "sunstones": { name: "Sunstone", key: "stone", timestamp: "minedAt" },
        "oilReserves": { name: "Oil", key: "oil", timestamp: "drilledAt" }
    };
    
    for (let [resourceType, config] of Object.entries(resourceTypes)) {
        if (apiData.farm && apiData.farm[resourceType]) {
            for (let [resourceId, resourceInfo] of Object.entries(apiData.farm[resourceType])) {
                if (!resourceInfo[config.key]) continue;
                
                let resource = resourceInfo[config.key];
                if (!resource[config.timestamp]) continue;
                
                let resourceName = `${config.name} ${resourceId}`;
                allItems[resourceName] = {
                    plantedAt: resource[config.timestamp], 
                    type: config.name,
                    name: config.name, 
                    category: 'resource', 
                    amount: resource.amount || 0,
                    hasReward: resource.reward ? true : false
                };
            }
        }
    }
}

function parseCrops(apiData, allItems) {
    if (apiData.farm && apiData.farm.crops) {
        for (let [cropId, cropInfo] of Object.entries(apiData.farm.crops)) {
            if (cropInfo.crop && cropInfo.crop.plantedAt && cropInfo.crop.name) {
                let cropName = `${cropInfo.crop.name} ${cropId}`;
                allItems[cropName] = {
                    plantedAt: cropInfo.crop.plantedAt, 
                    type: cropInfo.crop.name,
                    name: cropInfo.crop.name, 
                    category: 'crop', 
                    amount: parseFloat(cropInfo.crop.amount) || 0,
                    hasReward: cropInfo.crop.reward ? true : false
                };
            }
        }
    }
}

function parseFruits(apiData, allItems) {
    if (apiData.farm && apiData.farm.fruitPatches) {
        for (let [patchId, patchInfo] of Object.entries(apiData.farm.fruitPatches)) {
            if (patchInfo.fruit && patchInfo.fruit.name) {
                let fruit = patchInfo.fruit;
                let plantedAt = fruit.plantedAt;
                let harvestedAt = fruit.harvestedAt || 0;
                
                let timestampToUse = harvestedAt === 0 ? plantedAt : harvestedAt;
                
                if (timestampToUse) {
                    let fruitName = `${fruit.name} ${patchId}`;
                    allItems[fruitName] = {
                        plantedAt: timestampToUse, type: fruit.name,
                        name: fruit.name, category: 'fruit', 
                        amount: parseFloat(fruit.amount) || 0,
                        hasReward: fruit.reward ? true : false
                    };
                }
            }
        }
    }
}

function parseAnimals(apiData, allItems) {
    if (apiData.farm && apiData.farm.henHouse && apiData.farm.henHouse.animals) {
        for (let [animalId, animalInfo] of Object.entries(apiData.farm.henHouse.animals)) {
            if (animalInfo.type === "Chicken" && animalInfo.awakeAt && animalInfo.asleepAt) {
                let animalName = `${animalInfo.type} ${animalId}`;
                allItems[animalName] = {
                    awakeAt: animalInfo.awakeAt, 
                    asleepAt: animalInfo.asleepAt,
                    lovedAt: animalInfo.lovedAt || null,
                    type: animalInfo.type, 
                    name: animalInfo.type, 
                    category: 'animal', 
                    amount: 0, 
                    state: animalInfo.state || "unknown",
                    hasReward: animalInfo.reward ? true : false
                };
            }
        }
    }
    
    if (apiData.farm && apiData.farm.barn && apiData.farm.barn.animals) {
        for (let [animalId, animalInfo] of Object.entries(apiData.farm.barn.animals)) {
            if ((animalInfo.type === "Cow" || animalInfo.type === "Sheep") && animalInfo.awakeAt && animalInfo.asleepAt) {
                let animalName = `${animalInfo.type} ${animalId}`;
                allItems[animalName] = {
                    awakeAt: animalInfo.awakeAt, 
                    asleepAt: animalInfo.asleepAt,
                    lovedAt: animalInfo.lovedAt || null,
                    type: animalInfo.type, 
                    name: animalInfo.type, 
                    category: 'animal', 
                    amount: 0, 
                    state: animalInfo.state || "unknown",
                    hasReward: animalInfo.reward ? true : false
                };
            }
        }
    }
}

function parseFlowers(apiData, allItems) {
    if (apiData.farm && apiData.farm.flowers && apiData.farm.flowers.flowerBeds) {
        for (let [bedId, bedInfo] of Object.entries(apiData.farm.flowers.flowerBeds)) {
            if (bedInfo.flower && bedInfo.flower.plantedAt && bedInfo.flower.name) {
                let flowerName = `${bedInfo.flower.name} ${bedId}`;
                allItems[flowerName] = {
                    plantedAt: bedInfo.flower.plantedAt, 
                    type: bedInfo.flower.name,
                    name: bedInfo.flower.name, 
                    category: 'flower', 
                    amount: parseFloat(bedInfo.flower.amount) || 0,
                    hasReward: bedInfo.flower.reward ? true : false
                };
            }
        }
    }
}

function parseBeehives(apiData, allItems) {
    if (apiData.farm && apiData.farm.beehives) {
        for (let [hiveId, hiveInfo] of Object.entries(apiData.farm.beehives)) {
            if (hiveInfo.flowers && hiveInfo.flowers.length > 0) {
                let latestFlower = hiveInfo.flowers.reduce((latest, current) => 
                    current.attachedUntil > latest.attachedUntil ? current : latest
                );
                
                let hiveName = `Beehive ${hiveId}`;
                allItems[hiveName] = {
                    attachedUntil: latestFlower.attachedUntil, 
                    type: 'Beehive',
                    name: 'Beehive', 
                    category: 'beehive', 
                    amount: 0,
                    hasSwarm: hiveInfo.swarm || false
                };
            }
        }
    }
}

function parseGreenhouse(apiData, allItems) {

    if (apiData.farm && apiData.farm.greenhouse && apiData.farm.greenhouse.pots) {
        for (let [potId, potInfo] of Object.entries(apiData.farm.greenhouse.pots)) {
            if (potInfo.plant && potInfo.plant.plantedAt && potInfo.plant.name) {
                let plantName = `${potInfo.plant.name} Greenhouse ${potId}`;
                allItems[plantName] = {
                    plantedAt: potInfo.plant.plantedAt, type: potInfo.plant.name,
                    name: potInfo.plant.name, category: 'greenhouse', amount: parseFloat(potInfo.plant.amount) || 0
                };
            }
        }
    }
}

function parseMushrooms(apiData, allItems) {

    if (apiData.farm && apiData.farm.mushrooms) {
        let mushrooms = apiData.farm.mushrooms;
        if (mushrooms.spawnedAt) {
            allItems["Mushroom"] = {
                plantedAt: mushrooms.spawnedAt, type: "Mushroom",
                name: "Mushroom", category: 'mushroom', amount: 0
            };
        }
        
        if (mushrooms.magicSpawnedAt) {
            allItems["Magic Mushroom"] = {
                plantedAt: mushrooms.magicSpawnedAt, type: "Magic Mushroom",
                name: "Magic Mushroom", category: 'mushroom', amount: 0
            };
        }
    }
}

function parseCrafting(apiData, allItems) {

    if (apiData.farm && apiData.farm.craftingBox) {
        let craftingBox = apiData.farm.craftingBox;
        
        if (craftingBox.status === "crafting" && craftingBox.item && craftingBox.readyAt) {
            let itemName = craftingBox.item.collectible || "Unknown Item";
            allItems[`Crafting: ${itemName}`] = {
                readyAt: craftingBox.readyAt, type: itemName,
                name: itemName, category: 'crafting', amount: 1
            };
        }
    }
}

function parseCooking(apiData, allItems) {

    if (apiData.farm && apiData.farm.buildings) {
        const cookingBuildings = ["Fire Pit", "Kitchen", "Bakery", "Deli", "Smoothie Shack"];
        
        for (let buildingType of cookingBuildings) {
            if (apiData.farm.buildings[buildingType]) {
                for (let building of apiData.farm.buildings[buildingType]) {
                    if (building.crafting) {
                        for (let craft of building.crafting) {
                            if (craft.readyAt && craft.name) {
                                let cookingName = `${craft.name} (${COOKING_BUILDINGS[buildingType] || buildingType})`;
                                allItems[cookingName] = {
                                    readyAt: craft.readyAt, type: craft.name,
                                    name: craft.name, category: 'cooking', 
                                    amount: craft.amount || 1
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

    if (apiData.farm && apiData.farm.buildings) {
        const composterTypes = ["Premium Composter", "Turbo Composter", "Compost Bin"];
        
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
                            readyAt: producing.readyAt, type: composterType,
                            name: composterType, category: 'composter', 
                            amount: Object.values(producing.items || {}).reduce((a, b) => a + b, 0)
                        };
                    }
                }
            }
        }
    }
}

function parsePowers(apiData, allItems) {
    if (apiData.farm && apiData.farm.bumpkin && apiData.farm.bumpkin.previousPowerUseAt) {
        const powers = apiData.farm.bumpkin.previousPowerUseAt;
        
        for (let [powerName, lastUsedAt] of Object.entries(powers)) {
            if (POWER_COOLDOWN_TIMES[powerName]) {
                const cooldownSeconds = POWER_COOLDOWN_TIMES[powerName];
                const nextAvailableAt = lastUsedAt + (cooldownSeconds * 1000); 
                
                allItems[powerName] = {
                    usedAt: lastUsedAt,
                    nextAvailableAt: nextAvailableAt,
                    type: powerName,
                    name: powerName,
                    category: 'power',
                    amount: 1
                };
                
                console.log(`⚡ Found power: ${powerName}, next available in ${Math.round((nextAvailableAt - Date.now()) / 1000 / 3600)}h`);
            }
        }
    }
}

async function loadFromAPI() {
    const API_RATE_LIMIT_SECONDS = 15;
    const CACHE_EXPIRATION_MINUTES = 600;
    
    try {
        let cacheTimestamp = safeKeychain('get', CACHE_TIMESTAMP_KEY);
        
        let currentTime = Date.now();
        let cacheExpired = false;
        
        if (cacheTimestamp) {
            let cacheAge = (currentTime - parseInt(cacheTimestamp)) / 1000 / 60;
            cacheExpired = cacheAge >= CACHE_EXPIRATION_MINUTES;
            if (cacheExpired) {
                console.log(`⏰ Cache expired (${Math.round(cacheAge)} minutes old), will refresh data`);
            }
        } else {
            cacheExpired = true;
        }
        
        let lastApiCallTime = safeKeychain('get', LAST_API_CALL_KEY);
        
        if (!cacheExpired && lastApiCallTime) {
            let timeSinceLastCall = (currentTime - parseInt(lastApiCallTime)) / 1000;
            
            if (timeSinceLastCall < API_RATE_LIMIT_SECONDS) {
                console.log(`⏱️ Rate limit: ${Math.round(API_RATE_LIMIT_SECONDS - timeSinceLastCall)}s remaining. Using cached data.`);
                
                let cachedData;
                cachedData = safeKeychain('get', CACHE_KEY);
                
                if (cachedData) {
                    const parsedData = safeJSONParse(cachedData, 'Cache');
                    if (parsedData) {
                        saveResources(parsedData);
                        return parsedData;
                    } else {
                        logWarning('Cache', 'Failed to parse cached data, making new API call');
                    }
                }
            }
        }
        
        console.log("🌐 Making API call to Sunflower Land...");
        
        let request = new Request(`https://api.sunflower-land.com/community/farms/${FARM_ID}`);
        let apiData = await request.loadJSON();
        
        Keychain.set(LAST_API_CALL_KEY, currentTime.toString());
        
        let allItems = {};
        
        parseResources(apiData, allItems);
        parseCrops(apiData, allItems);
        parseFruits(apiData, allItems);
        parseAnimals(apiData, allItems);
        parseFlowers(apiData, allItems);
        parseBeehives(apiData, allItems);
        parseGreenhouse(apiData, allItems);
        parseMushrooms(apiData, allItems);
        parseCrafting(apiData, allItems);
        parseCooking(apiData, allItems);
        parseComposters(apiData, allItems);
        parsePowers(apiData, allItems);
        
        saveResources(allItems);
        console.log(`✅ ${Object.keys(allItems).length} items loaded from API`);
        
        const cacheSuccess1 = safeKeychain('set', CACHE_KEY, JSON.stringify(allItems));
        const cacheSuccess2 = safeKeychain('set', CACHE_TIMESTAMP_KEY, currentTime.toString());
        
        return allItems;
        
    } catch (error) {
        handleAPIError('Sunflower Land API call', error, 'cached data fallback');
        
        let cachedData;
        cachedData = safeKeychain('get', CACHE_KEY);
        
        if (cachedData) {
            const fallbackData = safeJSONParse(cachedData, 'Cache Fallback');
            if (fallbackData) {
                logInfo('Fallback', 'Using cached data after API error');
                saveResources(fallbackData);
                return fallbackData;
            } else {
                logWarning('Cache', 'Failed to parse cached fallback data');
            }
        }
        
        logInfo('Fallback', 'Using demo data as final fallback');
        return loadResources();
    }
}

// ====== NOTIFICATION SYSTEM ======

function getUpcomingItems(allItems) {
    const upcomingItems = [];
    const currentTime = Date.now();
    const oneHourFromNow = currentTime + (NOTIFICATION_LOOKAHEAD_HOURS * HOUR_TO_MS);
    
    for (const [itemName, itemData] of Object.entries(allItems)) {
        const timeResult = getTimeRemaining(itemData);
        
        if (timeResult.isAnimal) {
            processAnimalNotifications(itemData, timeResult, currentTime, oneHourFromNow, upcomingItems);
            continue;
        }
        
        const remainingSeconds = timeResult;
        const readyTime = currentTime + (remainingSeconds * SECOND_TO_MS);
        
        if (remainingSeconds > 0 && readyTime <= oneHourFromNow) {
            upcomingItems.push({
                name: itemData.name || itemData.type,
                category: itemData.category,
                readyTime: readyTime,
                remainingSeconds: remainingSeconds,
                totalAmount: itemData.amount || 0,
                emoji: getItemEmoji(itemData.name || itemData.type, itemData.category),
                hasReward: itemData.hasReward || false,
                hasSwarm: itemData.hasSwarm || false
            });
        }
    }
    
    return upcomingItems;
}

function processAnimalNotifications(itemData, timeResult, currentTime, oneHourFromNow, upcomingItems) {
    const wakeRemaining = timeResult.wakeTime;
    const wakeReadyTime = currentTime + (wakeRemaining * SECOND_TO_MS);
    
    if (wakeRemaining > 0 && wakeReadyTime <= oneHourFromNow) {
        upcomingItems.push({
            name: itemData.name || itemData.type,
            category: itemData.category,
            readyTime: wakeReadyTime,
            remainingSeconds: wakeRemaining,
            totalAmount: itemData.amount || 0,
            emoji: getItemEmoji(itemData.name || itemData.type, itemData.category),
            isLoveTime: false,
            hasReward: itemData.hasReward || false
        });
    }
    
    if (timeResult.loveTime !== null && timeResult.loveTime > 0) {
        const loveReadyTime = currentTime + (timeResult.loveTime * SECOND_TO_MS);
        
        if (loveReadyTime <= oneHourFromNow) {
            upcomingItems.push({
                name: itemData.name || itemData.type,
                category: itemData.category,
                readyTime: loveReadyTime,
                remainingSeconds: timeResult.loveTime,
                totalAmount: itemData.amount || 0,
                emoji: "❤️",
                isLoveTime: true,
                hasReward: false 
            });
        }
    }
}

function groupNotificationsByTime(upcomingItems) {
    upcomingItems.sort((a, b) => a.readyTime - b.readyTime);
    
    let groups = [];
    let tolerance = GROUPING_TOLERANCE_MINUTES * MINUTE_TO_MS;
    
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
            groups.push({
                referenceTime: item.readyTime,
                items: [item]
            });
        }
    }
    
    return groups;
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
                if (uniqueItemsMap.has(item.name)) {
                    let existing = uniqueItemsMap.get(item.name);
                    existing.totalAmount += item.totalAmount || 0;
                    if (item.hasReward && !existing.hasReward) {
                        existing.hasReward = true;
                    }
                    if (item.hasSwarm && !existing.hasSwarm) {
                        existing.hasSwarm = true;
                    }
                } else {
                    uniqueItemsMap.set(item.name, {
                        name: item.name,
                        emoji: item.emoji,
                        totalAmount: item.totalAmount || 0,
                        hasReward: item.hasReward || false,
                        hasSwarm: item.hasSwarm || false
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
                handleNotificationError('schedule', groupId, error);
            }
        }
    }
    
    return { newNotificationsCount, currentUpcomingIds };
}

function createNotificationBody(uniqueItemsMap, group) {
    if (uniqueItemsMap.size === 1) {
        let item = Array.from(uniqueItemsMap.values())[0];
        let count = group.items.length;
        let countText = count > 1 ? ` x${count}` : "";
        let totalText = item.totalAmount > 0 ? ` (${item.totalAmount.toFixed(1)})` : "";
        
        let specialIndicators = "";
        if (item.hasReward) specialIndicators += " 🎁";
        if (item.hasSwarm) specialIndicators += " 🐝";
        
        return `${item.name} is ready ${item.emoji}${countText}${totalText}${specialIndicators}`;
    } else {
        let itemSummaries = Array.from(uniqueItemsMap.entries()).map(([name, item]) => {
            let itemCount = group.items.filter(i => i.name === name).length;
            let countText = itemCount > 1 ? ` x${itemCount}` : "";
            let totalText = item.totalAmount > 0 ? ` (${item.totalAmount.toFixed(1)})` : "";
            
            let specialIndicators = "";
            if (item.hasReward) specialIndicators += " 🎁";
            if (item.hasSwarm) specialIndicators += " 🐝";
            
            return `${name}${countText}${totalText} ${item.emoji}${specialIndicators}`;
        });
        return itemSummaries.join(', ');
    }
}

async function cleanupObsoleteNotifications(pendingNotifications, currentUpcomingIds) {
    let removedNotificationsCount = 0;
    
    for (let notification of pendingNotifications) {
        if (notification.identifier && notification.identifier.startsWith('sfl_')) {
            if (!currentUpcomingIds.has(notification.identifier)) {
                try {
                    await notification.remove();
                    removedNotificationsCount++;
                } catch (error) {
                    handleNotificationError('remove', notification.identifier, error);
                }
            }
        }
    }
    
    return removedNotificationsCount;
}

async function manageNotifications() {
    let allItems = loadResources();
    let pendingNotifications = await Notification.allPending();
    let existingNotificationIds = new Set(pendingNotifications.map(n => n.identifier));
    
    let upcomingItems = getUpcomingItems(allItems);
    
    let groups = groupNotificationsByTime(upcomingItems);
    
    let { newNotificationsCount, currentUpcomingIds } = await createGroupNotifications(groups, existingNotificationIds);
    
    let removedNotificationsCount = await cleanupObsoleteNotifications(pendingNotifications, currentUpcomingIds);
    
    console.log(`🔔 Smart notification summary: ${newNotificationsCount} new groups, ${removedNotificationsCount} removed, ${groups.length} total groups`);
    
    return {
        scheduled: newNotificationsCount,
        removed: removedNotificationsCount,
        upcoming: groups.length
    };
}

// ====== MAIN SCRIPT ======

async function main() {
    console.log("🌻 Starting Sunflower Land widget...");
    
    await loadFromAPI();
    
    if (!config.runsInWidget) {
        await manageNotifications();
    } else {
        let lastNotificationCheck = 0;
        const lastCheckData = safeKeychain('get', 'sfl_last_notification_check');
        if (lastCheckData) {
            lastNotificationCheck = parseInt(lastCheckData) || 0;
        } else {
            logWarning('Keychain', 'Failed to get last notification check time, using default');
        }
        
        let currentTime = Date.now();
        let timeSinceLastCheck = (currentTime - lastNotificationCheck) / 1000 / 60;
        
        if (timeSinceLastCheck >= NOTIFICATION_CHECK_INTERVAL_SECONDS) {
            await manageNotifications();
            Keychain.set('sfl_last_notification_check', currentTime.toString());
        }
    }
    
    let widget = await createWidget();
    
    if (config.runsInWidget) {
        Script.setWidget(widget);
    } else {
        widget.presentMedium();
    }
    
    console.log("✅ Widget created successfully!");
}

await main();
Script.complete();
