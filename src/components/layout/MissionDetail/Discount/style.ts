import styled from 'styled-components/native'
import { primary } from '../../../../styles/globalVar'

export const Container = styled.View`
  background: ${primary};

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
  border-radius: 4px;
`

export const Text = styled.Text`
  color: #141517;
  font-weight: bold;
  font-size: 18px;
`
