import styled from 'styled-components/native'
import { background, primary } from '../../../../styles/globalVar'

export const Container = styled.TouchableOpacity`
  background-color: ${background};
  width: 100%;
  height: 130px;
  padding: 0 18px;
  border-radius: 6px;

  position: relative;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 22px;
`

export const Image = styled.Image``

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${primary};
  font-size: 18px;
  width: 130px;
`

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  width: 200px;
`

export const Wrapper = styled.View``
