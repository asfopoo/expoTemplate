import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, DimensionValue } from 'react-native';

import { COLORS } from '../theme/colors';

type Props = {
  height?: DimensionValue;
  children: React.ReactNode;
};

export default function SectionCard({ height = '45%', children }: Props) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={[styles.container, { marginBottom: tabBarHeight, height }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
