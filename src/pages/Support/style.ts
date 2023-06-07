import styled from 'styled-components/native'
import { background, primary } from '../../styles/globalVar'

export const Container = styled.View`
  background: #141517;
  height: 100%;
  padding: 34px 18px;
  padding-bottom: 44px;
`

export const ScrollableContainer = styled.ScrollView`
  height: 100%;
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
  padding: 18px;
  gap: 22px;
  margin-top: 12px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;

  margin-bottom: 4px;
  align-self: center;
`

export const ListItem = styled.View`
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`

export const Item = styled.View`
  gap: 12px;
`

export const ItemTitleArea = styled.View`
  flex-direction: row;
  gap: 6px;
`

export const ItemTitle = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  margin-top: -2px;

  color: #d0d2d1;
`

export const ItemDesc = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;

  color: #d0d2d1;
`

export const Contact = styled.View`
  background: #1e1f24;
  border-radius: 4px;

  padding: 32px 12px;

  align-items: center;
  margin-top: 42px;
  gap: 12px;
`

export const ContactTitle = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: ${primary};
`

export const ContactLine = styled.View`
  background: ${primary};
  width: 100%;
  height: 1px;
  margin: 22px 0;
  opacity: 0.3;
`

export const ContactItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  width: 100%;
`

export const ContactItemTitle = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #d0d2d1;
`
