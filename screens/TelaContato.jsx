import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function TelaContato() {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View>
                <Text style={styles.titulo}>Entre em contato conosco para comprar nossos produtos</Text>

                <View style={styles.contatoLista}>
                    <View style={styles.contatoBox}>
                        <FontAwesome name="phone" size={50} color="#4b0d0d" />
                        <Text style={styles.contatoTitulo}>Telefone:</Text>
                        <Text style={styles.contatoParagrafo}>+55 21 00000-0000</Text>
                    </View>

                    <View style={styles.contatoBox}>
                        <Entypo name="location-pin" size={50} color="#4b0d0d" />
                        <Text style={styles.contatoTitulo}>Endereço:</Text>
                        <Text style={styles.contatoParagrafo}>Av. 123, 222 - Rio de Janeiro RJ</Text>
                    </View>

                    <View style={styles.contatoBox}>
                        <MaterialIcons name="email" size={50} color="#4b0d0d" />
                        <Text style={styles.contatoTitulo}>Email:</Text>
                        <Text style={styles.contatoParagrafo}>preferida@adega.com.br</Text>
                    </View>

                    <View style={styles.contatoBox}>
                        <FontAwesome name="instagram" size={50} color="#4b0d0d" />
                        <Text style={styles.contatoTitulo}>Instagram:</Text>
                        <Text style={styles.contatoParagrafo}>@adegapreferida</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 18,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    contatoLista: {
        paddingVertical: 8,
        width: '100%',
        alignItems: 'center',
    },
    contatoBox: {
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#7a7a7aff',
        backgroundColor: '#FFFFFF',
        paddingVertical: 18,
        paddingHorizontal: 14,
        borderRadius: 10,
        width: '80%',
    },
    contatoTitulo: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
        color: '#4b0d0d',
    },
    contatoParagrafo: {
        fontSize: 14,
        color: '#4b0d0d',
        marginTop: 6,
        textAlign: 'center',
    },
    scrollContent: {
        paddingBottom: 40,
        paddingLeft: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    }
});