import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet, View } from 'react-native';

export const InternalizationExample = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (locale: string) => {
    i18n.changeLanguage(locale);
  };
  return (
    <>
      <View style={styles.content}>
        <Button title={t('button.french')} onPress={() => toggleLanguage('fr')} />
        <Button title={t('button.english')} onPress={() => toggleLanguage('en')} />
        <Button title={t('button.bengali')} onPress={() => toggleLanguage('bl')}/>
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  content: { gap: 20, padding: 20 },
});
