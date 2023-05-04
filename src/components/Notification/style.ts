import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  /* background: #f3f5f2; */
  padding: 12px;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 6px;
  /* padding-left: 50px; */

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
  left: 0;
  top: 15px;
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

export const Content = styled.View`
  padding-left: 35px;
`

export const ButtonDelete = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  top: 5px;

  transition: filter;

  &:hover {
    filter: brightness(0.8);
  }
`
