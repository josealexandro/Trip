import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
align-items: center;

`;

export const BackgroundImage = styled.Image`
width: 100%;


`;
export const AvatarImage = styled.View`
align-items: center;
bottom: 220px;
height: 10px;
width: 100px;
`;
export const TitleName = styled.View`
align-items: center;
justify-content: center;


`;
export const  Title =  styled.Text`
color: #fff;
font-size:25px;
bottom: 100px;
`;
export const Caixa = styled.View`

`;
export const Boxone = styled.TouchableOpacity` 
width: 30px;
height: 20px;
background:#f8f8f8ff;

`;
export const FirstBox = styled.View`
flex-direction: row;
width: 50%;
background: #f8f8f8ff;
height: 50px;
bottom: 40px;


`;

export const SecondBox = styled.View`

width: 90%;
height: 100px;
background: #f8f8f8ff;
elevation: 25;
margin: 2px;
`;



export const BoxTwo = styled.TouchableOpacity`

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


