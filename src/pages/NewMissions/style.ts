import styled from 'styled-components/native'
import { background, primary } from '../../styles/globalVar'
import DropdownPicke from 'react-native-dropdown-picker'

export const Container = styled.View`
  background: #141517;
  height: 100%;
  padding: 34px 18px;
  padding-bottom: 44px;
`

export const ButtonsArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

interface ButtonProps {
  isActive: boolean
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background: ${(props) => (props.isActive ? primary : 'transparent')};
  border: 1px solid ${primary};
  border-radius: 50px;
  padding: 8px 18px;
`

export const ButtonText = styled.Text<ButtonProps>`
  color: ${(props) => (props.isActive ? background : primary)};
  font-weight: bold;
`

export const Wrapper = styled.ScrollView`
  height: 80%;
  /* padding: 8px 18px; */
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;

  margin-bottom: 4px;
`

export const List = styled.View`
  flex-direction: row;
  justify-content: center;

  column-gap: 12px;
  row-gap: 32px;
  flex-wrap: wrap;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  z-index: 10;
  padding: 0 18px;
`

export const HeaderRight = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const HeaderTitle = styled.Text`
  color: ${primary};
  font-size: 20px;
`

export const ModalContainer = styled.View`
  height: 80%;
  background: ${background};
  width: 100%;
  justify-items: center;
  border-radius: 30px;

  padding: 22px;
`

export const ModalTitle = styled.Text`
  color: ${primary};
  font-size: 22px;
  margin-bottom: 14px;
`

export const Item = styled.View`
  margin-top: 22px;
`

export const Picker = styled(DropdownPicke)`
  background: #0c0c0e;
  color: #d0d2d1;
`

export const ItemText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 4px;
  z-index: 1;
`

export const InputItem = styled.View`
  flex-direction: row;
  align-items: center;
  background: #0c0c0e;
  border-radius: 8px;
  height: 50px;
`

export const Input = styled.TextInput`
  width: 90%;
  height: 100%;
  color: #d0d2d1;
  padding: 0 10px;
`

export const InputIcon = styled.View`
  width: 10%;
  height: 100%;

  justify-content: center;
  align-items: center;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: ${primary};
  padding: 18px 12px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 40px;
  width: 80%;
`

export const ButtonClear = styled.TouchableOpacity`
  padding: 18px 12px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 40px;
  width: 80%;
`

export const ButtonSubmitText = styled.Text`
  font-size: 16px;
`
export const ButtonClearText = styled.Text`
  font-size: 16px;
  color: ${primary};
`

export const ModalCloseButton = styled.TouchableOpacity``

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
