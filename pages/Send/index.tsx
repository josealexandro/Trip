import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import  Icon  from 'react-native-vector-icons/Feather';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Container, BackgroundImage, Title, Caixa, Boxone, BackToSignIn, BackToSignInText  } from './styles';


const Send: React.FC = () =>  { 
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
          <Title style={{top: 10}}>O que você deseja enviar</Title>                                      
      </View>
  </Container>
  
    <Caixa>
         <Input  name="nome" icon="edit" placeholder="Descrição da encomenda" />
         <Input  name="telefone" icon="smartphone" placeholder="N° de telefone do destinatário" />
         <Button  onPress={( ) => navigation.navigate('Dashboard')}>Próximo</Button>
    </Caixa>

<BackToSignIn onPress= {( ) =>  navigation.navigate('Dashboard')}>
        <Icon name="arrow-left" size={20}/>
        <BackToSignInText>Voltar </BackToSignInText>
</BackToSignIn>


  </>
);
};

export default Send;