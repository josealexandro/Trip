import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import  Icon  from 'react-native-vector-icons/Feather';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { 
Container, 
BackgroundImage, 
Title, 
ForgotPassword, 
ForgotPassworldText, 
Caixa,
Create,
CreateText  } from './styles';

const Login: React.FC = () => {
    const navigation  = useNavigation( );
return (
  <>
  <KeyboardAvoidingView style={{flex:1}} behavior='padding' enabled>
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
          <Image style={{top: 10}} source={Logo} />
           <Title>Minha Van e Encomendas</Title>                                            
      </View>
      
  </Container>
  </KeyboardAvoidingView> 
  
  <Caixa>
    <Input  keyboardType="numeric" name="phone" icon="smartphone" placeholder="N° de telefone" />

    <Input  name="password" icon="lock" placeholder="Senha" secureTextEntry={true} />
  <Create onPress={( ) => navigation.navigate('ForgotPassword')}>
     <CreateText>Esqueci minha senha</CreateText>
   </Create >
   
    <Button  onPress={( ) => navigation.navigate('Dashboard')}>Entrar</Button>
  
  </Caixa>
 <ForgotPassword  onPress={( ) => navigation.navigate('Register')}>
      < Icon style={{top: 46}} name="log-in" size={20} color="#cc0000"  />
      <ForgotPassworldText >Criar conta</ForgotPassworldText >
    </ForgotPassword>
    
  </>
);
};

export default Login;