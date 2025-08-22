# 🌻 Sunflower Land Widget for iOS with Notifications

---

## Table of Contents / Sommaire

- [🌻 Quick Start (EN)](#quick-start-en)
- [🌻 Démarrage rapide (FR)](#demarrage-rapide-fr)
- [🛠️ Manual Configuration / Configuration manuelle](#manual-configuration--configuration-manuelle)
- [💡 Tips & FAQ / Astuces & FAQ](#tips--faq--astuces--faq)

---

## 🖼️ Aperçu visuel / Visual Preview

<table>
  <tr>
    <td><img src="IMG_9819.jpg" alt="Sunflower Land Widget - Screenshot 1" width="300" /></td>
    <td><img src="IMG_9836.jpg" alt="Sunflower Land Widget - Screenshot 3" width="300" /></td>
  </tr>
  <tr>
    <td><img src="IMG_9820.jpg" alt="Sunflower Land Widget - Screenshot 2" width="300" /></td>
    <td><img src="https://github.com/UsernameYann/Sunflower-Land-Widget-for-iOS/blob/main/guide_widget.gif?raw=true" alt="Guide: Add Widget" width="320" /></td>
  </tr>
</table>

---

## 🌻 Quick Start (EN)

### 1️⃣ Install Scriptable

Download Scriptable from the App Store: [Scriptable on App Store](https://apps.apple.com/app/scriptable/id1405459188)

### 2️⃣ Copy the installer script

Open [install_SFL_widget.js](install_SFL_widget.js), select all the code and copy it.

> 📱 Tip: On iPhone, tap and hold to select all, then tap “Copy”.

### 3️⃣ Open Scriptable

Open the Scriptable app on your iPhone. Tap the **+** button to create a new script.

### 4️⃣ Paste and run

Paste the code, save, and run the script. Follow the instructions to set up your Farm ID and notifications.

### 🌻 Direct widget script

You can also copy [SFL-widget+Notif.js](SFL-widget+Notif.js) and paste it directly in Scriptable for the all-in-one widget.

---

## 🌻 Démarrage rapide (FR)

### 1️⃣ Installer Scriptable

Téléchargez Scriptable sur l’App Store : [Scriptable sur l’App Store](https://apps.apple.com/app/scriptable/id1405459188)

### 2️⃣ Copier le script d’installation

Ouvrez [install_SFL_widget.js](install_SFL_widget.js), sélectionnez tout le code et copiez-le.

> 📱 Astuce : Sur iPhone, appuyez longtemps pour tout sélectionner, puis “Copier”.

### 3️⃣ Ouvrir Scriptable

Ouvrez l’application Scriptable sur votre iPhone. Appuyez sur le bouton **+** pour créer un nouveau script.

### 4️⃣ Coller et lancer

Collez le code, enregistrez, puis lancez le script. Suivez les instructions pour configurer votre Farm ID et les notifications.

### 🌻 Script widget direct

Vous pouvez aussi copier [SFL-widget+Notif.js](SFL-widget+Notif.js) et le coller directement dans Scriptable pour le widget tout-en-un.

---

## 🛠️ Manual Configuration / Configuration manuelle

To manually set your Farm ID and notification settings, edit these lines in the script:

```js
// ====== CONFIGURATION ======
// ⚠️ CHANGE YOUR FARM ID HERE:
const FARM_ID = "__FARM_ID__";

// ⚠️ NOTIFICATION SETTINGS:
const enableNotifications = __ENABLE_NOTIFICATIONS__; // true = enabled, false = disabled
```

🌻 **How to personalize notifications?**

- If you want to receive harvest notifications, set:
  ```js
  const enableNotifications = true; // Notifications ON
  ```
- If you do NOT want notifications, set:
  ```js
  const enableNotifications = false; // Notifications OFF
  ```

🌻 **Example / Exemple :**

```js
// ====== CONFIGURATION ======
// ⚠️ CHANGE YOUR FARM ID HERE:
const FARM_ID = "6826774918530594"; // Replace with your actual farm ID

// ⚠️ NOTIFICATION SETTINGS:
const enableNotifications = true; // Set to false to disable notifications
```

---

## 💡 Tips & FAQ / Astuces & FAQ

- 🌻 If import links don’t work, use copy-paste (most reliable)
- 🛠️ You can always edit the script to change your Farm ID or notification settings
- 🔔 Notifications require Scriptable to be allowed in iOS settings
- 📲 Open Scriptable regularly to keep notifications working
- 🔄 Tap the widget to refresh manually

---

## 🌻 Bonus & Support

- 👋 Visit my farm: c'est ici 👉 [Click here to visit my Sunflower Land farm](https://sunflower-land.com/play/#/visit/6826774918530594)
- _Donations (ETH/Polygon):_ `0x450240d67aE2Def43DF8bF15ADC8c51a35918B5A`

---

**🎉 Enjoy your Sunflower Land widget with notifications! / Profitez bien de votre widget Sunflower Land avec notifications !**

