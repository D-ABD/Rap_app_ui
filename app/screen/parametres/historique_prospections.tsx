// app/(screen)/screen/parametres/historique_prospections.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function HistoriqueProspections() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’historique des prospections...');
    // Appel API ou logique de mise à jour ici
  };

  return (
    <ScreenWrapper title="Historique des prospections" onRefresh={handleRefresh}>
      <Text variant="body">
        Consultez l&apos;historique des actions de prospection menées.
      </Text>
    </ScreenWrapper>
  );
}
