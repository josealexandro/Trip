import styled from 'styled-components/native';

export const Container = styled.View`
align-items: center; 
flex: 1;


`;

export const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
 
`;

export const  Title =  styled.Text`
font-size: 20px;
color: #FFF;
margin-top: 10px;
margin-bottom: 10px;

`;

export const ForgotPassword = styled.TouchableOpacity`
margin-top: 20px;
flex-direction: row;
flex: 1;
align-items: center;
background-color:#fff2;
justify-content: center;
`;

export const ForgotPassworldText  = styled.Text`
  color: #000;
  font-size: 16px;
  align-items: center; 
  padding: 8px;
`;

export const Caixa = styled.View`
align-items: center;
width: 90%;
height: 210px;
border-radius: 4px;
justify-content: center;
margin-left: 18px;
background-color:#fff;
elevation: 25;
margin-bottom: 150px;
`;

export const Box = styled.View`
margin-top:25px;
width: 100%;
align-items: center;
`;

export const Create = styled.TouchableOpacity `
margin-left: 130px; 
bottom: 10px;
padding: 0 30px;
`;

export const CreateText = styled.Text`
font-size: 14px;

`;

export const CreateAccount = styled.TouchableOpacity`
align-items: center;
padding: 5px;
background-color:#e9e9e9;
flex-direction: row;
justify-content: center;
`;
