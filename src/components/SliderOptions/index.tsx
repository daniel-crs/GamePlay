import { FlatList, Image, Pressable, StyleSheet, Text } from 'react-native';

import { Category, CategoryId } from '@/constants/home';
import { theme } from '@/constants/theme';

type SliderOptionsProps = {
  categories: Category[];
  selectedId?: CategoryId | null;
  onSelect: (id: CategoryId | null) => void;
};

export function SliderOptions({
  categories,
  selectedId = null,
  onSelect,
}: SliderOptionsProps) {
  function handleSelect(id: CategoryId) {
    onSelect(id === selectedId ? null : id);
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => {
        const selected = item.id === selectedId;

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected }}
            accessibilityLabel={item.title}
            style={({ pressed }) => [
              styles.card,
              selected && styles.cardSelected,
              pressed && styles.pressed,
            ]}
            onPress={() => handleSelect(item.id)}
          >
            <Image source={item.icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingLeft: 24,
    paddingRight: 40,
    gap: 8,
  },
  card: {
    width: 104,
    height: 120,
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardSelected: {
    borderColor: theme.colors.primary,
  },
  pressed: {
    opacity: 0.85,
  },
  icon: {
    width: 48,
    height: 48,
  },
  title: {
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.title700,
  },
});
