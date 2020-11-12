import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;

`;

export const BackgroundImage = styled.Image`
position: absolute;
width: 100%;
`;

export const AvatarImage = styled.View`
flex: 1;
align-items: center;
top: 20px;
`;

export const TitleName = styled.View`
align-items: center;
justify-content: center;
flex:1;
margin-bottom: 50px;

`;

export const Caixa = styled.View`
align-items: center;
width: 85%;
border-radius: 5px;
justify-content: center;
margin-left: 29px;
height: 300px;
background-color:#fff;
margin-bottom: 100px;
elevation: 25;

`;

export const ButtonTrip = styled.TouchableOpacity`
width: 90%;
    height: 58px;
    background: #cc0000;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const  Title =  styled.Text`
font-size: 30px;
color: #fff;
margin-top: 10px;
margin-bottom: 10px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  background: #e9e9e9;
  border-top-width: 1px;
  border-color: #e9e9e9;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #2c2c2c;
  font-size: 19px;
  
`;


