import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import CircularView from '../components/CircularView';
import Input from '../components/Input';
import SectionCard from '../components/SectionCard';
import { useUserDetails } from '../hooks/useUserDetails';
import { RootStackParamList } from '../navigation/types';
import { COLORS } from '../theme/colors';
import { convertStringToColor } from '../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile Tab'>;

export default function ProfileScreen({ navigation }: Props) {
  const { user } = useUserDetails();
  const backgroundColor = convertStringToColor(user?.first_name);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.LIGHT_BLUE, COLORS.NAVY_BLUE]}
        style={styles.background}
      />
      <SectionCard height="70%">
        <Input
          editable={false}
        >{`${user?.first_name} ${user?.last_name}`}</Input>
        <Input editable={false}>{user?.email}</Input>
        <Input editable={false}>No Organization</Input>

        {/* <Text>Transfer Org ownership</Text>
        <Text>Manage org members</Text>
        <Text>Leave org </Text> */}

        {/* <Text>Subscription</Text> */}

        {/* TODO: <Text>Reset password</Text> */}
      </SectionCard>
      <View style={styles.profileImageContainer}>
        <CircularView size="size20" backgroundColor={backgroundColor}>
          <Text style={styles.initialText}>
            {user?.first_name[0]}
            {user?.last_name[0]}
          </Text>
        </CircularView>
      </View>
    </View>
  );
}

const HEIGHT_POSITION = '30%';

const styles = StyleSheet.create({
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
  },
  initialText: {
    fontSize: 30,
    color: COLORS.WHITE,
  },
});
