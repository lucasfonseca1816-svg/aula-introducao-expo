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
    }
});

export default styles;