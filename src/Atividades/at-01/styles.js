import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(181, 124, 255)',
        // margin: 20,
        padding: RFPercentage(2),
        flex:1,
        borderRadius:RFPercentage(2),
    },
    titulo: {
        fontSize: RFPercentage(3),
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage(3),
    },
    texto: {
        fontSize:RFPercentage(1.8),
        fontStyle: 'italic',
    },

    texto2: {
        fontFamily: 'Arial Black',
        width: '100%',
        textAlign: 'right',
        fontSize: RFPercentage(2),
        marginTop: RFPercentage(4),
        color: '#5000a4',
    },

    texto3:{
        fontFamily:'Roboto',
        width:'100%',
        textAlign:'left',
        fontSize: RFPercentage(2),
        marginTop:RFPercentage(3),
        color:'#00fafa',
        fontWeight: RFPercentage(30),
    }
});

export default styles;