// app/(screen)/screen/prepa_comp/accueil_prepa.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function PrepaHome() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’accueil prépa...');
    // Tu peux ici recharger des données spécifiques à la préparation
  };

  return (
    <ScreenWrapper title="Accueil Prépa" onRefresh={handleRefresh}>
      <Text variant="body">
        Page d&apos;accueil de la préparation aux compétences.
      </Text>
    </ScreenWrapper>
  );
}
