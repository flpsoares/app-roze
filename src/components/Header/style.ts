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

export const ModalButtonClose = styled.TouchableOpacity``

export const ModalContainer = styled(Animated.ScrollView)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: ${background};
`

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin-top: 22px;
`

export const ModalTitle = styled.Text`
  color: #fff;
  font-size: 22px;
`

export const ModalListItem = styled.View`
  margin-top: 22px;
`

export const NotificationButton = styled.TouchableOpacity`
  position: relative;
`

export const NotificationNumber = styled.Text`
  color: ${primary};
  background: ${primary};
  border-radius: 50000px;
  width: 16px;
  height: 16px;
  color: ${background};
  font-weight: bold;
  font-size: 12px;

  text-align: center;

  position: absolute;
  top: -5px;
  right: -5px;
`
