import React, {useState} from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView,  StyleSheet,  } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Feather';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';
import Button from '../../components/Button/index';


import { 
    Container, 
    BackgroundImage, 
    Title,
    BoxOne,
    Box, 
    AvatarImage,
     } from './styles';

const Confirmation: React.FC = () =>  { 
  const navigation  = useNavigation( );
  return (
      
  <>
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />
    <KeyboardAvoidingView style= {{flex:1}} >
          <Container> 
           <BackgroundImage source={BG} />
      
          <AvatarImage>
                <Image  source={Logo} />
          </AvatarImage>
          <View>
             <Text style={{ top:140, color: '#fff', fontSize: 20}}>Minha van e encomendas</Text>
          </View>
      <BoxOne>
            <Icon name= "check" size={80} color="#006400"/>
      </BoxOne>
    <Box>
           <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 20}}>DADOS ENVIADOS COM SUCESSO
            LOGO VOCÊ RECEBERÁ UM RETORNO DO MOTORISTA</Text>
    </Box>
    <Button style={{width: 100, height:45, top: 30, }}  onPress= {( ) =>  navigation.navigate('Dashboard')}>Ok</Button>
    
  </Container>
         
  </KeyboardAvoidingView>
            

  </>
);
};

export default Confirmation;