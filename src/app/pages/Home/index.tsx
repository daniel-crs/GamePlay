import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { theme } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.title,
    fontSize: 40,
    fontFamily: theme.fonts.title700,
  },
});
