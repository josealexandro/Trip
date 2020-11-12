import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import BG from '../../../assets/images/bg.png';

import Avatar from '../../assets/images/rosto.png';

import Teste from '../../assets/images/vanOne.png'

import { 
    Container, 
    BackToSignIn, 
    BackToSignInText,
    BackgroundImage,
    Box,
    Header,
    BoxInfo,
    AddTrip,
    BoxIfoTwo} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';


const Travels: React.FC = () =>  { 
  const navigation  = useNavigation( );
  return (
  <>
  <Container> 
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />
      <BackgroundImage source={BG} />
      <Image style = {{ height: 80, width: 80, borderRadius: 40, top: 15}} source={Avatar} />
      <AddTrip style={{ alignItems: "center"}}>
                 <Text>Adicionar viagem</Text>
            </AddTrip>    
       <Header></Header>

        <ScrollView>
            <Box>
                <BoxInfo style={{ borderBottomWidth: 2, borderColor:"#d8d8d8"}}>
                            <Text style={{top: 20, left: 5}}>Viagem com Raimundo da van, {"\n"} 
                        Para Petrolina. {"\n"} {"\n"} {"\n"} 
                        </Text> 
                             <Image style = {{ height: 80, width: 90, borderRadius: 45,}} source={Teste} /> 
                        </BoxInfo>
                      
                       <BoxIfoTwo>
                          <Text> º Floresta-PE - Saida as 14hs{"\n"} º Petrolina-PE - chegada as19hs</Text>
                       </BoxIfoTwo>
            </Box>
            <Box>
                <BoxInfo style={{ borderBottomWidth: 2, borderColor:"#d8d8d8"}}>
                            <Text style={{top: 20, left: 5}}>Viagem com Raimundo da van, {"\n"} 
                        Para Petrolina. {"\n"} {"\n"} {"\n"} 
                        </Text> 
                             <Image style = {{ height: 80, width: 90, borderRadius: 45,}} source={Teste} /> 
                        </BoxInfo>
                      
                       <BoxIfoTwo>
                          <Text> º Floresta-PE - Saida as 14hs{"\n"} º Petrolina-PE - chegada as19hs</Text>
                       </BoxIfoTwo>
            </Box>
            <Box>
            <BoxInfo style={{ borderBottomWidth: 2, borderColor:"#d8d8d8"}}>
                            <Text style={{top: 20, left: 5}}>Viagem com Raimundo da van, {"\n"} 
                        Para Petrolina. {"\n"} {"\n"} {"\n"} 
                        </Text> 
                             <Image style = {{ height: 80, width: 90, borderRadius: 45,}} source={Teste} /> 
                        </BoxInfo>
                      
                       <BoxIfoTwo>
                          <Text> º Floresta-PE - Saida as 14hs{"\n"} º Petrolina-PE - chegada as19hs</Text>
                       </BoxIfoTwo>
            </Box>
            <Box>
            <BoxInfo style={{ borderBottomWidth: 2, borderColor:"#d8d8d8"}}>
                            <Text style={{top: 20, left: 5}}>Viagem com Raimundo da van, {"\n"} 
                        Para Petrolina. {"\n"} {"\n"} {"\n"} 
                        </Text> 
                             <Image style = {{ height: 80, width: 90, borderRadius: 45,}} source={Teste} /> 
                        </BoxInfo>
                      
                       <BoxIfoTwo>
                          <Text> º Floresta-PE - Saida as 14hs{"\n"} º Petrolina-PE - chegada as19hs</Text>
                       </BoxIfoTwo>
            </Box>
            <Box>
            <BoxInfo style={{ borderBottomWidth: 2, borderColor:"#d8d8d8"}}>
                            <Text style={{top: 20, left: 5}}>Viagem com Raimundo da van, {"\n"} 
                        Para Petrolina. {"\n"} {"\n"} {"\n"} 
                        </Text> 
                             <Image style = {{ height: 80, width: 90, borderRadius: 45,}} source={Teste} /> 
                        </BoxInfo>
                      
                       <BoxIfoTwo>
                          <Text> º Floresta-PE - Saida as 14hs{"\n"} º Petrolina-PE - chegada as19hs</Text>
                       </BoxIfoTwo>
            </Box>
            <Box>
            <BoxInfo style={{ borderBottomWidth: 2, borderColor:"#d8d8d8"}}>
                            <Text style={{top: 20, left: 5}}>Viagem com Raimundo da van, {"\n"} 
                        Para Petrolina. {"\n"} {"\n"} {"\n"} 
                        </Text> 
                             <Image style = {{ height: 80, width: 90, borderRadius: 45,}} source={Teste} /> 
                        </BoxInfo>
                      
                       <BoxIfoTwo>
                          <Text> º Floresta-PE - Saida as 14hs{"\n"} º Petrolina-PE - chegada as19hs</Text>
                       </BoxIfoTwo>
            </Box>
            <Box>
            <BoxInfo style={{ borderBottomWidth: 2, borderColor:"#d8d8d8"}}>
                            <Text style={{top: 20, left: 5}}>Viagem com Raimundo da van, {"\n"} 
                        Para Petrolina. {"\n"} {"\n"} {"\n"} 
                        </Text> 
                             <Image style = {{ height: 80, width: 90, borderRadius: 45,}} source={Teste} /> 
                        </BoxInfo>
                      
                       <BoxIfoTwo>
                          <Text> º Floresta-PE - Saida as 14hs{"\n"} º Petrolina-PE - chegada as19hs</Text>
                       </BoxIfoTwo>
            </Box>
            
        </ScrollView>

  </Container>  
    
<BackToSignIn onPress= {( ) =>  navigation.navigate('Dashboard')}>
 
        <BackToSignInText>Voltar </BackToSignInText>
</BackToSignIn>


  </>
 );
};

export default Travels;