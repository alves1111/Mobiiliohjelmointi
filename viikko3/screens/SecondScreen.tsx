import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function SecondScreen() { //toinen ruutu johon navigoidaan home screeniltä
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});