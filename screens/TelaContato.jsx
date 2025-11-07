import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function TelaContato(){
    return(
        <View>
            <Text>Entre em contato conosco para comprar nossos produtos</Text>

            <View style={styles.contatoLista}>
                <View style={styles.contatoBox}>
                    <FontAwesome name="phone" size={50} color="#400303" />
                    <Text style={styles.contatoTitulo}>Telefone:</Text>
                    <Text style={styles.contatoParagrafo}>+55 21 00000-0000</Text>
                </View>
                
                <View style={styles.contatoBox}>
                    <Entypo name="location-pin" size={50} color="#400303" />
                    <Text style={styles.contatoTitulo}>Endereço:</Text>
                    <Text style={styles.contatoParagrafo}>Av. 123, 222 - Rio de Janeiro RJ </Text>
                </View>
                
                <View style={styles.contatoBox}>
                    <MaterialIcons name="email" size={50} color="#400303" />
                    <Text style={styles.contatoTitulo}>Email:</Text>
                    <Text style={styles.contatoParagrafo}>preferida@adega.com.br</Text>
                </View>
                
                <View style={styles.contatoBox}>
                    <FontAwesome name="instagram" size={50} color="#400303" />
                    <Text style={styles.contatoTitulo}>Instagram:</Text>
                    <Text style={styles.contatoParagrafo}>@adegapreferida</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    contatoLista: {
        padding: 16,
    },

    contatoBox: {
        alignItems: 'center',
        marginBottom: 16,
    },

    contatoTitulo: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
    },

    contatoParagrafo: {
        fontSize: 14,
        color: '#333',
    },
});