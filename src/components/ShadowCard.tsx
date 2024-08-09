import { StyleSheet, PressableProps } from 'react-native';

import Pressable from './Pressable';
import { COLORS } from '../theme/colors';

type Props = PressableProps & {
  children: React.ReactNode;
};

export default function ShadowCard({ children, ...props }: Props) {
  return (
    <Pressable style={styles.container} {...props}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
