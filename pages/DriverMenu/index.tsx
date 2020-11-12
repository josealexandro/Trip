import React from 'react';
import { View, StatusBar, Text, Image,  } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Feather';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';
import Avatar from '../../assets/images/motoristaone.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { 
    Container, 
    BackgroundImage, 
    Title,
    Caixa, 
    ButtonTrip,
    BackToSignIn, 
    BackToSignInText,
    AvatarImage,
    TitleName } from './styles';


const DriverMenu: React.FC = () =>  { 
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
            <Text style={{color: "#FFF", fontSize: 20 }}>João</Text>
              <Title>Menu</Title>                                      
          </TitleName>
 
  
    <Caixa >
            <Button onPress= {( ) =>  navigation.navigate('DriverTrips')}>Viagens agendadas</Button>
                  
                <ButtonTrip style={{flexDirection: "row"}}>
                
                        <Text style={{fontSize:18, color:"#fff", padding: 14, left: 14, }}>Solicitações de viagens</Text>
                        <Icon style={{bottom: 12, left: 10}} name= "bell" size={30} color="#fff"/>
                </ButtonTrip>
            
            <Button>Enviar informações de entrega</Button>
   
    </Caixa>
 </Container>   
<BackToSignIn onPress= {( ) =>  navigation.navigate('Start')}>
        <BackToSignInText>Voltar </BackToSignInText>
</BackToSignIn>


  </>
);
};

export default DriverMenu;