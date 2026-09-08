// Widget Scriptable : Inventaire fleurs - chemins minimaux complets

// CONFIG - Limite objectif par type de graine
// Modifie ici pour ajuster l'objectif de chaque famille
let LIMITS = {
  "Sunpetal Seed":  __FILTER_SUNPETAL__,
  "Bloom Seed":     __FILTER_BLOOM__,
  "Lily Seed":      __FILTER_LILY__,
  "Edelweiss Seed": __FILTER_EDELWEISS__,
  "Gladiolus Seed": __FILTER_GLADIOLUS__,
  "Lavender Seed":  __FILTER_LAVENDER__,
  "Clover Seed":    __FILTER_CLOVER__
};

// CACHE API
let cacheKey = 'RAW_API_CACHE_KEY';
let cacheValue = Keychain.get(cacheKey);

if (!cacheValue) {
  let alert = new Alert();
  alert.title = "Cache not found";
  alert.message = `No data for "${cacheKey}".`;
  await alert.present();
  Script.complete();
}

let data = JSON.parse(cacheValue);
let inventory = data.farm.inventory;
let currentSeason = data.farm?.season?.season || data.season?.season || "winter";

// SAISONS
let seasonalSeeds = {
  "Edelweiss Seed": "winter",
  "Gladiolus Seed": "summer",
  "Lavender Seed":  "spring",
  "Clover Seed":    "autumn"
};

let seasonEmojis = {
  "winter": "❄️",
  "summer": "☀️",
  "spring": "🌸",
  "autumn": "🍂"
};

function isSeedAvailableThisSeason(seedName) {
  let s = seasonalSeeds[seedName];
  return !s || s === currentSeason;
}

function getSeasonEmoji(flowerName) {
  let recipe = flowerDB.recipes[flowerName];
  if (!recipe) return "";
  let s = seasonalSeeds[recipe.base_seed];
  return s ? (seasonEmojis[s] + " ") : "";
}

// BASE DE DONNEES FLEURS
let flowerDB = {
  "recipes": {
    "Red Pansy":             {"base_seed": "Sunpetal Seed", "additionals": ["Radish", "Banana"], "time": 1},
    "Yellow Pansy":          {"base_seed": "Sunpetal Seed", "additionals": ["Sunflower"], "time": 1},
    "Purple Pansy":          {"base_seed": "Sunpetal Seed", "additionals": ["Blue Pansy"], "time": 1},
    "White Pansy":           {"base_seed": "Sunpetal Seed", "additionals": ["Yellow Cosmos"], "time": 1},
    "Blue Pansy":            {"base_seed": "Sunpetal Seed", "additionals": ["Purple Cosmos"], "time": 1},
    "Red Cosmos":            {"base_seed": "Sunpetal Seed", "additionals": ["Yellow Daffodil"], "time": 1},
    "Yellow Cosmos":         {"base_seed": "Sunpetal Seed", "additionals": ["Yellow Pansy"], "time": 1},
    "Purple Cosmos":         {"base_seed": "Sunpetal Seed", "additionals": ["Beetroot"], "time": 1},
    "White Cosmos":          {"base_seed": "Sunpetal Seed", "additionals": ["Yellow Lotus"], "time": 1},
    "Blue Cosmos":           {"base_seed": "Sunpetal Seed", "additionals": ["Cauliflower", "Blueberry"], "time": 1},
    "Prism Petal":           {"base_seed": "Sunpetal Seed", "additionals": ["Blue Lotus"], "time": 1},
    "Red Balloon Flower":    {"base_seed": "Bloom Seed", "additionals": ["Sunflower"], "time": 2},
    "Yellow Balloon Flower": {"base_seed": "Bloom Seed", "additionals": ["Yellow Lotus"], "time": 2},
    "Purple Balloon Flower": {"base_seed": "Bloom Seed", "additionals": ["Blue Carnation"], "time": 2},
    "White Balloon Flower":  {"base_seed": "Bloom Seed", "additionals": ["White Daffodil"], "time": 2},
    "Blue Balloon Flower":   {"base_seed": "Bloom Seed", "additionals": ["Cauliflower", "Eggplant"], "time": 2},
    "Red Daffodil":          {"base_seed": "Bloom Seed", "additionals": ["Yellow Pansy"], "time": 2},
    "Yellow Daffodil":       {"base_seed": "Bloom Seed", "additionals": ["White Lotus"], "time": 2},
    "Purple Daffodil":       {"base_seed": "Bloom Seed", "additionals": ["Radish", "Blueberry"], "time": 2},
    "White Daffodil":        {"base_seed": "Bloom Seed", "additionals": ["Yellow Cosmos"], "time": 2},
    "Blue Daffodil":         {"base_seed": "Bloom Seed", "additionals": ["Purple Carnation"], "time": 2},
    "Celestial Frostbloom":  {"base_seed": "Bloom Seed", "additionals": ["White Pansy"], "time": 2},
    "Red Carnation":         {"base_seed": "Lily Seed", "additionals": ["Purple Pansy"], "time": 5},
    "Yellow Carnation":      {"base_seed": "Lily Seed", "additionals": ["Sunflower"], "time": 5},
    "Purple Carnation":      {"base_seed": "Lily Seed", "additionals": ["Eggplant", "Blueberry", "Apple"], "time": 5},
    "White Carnation":       {"base_seed": "Lily Seed", "additionals": ["Yellow Pansy"], "time": 5},
    "Blue Carnation":        {"base_seed": "Lily Seed", "additionals": ["Purple Daffodil"], "time": 5},
    "Red Lotus":             {"base_seed": "Lily Seed", "additionals": ["Beetroot"], "time": 5},
    "Yellow Lotus":          {"base_seed": "Lily Seed", "additionals": ["Red Pansy"], "time": 5},
    "Purple Lotus":          {"base_seed": "Lily Seed", "additionals": ["Blue Carnation"], "time": 5},
    "White Lotus":           {"base_seed": "Lily Seed", "additionals": ["Cauliflower", "Banana"], "time": 5},
    "Blue Lotus":            {"base_seed": "Lily Seed", "additionals": ["Blue Pansy"], "time": 5},
    "Primula Enigma":        {"base_seed": "Lily Seed", "additionals": ["Purple Balloon Flower"], "time": 5},
    "Red Edelweiss":         {"base_seed": "Edelweiss Seed", "additionals": ["Barley"], "time": 3},
    "Yellow Edelweiss":      {"base_seed": "Edelweiss Seed", "additionals": ["Onion"], "time": 3},
    "Purple Edelweiss":      {"base_seed": "Edelweiss Seed", "additionals": ["Rhubarb"], "time": 3},
    "White Edelweiss":       {"base_seed": "Edelweiss Seed", "additionals": ["Yellow Clover"], "time": 3},
    "Blue Edelweiss":        {"base_seed": "Edelweiss Seed", "additionals": ["Purple Edelweiss"], "time": 3},
    "Red Gladiolus":         {"base_seed": "Gladiolus Seed", "additionals": ["Yellow Edelweiss"], "time": 3},
    "Yellow Gladiolus":      {"base_seed": "Gladiolus Seed", "additionals": ["Pepper"], "time": 3},
    "Purple Gladiolus":      {"base_seed": "Gladiolus Seed", "additionals": ["Artichoke"], "time": 3},
    "White Gladiolus":       {"base_seed": "Gladiolus Seed", "additionals": ["Blue Gladiolus"], "time": 3},
    "Blue Gladiolus":        {"base_seed": "Gladiolus Seed", "additionals": ["Rhubarb"], "time": 3},
    "Red Lavender":          {"base_seed": "Lavender Seed", "additionals": ["Pepper"], "time": 3},
    "Yellow Lavender":       {"base_seed": "Lavender Seed", "additionals": ["Yellow Gladiolus"], "time": 3},
    "Purple Lavender":       {"base_seed": "Lavender Seed", "additionals": ["Purple Gladiolus"], "time": 3},
    "White Lavender":        {"base_seed": "Lavender Seed", "additionals": ["Rhubarb"], "time": 3},
    "Blue Lavender":         {"base_seed": "Lavender Seed", "additionals": ["Blue Clover"], "time": 3},
    "Red Clover":            {"base_seed": "Clover Seed", "additionals": ["Red Edelweiss"], "time": 3},
    "Yellow Clover":         {"base_seed": "Clover Seed", "additionals": ["Pepper"], "time": 3},
    "Purple Clover":         {"base_seed": "Clover Seed", "additionals": ["Red Lavender"], "time": 3},
    "White Clover":          {"base_seed": "Clover Seed", "additionals": ["Yellow Gladiolus"], "time": 3},
    "Blue Clover":           {"base_seed": "Clover Seed", "additionals": ["Rhubarb"], "time": 3}
  },
  "base_items": [
    "Sunpetal Seed", "Bloom Seed", "Lily Seed",
    "Edelweiss Seed", "Gladiolus Seed", "Lavender Seed", "Clover Seed",
    "Radish", "Banana", "Sunflower", "Apple", "Beetroot", "Eggplant",
    "Kale", "Cauliflower", "Parsnip", "Blueberry",
    "Artichoke", "Barley", "Onion", "Rhubarb", "Pepper"
  ]
};

let baseItems = flowerDB.base_items;

// QUANTITES CROSS-BREED
let crossBreedSeedSets = {
  "Sunpetal Seed": "SET_1", "Bloom Seed": "SET_1", "Lily Seed": "SET_1",
  "Edelweiss Seed": "SET_2", "Gladiolus Seed": "SET_2",
  "Lavender Seed": "SET_2", "Clover Seed": "SET_2"
};

let crossBreedAmounts = {
  "SET_1": { "Sunflower": 50, "Beetroot": 10, "Cauliflower": 5, "Parsnip": 5,
             "Eggplant": 5, "Radish": 5, "Kale": 5, "Blueberry": 3, "Apple": 3, "Banana": 3 },
  "SET_2": { "Rhubarb": 25, "Pepper": 15, "Onion": 10, "Artichoke": 8, "Barley": 5 }
};

function getCrossBreedAmount(baseSeed, ingredient) {
  let set = crossBreedSeedSets[baseSeed];
  if (!set) return 1;
  return (crossBreedAmounts[set] && crossBreedAmounts[set][ingredient]) || 1;
}

// HELPERS
function getLimitForFlower(flowerName) {
  let recipe = flowerDB.recipes[flowerName];
  return recipe ? (LIMITS[recipe.base_seed] || 10) : 10;
}

// Reserve minimum : objectif de la fleur, 0 pour items de base
function getMinToKeep(item) {
  if (baseItems.includes(item) && !item.includes("Seed")) return 0;
  return getLimitForFlower(item);
}

function getVirtualSpendable(virtualInventory, item) {
  return Math.max(0, parseInt(virtualInventory[item] || 0) - getMinToKeep(item));
}

// PARSE SHORTEST PATHS
// Format: "FleurA : SeedA + IngA -> FleurB : SeedB + (IngB ou IngC) | total minimal: Xd"
// Retourne { "FleurA": [{ flower, seed, ingredients }, ...], ... }
// chain[0] = etape finale, chain[N-1] = prerequis le plus profond
function parseShortestPaths(content) {
  let chains = {};
  if (!content) return chains;

  for (let line of content.split(/\r?\n/)) {
    let trimmed = line.trim();
    if (!trimmed || !trimmed.includes(" : ")) continue;

    let pipeIdx = trimmed.indexOf(" | ");
    let main = pipeIdx !== -1 ? trimmed.slice(0, pipeIdx) : trimmed;
    let segments = main.split(" -> ");
    let steps = [];
    let topFlower = null;

    for (let seg of segments) {
      let colonIdx = seg.indexOf(" : ");
      if (colonIdx === -1) continue;
      let flowerName = seg.slice(0, colonIdx).trim();
      let rest = seg.slice(colonIdx + 3).trim();
      let plusIdx = rest.indexOf(" + ");
      if (plusIdx === -1) continue;
      let seed = rest.slice(0, plusIdx).trim();
      let ingBlock = rest.slice(plusIdx + 3).trim();
      if (ingBlock.startsWith("(") && ingBlock.endsWith(")")) {
        ingBlock = ingBlock.slice(1, -1).trim();
      }
      let ingredients = ingBlock.split(" ou ").map(v => v.trim()).filter(Boolean);
      if (!topFlower) topFlower = flowerName;
      steps.push({ flower: flowerName, seed, ingredients });
    }

    if (topFlower && steps.length > 0) chains[topFlower] = steps;
  }
  return chains;
}

function generateShortestPaths(db) {
  let chains = {};
  let recipes = db.recipes;

  function findPath(flowerName, visited = new Set()) {
    if (visited.has(flowerName)) return null;
    let recipe = recipes[flowerName];
    if (!recipe) return null;

    let bestPath = null;
    let minTotalTime = Infinity;
    visited.add(flowerName);

    for (let ing of recipe.additionals) {
      let currentStep = { flower: flowerName, seed: recipe.base_seed, ingredients: recipe.additionals };
      let path = [currentStep];
      let totalTime = recipe.time;

      if (recipes[ing]) {
        let sub = findPath(ing, new Set(visited));
        if (sub) {
          path = path.concat(sub);
          totalTime += sub.reduce((sum, s) => sum + (recipes[s.flower]?.time || 0), 0);
        } else {
          totalTime = Infinity;
        }
      }

      if (totalTime < minTotalTime) {
        minTotalTime = totalTime;
        bestPath = path;
      }
    }
    return bestPath;
  }

  for (let flower in recipes) {
    let path = findPath(flower);
    if (path) chains[flower] = path;
  }
  return chains;
}

function loadShortestPaths() {
  return generateShortestPaths(flowerDB);
}

let shortestChains = loadShortestPaths();

// CHOISIR LE MEILLEUR INGREDIENT
// Prefere l'ingredient avec le plus gros stock disponible
function pickIngredient(flowerName, ingredients, craftsNeeded, virtualInventory) {
  let bestIng = ingredients[0];
  let maxStock = -1;

  for (let ing of ingredients) {
    let stock = getVirtualSpendable(virtualInventory, ing);
    if (stock > maxStock) {
      maxStock = stock;
      bestIng = ing;
    }
  }
  return bestIng;
}

// ANALYSE D'UNE FLEUR - etape directe uniquement
// La cascade vers les ingredients intermediaires est geree par la file externe.
// Cela evite le double-comptage (boucle interne + pushDemand externe).
function analyzeFlower(flowerName, virtualInventory, forcedCraftsNeeded) {
  let stock = parseInt(virtualInventory[flowerName] || 0);
  let limit = getLimitForFlower(flowerName);
  let craftsNeeded = forcedCraftsNeeded !== undefined
    ? forcedCraftsNeeded
    : Math.max(0, limit - stock);
  if (craftsNeeded === 0) return null;

  // Utilise uniquement chain[0] = etape directe de cette fleur
  let chain = shortestChains[flowerName];
  let directStep = (chain && chain.length > 0) ? chain[0] : null;
  if (!directStep) {
    let recipe = flowerDB.recipes[flowerName];
    if (!recipe) return null;
    directStep = { flower: flowerName, seed: recipe.base_seed, ingredients: recipe.additionals };
  }

  let seedTime = flowerDB.recipes[flowerName]?.time || 0;
  let chosenIng = pickIngredient(flowerName, directStep.ingredients, craftsNeeded, virtualInventory);
  let amountPerCraft = getCrossBreedAmount(directStep.seed, chosenIng);
  let totalIngNeeded = craftsNeeded * amountPerCraft;

  let ingStockBefore = parseInt(virtualInventory[chosenIng] || 0);
  let ingSpendable = Math.max(0, ingStockBefore - getMinToKeep(chosenIng));
  let useFromStock = Math.min(totalIngNeeded, ingSpendable);
  let deficit = Math.max(0, totalIngNeeded - useFromStock);

  let seedStock = parseInt(virtualInventory[directStep.seed] || 0);
  let seedOk = seedStock >= craftsNeeded;
  virtualInventory[directStep.seed] = Math.max(0, seedStock - craftsNeeded);

  virtualInventory[chosenIng] = Math.max(0, ingStockBefore - useFromStock);
  // Important: ne pas ajouter la fleur planifiee au stock virtuel.
  // Sinon, elle peut etre reconsommee immediatement par des demandes suivantes,
  // ce qui sous-estime les besoins reels (ex: 2 au lieu de 3).

  return {
    flowerName, stock, limit, craftsNeeded,
    steps: [{
      stepFlower: flowerName,
      craftsForThis: craftsNeeded,
      seed: directStep.seed,
      seedTime,
      seedStock,
      seedOk,
      ingredient: chosenIng,
      neededAmount: totalIngNeeded,
      usedFromStock: useFromStock,
      ingStockBefore,
      deficit,
      ok: deficit === 0
    }]
  };
}

// CONSTRUCTION DE LA LISTE
let lowFlowers = [];
let virtualInventory = Object.assign({}, inventory);
let planByFlower = {};

let seasonFlowers = Object.keys(flowerDB.recipes).filter((flowerName) => {
  let recipe = flowerDB.recipes[flowerName];
  return isSeedAvailableThisSeason(recipe.base_seed);
});
let seasonFlowerSet = new Set(seasonFlowers);

function ensurePlanEntry(flowerName) {
  if (!planByFlower[flowerName]) {
    planByFlower[flowerName] = {
      flowerName,
      stock: parseInt(inventory[flowerName] || 0),
      limit: getLimitForFlower(flowerName),
      craftsNeeded: 0,
      steps: []
    };
  }
  return planByFlower[flowerName];
}

// Planification predictive: une file de demandes pour ajouter automatiquement
// toute fleur intermediaire manquante comme entree de liste complete.
let demandQueue = [];
let queueMap = {};
let inQueue = {};
let totalDemandByFlower = {};

function pushDemand(flowerName, amount) {
  if (!amount || amount <= 0) return;
  if (!seasonFlowerSet.has(flowerName)) return;

  if (totalDemandByFlower[flowerName] === undefined) {
    totalDemandByFlower[flowerName] = 0;
  }
  totalDemandByFlower[flowerName] += amount;

  if (queueMap[flowerName] === undefined) {
    queueMap[flowerName] = 0;
  }
  queueMap[flowerName] += amount;

  // Si une nouvelle demande arrive apres un premier traitement,
  // il faut remettre la fleur dans la file pour additionner correctement.
  if (!inQueue[flowerName]) {
    demandQueue.push(flowerName);
    inQueue[flowerName] = true;
  }
}

// Demandes racines: fleurs sous limite reelle
for (let flowerName of seasonFlowers) {
  let realStock = parseInt(inventory[flowerName] || 0);
  let limit = getLimitForFlower(flowerName);
  if (realStock < limit) {
    pushDemand(flowerName, limit - realStock);
  }
}

let maxTasks = 100;
let taskCount = 0;
while (demandQueue.length > 0 && taskCount < maxTasks) {
  let flowerName = demandQueue.shift();
  inQueue[flowerName] = false;
  let neededNow = queueMap[flowerName] || 0;
  queueMap[flowerName] = 0;
  if (neededNow <= 0) continue;

  let analysis = analyzeFlower(flowerName, virtualInventory, neededNow);
  if (!analysis) continue;

  let entry = ensurePlanEntry(flowerName);
  entry.craftsNeeded += analysis.craftsNeeded;
  // Merge steps par ingredient pour eviter les doublons si la fleur est re-analysee
  for (let s of analysis.steps) {
    let existing = entry.steps.find(e => e.ingredient === s.ingredient);
    if (existing) {
      existing.craftsForThis += s.craftsForThis;
      existing.neededAmount += s.neededAmount;
      existing.usedFromStock += s.usedFromStock;
      existing.deficit += s.deficit;
      existing.seedOk = existing.seedOk && s.seedOk;
      existing.ok = existing.deficit === 0;
    } else {
      entry.steps.push(Object.assign({}, s));
    }
  }

  // Si une etape manque d'une fleur ingredient, on l'ajoute explicitement a la liste
  for (let step of analysis.steps) {
    if (step.deficit > 0 && flowerDB.recipes[step.ingredient]) {
      pushDemand(step.ingredient, step.deficit);
    }
  }

  taskCount += 1;
}

// Verrouille l'affichage sur le total cumule des demandes.
for (let flowerName in totalDemandByFlower) {
  let entry = ensurePlanEntry(flowerName);
  entry.craftsNeeded = totalDemandByFlower[flowerName];
}

lowFlowers = Object.values(planByFlower);

// Tri : plus grand déficit prévisionnel en premier
lowFlowers.sort((a, b) => b.craftsNeeded - a.craftsNeeded);

// Fleurs au-dessus de la limite (safe) pour compléter le widget
let safeFlowers = seasonFlowers
  .filter(name => !planByFlower[name])
  .map(name => ({
    flowerName: name,
    stock: parseInt(inventory[name] || 0),
    limit: getLimitForFlower(name),
    craftsNeeded: 0,
    steps: [],
    isSafe: true
  }))
  .sort((a, b) => a.stock - b.stock);

  let allDisplayFlowers = lowFlowers.concat(safeFlowers);

  // ANALYSE POUR FLEURS SAFE (génération de steps indicatifs)
  for (let f of allDisplayFlowers) {
    if (f.isSafe) {
      let analysis = analyzeFlower(f.flowerName, Object.assign({}, inventory), 1);
      if (analysis) f.steps = analysis.steps;
    }
  }

  // AFFICHAGE
  function addFlowerToStack(stack, analysis) {
    let { flowerName, stock, limit, craftsNeeded, steps, isSafe } = analysis;

    let emoji = getSeasonEmoji(flowerName);
    // Ligne 1 : nom + stock/limite + quantite a crafter
    let titleRow = stack.addText(emoji + flowerName + " " + stock + "/" + limit);
    titleRow.font = Font.boldSystemFont(11);
    titleRow.textColor = isSafe ? new Color("#8e8e93") : new Color("#ffffff");

    for (let step of steps) {
      // Ligne 2 : graine + jours + nombre de crafts (toujours x1 pour les fleurs safe car indicatif)
      let count = isSafe ? 1 : step.craftsForThis;
      let seedShort = step.seed.replace(" Seed", "");
      let seedRow = stack.addText(seedShort + " " + step.seedTime + "d x" + count);
      seedRow.font = Font.systemFont(11);
      seedRow.textColor = isSafe ? new Color("#8e8e93") : (step.seedOk ? new Color("#2ecc71") : new Color("#e74c3c"));

      // Ligne 3 : ingredient + quantite necessaire
      let amount = isSafe ? getCrossBreedAmount(step.seed, step.ingredient) : step.neededAmount;
      let ingRow = stack.addText(step.ingredient + " x" + amount);
      ingRow.font = Font.systemFont(11);
      ingRow.textColor = isSafe ? new Color("#8e8e93") : (step.ok ? new Color("#2ecc71") : new Color("#e74c3c"));
    }

    stack.addSpacer(4);
  }

// WIDGET
let widget = new ListWidget();
widget.backgroundColor = new Color("#000000");
widget.setPadding(8, 25, 8, 8);

let mainStack = widget.addStack();
mainStack.layoutHorizontally();

let leftCol = mainStack.addStack();
leftCol.layoutVertically();
leftCol.size = new Size(160, 0);

mainStack.addSpacer(4);

let rightCol = mainStack.addStack();
rightCol.layoutVertically();
rightCol.size = new Size(160, 0);

let maxFlowers = Math.min(allDisplayFlowers.length, 16);
for (let i = 0; i < maxFlowers; i++) {
  addFlowerToStack(i % 2 === 0 ? leftCol : rightCol, allDisplayFlowers[i]);
}

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentLarge();
}

Script.complete();
