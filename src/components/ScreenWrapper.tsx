 /**
 * ScreenWrapper
 * 
 * 💡 Composant enveloppe standard pour les écrans de l’application.
 * Gère :
 * - L’arrière-plan
 * - Le SafeAreaView
 * - Le Header avec titre, bouton retour intelligent et bouton "rafraîchir"
 * - Le padding et l’agencement du contenu principal
 *
 * Props :
 * @param title      Le titre affiché dans l’en-tête de l’écran.
 * @param children   Le contenu de l’écran (composants internes).
 * @param onRefresh  (optionnel) Fonction appelée lors d’un rafraîchissement (clic sur ⟳).
 * @param fallbackTo (optionnel) Route utilisée si `navigation.goBack()` n’est pas possible.
 *                   Par défaut : "/"
 *
 * Utilisation typique :
 * <ScreenWrapper title="Centres" onRefresh={fetchCentres} fallbackTo="/dashboard">
 *    {...}
 * </ScreenWrapper>
 */

import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/src/theme';
import ScreenHeader from './ScreenHeader';
import type { Router } from 'expo-router';

interface ScreenWrapperProps {
  title: string;
  children: ReactNode;
  onRefresh?: () => void;
  fallbackTo?: Parameters<Router['replace']>[0];
}

export default function ScreenWrapper({
  title,
  children,
  onRefresh,
  fallbackTo = '/',
}: ScreenWrapperProps) {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <SafeAreaView style={{ flex: 1 }}>
        <ScreenHeader title={title} onRefresh={onRefresh} fallbackTo={fallbackTo} />
        <Box flex={1} padding="l">
          {children}
        </Box>
      </SafeAreaView>
    </Box>
  );
}
