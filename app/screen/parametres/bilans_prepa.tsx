// app/(screen)/screen/parametres/bilans_prepa.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function BilansPrepa() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des bilans prépa...');
    // Lancer une requête si nécessaire
  };

  return (
    <ScreenWrapper title="Bilans Prépa" onRefresh={handleRefresh}>
      <Text variant="body">
        Visualiser et gérer les bilans de la préparation.
      </Text>
    </ScreenWrapper>
  );
}
