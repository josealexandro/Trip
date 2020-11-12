import React from 'react';
import { View, StatusBar, Text, Image,  } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';


import { 
    Container, 
    BackgroundImage, 
    Title,
    SecondBox ,
    Boxone, 
    BackToSignIn, 
    BackToSignInText,
    AvatarImage,
    TitleName, 
    FirstBox,
BoxTwo  } from './styles';


const Track: React.FC = () =>  { 
  const navigation  = useNavigation( );
  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />
    
            <Container> 
                        
                              <BackgroundImage source={BG} />
                                    
                                    <AvatarImage>
                                          <Image  source={Logo} />
                                    </AvatarImage>
                                    <View>
                                          <TitleName>
                                                <Title>Rastreamento</Title>                                      
                                          </TitleName>
                                    </View>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", width:"100%", }}>
                                          <FirstBox style={{justifyContent:"center", alignItems: "center", }}>  
                                                <Text>EMCOMENDAS</Text>  
                                          </FirstBox>
                                          <FirstBox style={{justifyContent:"center", alignItems: "center"}}>  
                                                <Text>ENTREGUES</Text>  
                                          </FirstBox>
                                    </View>

                                    <SecondBox>
                                          <Text style={{fontSize: 20, fontWeight:"bold", left:10}}>Livro</Text>
                                          <Text style={{left:10}}>AA 123 456 789 BR             10/09/2020{"\n"}
                                          Objeto encaminhado de Petrolina PE para Floresta PE {"\n"}"Status da encomenda
                                          Santa Maria da boa vista"
                                          </Text>
                                    </SecondBox>
                                    
                                    

                                    <SecondBox>
                                          <Text style={{fontSize: 20, fontWeight:"bold", left:10}}>Caixa</Text>
                                          <Text style={{left:10}}>AA 123 456 789 BR             12/09/2020{"\n"}
                                          Objeto encaminhado de Petrolina PE para Floresta PE {"\n"}"Status da encomenda
                                          Lagoa grande PE"
                                          </Text>
                                    </SecondBox>

                                    
            
            
             </Container>
                  
                      
                        
                       
                                    
                                          
                                    
                        
                    
                        
           
            
        <BackToSignIn  onPress= {( ) =>  navigation.navigate('Dashboard')}>
                <BackToSignInText>Voltar </BackToSignInText>
        </BackToSignIn>


  </>
);
};

export default Track;