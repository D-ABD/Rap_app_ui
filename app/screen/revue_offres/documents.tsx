// app/(screen)/screen/revue_offres/documents.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function Documents() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des documents...');
    // Appel API ou rechargement des documents ici
  };

  return (
    <ScreenWrapper title="Documents" onRefresh={handleRefresh}>
      <Text variant="body">
        Liste et gestion des documents liés aux offres.
      </Text>
    </ScreenWrapper>
  );
}
