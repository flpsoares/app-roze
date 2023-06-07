import styled from 'styled-components/native'
import { background, primary } from '../../styles/globalVar'

export const Container = styled.View`
  background: ${primary};
  width: 200px;
  z-index: 1000;

  position: absolute;
  right: 30px;
  padding: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`
export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: #1e1f24;
`

export const Button = styled.TouchableOpacity`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  width: 100%;
  text-align: left;
  text-decoration: none;
  font-weight: bold;

  padding: 8px 4px;

  display: flex;

  z-index: 2000;
`

export const ButtonText = styled.Text`
  color: #1e1f24;
  font-weight: bold;
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
  color: #d0d2d1;
  font-size: 14px;
  width: 150px;
  font-weight: bold;
`

export const ModalSubTitle = styled.Text`
  color: ${primary};
  font-size: 22px;
  margin-bottom: 12px;
`

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`

export const ModalCloseButton = styled.TouchableOpacity``

export const ModalInfo = styled.View`
  margin: 22px 0;
  margin-bottom: 32px;
  background: #141517;
  padding: 12px;
`

export const ModalInfoText = styled.Text`
  line-height: 24px;
  color: #d0d2d1;
`

export const ModalSendLinkText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0;
  margin-left: 12px;
`

export const ModalInput = styled.TextInput`
  background: #141517;
  border: 1px solid ${primary};
  border-radius: 30px;
  color: #fff;
  padding: 4px 12px;
`

export const ModalButtonSubmit = styled.TouchableOpacity`
  background-color: ${primary};
  padding: 18px 12px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  width: 80%;
`

export const ModalButtonSubmitText = styled.Text`
  font-size: 16px;
`

export const SecondModalContainer = styled.View`
  align-items: center;

  /* height: 50%; */
  background: ${background};
  width: 100%;
  border-radius: 30px;

  position: relative;

  padding: 42px 22px;
`

export const SecondModalTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  width: 240px;
  margin-bottom: 52px;
`

export const SecondModalBanner = styled.Image``

export const SecondModalButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`

export const ObjetiveBox = styled.View`
  background: #141517;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;
`

export const ObjetiveText = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #d0d2d1;
`
