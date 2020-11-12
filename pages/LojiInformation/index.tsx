import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import  Icon  from 'react-native-vector-icons/Feather';

import Contrato from '../../../src/assets/images/contratoSocial.png';
import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { 
Container, 
BackgroundImage, 
Box,
BoxOne,
BoxOneText,
Back

  } from './styles';
import { Title } from '../Start/styles';

const LojiInformation: React.FC = () => {
    const navigation  = useNavigation( );
return (
        <>
                   <StatusBar barStyle="light-content" backgroundColor="#E03430" />
                    <KeyboardAvoidingView style={{flex:1}}behavior="padding">
                        <Container>
                            <BackgroundImage source= {BG}/>
                                <Image style={{top: 10}} source={Logo} />
                                <Text style={{color: '#fff', top: 10, fontSize: 20, }}>Minha Van e Encomendas</Text>
                           
                                <Box>
                                    <Input  name= "user" icon="user" placeholder="Nome da empresa" />
                                    <BoxOne>
                                        <BoxOneText>Agora precisamos da foto do contrato social de sua empresa, click na foto abaixo para enviar</BoxOneText>
                                        <Image style = {{ height: 80, width: 80, borderRadius:10, }} source={Contrato}/>
                                    </BoxOne>
                                </Box>
                               
                           </Container> 
                           
                    </KeyboardAvoidingView>
         <Back  onPress= {( ) =>  navigation.navigate('LojiLogin')}><Text>Voltar</Text></Back>
        </>
        );
    };

export default LojiInformation;