import React from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import BG from '../../../assets/images/bg.png';

import Avatar from '../../assets/images/motoristaone.png';



import { 
    Container, 
    BackToSignIn, 
    BackToSignInText,
    BackgroundImage,
    Box,
    Header,
    BoxInfo,
    Date,
    AddTrip,
    BoxIfoTwo} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';


const DriverTrips: React.FC = () =>  { 
  const navigation  = useNavigation( );
  return (
  <>
  <Container> 
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />
      <BackgroundImage source={BG} />
      <Image style = {{ height: 80, width: 80, borderRadius: 40, top: 15}} source={Avatar} />
          <Text style={{color:'#fff', fontSize: 25, top: 35, fontWeight: "bold"}}>João da van</Text>  
       <Header></Header>
       <Date>
               <Icon style={{top:5, right: 5}} name= "chevrons-left" size= {25} color= "#000"/>
                  <Text style={{fontWeight:"bold", fontSize: 25}}>Hoje -12/09/2020</Text>
               <Icon style={{top:5, left: 5}} name= "chevrons-right" size= {25} color= "#000"/>
       </Date>
       {/*<Button style={{width:"50%", height: "4%"}} >Adicionar Viagem</Button>*/}
        <ScrollView>
               <Box>
                    <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Francisco, de Serra talhada{"\n"}para Petrolândia 
                    Quarta feira as 14hs.
                    </Text> 
               </Box>
               <Box>
                    <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Raimundo, de Serra talhada{"\n"}para Salvador 
                    Quarta feira as 12hs.
                    </Text> 
               </Box>
               <Box>
                    <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Raimunda, de Serra talhada{"\n"}para Vermelhos
                    Quarta feira as 19hs.
                    </Text> 
               </Box>
               <Box>
                <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Francisco, de Serra talhada{"\n"}para petrolandia 
                Quarta feira as 14hs.
                </Text> 
          </Box>
          <Box>
                <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Francisco, de Serra talhada{"\n"}para petrolandia 
                Quarta feira as 14hs.
                </Text> 
          </Box>
          <Box>
                <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Francisco, de Serra talhada{"\n"}para petrolandia 
                Quarta feira as 14hs.
                </Text> 
          </Box>
          <Box>
                <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Francisco, de Serra talhada{"\n"}para petrolandia 
                Quarta feira as 14hs.
                </Text> 
          </Box>
          <Box>
                <Text style={{top: 15, left: 10, fontWeight: "bold"}}>Viagem com Francisco, de Serra talhada{"\n"}para petrolandia 
                Quarta feira as 14hs.
                </Text> 
          </Box>

                
      </ScrollView>
    
  </Container>  
    
<BackToSignIn onPress= {( ) =>  navigation.navigate('DriverMenu')}>
 
        <BackToSignInText>Voltar </BackToSignInText>
</BackToSignIn>


  </>
 );
};

export default DriverTrips;