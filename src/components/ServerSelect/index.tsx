import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Server } from '@/constants/servers';
import { theme } from '@/constants/theme';

type ServerSelectProps = {
  visible: boolean;
  onClose: () => void;
  onSelect: (server: Server) => void;
  servers: Server[];
};

export function ServerSelect({
  visible,
  onClose,
  onSelect,
  servers,
}: ServerSelectProps) {
  function handleSelect(server: Server) {
    onSelect(server);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Fechar seleção de servidor"
          style={styles.backdrop}
          onPress={onClose}
        />

        <View style={styles.sheet}>
          <View style={styles.handleWrap}>
            <View style={styles.handle} />
          </View>

          <FlatList
            data={servers}
            keyExtractor={(item) => item.id}
            style={styles.list}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ListSeparator}
            renderItem={({ item }) => (
              <ServerItem server={item} onPress={() => handleSelect(item)} />
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

function ServerItem({
  server,
  onPress,
}: {
  server: Server;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${server.title}, ${server.role}`}
      style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      onPress={onPress}
    >
      <View style={styles.iconWrap}>
        <Image source={server.icon} style={styles.icon} resizeMode="cover" />
      </View>

      <View style={styles.itemContent}>
        <Text style={styles.itemTitle} numberOfLines={1}>
          {server.title}
        </Text>
        <Text style={styles.itemRole}>{server.role}</Text>
      </View>

      <ChevronRightIcon />
    </Pressable>
  );
}

function ListSeparator() {
  return <View style={styles.separator} />;
}

function ChevronRightIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 18L15 12L9 6"
        stroke={theme.colors.title}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  sheet: {
    width: '100%',
    height: '70%',
    backgroundColor: theme.colors.background.primary,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  handleWrap: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 8,
  },
  handle: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.heading,
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
    paddingVertical: 12,
  },
  itemPressed: {
    opacity: 0.7,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: theme.colors.card,
    overflow: 'hidden',
    marginRight: 16,
  },
  icon: {
    width: 48,
    height: 48,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
    marginRight: 12,
  },
  itemTitle: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.title,
    fontSize: 18,
  },
  itemRole: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.line,
    marginLeft: 88,
    marginRight: 24,
  },
});
