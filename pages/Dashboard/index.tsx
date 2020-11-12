import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';
import Avatar from '../../assets/images/rosto.png';

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


const Dashboard: React.FC = () =>  { 
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
            <Text style={{color: "#FFF", fontSize: 20 }}>Maria</Text>
              <Title>Menu</Title>                                      
          </TitleName>
  </Container>   
  
    <Caixa >
            <Button  onPress= {( ) => navigation.navigate('Schedule')}>Agendar viagem</Button>

            <Button onPress= {( ) => navigation.navigate('Travels')}>Ver viagens agendadas</Button>
            
            <Button onPress= {( ) =>  navigation.navigate('Track')}>Rastrear encomenda</Button>

            <Button onPress= {( ) =>  navigation.navigate('Send')}>Enviar encomenda</Button>
   
    </Caixa>

<BackToSignIn onPress= {( ) =>  navigation.navigate('Login')}>
 
        <BackToSignInText>Voltar </BackToSignInText>
</BackToSignIn>


  </>
);
};

export default Dashboard;