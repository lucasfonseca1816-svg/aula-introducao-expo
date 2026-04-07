import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

export default function Atividade03() {

    const [numero, setNumero] = useState(0);

    function AddNumber() {
        setNumero(numero + 1);
    }

    function SubtractNumber() {
        setNumero(numero - 1);
    }

    function ClearNumber() {
        setNumero(numero * 0);
    }

    return(
        <View style={styles.container} >
            <Text style={styles.paragraph}>
                Exemplo 3
            </Text>

            {/* <TouchableOpacity
                onPress={() => alert('Olá, mundo!')}
                style={styles.button}
            >
                <Text style={styles.textButton}>
                    Diga "Olá, mundo!"
                </Text>
            </TouchableOpacity> */}

            <View style={styles.counter}>
                <View style={styles.textZero}>
                    <TouchableOpacity
                        onPress={() => AddNumber()}
                        style={styles.button}
                    >
                        <Text style={styles.textButton} >
                            + 1
                        </Text>

                    </TouchableOpacity>
                    <Text style={styles.container}>{numero}</Text>
                    <TouchableOpacity
                        onPress={() => SubtractNumber()}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>
                            - 1
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => ClearNumber()}
                    style={styles.button}
                >
                
                    <Text style={styles.textButton}>
                        Zerar
                    </Text>
                </TouchableOpacity>
            </View>
         </View>

    );
}

//Usar flexDirection: row na view II (criar view II) para deixar igual o exemplo 3

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 8,
    },

    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9E9E9E',
    },

    button: {
        backgroundColor: '#9E9E9E',
        height: 60,
        justifyContent: 'center',
        marginTop: 10,
        padding: 8,
    },

    textButton: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },

    counter: {
        borderWidth: 4,
        borderColor: '#9E9E9E',
        padding: 8,
        justifyContent: 'center',
    },

    textCounter: {
        fontSize: 32,
        color: '#424242',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 8,
    },

     textZero: {
        borderWidth: 4,
        borderColor: '#9E9E9E',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});