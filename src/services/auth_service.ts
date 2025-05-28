/**
 * auth_service.ts
 *
 * 💡 Service centralisé pour gérer l’authentification via l’API.
 *
 * Ce fichier contient toutes les fonctions nécessaires à la connexion,
 * au rafraîchissement du token et à la récupération du profil utilisateur.
 *
 * Fonctions exportées :
 *
 * - `login(email, password)` :
 *   Envoie les identifiants à l’endpoint `/token/` pour récupérer les tokens `access` et `refresh`.
 *   ➤ Retourne : `{ access, refresh }`
 *
 * - `getUserProfile()` :
 *   Appelle `/users/me/` pour récupérer les informations de l'utilisateur authentifié.
 *   ➤ Retourne : `User` (type personnalisé venant de `types/user.ts`)
 *
 * - `refreshToken(refreshToken)` :
 *   Utilisé pour rafraîchir le token d’accès expiré.
 *   ➤ Retourne : `{ access }`
 *
 * 🧠 Bon à savoir :
 * - Ce service utilise l'instance `api` configurée avec interceptors JWT (`axios.ts`)
 * - Il peut être utilisé dans `AuthContext` pour centraliser la logique métier d’auth
 */

import { User } from '@/src/types/user';
import api from '../api/axios';

type LoginResponse = {
  access: string;
  refresh: string;
};

/**
 * Authentifie l'utilisateur et retourne les tokens JWT.
 */
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post('/token/', { email, password });
  return response.data;
};

/**
 * Récupère le profil de l'utilisateur connecté depuis l'API.
 */
export const getUserProfile = async (): Promise<User> => {
  const response = await api.get('/users/me/');
  return response.data.data; // ou `.data` selon ta structure de réponse backend
};

/**
 * Utilise le token de refresh pour obtenir un nouveau token d'accès.
 */
export const refreshToken = async (refreshToken: string): Promise<{ access: string }> => {
  const response = await api.post('/token/refresh/', { refresh: refreshToken });
  return response.data;
};
