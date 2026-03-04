import { View, Text } from 'react-native';

import styles from './styles';

function Atividade01 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.texto}>
                Aula de React Native com Expo
            </Text>
            <Text style={styles.texto2}>Texto qualquer</Text>
            <Text style={styles.texto3}>Texto qualquer</Text>
        </View>
    );
}

export default Atividade01;