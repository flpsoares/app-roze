import styled, { css } from 'styled-components/native'
import { primary } from '../../styles/globalVar'

interface ContainerProps {
  hasPadding?: boolean
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  z-index: 10;
  padding: ${(props) => (props.hasPadding ? '0 18px' : '0')};
`

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text`
  color: ${primary};
  font-size: 20px;
`
