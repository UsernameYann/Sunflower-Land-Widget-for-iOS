# 🌻 Sunflower Land Widget for iOS

**Français** | [English](#english-version)

Widget iOS pour suivre tous vos éléments Sunflower Land directement sur votre écran d'accueil.

## 📱 Installation

### Étape 1 : Télécharger Scriptable
1. Téléchargez l'app **Scriptable** depuis l'App Store (gratuite)
2. Ouvrez Scriptable

### Étape 2 : Ajouter le script
1. Dans Scriptable, appuyez sur le bouton **+** en haut à droite
2. Copiez tout le contenu du fichier `sunflower-widget-final.js`
3. Collez-le dans le nouvel script
4. Donnez un nom à votre script (ex: "Sunflower Land")

### Étape 3 : Configurer votre ID de ferme
1. **IMPORTANT** : Changez la ligne 8 du script :
   ```javascript
   const FARM_ID = "XXXXX";  // ⬅️ Remplacez par VOTRE ID
   ```
2. Pour trouver votre ID :
   - Allez sur https://sunflower-land.com/play
   - Connectez-vous à votre ferme
   - Cliquez sur **Settings** (roue dentée) → **Game Options**
   - Votre Farm ID est affiché en haut

### Étape 4 : Ajouter le widget à votre écran d'accueil
1. Maintenez appuyé sur votre écran d'accueil iOS
2. Appuyez sur le bouton **+** en haut à gauche
3. Recherchez **Scriptable**
4. Choisissez la taille de widget (Small/Medium/Large)
5. Appuyez sur **Ajouter le widget**
6. Configurez le widget → **Script** → Sélectionnez votre script
7. Appuyez sur **Terminé**

## 📸 Aperçu

<div align="center">
  <img src="IMG_9819.jpg" alt="Widget Medium et Large" width="300"/>
  <img src="IMG_9820.jpg" alt="Widget Small" width="200"/>
</div>

*Exemples du widget en tailles Small, Medium et Large sur iOS*

## 🎮 Utilisation

### Tailles de widget supportées
- **Small** (8 éléments max) : Affichage compact, pas de quantités
- **Medium** (8 éléments max) : Affichage standard avec quantités  
- **Large** (20 éléments max) : Affichage détaillé complet

## 🌟 Éléments suivis

Le widget affiche **TOUS** vos éléments du jeu :

- 🌳 **Ressources** : Arbres, Pierres, Fer, Or, etc.
- 🌱 **Cultures** : Tournesol, Pommes de terre, Blé, etc.
- 🍎 **Fruits** : Tomates, Citrons, Pommes, etc.
- 🐔 **Animaux** : Poules, Vaches, Moutons (seulement ceux "prêts" et "malades")
- 🌺 **Fleurs** : Pensées, Cosmos, Jonquilles, etc.
- 🍯 **Ruches**, 🍚 **Serre**, 🍰 **Cuisine**, 🔨 **Artisanat**
- 🍄 **Champignons**, 🌱 **Composteurs**

### Codes couleur
- 🔴 **Rouge** : Prêt depuis plus d'1 jour
- 🟢 **Vert** : Prêt depuis moins d'1 jour
- 🟡 **Jaune** : Prêt depuis moins d'1 heure
- ⚪ **Gris clair** : Pas encore prêt

### Tri et groupement
- Les éléments sont triés par **temps restant** (chronologique)
- Les éléments du même type prêts dans les 5 minutes sont groupés
- Affichage du nombre total d'éléments (ex: "Arbres x3")

## ⚠️ Limitations Apple

### Mise à jour automatique
- **iOS limite les mises à jour en arrière-plan** des widgets
- Le widget peut ne pas se mettre à jour immédiatement
- **Fréquence normale** : toutes les 15-30 minutes
- **Pour forcer une mise à jour** : appuyez sur le widget

### Limitation de l'API
- Le widget respecte les bonnes pratiques (30 secondes minimum entre les appels API)
- Utilise un système de cache intelligent

### Conseils pour une meilleure expérience
1. **Ouvrez l'app Scriptable** de temps en temps (maintient l'app active)
2. **Utilisez votre téléphone régulièrement** (évite la mise en veille profonde)
3. **Gardez l'app Scriptable** en arrière-plan
4. **Appuyez sur le widget** si vous voulez une mise à jour immédiate

## 🔧 Dépannage

### "Aucun élément suivi"
- ✅ **Vérifiez votre ID de ferme** dans la ligne 8 du script
- ✅ **Vérifiez votre connexion internet**
- ✅ **Assurez-vous d'avoir des éléments en cours** dans votre ferme

### Le widget ne se met pas à jour
- ℹ️ **C'est normal** : iOS limite les mises à jour automatiques
- 🔄 **Solution** : Appuyez sur le widget pour forcer la mise à jour
- 📱 **Astuce** : Ouvrez Scriptable de temps en temps

### Erreurs dans la console
- Ouvrez **Scriptable** → votre script → **▶️** pour voir les erreurs
- Vérifiez les messages de débogage dans la console
- Vérifiez que votre ID de ferme est correct

---

# English Version

iOS widget to track all your Sunflower Land elements directly on your home screen.

## 📱 Installation

### Step 1: Download Scriptable
1. Download **Scriptable** app from the App Store (free)
2. Open Scriptable

### Step 2: Add the script
1. In Scriptable, tap the **+** button in the top right
2. Copy all content from `sunflower-widget-final.js` file
3. Paste it into the new script
4. Give your script a name (e.g., "Sunflower Land")

### Step 3: Configure your farm ID
1. **IMPORTANT**: Change line 8 of the script:
   ```javascript
   const FARM_ID = "XXXXX";  // ⬅️ Replace with YOUR ID
   ```
2. To find your ID:
   - Go to https://sunflower-land.com/play
   - Connect to your farm
   - Click **Settings** (gear icon) → **Game Options**
   - Your Farm ID is displayed at the top

### Step 4: Add widget to your home screen
1. Long press on your iOS home screen
2. Tap the **+** button in the top left
3. Search for **Scriptable**
4. Choose widget size (Small/Medium/Large)
5. Tap **Add Widget**
6. Configure widget → **Script** → Select your script
7. Tap **Done**

## 📸 Preview

<div align="center">
  <img src="IMG_9819.jpg" alt="Medium and Large Widgets" width="300"/>
  <img src="IMG_9820.jpg" alt="Small Widget" width="200"/>
</div>

*Examples of the widget in Small, Medium and Large sizes on iOS*

## 🎮 Usage

### Supported widget sizes
- **Small** (8 items max): Compact display, no quantities
- **Medium** (8 items max): Standard display with quantities
- **Large** (20 items max): Full detailed display

## 🌟 Tracked elements

The widget displays **ALL** your game elements:

- 🌳 **Resources**: Trees, Stones, Iron, Gold, etc.
- 🌱 **Crops**: Sunflower, Potatoes, Wheat, etc.
- 🍎 **Fruits**: Tomatoes, Lemons, Apples, etc.
- 🐔 **Animals**: Chickens, Cows, Sheep (only "ready" and "sick" ones)
- 🌺 **Flowers**: Pansies, Cosmos, Daffodils, etc.
- 🍯 **Beehives**, 🍚 **Greenhouse**, 🍰 **Cooking**, 🔨 **Crafting**
- 🍄 **Mushrooms**, 🌱 **Composters**

### Color codes
- 🔴 **Red**: Ready for more than 1 day
- 🟢 **Green**: Ready for less than 1 day
- 🟡 **Yellow**: Ready for less than 1 hour
- ⚪ **Light gray**: Not ready yet

### Sorting and grouping
- Items are sorted by **time remaining** (chronological)
- Items of the same type ready within 5 minutes are grouped
- Display total count of items (e.g., "Trees x3")

## ⚠️ Apple Limitations

### Automatic updates
- **iOS limits background widget updates**
- Widget may not update immediately
- **Normal frequency**: every 15-30 minutes  
- **To force update**: tap the widget

### API limitations
- Widget follows best practices (30 seconds minimum between API calls)
- Uses intelligent caching system

### Tips for better experience
1. **Open the Scriptable app** from time to time (keeps app active)
2. **Use your phone regularly** (prevents deep sleep)
3. **Keep Scriptable app** in background
4. **Tap the widget** if you want immediate update

## 🔧 Troubleshooting

### "No items tracked"
- ✅ **Check your farm ID** in line 8 of the script
- ✅ **Check your internet connection**
- ✅ **Make sure you have ongoing items** in your farm

### Widget doesn't update
- ℹ️ **This is normal**: iOS limits automatic updates
- 🔄 **Solution**: Tap the widget to force update 
- 📱 **Tip**: Open Scriptable from time to time

### Console errors
- Open **Scriptable** → your script → **▶️** to see errors
- Check debug messages in console
- Verify your farm ID is correct

---

## 🤝 Credits

Based on the original Python lambda+ntfy project with analyzers for all game elements. The JavaScript widget faithfully reproduces the time calculation logic.

**Note**: This widget uses the public Sunflower Land API and requires no authentication. It respects API limits and doesn't make excessive requests.
