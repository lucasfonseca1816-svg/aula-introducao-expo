import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';
import Exemplo03 from './src/exemplos/ex03';

import Atividade01 from './src/Atividades/at-01';
import Atividade02 from './src/Atividades/at-02';
import Atividade03 from './src/Atividades/at-03';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade03/>
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
