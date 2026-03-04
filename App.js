import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';

import Atividade01 from './src/Atividades/at-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9e54ff',
    padding: 12,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
