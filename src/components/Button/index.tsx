import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';

import { DiscordIcon } from '@/components/DiscordIcon';
import { theme } from '@/constants/theme';

type ButtonProps = PressableProps & {
  title?: string;
};

export function Button({
  title = 'Entrar com Discord',
  style,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed, style]}
      {...rest}
    >
      <View style={styles.content}>
        <DiscordIcon />
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    color: theme.colors.title,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
  },
});
