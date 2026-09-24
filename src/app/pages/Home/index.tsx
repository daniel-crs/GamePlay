import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { MatchList } from '@/components/MatchList';
import { SliderOptions } from '@/components/SliderOptions';
import { categories, CategoryId, matches } from '@/constants/home';
import { theme } from '@/constants/theme';

import profileImg from '../../../../assets/account/profile-img.png';

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId | null>(null);

  const filteredMatches = useMemo(
    () =>
      selectedCategoryId
        ? matches.filter((match) => match.categoryId === selectedCategoryId)
        : matches,
    [selectedCategoryId],
  );

  function handleAdd() {
    router.push('/pages/AgendarPartida');
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.account}>
          <Image source={profileImg} style={styles.avatar} resizeMode="cover" />

          <View style={styles.greeting}>
            <Text style={styles.greetingTitle}>Olá, Tiago</Text>
            <Text style={styles.greetingSubtitle}>Hoje é dia de vitória</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Adicionar partida"
            style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
            onPress={handleAdd}
          >
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </View>

        <View style={styles.slider}>
          <SliderOptions
            categories={categories}
            selectedId={selectedCategoryId}
            onSelect={setSelectedCategoryId}
          />
        </View>

        <MatchList matches={filteredMatches} />
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 26,
    marginBottom: 32,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  greeting: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  greetingTitle: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.title,
    fontSize: 24,
  },
  greetingSubtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
  },
  addButton: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonPressed: {
    opacity: 0.85,
  },
  addButtonText: {
    color: theme.colors.title,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    lineHeight: 28,
  },
  slider: {
    minHeight: 120,
    marginBottom: 40,
  },
});
