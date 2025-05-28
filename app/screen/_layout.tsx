/**
 * ScreenLayout
 *
 * 💡 Layout général utilisé pour les pages "hors onglets", généralement des écrans secondaires
 * comme les pages de gestion, paramètres avancés, formulaires ou détails.
 *
 * Fonctionnalités :
 * - Vérifie que l’utilisateur est connecté via `AuthContext`
 * - Redirige vers `/welcome` si non authentifié
 * - Affiche le `Header` personnalisé au-dessus du contenu
 * - Utilise `<Slot />` pour injecter dynamiquement le contenu de la page
 *
 * 📌 Ce layout est utilisé pour toutes les routes placées dans `app/(screens)/`
 * Exemple : `app/(screens)/admin.tsx`, `app/(screens)/ajouter-jury.tsx`, etc.
 *
 * Structure :
 * - app/
 *   - (screens)/
 *     - _layout.tsx ← ce fichier
 *     - admin.tsx
 *     - documents.tsx
 *     - ...
 *
 * 🧠 Bon à savoir :
 * Ce layout n’affiche pas la `TabBar`, contrairement à `(tabs)/_layout.tsx`,
 * ce qui permet de créer des écrans pleine page sans navigation inférieure.
 */

import { useEffect } from 'react';
import { useRouter, Slot } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import Header from '@/src/components/Header';
import { Box } from '@/src/theme';

export default function ScreenLayout() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/welcome');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return null;

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header />
      <Slot />
    </Box>
  );
}
