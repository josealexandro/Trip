import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled( RectButton)`
    width: 90%;
    height: 58px;
    background: #cc0000;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    
`;

export  const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    
`;