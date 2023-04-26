import styled from 'styled-components/native'
import { background, primary } from '../../../styles/globalVar'

export const Container = styled.View`
  /* background-color: #000; */
  height: 100%;
  position: relative;
`

export const Banner = styled.Image`
  height: 70%;
  width: 100%;
`

export const Content = styled.View`
  background-color: #1e1f24;
  height: 50%;
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
  color: #fff;
  font-size: 30px;
  font-weight: 700;
`

export const SubTitle = styled.Text`
  color: #fff;
  text-align: center;
  width: 80%;
  margin-top: 8px;
  margin-bottom: 38px;
`

export const ButtonArea = styled.View`
  gap: 22px;
  width: 100%;
`

export const ButtonLogin = styled.TouchableOpacity`
  background: ${primary};
  border: 1px solid ${primary};
  width: 100%;

  height: 50px;

  justify-content: center;
  align-items: center;
  border-radius: 50px;
`

export const ButtonRegister = styled.TouchableOpacity`
  background: #1e1f24;
  border: 1px solid #fff;
  width: 100%;

  height: 50px;

  justify-content: center;
  align-items: center;
  border-radius: 50px;
`

export const ButtonLoginText = styled.Text`
  color: #000;
  font-weight: bold;
`

export const ButtonRegisterText = styled.Text`
  color: #fff;
  font-weight: bold;
`
