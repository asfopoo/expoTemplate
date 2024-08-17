/*
 * Used in SettingsScreen.tsx
 */
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native';

import Pressable from './Pressable';
import { Text } from './Text';
import { View } from './View';

import { useThemeColors } from '@/hooks/useThemeColors';

type Icon = keyof typeof MaterialIcons.glyphMap;

type Props = {
  options: {
    title: string;
    icon: Icon;
    route: string;
  }[];
  handlePress: (route: string) => void;
};

export default function OptionsList({ options, handlePress }: Props) {
  return (
    <FlatList
      data={options}
      renderItem={({ item }) => (
        <OptionItem {...item} handlePress={handlePress} />
      )}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
}

type ItemProps = {
  title: string;
  icon: Icon;
  route: string;
  handlePress: (route: string) => void;
};

const OptionItem = ({ title, icon, route, handlePress }: ItemProps) => {
  const colors = useThemeColors();

  return (
    <Pressable onPress={() => handlePress(route)}>
      <View style={styles.option}>
        <MaterialIcons name={icon} size={28} color={colors.colors.primary} />
        <Text style={styles.optionText}>{title}</Text>
        <View style={styles.chevronContainer}>
          <MaterialIcons
            name="chevron-right"
            size={28}
            color={colors.colors.primary}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  optionText: {
    marginLeft: 10,
  },
  chevronContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
