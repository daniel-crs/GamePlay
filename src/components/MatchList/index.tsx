import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { CategoryId, Match } from '@/constants/home';
import { theme } from '@/constants/theme';

const CATEGORY_LABELS: Record<CategoryId, string> = {
  ranked: 'Ranqueada',
  duel: '1x1',
  fun: 'Diversão',
};

type MatchListProps = {
  matches: Match[];
};

export function MatchList({ matches }: MatchListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Partidas agendadas</Text>
        <Text style={styles.headerTotal}>Total {matches.length}</Text>
      </View>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ListSeparator}
        renderItem={({ item }) => <MatchItem match={item} />}
      />
    </View>
  );
}

function MatchItem({ match }: { match: Match }) {
  const roleColor = match.role === 'Anfitrião' ? theme.colors.primary : theme.colors.on;
  const categoryLabel = CATEGORY_LABELS[match.categoryId];

  return (
    <View
      style={styles.item}
      accessibilityLabel={`${match.title}, ${match.date}, ${categoryLabel}, ${match.role}`}
    >
      <View style={styles.iconWrap}>
        <Image source={match.icon} style={styles.icon} resizeMode="cover" />
      </View>

      <View style={styles.itemContent}>
        <View style={styles.itemRow}>
          <Text style={styles.matchTitle} numberOfLines={1}>
            {match.title}
          </Text>
          <Text style={styles.category}>{categoryLabel}</Text>
        </View>

        <View style={styles.itemRow}>
          <Text style={styles.date}>{match.date}</Text>
          <View style={styles.roleWrap}>
            <PlayerIcon color={roleColor} />
            <Text style={[styles.role, { color: roleColor }]}>{match.role}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ListSeparator() {
  return <View style={styles.separator} />;
}

function PlayerIcon({ color }: { color: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M11.968 9.543C13.341 8.615 14.25 7.034 14.25 5.25 14.25 2.351 11.9 0 9 0 6.1 0 3.75 2.351 3.75 5.25c0 1.785.91 3.366 2.283 4.293C2.542 10.671 0 13.986 0 17.91 0 17.96.04 18 .09 18h1.32c.05 0 .09-.04.09-.09C1.5 13.774 4.865 10.41 9 10.41c4.135 0 7.5 3.364 7.5 7.5 0 .05.04.09.09.09h1.32c.05 0 .09-.04.09-.09 0-3.925-2.542-7.24-6.032-8.367ZM9 9C6.933 9 5.25 7.317 5.25 5.25S6.933 1.5 9 1.5s3.75 1.683 3.75 3.75S11.067 9 9 9Z"
        fill={color}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  headerTotal: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: theme.colors.card,
    overflow: 'hidden',
    marginRight: 20,
  },
  icon: {
    width: 64,
    height: 64,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 64,
    paddingVertical: 4,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  matchTitle: {
    flex: 1,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  date: {
    flex: 1,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 13,
  },
  roleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  role: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.line,
    marginVertical: 12,
    marginLeft: 108,
    marginRight: 24,
  },
});
