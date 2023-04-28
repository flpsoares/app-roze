import React, { useState } from 'react'
import {
  ButtonDetail,
  ButtonDetailText,
  ButtonSubmit,
  ButtonSubmitText,
  Code,
  CodeArea,
  Container,
  Discount,
  ExtraText,
  Icon,
  ItemAvatarImage,
  ItemAvatarItem,
  ItemBottom,
  ItemLeft,
  ItemTop,
  ItemTopInfo,
  Line,
  LineInfo,
  ModalAvatarImage,
  ModalAvatarItem,
  ModalButtonClose,
  ModalContainer,
  ModalDiscountNumber,
  ModalDiscountText,
  ModalTitle,
  ModalValidity,
  Name,
  NormalText,
  Validity
} from './style'
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons'
import { DropdownCouponDetail } from '../../../DropdownCouponDetail'

export const DetailItem: React.FC<App.Coupom> = (coupom) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <Container>
      <ItemTop>
        <ItemAvatarItem>
          <ItemAvatarImage source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
        </ItemAvatarItem>
        <ItemTopInfo>
          <Name>{coupom.name}</Name>
          <NormalText>{coupom.store}</NormalText>
        </ItemTopInfo>
      </ItemTop>
      <Line></Line>
      <ItemBottom>
        <ItemLeft>
          <LineInfo>
            <ExtraText>10%</ExtraText>
            <Discount>De desconto</Discount>
          </LineInfo>
          <Validity>Validade até 01/09/2022</Validity>
          <ButtonDetail onPress={toggleDropdown}>
            <ButtonDetailText>
              Ver detalhes {dropdownIsOpen ? <Icon>↑</Icon> : <Icon>↓</Icon>}
            </ButtonDetailText>
          </ButtonDetail>
        </ItemLeft>
        <ButtonSubmit onPress={openModal}>
          <ButtonSubmitText>Usar Cupom</ButtonSubmitText>
        </ButtonSubmit>
      </ItemBottom>
      {dropdownIsOpen && <DropdownCouponDetail />}
      <Modal
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        isVisible={modalIsOpen}
      >
        <ModalContainer>
          <ModalAvatarItem>
            <ModalAvatarImage source={{ uri: coupom.img }} />
          </ModalAvatarItem>
          <ModalTitle>{coupom.store}</ModalTitle>
          <LineInfo>
            <ModalDiscountNumber>80%</ModalDiscountNumber>
            <ModalDiscountText>De desconto</ModalDiscountText>
          </LineInfo>
          <ModalValidity>Validade até 01/08/2022</ModalValidity>
          <CodeArea>
            <Code>{coupom.code}</Code>
          </CodeArea>
          <ModalButtonClose onPress={closeModal}>
            <AntDesign name="close" color="#000" size={30} />
          </ModalButtonClose>
        </ModalContainer>
      </Modal>
    </Container>
  )
}