import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(181, 124, 255)',
        // margin: 20,
        padding:20,
        flex:1,
        borderRadius:20,
    },
    titulo: {
        fontSize: 30,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    texto: {
        fontSize:18,
        fontStyle: 'italic',
    },

    texto2: {
        fontFamily: 'Arial Black',
        width: '100%',
        textAlign: 'right',
        fontSize: 20,
        marginTop: 40,
        color: '#5000a4',
    },

    texto3:{
        fontFamily:'Roboto',
        width:'100%',
        textAlign:'left',
        fontSize: 20,
        marginTop:30,
        color:'#00fafa',
        fontWeight:'300'
    }
});

export default styles;