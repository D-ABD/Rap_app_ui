// app/(screen)/screen/parametres/statuts.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function Statuts() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des statuts...');
    // Logique de mise à jour ou appel API ici
  };

  return (
    <ScreenWrapper title="Statuts" onRefresh={handleRefresh}>
      <Text variant="body">
        Gérer les statuts disponibles dans l&apos;application.
      </Text>
    </ScreenWrapper>
  );
}
