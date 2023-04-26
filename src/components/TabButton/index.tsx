import React from 'react'
import { Container, Content } from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface TabButtonProps {
  name: any
  isActive: boolean
}

export const TabButton: React.FC<TabButtonProps> = ({ isActive, name }) => {
  return (
    <>
      {isActive ? (
        <Container>
          <Content>
            <MaterialCommunityIcons name={name} size={26} />
          </Content>
        </Container>
      ) : (
        <MaterialCommunityIcons name={name} size={26} color="#89939E" />
      )}
    </>
  )
}
