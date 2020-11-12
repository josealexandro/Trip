import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
align-items: center;
margin-bottom: 20px;

`;
export const BackgroundImage = styled.Image`
position: absolute;
width: 100%;
`;

export const Date =styled.TouchableOpacity`
flex-direction: row;
width: 100%;
justify-content: center;
`;
export const AddTrip = styled.TouchableOpacity`
top:60px;
width: 150px;
height: 20px; 
background-color: #fff;
margin-left: 145px;
border-radius: 4px;
`;

export const Header =styled.View`
margin-bottom: 110px;
`;

export const Box = styled.View`
flex-direction: column;
width: 300px;
height: 80px;
border-radius: 4px;
background: #fff;
margin: 10px;
elevation: 10;
`;

export const BoxInfo= styled.View`
flex-direction: row;
justify-content: space-between;

`;

export const  BoxIfoTwo= styled.View`
flex-direction: row;
justify-content: space-between;
top: 10px;
left: 5px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  background: #e9e9e9;
  
  border-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #2c2c2c;
  font-size: 19px;
  
`;


