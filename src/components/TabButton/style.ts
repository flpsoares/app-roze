import styled from 'styled-components/native'
import { primary } from '../../styles/globalVar'

export const Container = styled.TouchableOpacity`
  border: 2px solid ${primary};
  border-radius: 500px;
  padding: 2px;
  width: 50px;
  height: 50px;
  top: -25px;
`

export const Content = styled.View`
  background: ${primary};
  border: 2px solid #fff;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 500px;
`
