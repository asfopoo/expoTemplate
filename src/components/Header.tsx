import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Pressable from './Pressable';

import { useThemeColors } from '@/hooks/useThemeColors';

type Props = {
  navigation: any;
};

export default function Header({ navigation }: Props) {
  const themeColors = useThemeColors();
  return (
    <Pressable style={styles.header} onPress={navigation.goBack}>
      <MaterialIcons
        name="chevron-left"
        size={32}
        color={themeColors.colors.text}
        style={[styles.icon]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
});
