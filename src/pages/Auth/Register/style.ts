import styled from 'styled-components/native'
import { background, primary } from '../../../styles/globalVar'

export const Container = styled.Pressable`
  height: 100%;
  position: relative;
`

export const ScrollableContainer = styled.ScrollView`
  height: 100%;
`

export const Banner = styled.Image`
  height: 250px;
  width: 100%;
`

export const Content = styled.View`
  background-color: #1e1f24;
  width: 100%;
  flex: 1;

  border-top-left-radius: 38px;
  border-top-right-radius: 38px;

  margin-top: -40px;
  z-index: 1;

  padding: 22px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${primary};
  font-size: 30px;
`

export const SubTitle = styled.Text`
  color: #fff;
  width: 80%;
  margin-top: 8px;
  margin-bottom: 38px;
`

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

interface StepProps {
  isActive: boolean
}

export const Step = styled.View<StepProps>`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background: ${(props) => (props.isActive ? `${primary}` : '#C4C4C4')};
`

export const InputItem = styled.View`
  gap: 12px;
  width: 100%;
  margin-top: 12px;
`

export const HalfInputItem = styled.View`
  gap: 12px;
  width: 50%;
  margin-top: 12px;
`

export const InputTitle = styled.Text`
  color: #fff;
  margin-left: 12px;
`
export const Input = styled.TextInput`
  background: #141517;
  border-radius: 30px;
  padding: 8px;
  color: #999;
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

export const InputLine = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  gap: 12px;
`

export const SelectImageButton = styled.TouchableOpacity`
  background: #141517;
  width: 140px;
  height: 140px;
  border-radius: 1000px;
  margin: 22px 0;

  justify-content: center;
  align-items: center;

  position: relative;
`

export const SelectImageIcon = styled.Image``

export const SelectImageArea = styled.View`
  align-items: center;
`

export const ButtonPlus = styled.TouchableOpacity`
  background: ${primary};
  width: 30px;
  height: 30px;
  border-radius: 1000px;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 20px;
  right: 0;
`
