import styled from 'styled-components/native'
import { primary } from '../../styles/globalVar'

export const Container = styled.View`
  background: ${primary};
  width: 200px;
  /* height: 200px; */
  z-index: 1000;

  position: absolute;
  /* bottom: -10px; */
  right: 30px;
  padding: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`
export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: #1e1f24;
`

export const Button = styled.TouchableOpacity`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  width: 100%;
  text-align: left;
  text-decoration: none;
  font-weight: bold;

  padding: 8px 4px;

  display: flex;

  z-index: 2000;
`

export const ButtonText = styled.Text`
  color: #1e1f24;
  font-weight: bold;
`
