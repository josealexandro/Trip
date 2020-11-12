import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
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
Box,
Caixa,
CreateAccount
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
           <Title style={{ top: 10, left: 4}}>Minha Van e Encomendas</Title>                                            
      </View>
      
  </Container>
  </KeyboardAvoidingView> 
  
  <Caixa>
    <Box>
      
        <Input  keyboardType="numeric" name="phone" icon="smartphone" placeholder="N° de telefone" />
         <Button  onPress={( ) => { navigation.navigate('DriverMenu')}}>Entrar</Button>
        
   </Box>
      
  </Caixa>
        <CreateAccount  onPress={( ) => navigation.navigate('DriverCriateAccount')}>
             < Icon style={{right: 10}} name="log-in" size={20} color="#cc0000"  />
             <Text style={{right: 5}} >Criar conta</Text>
        </CreateAccount>
  </>
);
};

export default DriverLogin;