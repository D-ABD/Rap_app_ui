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







# 🧱 Structure frontend modulaire et typée (Expo + Django + OpenAPI)

## 👌 Objectif

Structurer le frontend de façon **claire, modulaire, scalable et typée**, pour consommer proprement mon backend **Django REST (OpenAPI)** depuis une app **Expo Router (React Native)**.

---

## ⚙️ Technologies utilisées

* Backend : Django REST Framework avec schéma `OpenAPI` (`schema.yaml`)
* Frontend : Expo Router (React Native)
* Requêtes : `Axios` (configurée dans `axios.ts`)
* Stockage : `AsyncStorage` (gestion des tokens)
* Typage & appels API : Génération depuis `schema.yaml`
* (Optionnel) React Query pour la gestion du cache

---

## 🌟 Objectif technique

Avoir une base modulaire et typée avec :

✅ Types TypeScript générés automatiquement
✅ Appels API typés avec Axios (`axios.ts`)
✅ Modules frontend par domaine métier
🔁 (Optionnel) intégration avec React Query pour cache et mutations automatiques

---

## 🧩 1. Modules à générer

Basés sur mes modèles métiers :

| Module          | Contenu lié aux modèles                                       |
| --------------- | ------------------------------------------------------------- |
| `formation/`    | Formations, Documents, Commentaires                           |
| `crm/`          | Prospection, Partenaires, Historique prospection              |
| `evenements/`   | Événements                                                    |
| `parametres/`   | Centres, Types d'offres, Rapports, Statuts, Logs, Historiques |
| `vae/`          | VAE, Jury                                                     |
| `prepa_comp/`   | Semaine, PrepaCompGlobal                                      |
| `utilisateurs/` | User, Auth, Me, Login                                         |

---

## 🧱 2. Structure d’un module

Exemple pour le module `formation/` :

```
src/
└── modules/
    └── formation/
        ├── formations.types.ts   // Types TS : Formation, FormationRequest...
        └── formations.api.ts     // Fonctions API : getFormations(), createFormation()...
```

---

## 🧪 3. Types TypeScript à générer

À partir du fichier `schema.yaml`, on génère :

* ✅ Type principal : `Formation`, `Document`, `Evenement`, etc.
* ✅ Payload de création / mise à jour : `FormationRequest`, etc.
* ✅ Réponses paginées : `PaginatedFormationList`, etc.

---

## 🔄 4. Fonctions API typées à écrire

Pour chaque ressource :

```ts
getAll()            // GET     /ressource/
getById(id)         // GET     /ressource/{id}/
create(data)        // POST    /ressource/
update(id, data)    // PUT     /ressource/{id}/
patch(id, data)     // PATCH   /ressource/{id}/
delete(id)          // DELETE  /ressource/{id}/
```

---

## 🔁 5. (Optionnel) React Query

Ajout d’une couche de **cache** + **mutation automatique** :

```ts
useGetFormations()
useCreateFormation()
useUpdateFormation()
...
```

---

## 🔐 axios.ts – Configuration sécurisée

```ts
/**
 * axios.ts
 * - Gère l’injection automatique du JWT
 * - Rafraîchit le token expiré automatiquement
 */

import axios from 'axios';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTokens, storeTokens, clearTokens } from '@/src/api/storage';

const API_URL = Constants.expoConfig?.extra?.API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshAccessToken = async (refreshToken: string): Promise<{ access: string }> => {
  const response = await api.post('/token/refresh/', { refresh: refreshToken });
  return response.data;
};

api.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { refresh } = await getTokens();
        if (!refresh) throw new Error('No refresh token found');

        const { access } = await refreshAccessToken(refresh);
        await storeTokens(access, refresh);

        api.defaults.headers.common.Authorization = `Bearer ${access}`;
        originalRequest.headers.Authorization = `Bearer ${access}`;

        return api(originalRequest);
      } catch (err) {
        await clearTokens();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
```

---

## 🧠 Étapes à suivre (résumé)

1. ✅ Générer les types depuis `schema.yaml` (avec Orval ou outil custom)
2. ✅ Créer les modules dans `src/modules/<domaine>/`
3. ✅ Écrire les fonctions API typées (ou générer automatiquement)
4. 🔁 (Optionnel) Ajouter React Query pour `useQuery`, `useMutation`, etc.
5. ✅ Documenter chaque module pour scalabilité
