import styled, { css } from 'styled-components/native'
import { background, primary } from '../../styles/globalVar'
import Animated from 'react-native-reanimated'

interface ContainerProps {
  hasPadding?: boolean
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  z-index: 10;
  padding: ${(props) => (props.hasPadding ? '0 18px' : '0')};
`

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text`
  color: ${primary};
  font-size: 20px;
`

export const ModalOverlay = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`

export const ModalContainer = styled(Animated.ScrollView)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: ${background};
`

export const ModalListItem = styled.View`
  margin-top: 52px;
`
