import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';
import Avatar from '../../assets/images/pneu.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { 
    Container, 
    BackgroundImage, 
    Title,
    Caixa, 
    Boxone, 
    BackToSignIn, 
    BackToSignInText,
    AvatarImage,
    TitleName } from './styles';


const LojiDashboard: React.FC = () =>  { 
  const navigation  = useNavigation( );
  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />
    
    <Container> 
    <BackgroundImage source={BG} />
      
          <AvatarImage>
                <Image style = {{ height: 80, width: 80, borderRadius: 40,}} source={Avatar} />
          
        </AvatarImage>
          <TitleName>
            <Text style={{color: "#FFF", fontSize: 25, fontWeight: "bold" }}>Pneu e Cia</Text>                                     
          </TitleName>
  </Container>   
  
    <Caixa >
            <Button  >Enviar encomenda</Button>

            <Button >Rastrear encomendas</Button>
            
    </Caixa>

<BackToSignIn onPress= {( ) =>  navigation.navigate('Start')}>
 
        <BackToSignInText>Voltar </BackToSignInText>
</BackToSignIn>


  </>
);
};

export default LojiDashboard;