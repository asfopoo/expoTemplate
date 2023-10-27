import { View, StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../theme/colors';

type Props = {
  children: React.ReactNode;
};

const { height } = Dimensions.get('window');

export default function CircularView({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    width: height * 0.3,
    borderRadius: (height * 0.3) / 2,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
