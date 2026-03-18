import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import img from '../../../assets/002-1-react-native.png'; 
import catWait from '../../../assets/cat1.png';
import catHelp from '../../../assets/cat2.png';
import catDonot from '../../../assets/cat3.png';

import Card from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card
                img = {catWait} 
                titulo = {'Camiseta CatsProtection'}
                descricao = {'Camiseta da marca CatsProtection'}
                preco = {'Preço: R$39,00'}
            />
            <Card 
                img = {catHelp}
                titulo = {'Camiseta Festiva'}
                descricao = {'Camiseta Felina Festiva'}
                preco = {'Preço: R$49,00'}
            />
            <Card 
                img = {catDonot}
                titulo = {'Camiseta the cat'}
                descricao = {'Camiseta com aviso de não o gato'}
                preco = {'Preço: R$39,00'}
            />
        </View>
    );
}

export default Atividade02;