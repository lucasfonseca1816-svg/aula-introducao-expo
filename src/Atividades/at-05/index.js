import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import styles from './styles';

export default function Atividade05() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);

    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [total, setTotal] = useState('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }
    function sub() {
        setTotal(parseFloat(n1) - parseFloat(n2));
    }
    function multi() {
        setTotal(parseFloat(n1) * parseFloat(n2));
    }
    function divi() {
        setTotal(parseFloat(n1) / parseFloat(n2));
    }
    function zerar() {
        setTotal('')
        setN1('')
        setN2('')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                        isFocusN1 ?
                            {
                                borderColor: '#b379ff',
                                outline: 'none',
                            }
                            :
                            {}
                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)}
                onChangeText={(num1) => setN1(num1)}
                value={n1.toString()}
                placeholder='0'
                placeholderTextColor={'#54505a'}
            // keyboardType='numeric'

            />

            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                        isFocusN2 ?
                            {
                                borderColor: '#b379ff',
                                outline: 'none',
                            }
                            :
                            {}
                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)}
                onChangeText={(num2) => setN2(num2)}
                value={n2.toString()}
                placeholder='0'
                placeholderTextColor={'#54505a'}
            />

            <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                        styles.txtTotal,
                        isFocusTotal ?
                            {
                                borderColor: '#b379ff',
                                outline: 'none',
                            }
                            :
                            {}
                    ]
                }
                onFocus={() => setIsFocusTotal(true)}
                onBlur={() => setIsFocusTotal(false)}
                readOnly={true}
                value={total ? parseFloat(total).toFixed(2) : '0'}
            />
            
            <View style={styles.operator}> 
                    
                    {/* SOMAR */}
                    <Pressable
                        onPress={() => soma()}
                        style={
                            ({ pressed }) => pressed ?
                                [styles.button, styles.buttonTouch]
                                :
                                styles.button
                        }
                    >
                        <Text style={styles.textButton}> + </Text>
                    </Pressable>
                    {/* SUBTRAIR */}
                    <Pressable
                        onPress={() => sub()}
                        style={
                            ({ pressed }) => pressed ?
                                [styles.button, styles.buttonTouch]
                                :
                                styles.button
                        }
                    >
                        <Text style={styles.textButton}> - </Text>
                    </Pressable>
                    {/* MULTIPLICAR */}
                    <Pressable
                        onPress={() => multi()}
                        style={
                            ({ pressed }) => pressed ?
                                [styles.button, styles.buttonTouch]
                                :
                                styles.button
                        }
                    >
                        <Text style={styles.textButton}> x </Text>
                    </Pressable>
                    {/* DIVIDIR */}
                    <Pressable
                        onPress={() => divi()}
                        style={
                            ({ pressed }) => pressed ?
                                [styles.button, styles.buttonTouch]
                                :
                                styles.button
                        }
                    >
                        <Text style={styles.textButton}> / </Text>
                    </Pressable>
            </View>
            {/* ZERAR */}
            <Pressable
                        onPress={() => zerar()}
                        style={
                            ({ pressed }) => pressed ?
                                [styles.buttonZerar, styles.buttonTouch]
                                :
                                styles.buttonZerar
                        }
                    >
                        <Text style={styles.textButton}> Zerar </Text>
                    </Pressable>
        </View>
    );
}