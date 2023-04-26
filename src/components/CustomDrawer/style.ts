import styled from 'styled-components/native'
import { primary } from '../../styles/globalVar'

export const Container = styled.View`
  background: ${primary};
  height: 100%;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 42px 22px;
`

export const ProfileArea = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
`

export const AvatarArea = styled.View`
  border: 1px solid #fff;
  padding: 8px;
  border-radius: 500px;
`

export const Avatar = styled.Image`
  border: 6px solid #fff;
  width: 150px;
  height: 150px;
  border-radius: 500px;
`

export const Name = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #000000;
`

export const Email = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  /* blocos */

  color: #1e1f24;
`

export const List = styled.View`
  gap: 32px;
  margin-top: 32px;
`

export const Item = styled.TouchableOpacity``

export const ItemText = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
`
