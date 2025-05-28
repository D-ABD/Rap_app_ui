// app/(screen)/screen/crm/prospections.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function Prospections() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des prospections...');
    // Appel API ou mise à jour des données ici
  };

  return (
    <ScreenWrapper title="Prospections" onRefresh={handleRefresh}>
      <Text variant="body">
        Suivi des actions de prospection réalisées.
      </Text>
    </ScreenWrapper>
  );
}
