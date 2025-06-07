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

const ANIMALS_TIMES = {
    "Chicken": 12 * 60 * 60, "Cow": 24 * 60 * 60, "Sheep": 48 * 60 * 60,
};

const FLOWERS_TIMES = {
    "Red Pansy": 1 * 24 * 60 * 60, "Yellow Pansy": 1 * 24 * 60 * 60, "Purple Pansy": 1 * 24 * 60 * 60, "White Pansy": 1 * 24 * 60 * 60, "Blue Pansy": 1 * 24 * 60 * 60,
    "Red Cosmos": 1 * 24 * 60 * 60, "Yellow Cosmos": 1 * 24 * 60 * 60, "Purple Cosmos": 1 * 24 * 60 * 60, "White Cosmos": 1 * 24 * 60 * 60, "Blue Cosmos": 1 * 24 * 60 * 60,
    "Prism Petal": 1 * 24 * 60 * 60,
    "Red Balloon Flower": 2 * 24 * 60 * 60, "Yellow Balloon Flower": 2 * 24 * 60 * 60, "Purple Balloon Flower": 2 * 24 * 60 * 60, "White Balloon Flower": 2 * 24 * 60 * 60, "Blue Balloon Flower": 2 * 24 * 60 * 60,
    "Red Daffodil": 2 * 24 * 60 * 60, "Yellow Daffodil": 2 * 24 * 60 * 60, "Purple Daffodil": 2 * 24 * 60 * 60, "White Daffodil": 2 * 24 * 60 * 60, "Blue Daffodil": 2 * 24 * 60 * 60,
    "Celestial Frostbloom": 2 * 24 * 60 * 60,
    "Red Carnation": 5 * 24 * 60 * 60, "Yellow Carnation": 5 * 24 * 60 * 60, "Purple Carnation": 5 * 24 * 60 * 60, "White Carnation": 5 * 24 * 60 * 60, "Blue Carnation": 5 * 24 * 60 * 60,
    "Red Lotus": 5 * 24 * 60 * 60, "Yellow Lotus": 5 * 24 * 60 * 60, "Purple Lotus": 5 * 24 * 60 * 60, "White Lotus": 5 * 24 * 60 * 60, "Blue Lotus": 5 * 24 * 60 * 60,
    "Primula Enigma": 5 * 24 * 60 * 60,
    "Red Edelweiss": 3 * 24 * 60 * 60, "Yellow Edelweiss": 3 * 24 * 60 * 60, "Purple Edelweiss": 3 * 24 * 60 * 60, "White Edelweiss": 3 * 24 * 60 * 60, "Blue Edelweiss": 3 * 24 * 60 * 60,
    "Red Gladiolus": 3 * 24 * 60 * 60, "Yellow Gladiolus": 3 * 24 * 60 * 60, "Purple Gladiolus": 3 * 24 * 60 * 60, "White Gladiolus": 3 * 24 * 60 * 60, "Blue Gladiolus": 3 * 24 * 60 * 60,
    "Red Lavender": 3 * 24 * 60 * 60, "Yellow Lavender": 3 * 24 * 60 * 60, "Purple Lavender": 3 * 24 * 60 * 60, "White Lavender": 3 * 24 * 60 * 60, "Blue Lavender": 3 * 24 * 60 * 60,
    "Red Clover": 3 * 24 * 60 * 60, "Yellow Clover": 3 * 24 * 60 * 60, "Purple Clover": 3 * 24 * 60 * 60, "White Clover": 3 * 24 * 60 * 60, "Blue Clover": 3 * 24 * 60 * 60,
};

const GREENHOUSE_TIMES = {
    "Rice": { "harvestSeconds": 32 * 60 * 60 },
    "Olive": { "harvestSeconds": 44 * 60 * 60 },
    "Grape": { "harvestSeconds": 12 * 60 * 60 },
};
const BEEHIVES_TIME = 24 * 60 * 60 * 1000;
const MUSHROOMS_TIMES = {
    "Mushroom": 16 * 60 * 60, "Magic Mushroom": 24 * 60 * 60,
};

const CRAFTING_TIMES = {
    "Basic Bear": 5 * 60, "Chef Bear": 10 * 60, "Construction Bear": 15 * 60,
    "Angel Bear": 20 * 60, "Badass Bear": 25 * 60, "Bear Trap": 25 * 60,
    "Brilliant Bear": 30 * 60, "Classy Bear": 35 * 60, "Farmer Bear": 35 * 60,
    "Sunflower Bear": 35 * 60, "Rich Bear": 40 * 60, "Rainbow Artist Bear": 40 * 60,
    "Devil Bear": 40 * 60,
    "Valentine Bear": 45 * 60, "Easter Bear": 45 * 60, "Eggplant Bear": 45 * 60,
    "Genie Bear": 45 * 60, "Vampire Bear": 45 * 60,
    "White Tulips": 15 * 60, "Potted Sunflower": 15 * 60, "Potted Potato": 20 * 60,
    "Potted Pumpkin": 25 * 60, "Cactus": 20 * 60, "Dirt Path": 10 * 60,
    "Bush": 15 * 60, "Shrub": 15 * 60, "Fence": 10 * 60, "Stone Fence": 15 * 60,
    "Pine Tree": 20 * 60, "Field Maple": 25 * 60, "Red Maple": 30 * 60,
    "Golden Maple": 35 * 60,
    "Giant Potato": 60 * 60, "Giant Pumpkin": 60 * 60, "Giant Cabbage": 60 * 60,
    "Giant Carrot": 60 * 60,
    "Crimson Cap": 30 * 60, "Toadstool Seat": 25 * 60, "Chestnut Fungi Stool": 35 * 60,
    "Mahogany Cap": 40 * 60,
    "Christmas Stocking": 30 * 60, "Golden Christmas Stocking": 45 * 60,
    "Cozy Fireplace": 40 * 60, "Christmas Rug": 35 * 60, "Christmas Candle": 25 * 60,
    "Festive Tree": 45 * 60, "Santa Penguin": 30 * 60, "Penguin Pool": 40 * 60,
    "Snowman": 25 * 60, "Festive Toy Train": 45 * 60,
    "Goldcrest Mosaic Rug": 45 * 60, "Sandy Mosaic Rug": 45 * 60, "Twilight Rug": 45 * 60,
    "Orchard Rug": 45 * 60, "Carrot Rug": 45 * 60, "Beetroot Rug": 45 * 60,
    "Harlequin Rug": 45 * 60, "Large Rug": 45 * 60,
    "Golden Fence": 60 * 60, "Golden Stone Fence": 60 * 60, "Golden Pine Tree": 60 * 60,
    "Golden Tree": 60 * 60, "Golden Bush": 60 * 60, "Golden Cow": 90 * 60,
};

const COOKING_TIMES = {
    "Mashed Potato": 30, "Pumpkin Soup": 3 * 60, "Reindeer Carrot": 5 * 60,
    "Mushroom Soup": 10 * 60, "Popcorn": 12 * 60, "Bumpkin Broth": 20 * 60,
    "Cabbers n Mash": 40 * 60, "Boiled Eggs": 60 * 60, "Kale Stew": 2 * 60 * 60,
    "Kale Omelette": 3.5 * 60 * 60, "Gumbo": 4 * 60 * 60,
    "Sunflower Crunch": 10 * 60, "Mushroom Jacket Potatoes": 10 * 60,
    "Fruit Salad": 30 * 60, "Pancakes": 60 * 60, "Roast Veggies": 2 * 60 * 60,
    "Club Sandwich": 3 * 60 * 60, "Bumpkin Salad": 3.5 * 60 * 60,
    "Bumpkin ganoush": 5 * 60 * 60, "Goblin's Treat": 6 * 60 * 60,
    "Apple Pie": 4 * 60 * 60, "Orange Cake": 4 * 60 * 60, "Kale & Mushroom Pie": 4 * 60 * 60,
    "Sunflower Cake": 6.5 * 60 * 60, "Honey Cake": 8 * 60 * 60, "Potato Cake": 10.5 * 60 * 60,
    "Blueberry Jam": 12 * 60 * 60, "Fermented Carrots": 24 * 60 * 60,
    "Sauerkraut": 24 * 60 * 60, "Cheese": 20 * 60, "Blue Cheese": 3 * 60 * 60,
    "Purple Smoothie": 30 * 60, "Orange Juice": 45 * 60, "Apple Juice": 60 * 60,
    "Power Smoothie": 1.5 * 60 * 60, "Bumpkin Detox": 2 * 60 * 60, "Banana Blast": 3 * 60 * 60,
};

const COOKING_BUILDINGS = {
    "Fire Pit": "Four", "Kitchen": "Cuisine", "Bakery": "Boulangerie",
    "Deli": "Épicerie Fine", "Smoothie Shack": "Bar à Smoothie"
};

const COMPOSTER_PRODUCTION_TIME = {
    "Compost": 24 * 60 * 60, "Premium Compost": 36 * 60 * 60, "Special Compost": 48 * 60 * 60,
};

// ====== UTILITY FUNCTIONS ======

function loadResources() {
    try {
        let data = Keychain.get('sunflower_resources');
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.log("No saved data found");
        return {};
    }
}

function saveResources(resources) {
    Keychain.set('sunflower_resources', JSON.stringify(resources));
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
        case 'animal': 
            harvestSeconds = ANIMALS_TIMES[itemName]; 
            break;
        case 'beehive': 
            // Note: beehives should use attachedUntil directly in getTimeRemaining, not this function
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
    
    let currentTime = Date.now();
    let harvestTime = plantedAt + (harvestSeconds * 1000);
    let timeRemainingMs = harvestTime - currentTime;
    
    return timeRemainingMs / 1000;
}

function getTimeRemaining(itemData) {
    // Special handling for animals
    if (itemData.category === 'animal' && itemData.awakeAt && itemData.asleepAt) {
        let currentTime = Date.now();
        if (currentTime < itemData.awakeAt) {
            // Animal is still sleeping, calculate remaining time
            return (itemData.awakeAt - currentTime) / 1000;
        } else {
            // Animal is awake (ready) - return negative value to show it's been ready
            return (itemData.awakeAt - currentTime) / 1000;
        }
    }
    
    // Special handling for beehives
    if (itemData.category === 'beehive' && itemData.attachedUntil) {
        let currentTime = Date.now();
        return (itemData.attachedUntil - currentTime) / 1000;
    }
    
    // Special handling for crafting
    if (itemData.category === 'crafting' && itemData.readyAt) {
        let currentTime = Date.now();
        return (itemData.readyAt - currentTime) / 1000;
    }
    
    // Special handling for cooking
    if (itemData.category === 'cooking' && itemData.readyAt) {
        let currentTime = Date.now();
        return (itemData.readyAt - currentTime) / 1000;
    }
    
    // Special handling for composter
    if (itemData.category === 'composter' && itemData.readyAt) {
        let currentTime = Date.now();
        return (itemData.readyAt - currentTime) / 1000;
    }
    
    // For all other items, use the standard calculation
    return timeRemainingSeconds(itemData.plantedAt || itemData.choppedAt, itemData.name || itemData.type, itemData.category || 'resource');
}

function formatTime(timeRemainingSeconds, isReady = false, readySinceSeconds = 0) {
    if (timeRemainingSeconds <= 0) {
        // Item is ready
        let readyFor = Math.abs(timeRemainingSeconds);
        if (readyFor <= 0) return "Ready!";
        
        let days = Math.floor(readyFor / (24 * 3600));
        let remaining = readyFor % (24 * 3600);
        let hours = Math.floor(remaining / 3600);
        remaining %= 3600;
        let minutes = Math.floor(remaining / 60);
        
        if (days > 0) return `Ready ${days}d ${hours}h ago`;
        else if (hours > 0) return `Ready ${hours}h ${minutes}m ago`;
        else if (minutes > 0) return `Ready ${minutes}m ago`;
        else return "Just ready!";
    }
    
    // Item is not ready yet
    let days = Math.floor(timeRemainingSeconds / (24 * 3600));
    timeRemainingSeconds %= (24 * 3600);
    let hours = Math.floor(timeRemainingSeconds / 3600);
    timeRemainingSeconds %= 3600;
    let minutes = Math.floor(timeRemainingSeconds / 60);
    let seconds = Math.floor(timeRemainingSeconds % 60);

    // For small widgets, use shorter format
    if (config.widgetFamily === 'small') {
        if (days > 0) return `${days}d ${hours}h`;
        else if (hours > 0) return `${hours}h ${minutes}m`;
        else if (minutes > 0) return `${minutes}m`;
        else return `${seconds}s`;
    } else {
        // For medium and large widgets, use full format
        if (days > 0) return `${days}d ${hours}h ${minutes}m`;
        else if (hours > 0) return `${hours}h ${minutes}m`;
        else if (minutes > 0) return `${minutes}m ${seconds}s`;
        else return `${seconds}s`;
    }
}

function getItemEmoji(itemType, category) {
    const emojis = {
        "Tree": "🌳", "Stone": "🪨", "Iron": "⚒️", "Gold": "🏆", "Crimstone": "💎", "Sunstone": "☀️", "Oil": "🛢️",
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
    
    return emojis[itemType] || "📦";
}

function getCategoryColor(category) {
    const colors = {
        'resource': Color.orange(), 'crop': Color.green(), 'fruit': Color.red(),
        'animal': Color.brown(), 'flower': Color.purple(), 'beehive': Color.yellow(),
        'greenhouse': Color.cyan(), 'mushroom': Color.blue(), 'crafting': Color.magenta(),
        'cooking': new Color("#FF69B4"), 'composter': Color.darkGray()
    };
    return colors[category] || Color.gray();
}

function getReadySummary(allItems) {
    let totalReady = 0;
    for (let itemData of Object.values(allItems)) {
        if (getTimeRemaining(itemData) <= 0) totalReady++;
    }
    return { totalReady };
}

// ====== MAIN WIDGET ======

async function createWidget() {
    let allItems = loadResources();
    let widget = new ListWidget();
    
    // Dark theme
    widget.backgroundColor = new Color("#1C1C1E");
    
    // Group the items by 5-minute tolerance (items within 5 minutes of each other)
    let groupedItems = {};
    
    for (let [itemName, itemData] of Object.entries(allItems)) {
        let category = itemData.category || 'resource';
        let itemType = itemData.name || itemData.type;
        let remaining = getTimeRemaining(itemData);
        
        // Find existing group within 5 minutes of tolerance or create new one
        let foundGroup = false;
        for (let [existingKey, existingGroup] of Object.entries(groupedItems)) {
            if (existingGroup.type === itemType) {
                // Check if this item is within 5 minutes of the existing group
                let timeDifference = Math.abs(remaining - existingGroup.remainingTime);
                if (timeDifference <= (5 * 60)) { // 5 minutes tolerance
                    // Add to existing group
                    existingGroup.count++;
                    existingGroup.totalAmount += itemData.amount || 0;
                    existingGroup.ids.push(itemName);
                    
                    // Keep the most urgent timing (closest to ready or been ready longest)
                    if (remaining <= 0) {
                        // For ready items, keep the one that's been ready the longest
                        if (Math.abs(remaining) > Math.abs(existingGroup.remainingTime)) {
                            existingGroup.remainingTime = remaining;
                        }
                    } else {
                        // For pending items, keep the one that will be ready soonest
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
            // Create new group
            let key = `${itemType}_${Object.keys(groupedItems).length}`;
            groupedItems[key] = {
                category: category, type: itemType, count: 1, totalAmount: itemData.amount || 0,
                remainingTime: remaining, ids: [itemName], isReady: remaining <= 0
            };
        }
    }
    
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
        let sortedGroups = Object.values(groupedItems).sort((a, b) => {
            if (a.isReady && !b.isReady) return -1;
            if (!a.isReady && b.isReady) return 1;
            return a.remainingTime - b.remainingTime;
        });
        
        let filteredGroups = sortedGroups;
        
        if (config.widgetFamily === 'small' || config.widgetFamily === 'medium') {
            filteredGroups = sortedGroups.filter(group => {
                if (group.remainingTime <= 0) {
                    let readyForSeconds = Math.abs(group.remainingTime);
                    let readyForDays = readyForSeconds / (24 * 3600);
                    return readyForDays < 1;
                }
                return true;
            });
        }
        
        // Limit items based on widget size
        let maxItems = config.widgetFamily === 'small' ? 8 : config.widgetFamily === 'large' ? 20 : 8;
        let displayedGroups = filteredGroups.slice(0, maxItems);
        
        // Display each group with perfect column alignment using fixed-width stacks
        for (let group of displayedGroups) {
            let emoji = getItemEmoji(group.type, group.category);
            let itemName = group.type;
            let quantity = `x${group.count}`;
            let totalText = group.totalAmount > 0 ? ` (${group.totalAmount.toFixed(1)})` : "";
            let timeStatus = formatTime(group.remainingTime);
            
            let fontSize = 11; // Unified font size of 11pt for all widget sizes
            
            // Create horizontal stack for perfect alignment
            let rowStack = widget.addStack();
            rowStack.layoutHorizontally();
            rowStack.spacing = 0;
            
            // Column 1: Item name with emoji (FORCE LEFT ALIGNMENT)
            let col1Stack = rowStack.addStack();
            // Adjust column width based on widget size for proper fit
            if (config.widgetFamily === 'small') {
                col1Stack.size = new Size(80, 0); // Smaller for small widget (169pt width)
            } else {
                col1Stack.size = new Size(130, 0); // Same size for medium and large widgets (360pt width)
            }
            col1Stack.layoutHorizontally(); // Force horizontal layout
            let col1Text = col1Stack.addText(`${emoji} ${itemName}`);
            col1Text.font = Font.systemFont(fontSize);
            col1Text.lineLimit = 1;
            col1Stack.addSpacer(); // This pushes text to the LEFT
            
            // Spacer between columns (only for medium and large widgets)
            let col2Text; // Declare variable for conditional use
            
            if (config.widgetFamily !== 'small') {
                rowStack.addSpacer(12); // Same spacer for medium and large widgets
                
                // Column 2: Quantity (fixed width, center aligned) - ONLY for medium and large
                let col2Stack = rowStack.addStack();
                col2Stack.size = new Size(65, 0); // Same size for medium and large widgets
                col2Text = col2Stack.addText(`${quantity}${totalText}`);
                col2Text.font = Font.systemFont(fontSize);
                col2Text.centerAlignText();
                col2Text.lineLimit = 1;
                
                // Spacer between columns
                rowStack.addSpacer(32); // Same spacer for medium and large widgets
            } else {
                // For small widget, minimal spacer to save space (169pt width total)
                rowStack.addSpacer(0);
            }
            
            // Column 3: Time (remaining width, right aligned)
            let col3Stack = rowStack.addStack();
            let col3Text = col3Stack.addText(timeStatus);
            col3Text.font = Font.systemFont(fontSize);
            col3Text.rightAlignText();
            col3Text.lineLimit = 1;
            
            // Color system: Handle col2Text for different widget sizes
            col1Text.textColor = new Color("#E5E5E7"); // Light gray for dark theme
            
            // Only set col2Text color if it exists (medium and large widgets)
            if (config.widgetFamily !== 'small' && col2Text) {
                col2Text.textColor = new Color("#E5E5E7"); // Light gray for dark theme
            }
            
            // Apply colors ONLY to time column based on status
            if (group.remainingTime <= 0) {
                // Item is ready
                let readyForSeconds = Math.abs(group.remainingTime);
                let readyForDays = readyForSeconds / (24 * 3600);
                
                if (readyForDays >= 1) {
                    // Ready depuis plus d'un jour : ROUGE
                    col3Text.textColor = Color.red();
                } else {
                    // Ready moins d'un jour : VERT
                    col3Text.textColor = Color.green();
                }
            } else {
                // Item is not ready yet
                let remainingHours = group.remainingTime / 3600;
                
                if (remainingHours <= 1) {
                    // Bientôt ready (moins d'une heure) : JAUNE
                    col3Text.textColor = Color.yellow();
                } else {
                    // Le reste : BLANC pour le thème sombre
                    col3Text.textColor = new Color("#E5E5E7");
                }
            }
            
            // Espacement entre les lignes
            if (config.widgetFamily === 'small') {
                widget.addSpacer(1);
            } else if (config.widgetFamily === 'large') {
                widget.addSpacer(2);
            } else {
                widget.addSpacer(1);
            }
        }
        
        // Show remaining count if there are more items - REMOVED
    }
    
    // Footer
    widget.addSpacer();
    let updateTime = widget.addText(`Updated: ${new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}`);
    updateTime.font = Font.systemFont(8);
    updateTime.textColor = new Color("#E5E5E7"); // Gray for dark theme
    updateTime.centerAlignText();
    
    return widget;
}

// ====== SUNFLOWER LAND API ======

async function loadFromAPI() {
    // ====== API RATE LIMITING ======
    const API_RATE_LIMIT_SECONDS = 30;
    const CACHE_KEY = 'sunflower_api_cache';
    const LAST_API_CALL_KEY = 'sunflower_last_api_call';
    
    try {
        // Check if we need to respect rate limiting
        let lastApiCallTime;
        try {
            lastApiCallTime = Keychain.get(LAST_API_CALL_KEY);
        } catch (e) {
            lastApiCallTime = null;
        }
        
        let currentTime = Date.now();
        
        if (lastApiCallTime) {
            let timeSinceLastCall = (currentTime - parseInt(lastApiCallTime)) / 1000;
            
            if (timeSinceLastCall < API_RATE_LIMIT_SECONDS) {
                console.log(`⏱️ Rate limit: ${Math.round(API_RATE_LIMIT_SECONDS - timeSinceLastCall)}s remaining. Using cached data.`);
                
                let cachedData;
                try {
                    cachedData = Keychain.get(CACHE_KEY);
                } catch (e) {
                    cachedData = null;
                }
                
                if (cachedData) {
                    try {
                        let parsedData = JSON.parse(cachedData);
                        saveResources(parsedData); // Save to resources for widget display
                        console.log("📱 Loaded cached API data (rate limiting)");
                        return parsedData;
                    } catch (e) {
                        console.log("⚠️ Failed to parse cached data, making new API call");
                    }
                }
            }
        }
        
        console.log("🌐 Making API call to Sunflower Land...");
        
        // API SFL
        let request = new Request(`https://api.sunflower-land.com/community/farms/${FARM_ID}`);
        let apiData = await request.loadJSON();
        
        Keychain.set(LAST_API_CALL_KEY, currentTime.toString());
        console.log("✅ API call completed, rate limit timestamp updated");
        
        let allItems = {};
        
        // 1. RESOURCES
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
                        plantedAt: resource[config.timestamp], type: config.name,
                        name: config.name, category: 'resource', amount: resource.amount || 0
                    };
                }
            }
        }
        
        // 2. CROPS
        if (apiData.farm && apiData.farm.crops) {
            for (let [cropId, cropInfo] of Object.entries(apiData.farm.crops)) {
                if (cropInfo.crop && cropInfo.crop.plantedAt && cropInfo.crop.name) {
                    let cropName = `${cropInfo.crop.name} ${cropId}`;
                    allItems[cropName] = {
                        plantedAt: cropInfo.crop.plantedAt, type: cropInfo.crop.name,
                        name: cropInfo.crop.name, category: 'crop', amount: parseFloat(cropInfo.crop.amount) || 0
                    };
                }
            }
        }
        
        // 3. FRUITS
        if (apiData.farm && apiData.farm.fruitPatches) {
            for (let [patchId, patchInfo] of Object.entries(apiData.farm.fruitPatches)) {
                if (patchInfo.fruit && patchInfo.fruit.name) {
                    let fruit = patchInfo.fruit;
                    let plantedAt = fruit.plantedAt;
                    let harvestedAt = fruit.harvestedAt || 0;
                    
                    // Use plantedAt if harvestedAt == 0, else harvestedAt
                    let timestampToUse = harvestedAt === 0 ? plantedAt : harvestedAt;
                    
                    if (timestampToUse) {
                        let fruitName = `${fruit.name} ${patchId}`;
                        allItems[fruitName] = {
                            plantedAt: timestampToUse, type: fruit.name,
                            name: fruit.name, category: 'fruit', 
                            amount: parseFloat(fruit.amount) || 0
                        };
                    }
                }
            }
        }
        
        // 4. ANIMALS
        // Check chickens in henHouse
        if (apiData.farm && apiData.farm.henHouse && apiData.farm.henHouse.animals) {
            console.log("🐔 Found henHouse animals:", Object.keys(apiData.farm.henHouse.animals).length);
            for (let [animalId, animalInfo] of Object.entries(apiData.farm.henHouse.animals)) {
                if (animalInfo.type === "Chicken" && animalInfo.awakeAt && animalInfo.asleepAt) {
                    // Traiter TOUS les poulets avec awakeAt/asleepAt, peu importe leur état
                    let animalName = `${animalInfo.type} ${animalId}`;
                    allItems[animalName] = {
                        awakeAt: animalInfo.awakeAt, 
                        asleepAt: animalInfo.asleepAt,
                        type: animalInfo.type, 
                        name: animalInfo.type, 
                        category: 'animal', 
                        amount: 0, 
                        state: animalInfo.state || "unknown"
                    };
                    console.log(`✅ Added chicken: ${animalName} (state: ${animalInfo.state}, awakeAt: ${animalInfo.awakeAt})`);
                }
            }
        }
        
        // Check cows and sheep in barn
        if (apiData.farm && apiData.farm.barn && apiData.farm.barn.animals) {
            console.log("🐄 Found barn animals:", Object.keys(apiData.farm.barn.animals).length);
            for (let [animalId, animalInfo] of Object.entries(apiData.farm.barn.animals)) {
                if ((animalInfo.type === "Cow" || animalInfo.type === "Sheep") && animalInfo.awakeAt && animalInfo.asleepAt) {
                    // Traiter TOUS les animaux avec awakeAt/asleepAt, peu importe leur état
                    let animalName = `${animalInfo.type} ${animalId}`;
                    allItems[animalName] = {
                        awakeAt: animalInfo.awakeAt, 
                        asleepAt: animalInfo.asleepAt,
                        type: animalInfo.type, 
                        name: animalInfo.type, 
                        category: 'animal', 
                        amount: 0, 
                        state: animalInfo.state || "unknown"
                    };
                    console.log(`✅ Added ${animalInfo.type}: ${animalName} (state: ${animalInfo.state}, awakeAt: ${animalInfo.awakeAt})`);
                }
            }
        }
        
        // 5. FLOWERS
        if (apiData.farm && apiData.farm.flowers && apiData.farm.flowers.flowerBeds) {
            for (let [bedId, bedInfo] of Object.entries(apiData.farm.flowers.flowerBeds)) {
                if (bedInfo.flower && bedInfo.flower.plantedAt && bedInfo.flower.name) {
                    let flowerName = `${bedInfo.flower.name} ${bedId}`;
                    allItems[flowerName] = {
                        plantedAt: bedInfo.flower.plantedAt, type: bedInfo.flower.name,
                        name: bedInfo.flower.name, category: 'flower', amount: parseFloat(bedInfo.flower.amount) || 0
                    };
                }
            }
        }
        
        // 6. BEEHIVES
        if (apiData.farm && apiData.farm.beehives) {
            for (let [hiveId, hiveInfo] of Object.entries(apiData.farm.beehives)) {
                if (hiveInfo.flowers && hiveInfo.flowers.length > 0) {
                    // Find the flower with the latest attachedUntil time
                    let latestFlower = hiveInfo.flowers.reduce((latest, current) => 
                        current.attachedUntil > latest.attachedUntil ? current : latest
                    );
                    
                    let hiveName = `Beehive ${hiveId}`;
                    allItems[hiveName] = {
                        attachedUntil: latestFlower.attachedUntil, type: 'Beehive',
                        name: 'Beehive', category: 'beehive', amount: 0
                    };
                }
            }
        }
        
        // 7. GREENHOUSE
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

        // 8. MUSHROOMS
        if (apiData.farm && apiData.farm.mushrooms) {
            let mushrooms = apiData.farm.mushrooms;
            // Normal mushrooms: spawnedAt + 16h
        if (mushrooms.spawnedAt) {
            allItems["Mushroom"] = {
                plantedAt: mushrooms.spawnedAt, type: "Mushroom",
                name: "Mushroom", category: 'mushroom', amount: 0
            };
        }
        
        // Magic mushrooms: magicSpawnedAt + 24h
        if (mushrooms.magicSpawnedAt) {
            allItems["Magic Mushroom"] = {
                plantedAt: mushrooms.magicSpawnedAt, type: "Magic Mushroom",
                name: "Magic Mushroom", category: 'mushroom', amount: 0
            };
        }
        }

        // 9. CRAFTING
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

        // 10. COOKING
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

        // 11. COMPOSTERS
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
        
        saveResources(allItems);
        console.log(`✅ ${Object.keys(allItems).length} items loaded from API`);
        
        try {
            Keychain.set(CACHE_KEY, JSON.stringify(allItems));
            console.log("💾 API data cached successfully");
        } catch (cacheError) {
            console.log("⚠️ Failed to cache API data:", cacheError);
        }
        
        return allItems;
        
    } catch (error) {
        console.log("❌ API Error:", error);
        
        let cachedData;
        try {
            cachedData = Keychain.get(CACHE_KEY);
        } catch (e) {
            cachedData = null;
        }
        
        if (cachedData) {
            try {
                let fallbackData = JSON.parse(cachedData);
                console.log("📱 Using cached data as fallback after API error");
                saveResources(fallbackData);
                return fallbackData;
            } catch (e) {
                console.log("⚠️ Failed to parse cached fallback data");
            }
        }
        
        // Last resort: use demo data
        console.log("🔄 Using demo data as final fallback");
        return loadResources();
    }
}

// ====== MAIN SCRIPT ======

async function main() {
    console.log("🌻 Starting Sunflower Land widget...");
    
    // Load data from API
    await loadFromAPI();
    
    // Create the widget
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
