import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade06() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [msg, setMsg] = useState('IMC');
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
        
        if(tmpImc < 18.6){
            setMsg('Abaixo do peso')
        }
        else if(tmpImc < 25){
            setMsg('Peso normal')  
        }
        else if(tmpImc < 30){
            setMsg('Sobrepeso')
        }
        else if(tmpImc < 35){
            setMsg('Obesidade grau 1')
        }
        else if(tmpImc < 40){
            setMsg('Obesidade grau 2')
        }
        else if(tmpImc >= 40){
            setMsg('Obesidade grau 3')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{msg}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}