import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import  Icon  from 'react-native-vector-icons/Feather';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';

import Button from '../../components/Button/index';

import { 
Container, 
BackgroundImage, 
Title, 
Caixa,
Box
  } from './styles';

const DriverLogin: React.FC = () => {
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
           <Title style={{top: 10}}>Minha Van e Encomendas</Title>                                            
      </View>
      
  </Container>
  </KeyboardAvoidingView> 
  
  <Caixa>
    <Box>
      <Button  onPress={( ) => navigation.navigate('Login')}>Sou passageiro</Button>
      <Button style={{top: 5}}  onPress={( ) => navigation.navigate('DriverLogin')}>Sou motorista</Button>
      <Button  style={{top: 10}} onPress={( ) => navigation.navigate('LojiLogin')}>Sou lojista</Button>
    </Box>
  </Caixa>

  </>
);
};

export default DriverLogin;