import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '@/constants/theme';

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.background.primary, theme.colors.background.secondary]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
