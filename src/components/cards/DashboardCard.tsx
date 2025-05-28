// src/components/DashboardCard.tsx
import { Box, Text } from '@/src/theme';
import React from 'react';

type DashboardCardProps = {
  title: string;
  value: string | number;
  description?: string;
};

export default function DashboardCard({ title, value, description }: DashboardCardProps) {
  return (
    <Box
      flex={1}
      backgroundColor="cardPrimaryBackground"
      borderRadius="m"
      padding="m"
      minHeight={100}
      justifyContent="center"
    >
      <Text variant="subheader" marginBottom="s" color="textInverse">
        {title}
      </Text>
      <Text variant="hero" color="textInverse">
        {value}
      </Text>
      {description && (
        <Text variant="body" color="textInverse" opacity={0.8}>
          {description}
        </Text>
      )}
    </Box>
  );
}
