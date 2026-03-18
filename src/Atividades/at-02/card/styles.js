import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'flex-start',
        borderWidth: RFPercentage(0.3), 
        borderColor: '#1d0a49', 
        padding: RFPercentage(1.5), 
        borderRadius: RFPercentage(1.5), 
        width: '90%', 
        alignItems: 'center', 
        marginBottom: RFPercentage(1), 
    }, 
    titulo: {
        fontSize: RFPercentage(2.5), 
        fontWeight: 'bold', 
        color: '#222', 
    }, 
    descricao: {
        fontSize: RFPercentage(2), 
        color: '#222',
        textAlign: 'center',
        marginBottom: RFPercentage(1),
        marginTop: RFPercentage(1),
    }, 

    preco: {
        fontSize: RFPercentage(1.8),
        color: '#222',
    },
    
    imagem: {
        height: RFPercentage(16), 
        //width: RFPercentage(50),  
        //height: 100,
        width: '25%', 
        resizeMode: 'contain',
        //flex:1,
        // filter: 'grayscale(80%)', 
        // filter: 'sepia(80%)', 
        // filter: 'saturate(10%)', 
        //filter: 'brightness(30%)', 
        // filter: 'contrast(50%)', 
        // filter: 'invert(100%)', 
    }, 
});

export default styles;