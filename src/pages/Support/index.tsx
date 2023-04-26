import React, { useState } from 'react'
import {
  Button,
  ButtonText,
  ButtonsArea,
  Contact,
  ContactItem,
  ContactItemTitle,
  ContactLine,
  ContactTitle,
  Container,
  Item,
  ItemDesc,
  ItemTitle,
  ItemTitleArea,
  ListItem,
  ScrollableContainer,
  Title,
  Wrapper
} from './style'
import { Header } from '../../components/Header'
import { MissionListItem } from '../../components/MissionListItem'
import { FlatList } from 'react-native'
import {
  MaterialCommunityIcons,
  Feather,
  Entypo,
  MaterialIcons,
  FontAwesome,
  Foundation,
  Fontisto
} from '@expo/vector-icons'
import { primary } from '../../styles/globalVar'

interface ItemProps {
  id: number
  title: string
  name: string
  image: string
  status: string
}

export const Support: React.FC = () => {
  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Header title="Suporte" />
        <Wrapper>
          <Title>Como podemos ajudar você?</Title>
          <ListItem>
            <Item>
              <ItemTitleArea>
                <MaterialCommunityIcons
                  color={primary}
                  name="view-grid-outline"
                  size={20}
                />
                <ItemTitle>Por onde começar</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod . Proin tincidunt ipsum sit amet
              </ItemDesc>
            </Item>
            <Item>
              <ItemTitleArea>
                <Feather color={primary} name="user-check" size={20} />
                <ItemTitle>Minha conta</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod . Proin tincidunt ipsum sit amet
              </ItemDesc>
            </Item>
            <Item>
              <ItemTitleArea>
                <Entypo color={primary} name="tablet-mobile-combo" size={20} />
                <ItemTitle>Mobile App</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod . Proin tincidunt ipsum sit amet
              </ItemDesc>
            </Item>
            <Item>
              <ItemTitleArea>
                <MaterialIcons color={primary} name="attach-money" size={20} />
                <ItemTitle>Lorem ipsum</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod . Proin tincidunt ipsum sit amet
              </ItemDesc>
            </Item>
          </ListItem>
        </Wrapper>

        <Contact>
          <ContactTitle>Fale com nosso suporte</ContactTitle>
          <ContactLine />
          <ContactItem>
            <FontAwesome color={primary} name="whatsapp" size={20} />
            <ContactItemTitle>(98) 76543-210</ContactItemTitle>
          </ContactItem>
          <ContactItem>
            <Foundation color={primary} name="telephone" size={20} />
            <ContactItemTitle>(98) 76543-210</ContactItemTitle>
          </ContactItem>
          <ContactItem>
            <Fontisto color={primary} name="email" size={20} />
            <ContactItemTitle>exemplo@email@exemploc.om</ContactItemTitle>
          </ContactItem>
        </Contact>
      </Container>
    </ScrollableContainer>
  )
}
