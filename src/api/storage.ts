/**
 * storage.ts
 *
 * 💡 Utilitaires pour stocker, récupérer et supprimer les tokens JWT
 * à l’aide de `AsyncStorage`. Utilisé dans toute l'application pour
 * gérer l’authentification de manière persistante.
 *
 * Fonctions exportées :
 *
 * - `storeTokens(access, refresh)` :
 *   Enregistre le token d'accès et le token de rafraîchissement.
 *
 * - `getTokens()` :
 *   Récupère les deux tokens depuis le stockage local.
 *   Retourne un objet : `{ access, refresh }`
 *
 * - `clearTokens()` :
 *   Supprime tous les tokens du stockage (utilisé à la déconnexion
 *   ou en cas d’échec du rafraîchissement).
 *
 * ⚠️ Important :
 * - Utilise `multiSet`, `multiGet` et `multiRemove` pour la performance
 * - Les clés sont fixées à : `"accessToken"` et `"refreshToken"`
 *
 * Utilisé principalement dans :
 * - `api/axios.ts` (pour intercepter, rafraîchir, réessayer)
 * - `AuthContext.tsx` (pour login/logout)
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Stocke les tokens d'authentification (access + refresh) dans AsyncStorage
 */
export const storeTokens = async (access: string, refresh: string) => {
  await AsyncStorage.multiSet([
    ['accessToken', access],
    ['refreshToken', refresh],
  ]);
};

/**
 * Récupère les tokens d'authentification depuis AsyncStorage
 */
export const getTokens = async () => {
  const [[, access], [, refresh]] = await AsyncStorage.multiGet([
    'accessToken',
    'refreshToken',
  ]);
  return { access, refresh };
};

/**
 * Supprime les tokens d'authentification de AsyncStorage
 */
export const clearTokens = async () => {
  await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
};
