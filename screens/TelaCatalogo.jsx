import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import vinhoBranco from '../assets/vinho-branco.jpg';
import vinhoRose from '../assets/vinho-rose.jpg';
import vinhoSeco from '../assets/vinho-seco.jpg';
import vinhoEspecial from '../assets/vinho-especial.jpg';

export default function TelaCatalogo() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>

      <View style={styles.container}>
        <Text style={styles.titulo}>Nossos vinhos</Text>
        <Text style={styles.subtitulo}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>

        <View style={styles.vinhoContainer}>
          <Image 
            source={vinhoBranco}
            style={styles.vinhoImage}
          />
          <View style={styles.vinhoText}>
            <Text style={styles.vinho}>Chatigny Chardonnay</Text>
            <Text style={styles.vinhoDesc}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
          </View>
        </View>

        <View style={styles.vinhoContainer}>
          <Image 
            source={vinhoRose}
            style={styles.vinhoImage}
          />
          <View style={styles.vinhoText}>
            <Text style={styles.vinho}>Concha y Toro Exportacion</Text>
            <Text style={styles.vinhoDesc}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
          </View>
        </View>

        <View style={styles.vinhoContainer}> 
          <Image 
            source={vinhoSeco}
            style={styles.vinhoImage}
          />
          <View style={styles.vinhoText}>
            <Text style={styles.vinho}>Portada Winemaker's</Text>
            <Text style={styles.vinhoDesc}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
          </View>
        </View>

        <View style={styles.vinhoContainer}>
          <Image 
            source={vinhoEspecial}
            style={styles.vinhoImage}
          />
          <View style={styles.vinhoText}>
            <Text style={styles.vinho}>Elvio Cogno Ravera Barolo</Text>
            <Text style={styles.vinhoDesc}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 6,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'left',
    color: '#5b5b5b',
    marginBottom: 20,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  vinho: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 0,
    color: '#fff',
  },
  vinhoDesc: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 0,
    paddingRight: 6,
    color: '#f5f1ee',
    lineHeight: 18,
  },
  vinhoContainer: {
    marginBottom: 20,
    backgroundColor: '#b88f86',
    width: '96%',
    height: 160,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vinhoImage: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    marginRight: 12,
    borderRadius: 4,
    backgroundColor: 'transparent'
  },
  vinhoText: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
    paddingLeft: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
