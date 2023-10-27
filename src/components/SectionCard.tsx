import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';

import { COLORS } from '../theme/colors';

type Props = {
  children: React.ReactNode;
};

export default function SectionCard({ children }: Props) {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={[styles.container, { marginBottom: tabBarHeight }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    shadowColor: COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
