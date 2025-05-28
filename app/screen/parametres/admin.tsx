import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function Admin() {
    const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des centres...');
    // Tu peux ici déclencher une requête API, recharger des données, etc.
  };
  return (
      <ScreenWrapper title="Administration" onRefresh={handleRefresh}>
      <Text variant="body">
        Gérer les paramètres d&apos;administration de l&apos;application.
      </Text>

    </ScreenWrapper>
  );
}
