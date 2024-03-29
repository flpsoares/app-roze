import styled from 'styled-components/native'
import { primary } from '../../styles/globalVar'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 22px; */
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: #d0d2d1;
  height: 120px;

  padding: 0 8px;

  position: relative;
`

export const Image = styled.Image`
  height: 80px;
  width: 60px;
  border-radius: 6px;
`

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
`
export const Name = styled.Text`
  font-size: 12px;
  color: ${primary};
  margin-left: 0;
`

export const Info = styled.View`
  justify-content: space-around;
  height: 80px;
`

interface StatusProps {
  status: string
}

export const Status = styled.Text<StatusProps>`
  margin-right: 28px;
  color: ${(props) =>
    props.status === 'pending'
      ? '#E48900'
      : props.status === 'approved'
      ? '#00CC52'
      : props.status === 'work'
      ? '#1E91B0'
      : '#E02B1D'};
`

export const Left = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`

export const Menu = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 47px;
`
