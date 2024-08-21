import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

import CircularView from '../components/CircularView';
import Input from '../components/Input';
import SectionCard from '../components/SectionCard';
import { RootStackParamList } from '../navigation/types';
import { convertStringToColor } from '../utils/helpers';
import { selectUser } from '../zustand/user/selectors';

import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile Tab'>;

export default function ProfileScreen({ navigation }: Props) {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);
  const user = selectUser();
  const backgroundColor = convertStringToColor(user?.fullName || 'Jeff');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[themeColors.colors.tint, themeColors.colors.primary]}
        style={styles.background}
      />
      <SectionCard height="70%">
        <Input editable={false}>{`${user?.fullName || 'jeff Smith'}`}</Input>
        <Input editable={false}>{user?.email}</Input>
        <Input editable={false}>No Organization</Input>
      </SectionCard>
      <View style={styles.profileImageContainer}>
        <CircularView size="size20" backgroundColor={backgroundColor}>
          <Text style={styles.initialText}>{`${
            user?.fullName[0] || 'J'
          }`}</Text>
        </CircularView>
      </View>
    </View>
  );
}

const HEIGHT_POSITION = '35%';

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    background: {
      width: '100%',
      height: HEIGHT_POSITION,
    },
    profileImageContainer: {
      position: 'absolute',
      top: '12.5%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    initialText: {
      fontSize: 30,
      color: colors.text,
    },
  });
