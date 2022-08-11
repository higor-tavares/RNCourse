import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Greetings from './components/Greetings';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{fontSize:24, fontWeight: 'bold'}}>
        <Greetings name="Higor Tavares"></Greetings>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
