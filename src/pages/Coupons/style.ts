import styled from 'styled-components/native'
import { background, primary } from '../../styles/globalVar'

export const Container = styled.Pressable`
  position: relative;
  background: #141517;
  height: 100%;
  padding: 24px 18px;
  padding-bottom: 44px;
  gap: 22px;
`

export const ScrollableContainer = styled.ScrollView`
  height: 100%;
`

export const List = styled.ScrollView`
  height: 80%;
  padding: 8px 0;
`
