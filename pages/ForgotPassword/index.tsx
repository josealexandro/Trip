import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import  Icon  from 'react-native-vector-icons/Feather';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Container, BackgroundImage, Title,  Caixa, Boxcreat } from './styles';

const Login: React.FC = () => {
  const navigation  = useNavigation( );
  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#E03430" />
    <KeyboardAvoidingView style= {{flex:1,}} behavior='padding' >
    <Container> 
    
      
      <BackgroundImage source={BG} />
      <View style={{
        height: 188,
        flexDirection: 'column',
        alignItems: 'center',
        
      }}>
          <Image source={Logo} />
          <Text style={{
            fontSize: 20,
            color: '#FFF',
            marginTop: 10,
            marginBottom: 10,
            fontFamily: 'Montserrat-Regular',
          }}>Esqueceu sua senha?</Text>                                               
      </View>
  </Container>
  
<Caixa>

     <Input  keyboardType="numeric" name="mobile" icon="phone" placeholder=" N° de telefone" />

     <Button  onPress={ ( ) => {Alert.alert( 'Uma mensagem foi enviada para seu celular');}}>Enviar</Button>
        
</Caixa>

<Boxcreat  onPress={( ) => navigation.navigate('Register')}>
      <Icon name="log-in" size={20} color="#cc0000"  />
      <Text  style={{padding:6}}>Criar conta</Text >
    </Boxcreat>
</KeyboardAvoidingView>
  </>
);
};

   

export default Login;