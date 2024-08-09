import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../../../screens/ChatScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { ChatTabParamList } from '../../types';

const ChatStackNavigator = createNativeStackNavigator<ChatTabParamList>();

export default function ChatStack() {
  return (
    <ChatStackNavigator.Navigator>
      <ChatStackNavigator.Screen
        name={PRIVATE_ROUTES.CHAT_SCREEN}
        component={ChatScreen}
      />
    </ChatStackNavigator.Navigator>
  );
}
