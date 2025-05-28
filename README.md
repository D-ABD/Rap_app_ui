# RAP App UI

Application mobile et web construite avec **Expo** et **React Native**, connectée à un backend Django via des **tokens JWT**. Interface modulaire, responsive et thématisée (clair/sombre) pour accompagner le projet RAP.

## 🔧 Stack technique

- **Expo + Expo Router** : navigation déclarative et multi-plateforme (iOS, Android, Web)
- **React Native + Typescript**
- **Restyle** : Design system avec thème clair / sombre
- **Axios** : communication avec l'API Django (authentification JWT)
- **AsyncStorage** : persistance des tokens
- **Context API** : gestion globale de l'authentification et du thème
- **Toast** : feedback utilisateur

---

## 🗂️ Structure du projet

# RAP App UI

Application mobile et web construite avec **Expo** et **React Native**, connectée à un backend Django via des **tokens JWT**. Interface modulaire, responsive et thématisée (clair/sombre) pour accompagner le projet RAP.

## 🔧 Stack technique

- **Expo + Expo Router** : navigation déclarative et multi-plateforme (iOS, Android, Web)
- **React Native + Typescript**
- **Restyle** : Design system avec thème clair / sombre
- **Axios** : communication avec l'API Django (authentification JWT)
- **AsyncStorage** : persistance des tokens
- **Context API** : gestion globale de l'authentification et du thème
- **Toast** : feedback utilisateur

---

## 🗂️ Structure du projet

rap_app_ui/
├── app/ # Routes (expo-router)
│ ├── (tabs)/ # Onglets principaux (Dashboard, Paramètres, etc.)
│ ├── screen/ # Autres écrans secondaires
│ └── _layout.tsx # Layout racine
├── src/
│ ├── api/ # Axios + gestion des tokens
│ ├── components/ # Header, boutons, wrapper, etc.
│ ├── contexts/ # AuthContext, ThemeContext
│ ├── services/ # Appels à l'API
│ ├── theme/ # Thème Restyle (clair/sombre)
│ └── types/ # Types globaux
├── app.json # Configuration (API_URL, nom, etc.)
└── tsconfig.json # Paths personnalisés


---

## ✅ Fonctionnalités

- Authentification par email + mot de passe
- Récupération automatique du token en mémoire
- Refresh automatique du token expiré
- Interface **responsive** avec **mode sombre/clair**
- Header réutilisable avec :
  - Retour
  - Profil utilisateur
  - Déconnexion
  - Rafraîchissement
- Écrans de gestion : paramètres, centre, utilisateur, etc.
- Composant `ScreenWrapper` pour un layout homogène

---

## 🚀 Lancer le projet

### Prérequis :
- Node.js ≥ 18
- Expo CLI : `npm install -g expo-cli`
- Backend Django en local ou distant

### Lancer l'app :
```bash
git clone https://github.com/ton-utilisateur/rap_app_ui.git
cd rap_app_ui
npm install
npm start

✍️ Auteur
Projet développé par ABD pour le programme RAP — 2025.