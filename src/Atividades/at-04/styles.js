import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: RFPercentage(1),
        justifyContent: 'center',
        backgroundColor: '#b17df5',
        padding: RFPercentage(8),
    },

    paragraph: {
        margin: RFPercentage(2.4),
        fontSize: RFPercentage(2.6),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#230d38'
    },

    txtNome: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#230d38',
        marginBottom: RFPercentage(0.5),
    },

    txtSaida: {
        margin: RFPercentage(2.4),
        fontSize: RFPercentage(2.2),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3b1c85',
        textTransform: 'capitalize',
    },

    txtEntrada: {
        borderWidth: RFPercentage(0.3),
        textAlign: 'left',
        fontSize: RFPercentage(2.2),
        borderColor: '#000',
        height: RFPercentage(4),
        color: '#3b1c85',
        borderRadius: RFPercentage(1),
        marginBottom: RFPercentage(1),
        padding: RFPercentage(0.5),
    },

    button: {
        backgroundColor: '#7843d9',
        height: RFPercentage(4.0),
        justifyContent: 'center',
        borderRadius: RFPercentage(1.0),
        marginTop: RFPercentage(2.0),
    },

    textButton: {
        fontSize: RFPercentage(2.2),
        color: '#fff',
        textAlign: 'center',
    },

    txtPlaceholder: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#8d5acf',
        marginBottom: RFPercentage(0.5),
    },
});

export default styles;