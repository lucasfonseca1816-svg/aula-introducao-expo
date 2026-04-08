import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from "./styles";

export default function Atividade04() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    const [nomeCompleto, setNomeCompleto] = useState('Digite seu nome');

    const ExibeNomeCompleto = () => {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Atividade 4
            </Text>

            <Text style={styles.txtSaida}>
                {nomeCompleto}
            </Text>

            <Text style={styles.txtNome}>
                Nome
            </Text>

            <TextInput
                style={styles.txtEntrada} 
                keyboardType='default' 
                onChangeText={(entrada) => setNome(entrada)}
                value={nome}
                maxLength={24}
                placeholder='Nome'
                placeholderTextColor={'#6d43a5'}
            />
            
            <Text style={styles.txtNome}>
                Sobrenome
            </Text>

             <TextInput
                style={styles.txtEntrada} 
                keyboardType='default' 
                onChangeText={(entrada) => setSobrenome(entrada)}
                value={sobrenome}
                maxLength={24}
                placeholder='Sobrenome'
                placeholderTextColor={'#6d43a5'}
            />

            <TouchableOpacity
                style={styles.button} 
                onPress={ExibeNomeCompleto}                
            >
                <Text style={styles.textButton}> Exibir Nome Completo </Text>
            </TouchableOpacity>
        </View>
    );
};