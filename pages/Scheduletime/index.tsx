import React, {useState} from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, Picker, StyleSheet,  } from 'react-native';
import  { useNavigation } from '@react-navigation/native';


import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';


import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { 
    Container, 
    BackgroundImage, 
    Title,
    Caixa, 
    BackToSignIn, 
    BackToSignInText,
    AvatarImage,
     } from './styles';

const Scheduletime: React.FC = () =>  { 
  const navigation  = useNavigation( );
  return (
      
  <>
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />
    <KeyboardAvoidingView style= {{flex:1}} enabled>
          <Container> 
           <BackgroundImage source={BG} />
      
          <AvatarImage>
                <Image  source={Logo} />
          </AvatarImage>
          <View>
       <Text style={{ top:150, color: '#fff', fontSize: 20}}>Preciso de uma van!</Text>
       </View>
  </Container>

  <Caixa>
        <Input name="map-pin" icon="clock" placeholder="Qual horário?" />
        
        <Button style={{ width:'90%', padding: 30, top: 25}} onPress= {( ) =>  navigation.navigate('Confirmation')}>Buscar</Button>
  </Caixa>

  
  </KeyboardAvoidingView>
            
        <BackToSignIn  onPress= {( ) =>  navigation.navigate('Dashboard')}>
                <BackToSignInText>Voltar </BackToSignInText>
        </BackToSignIn>

  </>
);
};

export default Scheduletime;