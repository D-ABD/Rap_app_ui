// app/(screen)/screen/vae_jury/liste_vae.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function ListeJury() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de la liste des jurys...');
    // Appel API ou mise à jour des données si nécessaire
  };

  return (
    <ScreenWrapper title="Liste Jury" onRefresh={handleRefresh}>
      <Text variant="body">
        Consultez la liste des jurys existants pour les sessions VAE.
      </Text>
    </ScreenWrapper>
  );
}
