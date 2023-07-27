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
                <Feather color={primary} name="user-check" size={20} />
                {/* <MaterialCommunityIcons
                  color={primary}
                  name="view-grid-outline"
                  size={20}
                /> */}
                <ItemTitle>Minha conta</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Ao preencher seus dados cadastrais, disponibilize as redes sociais
                onde vai postar as campanhas participantes, não esqueça de deixá-las
                abertas durante o período de aprovação das missões e preze pela
                veracidade dos dados, para não haver problemas na validação de sua
                conta.
              </ItemDesc>
            </Item>
            <Item>
              <ItemTitleArea>
                <Feather color={primary} name="home" size={20} />
                <ItemTitle>Restaurantes</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Os estabelecimentos parceiros são variados, utilize as categorias, a
                localização e a descrição da missão para escolher qual campanha
                participar.
              </ItemDesc>
            </Item>
            <Item>
              <ItemTitleArea>
                <Entypo color={primary} name="tablet-mobile-combo" size={20} />
                <ItemTitle>Missões</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Fique atento(a) a descrição da campanha, siga as regras do aplicativo
                e do estabelecimento. Não esqueça de informar o link correto da
                postagem, para análise e aprovação.
              </ItemDesc>
            </Item>
            <Item>
              <ItemTitleArea>
                <MaterialIcons color={primary} name="attach-money" size={20} />
                <ItemTitle>Cupons</ItemTitle>
              </ItemTitleArea>
              <ItemDesc>
                Quando sua missão for aprovada, ficará disponível um código para uso,
                informe ao funcionário do estabelecimento. Utilize seus cupons antes
                de expirarem e fique atento às condições para validá-lo. Uma vez
                gerado o código, ele passa a ser invalido.
              </ItemDesc>
            </Item>
          </ListItem>
        </Wrapper>

        <Contact>
          <ContactTitle>Fale com nosso suporte</ContactTitle>
          <ContactLine />
          <ContactItem>
            <FontAwesome color={primary} name="whatsapp" size={20} />
            <ContactItemTitle>+55 11 93323‑8066</ContactItemTitle>
          </ContactItem>
          <ContactItem>
            <Foundation color={primary} name="telephone" size={20} />
            <ContactItemTitle>+55 11 93323‑8066</ContactItemTitle>
          </ContactItem>
          <ContactItem>
            <Fontisto color={primary} name="email" size={20} />
            <ContactItemTitle>suporte@rozeapp.com.b</ContactItemTitle>
          </ContactItem>
        </Contact>
      </Container>
    </ScrollableContainer>
  )
}
