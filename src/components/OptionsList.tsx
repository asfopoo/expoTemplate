import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Pressable from './Pressable';

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
  return (
    <Pressable onPress={() => handlePress(route)}>
      <View style={styles.option}>
        <MaterialIcons name={icon} size={28} color="black" />
        <Text style={styles.optionText}>{title}</Text>
        <View style={styles.chevronContainer}>
          <MaterialIcons name="chevron-right" size={28} color="black" />
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
