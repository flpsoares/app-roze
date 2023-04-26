import styled from 'styled-components/native'
import { background, primary } from '../../../../styles/globalVar'
import { AntDesign } from '@expo/vector-icons'

import { Dimensions } from 'react-native'

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
  margin-bottom: 28px;
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

export const List = styled.FlatList`
  min-height: 300px;
  max-height: 500px;
`

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: #d0d2d1;
  padding-bottom: 22px;
`

export const ItemImage = styled.Image`
  height: 80px;
  width: 60px;
  border-radius: 6px;
`

export const ItemTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`
export const ItemName = styled.Text`
  font-size: 18px;
  color: ${primary};
`

export const ItemInfo = styled.View`
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

interface ItemStatusProps {
  status: string
}

export const ItemStatus = styled.Text<ItemStatusProps>`
  color: ${(props) =>
    props.status === 'Pendente'
      ? '#E48900'
      : props.status === 'Aceita'
      ? '#00CC52'
      : '#E02B1D'};
`

export const Left = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`
