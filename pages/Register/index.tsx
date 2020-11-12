import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Container, BackgroundImage, Title, Caixa, Boxone, BackToSignIn, BackToSignInText  } from './styles';


const Resgister: React.FC = () =>  { 
  const navigation  = useNavigation( );
  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#E03430" />
    
    <Container> 
    
      
      <BackgroundImage source={BG} />
      <View style={{
        height: 260,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 15,
        marginBottom: 15
      }}>
          <Image source={Logo} />
          <Title>Crie sua conta</Title>                                      
      </View>
  </Container>
  
    <Caixa>
    <Input  name="nome" icon="user" placeholder="Nome" />
    <Input  keyboardType="numeric"  name="telefone" icon="smartphone" placeholder="N° de telefone" />

     <Button  onPress={( ) => navigation.navigate('Dashboard')}>
            Criar conta
     </Button>
    </Caixa>

<BackToSignIn onPress= {( ) =>  navigation.navigate('Login')}>
        
        <BackToSignInText>Voltar para login</BackToSignInText>
</BackToSignIn>


  </>
);
};

export default Resgister;