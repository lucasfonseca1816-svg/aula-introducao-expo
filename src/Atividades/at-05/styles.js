import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#cba3ff',
        padding: RFValue(8),
        width: '100%',
        borderRadius: RFValue(20),
    },

    operator: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    txtSaida: {
        margin: RFValue(6),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    txtEntrada: {
        borderWidth: RFValue(3),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#923fff',
        // height: 50, 
        color: '#000',
        borderRadius: RFValue(10),
        //   marginTop: RFValue(10), 
        padding: RFValue(10),
        backgroundColor:'#ebdbff',
    },
    button: {
        backgroundColor: '#923fff',
        height: RFValue(56),
        justifyContent: 'center',
        borderRadius: RFValue(10),
        marginTop: RFValue(20),
        width: '20%',
        borderColor:'#5319a0',
        borderWidth: RFValue(3),
        //marginLeft: RFValue(1),
    },
    buttonTouch: {
        backgroundColor: '#ba86fd',
        borderColor:'#894ed6',
    },

    buttonZerar: {
        backgroundColor: '#923fff',
        height: RFValue(56),
        justifyContent: 'center',
        borderRadius: RFValue(10),
        marginTop: RFValue(20),
        width: '100%',
        borderColor:'#5319a0',
        borderWidth: RFValue(3),
    },
    textButton: {
        fontSize: RFValue(28),
        color: '#000000',
        textAlign: 'center',
    },
    textLabel: {
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color: '#000',
        marginTop:RFValue(10),
    },
    txtTotal: {
        color: '#000000',
        fontWeight: 'bold',
    },
});

export default styles;