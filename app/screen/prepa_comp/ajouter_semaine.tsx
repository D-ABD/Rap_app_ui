// app/(screen)/screen/prepa_comp/ajouter_semaine.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function AjouterSemainePrepa() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’écran d’ajout de semaine...');
    // Tu peux ici réinitialiser un formulaire ou recharger des données
  };

  return (
    <ScreenWrapper title="Ajouter une semaine" onRefresh={handleRefresh}>
      <Text variant="body">
        Ajoutez une nouvelle semaine au programme de préparation.
      </Text>
    </ScreenWrapper>
  );
}
