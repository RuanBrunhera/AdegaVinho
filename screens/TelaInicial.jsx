import { Text, ImageBackground, StyleSheet } from 'react-native';

export default function TelaInicial(){
    return (
        <ImageBackground
            blurRadius={ 10 }
            style={styles.container}
            source={require('../assets/capa.jpg')}
        >
            <Text style={styles.titulo}>Adega Preferida</Text>
            <Text style={styles.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    titulo: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10
    },

    subtitulo: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
});