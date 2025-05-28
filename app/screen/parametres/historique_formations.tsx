// app/(screen)/screen/parametres/historique_formations.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function HistoriqueFormations() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’historique des formations...');
    // Appel à l’API ou autre logique ici
  };

  return (
    <ScreenWrapper title="Historique des formations" onRefresh={handleRefresh}>
      <Text variant="body">
        Visualisez l&apos;historique des formations proposées dans l&apos;application.
      </Text>
    </ScreenWrapper>
  );
}
