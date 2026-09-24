import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { Background } from '@/components/Background';
import { ServerSelect } from '@/components/ServerSelect';
import { SliderOptions } from '@/components/SliderOptions';
import { categories, CategoryId } from '@/constants/home';
import { Server, servers } from '@/constants/servers';
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

function ChevronDownIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9L12 15L18 9"
        stroke={theme.colors.heading}
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
  const [isServerSelectOpen, setIsServerSelectOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

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

        <ScrollView
          style={styles.form}
          contentContainerStyle={styles.formContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View> 
            <Text style={styles.sectionTitle}>Categoria</Text>

            <View style={styles.slider}>
              <SliderOptions
                categories={categories}
                selectedId={selectedCategoryId}
                onSelect={setSelectedCategoryId}
              />
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              selectedServer
                ? `Servidor selecionado: ${selectedServer.title}`
                : 'Selecione um servidor'
            }
            style={styles.serverSelect}
            onPress={() => setIsServerSelectOpen(true)}
          >
            {selectedServer ? (
              <Image
                source={selectedServer.icon}
                style={styles.serverIcon}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.serverIconPlaceholder} />
            )}
            <Text
              style={[
                styles.serverSelectText,
                selectedServer && styles.serverSelectTextSelected,
              ]}
              numberOfLines={1}
            >
              {selectedServer?.title ?? 'Selecione um servidor'}
            </Text>
            <ChevronDownIcon />
          </Pressable>

          <View style={styles.dateTimeRow}>
            <View style={styles.dateTimeColumn}>
              <Text style={styles.fieldLabel}>Dia e mês</Text>
              <View style={styles.fieldsGroup}>
                <TextInput
                  style={styles.numericInput}
                  value={day}
                  onChangeText={setDay}
                  keyboardType="number-pad"
                  maxLength={2}
                  accessibilityLabel="Dia"
                />
                <Text style={styles.separator}>/</Text>
                <TextInput
                  style={styles.numericInput}
                  value={month}
                  onChangeText={setMonth}
                  keyboardType="number-pad"
                  maxLength={2}
                  accessibilityLabel="Mês"
                />
              </View>
            </View>

            <View style={styles.dateTimeColumn}>
              <Text style={styles.fieldLabel}>Hora e minuto</Text>
              <View style={styles.fieldsGroup}>
                <TextInput
                  style={styles.numericInput}
                  value={hour}
                  onChangeText={setHour}
                  keyboardType="number-pad"
                  maxLength={2}
                  accessibilityLabel="Hora"
                />
                <Text style={styles.separator}>:</Text>
                <TextInput
                  style={styles.numericInput}
                  value={minute}
                  onChangeText={setMinute}
                  keyboardType="number-pad"
                  maxLength={2}
                  accessibilityLabel="Minuto"
                />
              </View>
            </View>
          </View>

          <View style={styles.descriptionSection}>
            <View style={styles.descriptionHeader}>
              <Text style={[styles.fieldLabel, styles.descriptionLabel]}>Descrição</Text>
              <Text style={styles.descriptionHint}>Max 100 caracteres</Text>
            </View>
            <TextInput
              style={styles.descriptionInput}
              value={description}
              onChangeText={setDescription}
              maxLength={100}
              multiline
              textAlignVertical="top"
              accessibilityLabel="Descrição"
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Agendar"
            style={({ pressed }) => [styles.agendarButton, pressed && styles.agendarButtonPressed]}
            onPress={() => {}}
          >
            <Text style={styles.agendarButtonText}>Agendar</Text>
          </Pressable>
        </View>
      </SafeAreaView>

      <ServerSelect
        visible={isServerSelectOpen}
        servers={servers}
        onClose={() => setIsServerSelectOpen(false)}
        onSelect={setSelectedServer}
      />
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
  form: {
    flex: 1,
  },
  formContent: {
    paddingBottom: 40,
  },
  sectionTitle: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    paddingHorizontal: 24,
    marginTop: 48,
    marginBottom: 12,
  },
  slider: {
    minHeight: 120,
  },
  serverSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 44,
    marginHorizontal: 24,
    height: 68,
    borderWidth: 1,
    borderColor: theme.colors.line,
    borderRadius: 8,
    paddingRight: 20,
    overflow: 'hidden',
  },
  serverIconPlaceholder: {
    width: 68,
    height: 68,
    backgroundColor: theme.colors.card,
    marginRight: 16,
  },
  serverIcon: {
    width: 68,
    height: 68,
    marginRight: 16,
  },
  serverSelectText: {
    flex: 1,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 18,
  },
  serverSelectTextSelected: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.title,
  },
  dateTimeRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 44,
    gap: 20,
  },
  dateTimeColumn: {
    flex: 1,
  },
  fieldLabel: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 12,
  },
  fieldsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numericInput: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    color: theme.colors.title,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    textAlign: 'center',
  },
  separator: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginHorizontal: 4,
  },
  descriptionSection: {
    paddingHorizontal: 24,
    marginTop: 44,
  },
  descriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  descriptionLabel: {
    marginBottom: 0,
  },
  descriptionHint: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  descriptionInput: {
    minHeight: 95,
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    color: theme.colors.title,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
  },
  agendarButton: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agendarButtonPressed: {
    opacity: 0.85,
  },
  agendarButtonText: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.title,
    fontSize: 18,
  },
});
