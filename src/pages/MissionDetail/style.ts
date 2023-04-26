import styled from 'styled-components/native'
import { background, primary } from '../../styles/globalVar'

export const Container = styled.View`
  position: relative;
  background: #141517;
  height: 100%;
  padding: 24px 0;
  padding-bottom: 44px;
  gap: 22px;
`

export const ScrollableContainer = styled.ScrollView`
  height: 100%;
  gap: 22px;
`

export const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`

export const Wrapper = styled.View`
  padding: 0 18px;
`

export const ButtonObjective = styled.TouchableOpacity`
  background: ${primary};
  padding: 8px 12px;
  margin-top: 22px;
  width: 200px;
  border-radius: 50px;

  justify-content: center;
  align-items: center;
  align-self: center;
`

export const ButtonObjectiveText = styled.Text`
  color: #141517;
  font-weight: bold;
  font-size: 18px;
`

export const ModalContainer = styled.View`
  height: 80%;
  background: ${background};
  width: 100%;
  justify-items: center;
  /* align-items: center; */
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
