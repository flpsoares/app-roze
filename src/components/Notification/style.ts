import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  /* background: #f3f5f2; */
  padding: 12px;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 6px;
  padding-left: 38px;

  position: relative;
`

export const Line = styled.View`
  background: #f3f5f2;
  width: 4px;
  height: 120%;

  position: absolute;
  left: 12px;
  top: 16px;
`

export const Icon = styled.View`
  background: #fff;
  border: 2px solid #f3f5f2;
  border-radius: 5000px;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 15px;
  top: 15px;

  margin-left: -12px;
`

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
`

export const Date = styled.Text`
  font-size: 12px;
  color: #ccc;
`

export const Text = styled.Text`
  color: #fff;
`

export const Content = styled.Text`
  font-size: 15px;
  max-width: 90%;
`

export const ButtonDelete = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 15px;

  transition: filter;

  &:hover {
    filter: brightness(0.8);
  }
`
