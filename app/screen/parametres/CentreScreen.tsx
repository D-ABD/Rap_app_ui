// app/(screen)/screen/parametres/commentaires.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function CentreScreen() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des commentaires...');
    // Appel API ou mise à jour ici
  };

  return (
    <ScreenWrapper title="Commentaires" onRefresh={handleRefresh}>
      <Text variant="body">
        Gestion des centres.
      </Text>
    </ScreenWrapper>
  );
}
