import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { Button } from '@/components/Button';
import { theme } from '@/constants/theme';

import stripesImg from '../../assets/faixas_diagonais.png';
import illustrationImg from '../../assets/lisin_bg_img.png';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <Background>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.illustration}>
          <Image source={stripesImg} style={styles.stripes} resizeMode="cover" />
          <Image source={illustrationImg} style={styles.hero} resizeMode="contain" />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos
          </Text>

          <Button onPress={() => router.replace('/pages/Home')} />
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  illustration: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stripes: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  hero: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    paddingHorizontal: 32,
    paddingBottom: 32,
    alignItems: 'center',
    marginTop: -24,
  },
  title: {
    color: theme.colors.title,
    fontSize: 40,
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 48,
  },
});
