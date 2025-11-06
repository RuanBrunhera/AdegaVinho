import { View, Text, ImageBackground } from 'react-native';

import imgFundo from '../assets/capa.jpg'

export default function TelaInicial(){
    return(
        <ImageBackground
            blurRadius={ 10 }
            style={{flex:1}}
            source={imgFundo}
        >
            <Text>Adega Preferida</Text>
            <Text>Aqui você encontra os melhores e mais saborosos vinhos</Text>
        </ImageBackground>
    )
}