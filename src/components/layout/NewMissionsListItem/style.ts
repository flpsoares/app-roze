import styled from 'styled-components/native'
import { background, primary } from '../../../styles/globalVar'

export const Container = styled.View`
  flex-direction: column;
  width: 48%;
  height: auto;
  background: ${background};
  padding: 12px 8px;
  border-radius: 6px;
`

export const Image = styled.Image`
  height: 180px;
  width: 100%;
  border-radius: 6px;
`

export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
  line-height: 42px;
`
export const Name = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
`

export const Info = styled.View`
  justify-content: space-around;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: ${primary};
  padding: 4px 8px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 80%;
`

export const ButtonSubmitText = styled.Text`
  font-size: 16px;
`
