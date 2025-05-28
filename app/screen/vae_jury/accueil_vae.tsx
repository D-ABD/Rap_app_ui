// app/(screen)/screen/vae_jury/accueil_vae.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function VaeHome() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’accueil VAE...');
    // Tu peux déclencher ici un rechargement des démarches VAE
  };

  return (
    <ScreenWrapper title="Accueil VAE" onRefresh={handleRefresh}>
      <Text variant="body">
        Interface d&apos;accueil pour la validation des acquis de l&apos;expérience.
      </Text>
    </ScreenWrapper>
  );
}
