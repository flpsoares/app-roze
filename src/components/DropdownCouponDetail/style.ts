import styled from 'styled-components/native'
import { primary } from '../../styles/globalVar'

export const Container = styled.View`
  background: ${primary};
  width: 100%;

  padding: 12px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-sizing: border-box;
  gap: 12px;
`
export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: #1e1f24;
`
export const Text = styled.Text`
  /* line-height: 22px; */
`

export const Title = styled.Text`
  font-weight: bold;
`
