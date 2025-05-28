
// Update the path below if your axios file is in a different location
import api from '../../../src/api/axios';
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { useAuth } from '@/src/contexts/AuthContext';
import { Box, Text } from '@/src/theme';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView} from 'react-native';
/**
 * Écran de test du JWT
 * Appelle l'endpoint `/test-token/` protégé
 */
export default function TestScreen() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const testToken = async () => {
    setLoading(true);
    try {
      const response = await api.get('/test-token/');
      setData(response.data);
    } catch (error) {
        console.warn('Erreur API /test-token/ :', error);
        setData({ error: 'Token invalide ou erreur serveur.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      testToken();
    } else {
      setData({ error: 'Utilisateur non connecté.' });
    }
  }, [isAuthenticated]);

  return (
    <ScreenWrapper title="Test JWT" onRefresh={testToken}>
      {loading && (
        <ActivityIndicator size="large" color="#5A31F4" />
      )}

      {!loading && data && (
        <ScrollView
          style={{ maxHeight: 300, width: '100%' }}
          contentContainerStyle={{ paddingBottom: 12 }}
        >
          <Box
            backgroundColor="grayLight"
            padding="m"
            borderRadius="m"
          >
            <Text variant="body" style={{ fontFamily: 'monospace' }}>
              {JSON.stringify(data, null, 2)}
            </Text>
          </Box>
        </ScrollView>
      )}
    </ScreenWrapper>
  );
}
