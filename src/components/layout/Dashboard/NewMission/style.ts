import styled from 'styled-components/native'
import { background, primary } from '../../../../styles/globalVar'
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.View`
  background-color: ${background};
  width: 100%;
  padding: 8px 18px;
  border-radius: 6px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`

export const ButtonSeeAll = styled.TouchableOpacity``

export const ButtonSeeAllText = styled.Text`
  color: ${primary};
  font-size: 16px;
`

export const CarouselContainer = styled.View``

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

export const ItemContainer = styled.View`
  align-items: center;
  width: 100%;
  gap: 4px;
`

export const ItemImage = styled.Image`
  height: 150px;
  width: 200px;
  border-radius: 6px;
`

export const ItemTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`

export const ItemSubtitle = styled.Text`
  color: rgba(255, 255, 255, 0.65);
`

export const ItemButton = styled.TouchableOpacity``

export const ItemButtonText = styled.Text`
  color: ${primary};
  font-size: 18px;

  flex-direction: row;
  align-items: center;
`

export const Icon = styled(AntDesign)``

export const ItemParticipateText = styled.Text`
  color: #32cd32;
  font-weight: bold;
`
