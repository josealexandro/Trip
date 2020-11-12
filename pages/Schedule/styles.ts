import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
align-items: center;

`;

export const BackgroundImage = styled.Image`
position: absolute;
width: 100%;
`;
export const AvatarImage = styled.View`
align-items: center;
top: 20px;
height: 10px;
width: 100px;
`;
export const TitleName = styled.View`
align-items: center;
justify-content: center;
top: 118px;

`;
export const  Title =  styled.Text`
font-size: 30px;
color: #fff;
flex: 1;
font-size: 25px;
`;
export const Caixa = styled.View`
align-items: center;
width: 85%;
border-radius: 5px;
justify-content: center;
margin-left: 29px;
height: 250px;
background-color:#fff;
margin-bottom: 130px;
elevation: 25;
`;
export const Boxone = styled.View` 
align-items: center;
width: 100%; 
background-color: #E03430;
justify-content: center;
border-radius: 6px;
height: 52px;

`;
export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  background: #e9e9e9;
  border-top-width: 1px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const BackToSignInText = styled.Text`
  color: #2c2c2c;
  font-size: 19px;
  
`;


