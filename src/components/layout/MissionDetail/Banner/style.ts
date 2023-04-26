import styled from 'styled-components/native'
import { primary } from '../../../../styles/globalVar'

export const Image = styled.Image`
  height: 300px;
  width: 100%;
`

export const PaginationContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const PaginationDot = styled.View<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 0 4px;
  background-color: ${({ active }) => (active ? primary : '#c4c4c4')};
`

export const CarouselContainer = styled.View``
