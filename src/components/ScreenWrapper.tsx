import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/src/theme';
import ScreenHeader from './ScreenHeader';

interface ScreenWrapperProps {
  title: string;
  children: ReactNode;
  onRefresh?: () => void;
}

export default function ScreenWrapper({ title, children, onRefresh }: ScreenWrapperProps) {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <SafeAreaView style={{ flex: 1 }}>
        <ScreenHeader title={title} onRefresh={onRefresh} />
        <Box flex={1} padding="l">
          {children}
        </Box>
      </SafeAreaView>
    </Box>
  );
}
