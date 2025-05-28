// app/(screen)/screen/vae_jury/ajouter_vae.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function AjouterVae() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’écran Ajouter VAE...');
    // Tu peux déclencher ici un rechargement ou une réinitialisation
  };

  return (
    <ScreenWrapper title="Ajouter VAE" onRefresh={handleRefresh}>
      <Text variant="body">
        Formulaire pour ajouter une nouvelle démarche VAE.
      </Text>
    </ScreenWrapper>
  );
}
