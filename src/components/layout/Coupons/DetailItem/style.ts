import styled from 'styled-components/native'
import { background, primary } from '../../../../styles/globalVar'

export const Container = styled.View`
  background: ${background};
  /* padding: 12px; */
  margin-bottom: 22px;
  border-radius: 8px;
  position: relative;
  z-index: 1;
`

export const ItemTop = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-bottom: 5px solid #000;
  padding: 0 12px;
  padding-top: 12px;
`

export const ItemAvatarItem = styled.View`
  flex-direction: row;
  /* background: #fff; */
  border-radius: 5000px;
  width: 50px;
  height: 50px;
  border: 4px solid #fff;
`

export const ItemAvatarImage = styled.Image`
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 5000px;
`

export const ItemTopInfo = styled.View``

export const NormalText = styled.Text`
  color: #d0d2d1;
  font-size: 16px;
`

export const Name = styled.Text`
  color: #d0d2d1;
  font-size: 26px;
  font-weight: bold;
`
export const ExtraText = styled.Text`
  color: #d0d2d1;
  font-size: 32px;
  font-weight: bold;
`

export const Discount = styled.Text`
  margin-top: 15px;
  color: #d0d2d1;
  font-size: 16px;
`

export const Validity = styled.Text`
  color: #d0d2d1;
  line-height: 32px;
`

export const ItemBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ItemLeft = styled.View`
  padding: 0 12px;
  padding-bottom: 12px;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: ${primary};
  padding: 12px;
  border-radius: 30px;
  align-self: center;

  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  flex: 1;
  margin: 0 12px;
`

export const ButtonSubmitText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const LineInfo = styled.View`
  flex-direction: row;
  gap: 4px;
`

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #000;
  margin: 12px 0;
`

export const ButtonDetail = styled.TouchableOpacity``

export const ButtonDetailText = styled.Text`
  color: #fff;
  font-weight: bold;
`

export const Icon = styled.Text`
  font-size: 18px;
`

export const ModalContainer = styled.View`
  align-items: center;

  background: #fff;

  width: 100%;
  border-radius: 30px;

  position: relative;

  padding: 42px 22px;
`

export const ModalAvatarItem = styled.View`
  border: 4px solid #000;
  border-radius: 5000px;
  width: 70px;
  height: 70px;
`

export const ModalAvatarImage = styled.Image`
  border-radius: 5000px;
  width: 100%;
  height: 100%;
`

export const ModalTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`

export const ModalDiscountNumber = styled.Text`
  font-size: 18px;
`

export const ModalDiscountText = styled.Text`
  margin-top: 4px;
`

export const ModalValidity = styled.Text`
  color: #141517;
  opacity: 0.6;
`

export const CodeArea = styled.View`
  border: 5px solid ${primary};
  padding: 22px;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`

export const Code = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 22px;
`

export const ModalButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`
