import styled from 'styled-components/native'
import { background, primary } from '../../styles/globalVar'

export const Container = styled.View`
  background: #141517;
  height: 100%;
  padding: 34px 18px;
  padding-bottom: 44px;
  border-radius: 4px;
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
  background: ${background};
  height: 80%;
  padding: 8px 18px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;

  margin-bottom: 4px;
`
