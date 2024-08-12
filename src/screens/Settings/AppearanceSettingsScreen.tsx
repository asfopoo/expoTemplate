import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';

import Header from '@/components/Header';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { useThemeColors } from '@/hooks/useThemeColors';
import { setTheme } from '@/zustand/settings/actions';
import { ThemeOption } from '@/zustand/settings/createSlice';
import { selectTheme } from '@/zustand/settings/selectors';

type ThemeSelection = {
  title: string;
  theme: ThemeOption['theme'];
  isSelected: boolean;
};

const initialThemeOptions: ThemeSelection[] = [
  {
    title: 'System default',
    theme: undefined,
    isSelected: true,
  },
  {
    title: 'Light',
    theme: 'light',
    isSelected: false,
  },
  {
    title: 'Dark',
    theme: 'dark',
    isSelected: false,
  },
];

export default function AppearanceSettingsScreen() {
  const theme = selectTheme();
  // set initial theme option based on current theme from storage
  initialThemeOptions.forEach((option) => {
    option.isSelected = option.theme === theme;
  });
  const [themeOptions, setThemeOptions] = useState(initialThemeOptions);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  function handleSetThemeOption({
    themeSelection,
  }: {
    themeSelection: ThemeSelection;
  }) {
    const updatedThemeOptions = themeOptions.map((option) => {
      if (option.title === themeSelection.title) {
        return { ...option, isSelected: true };
      } else {
        return { ...option, isSelected: false };
      }
    });
    setThemeOptions(updatedThemeOptions);
    setTheme(themeSelection.theme);
  }

  return (
    <SafeAreaView style={styles.fill}>
      <Header {...{ navigation }} />
      <View style={styles.rowContainer}>
        <Text style={styles.text16}>Theme</Text>
      </View>
      {themeOptions.map((option) => (
        <SelectionRow
          key={option.title}
          title={option.title}
          isSelected={option.isSelected}
          onPress={() => handleSetThemeOption({ themeSelection: option })}
        />
      ))}
    </SafeAreaView>
  );
}

type SelectionRowProps = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
};

function SelectionRow({ title, isSelected, onPress }: SelectionRowProps) {
  const themeColors = useThemeColors();

  return (
    <Pressable onPress={onPress} style={styles.rowContainer}>
      <Text>{title}</Text>
      {isSelected ? (
        <FontAwesome name="circle" size={24} color={themeColors.colors.text} />
      ) : (
        <FontAwesome
          name="circle-o"
          size={24}
          color={themeColors.colors.text}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text16: {
    fontSize: 16,
  },
});
