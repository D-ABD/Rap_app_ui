// app/(screen)/screen/revue_offres/formations.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function Formations() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des formations...');
    // Tu peux ici déclencher un appel API pour recharger les données
  };

  return (
    <ScreenWrapper title="Formations" onRefresh={handleRefresh}>
      <Text variant="body">
        Parcourez et gérez les formations proposées aux utilisateurs.
      </Text>
    </ScreenWrapper>
  );
}
