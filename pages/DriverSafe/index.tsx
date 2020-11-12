import React, {useState} from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity, Alert, KeyboardAvoidingView, } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';


import BG from '../../../assets/images/bg.png';
import Logo from '../../../assets/images/logo.png';


import Button from '../../components/Button/index';

import { 
Container, 
BackgroundImage, 
Title, 
Box,
Caixa,
BoxTwo
 } from './styles';

const DriverSafe: React.FC = () => {
    const navigation  = useNavigation( );
    const [isSelected, setSelection] = useState(false);
    const [isSelectedTwo, setSelectionTwo] = useState(false);
    const [ isSelectedHome, setSelectedhome] = useState(false);
    const [ isSelectedHomeOne, setSelectedHomeOne] = useState (false);

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
                    <Text style={{ fontSize: 25}}>Seu veículo possui seguro?</Text>
                    <BoxTwo>
                        <CheckBox style={{top:13, right:10}}
                                value={isSelected}
                                onValueChange={setSelection}
                        />
                        <Text style={{top:15, right:10, fontSize:20}}>Sim</Text>
                              <View style={{left:15, top: 13}}>
                              <CheckBox 
                                      value={isSelectedTwo}
                                      onValueChange={setSelectionTwo}
                              /></View>
                              <Text style={{ left: 14, top: 15,  fontSize: 20}}>Não</Text>
                        </BoxTwo>
                    <Text style={{ top: 40, fontSize: 25, textAlign: "center"}}>Entrega encomendas na residência?</Text>

                    <Text style={{top: 69, right: 28, fontSize:20}}>Sim</Text>

                    <View style={{flexDirection:"row", }}>
                            <CheckBox style={{top:40, right:26}}
                                        value={isSelectedHome}
                                        onValueChange={setSelectedhome}
                                />
                              <CheckBox style={{top:40, left: 32}}
                                        value={isSelectedHomeOne}
                                        onValueChange={setSelectedHomeOne}
                                />
                                <Text style={{top: 42, fontSize:20, left: 30}}>Não</Text>
                        </View>
    <Box>

    
            <Button style={{width:110, height: 40, right: 5, borderRadius: 3, top: 24}} 
            onPress= {( ) =>  navigation.navigate('DriverMenu')}>Póximo</Button>
            
   </Box>
  </Caixa>
  
  </>
);
};

export default DriverSafe;