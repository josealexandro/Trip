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
Box,
BoxOne
  } from './styles';

const DriverInformation: React.FC = () => {
    const navigation  = useNavigation( );
return (
  <>
  
    <StatusBar barStyle="light-content" backgroundColor="#E03430" />
   <KeyboardAvoidingView behavior="padding">
    <Container>
      <BackgroundImage source={BG} />
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
      
        
      }}>
          <Image style={{top: 10}} source={Logo} />
           <Title>Minha Van e encomendas</Title>                                            
      </View>
     
      
      <Box>
        <Text style={{fontSize: 16, top: 10}}>Olá! gostariamos de saber mais sobre você.</Text> 
         <BoxOne>
            <Input  name="user" icon="user" placeholder="Nome ou apelido" />
            <Input  name="user" icon="map" placeholder="Rota" />
            <Input  name="user" icon="clock" placeholder="Horário" /> 
          
           <Button style={{top:15}} onPress={( ) => navigation.navigate('DriverSafe')}>Próximo</Button>
          </BoxOne>
      </Box></Container>
       </KeyboardAvoidingView>
  
  
  </>
);
};

export default DriverInformation;