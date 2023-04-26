import styled from 'styled-components/native'
import { background, primary } from '../../../styles/globalVar'

export const Container = styled.View`
  /* background-color: #000; */
  height: 100%;
  position: relative;
`

export const ScrollableContainer = styled.ScrollView`
  height: 100%;
`

export const Banner = styled.Image`
  height: 70%;
  width: 100%;
`

export const Content = styled.View`
  background-color: #1e1f24;
  height: 60%;
  width: 100%;

  border-top-left-radius: 38px;
  border-top-right-radius: 38px;

  position: absolute;
  bottom: 0;
  left: 0;

  align-items: center;

  padding: 22px;
`

export const Title = styled.Text`
  color: ${primary};
  font-size: 30px;
`

export const InputItem = styled.View`
  gap: 12px;
  width: 100%;
  margin-top: 12px;
`

export const InputTitle = styled.Text`
  color: #fff;
`

export const Input = styled.TextInput`
  background: #141517;
  border-radius: 30px;
  padding: 8px;
  color: #999;
`

export const ButtonArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
`

export const FormButton = styled.TouchableOpacity`
  color: #fff;
`

export const FormButtonText = styled.Text`
  color: #fff;
`

export const SubmitButton = styled.TouchableOpacity`
  background: ${primary};
  width: 100%;
  border-radius: 30px;
  margin: 22px 0;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
`

export const SubmitButtonText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
`

export const RegisterArea = styled.View`
  flex-direction: row;
  gap: 4px;
`

export const RegisterText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`

export const RegisterButton = styled.TouchableOpacity`
  color: ${primary};
  font-weight: bold;
`

export const RegisterButtonText = styled.Text`
  color: ${primary};
  font-weight: bold;
  font-size: 20px;
`
