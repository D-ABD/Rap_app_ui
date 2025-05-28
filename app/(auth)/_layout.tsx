/**
 * AuthLayout
 *
 * 💡 Ce layout est spécifique au groupe de routes `(auth)` — utilisé pour les écrans d’authentification.
 *
 * Il encapsule tous les écrans comme `/login`, `/register`, etc. définis dans `app/(auth)/`.
 *
 * Il gère :
 * - Un `SafeAreaView` global pour respecter les zones sécurisées (iOS/Android)
 * - Une navigation en pile (`<Stack />`) fournie par Expo Router
 *
 * 📌 Important :
 * Ce layout n'hérite pas du layout global (pas de thème, pas d'auth context ici).
 * Il permet de créer un environnement indépendant de connexion/déconnexion.
 *
 * Exemple de structure :
 * - app/
 *   - (auth)/
 *     - login.tsx
 *     - register.tsx
 *     - _layout.tsx ← celui-ci
 *
 * Utilisation :
 * Chaque écran dans `(auth)` sera affiché dans une pile avec transition fluide.
 */

import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack />
    </SafeAreaView>
  );
}
