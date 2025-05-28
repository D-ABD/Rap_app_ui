import { Text } from '@/src/theme';
import ScreenWrapper from '@/src/components/ScreenWrapper';

export default function CentreScreen() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des centres...');
    // Tu peux ici déclencher une requête API, recharger des données, etc.
  };

  return (
    <ScreenWrapper title="Centres" onRefresh={handleRefresh}>
      <Text variant="body">
        Voici les centres référencés dans l&apos;application.
      </Text>
    </ScreenWrapper>
  );
}
