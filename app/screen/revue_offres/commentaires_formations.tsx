// app/(screen)/screen/revue_offres/commentaires_formations.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function CommentairesFormations() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des commentaires formations...');
    // Tu peux ici recharger les commentaires depuis l'API
  };

  return (
    <ScreenWrapper title="Commentaires formations" onRefresh={handleRefresh}>
      <Text variant="body">
        Consultez et gérez les commentaires associés aux formations.
      </Text>
    </ScreenWrapper>
  );
}
