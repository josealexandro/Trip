import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    width: 90%;
    height: 60px;
    padding:0 16px;
    background: #fff;
    border-radius: 10px;
    align-items: center;    
    border-bottom-width: 1px;
    border-bottom-color: #c6c6c6;
    margin-bottom: 20px;
    flex-direction: row;
    
`;

export const TextInput = styled.TextInput`
    flex; 1;
    color: #696969;
    font-size: 16px;
    margin-top: 5px;
`;

export const Icon = styled( FeatherIcon)`
margin-right: 10px;
`;
