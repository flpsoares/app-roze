import styled from 'styled-components/native'
import { background, primary } from '../../../styles/globalVar'

export const Container = styled.View`
  background-color: ${background};
  height: 100%;
  position: relative;
  padding: 0 22px;
`

export const ScrollableContainer = styled.ScrollView`
  height: 100%;
`

export const BannerArea = styled.View`
  justify-content: center;
  align-items: center;
  padding: 62px 12px;
`

export const Banner = styled.Image`
  /* height: 300px; */
  width: 100%;
  object-fit: cover;
`

export const Title = styled.Text`
  color: #d0d2d1;
  font-size: 14px;
  text-align: center;
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
  color: #999;
  padding: 8px;
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

export const MiniInputArea = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  gap: 12px;
  margin: 8px 0;
  width: 250px;
`

export const MiniInputSeparator = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const MiniInput = styled.TextInput`
  padding: 8px;
  width: 34px;
  background: #141517;
  border-radius: 6px;
  color: #fff;
`
