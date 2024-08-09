import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Pressable from './Pressable';
import { COLORS } from '../theme/colors';

export default function Header({ navigation }) {
  return (
    <Pressable style={styles.header} onPress={navigation.goBack}>
      <MaterialIcons
        name="chevron-left"
        size={32}
        color={COLORS.NAVY_BLUE}
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
