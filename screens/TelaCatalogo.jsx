import { StyleSheet, Text, View, Image } from 'react-native';

import vinhoBranco from '../assets/vinho-branco.jpg';
import vinhoRose from '../assets/vinho-rose.jpg';
import vinhoSeco from '../assets/vinho-seco.jpg';
import vinhoEspecial from '../assets/vinho-especial.jpg';

export default function TelaCatalogo() {
  return (
    <View style={styles.container}>
        <Text>Nossos vinhos</Text>
        <Text>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
        
        <View>
            <Image 
            source={vinhoBranco}
            />
            <Text>Chatigny Chardonnay</Text>
            <Text>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
        </View>
        
        <View>
            <Image 
            source={vinhoRose}
            />
            <Text>Concha y Toro Exportacion</Text>
            <Text>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
        </View>
        
        <View>
            <Image 
            source={vinhoSeco}
            />
            <Text>Portada Winemaker's</Text>
            <Text>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
        </View>
        
        <View>
            <Image 
            source={vinhoEspecial}
            />
            <Text>Elvio Cogno Ravera Barolo</Text>
            <Text>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
