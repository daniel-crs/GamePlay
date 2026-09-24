import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { Background } from '@/components/Background';
import { SliderOptions } from '@/components/SliderOptions';
import { categories, CategoryId } from '@/constants/home';
import { theme } from '@/constants/theme';

function BackIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke={theme.colors.title}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default function AgendarPartidaScreen() {
  const router = useRouter();
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId | null>(null);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}
            onPress={() => router.back()}
          >
            <BackIcon />
          </Pressable>

          <Text style={styles.title}>Agendar partida</Text>

          <View style={styles.headerSpacer} />
        </View>

        <Text style={styles.sectionTitle}>Categoria</Text>

        <View style={styles.slider}>
          <SliderOptions
            categories={categories}
            selectedId={selectedCategoryId}
            onSelect={setSelectedCategoryId}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 26,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backButtonPressed: {
    opacity: 0.7,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    color: theme.colors.title,
    fontSize: 20,
  },
  headerSpacer: {
    width: 40,
  },
  sectionTitle: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 12,
  },
  slider: {
    minHeight: 120,
  },
});
