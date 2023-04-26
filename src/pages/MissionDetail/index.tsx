import React, { useState } from 'react'
import {
  ButtonObjective,
  ButtonObjectiveText,
  Container,
  ScrollableContainer,
  Wrapper,
  ModalContainer,
  ModalTitle,
  ModalHeader,
  ModalCloseButton,
  ModalSubTitle,
  ModalInfo,
  ModalInfoText,
  ModalSendLinkText,
  ModalInput,
  ModalButtonSubmit,
  ModalButtonSubmitText,
  SecondModalContainer,
  SecondModalTitle,
  SecondModalBanner,
  SecondModalButtonClose
} from './style'
import { Header } from '../../components/Header'
import { Banner } from '../../components/layout/MissionDetail/Banner'
import { Discount } from '../../components/layout/MissionDetail/Discount'
import { Description } from '../../components/layout/MissionDetail/Description'
import { CompleteMission } from '../../components/layout/MissionDetail/CompleteMission'
import { Numbers } from '../../components/layout/MissionDetail/Numbers'
import { AntDesign } from '@expo/vector-icons'

import Modal from 'react-native-modal'

export const MissionDetail: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false)

  const changeModal = () => {
    setModalIsOpen(false)
    setSecondModalIsOpen(true)
  }

  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Header hasPadding title="Detalhes da missão" />
        <Banner />
        <Wrapper>
          <Discount />
          <Description />
          <CompleteMission />
          <ButtonObjective onPress={() => setModalIsOpen(true)}>
            <ButtonObjectiveText>Objetivo da missão</ButtonObjectiveText>
          </ButtonObjective>
          <Numbers />
        </Wrapper>
        <Modal
          onBackdropPress={() => setModalIsOpen(false)}
          onBackButtonPress={() => setModalIsOpen(false)}
          isVisible={modalIsOpen}
        >
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Envie o link da sua missão para aprovação</ModalTitle>
              <ModalCloseButton onPress={() => setModalIsOpen(false)}>
                <AntDesign name="close" color="#CCD2E3" size={30} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalSubTitle>Objetivo da missão</ModalSubTitle>
            <ModalInfo>
              <ModalInfoText>Número de visualizações: 80,000</ModalInfoText>
              <ModalInfoText>Número de curtidas: 80,000</ModalInfoText>
              <ModalInfoText>Lorem ipsum: 80,000</ModalInfoText>
            </ModalInfo>
            <Discount />
            <ModalSendLinkText>Enviar o link para Aprovação</ModalSendLinkText>
            <ModalInput
              placeholder="https://www.instagram.com/"
              placeholderTextColor="#a1a1a1"
            />
            <ModalButtonSubmit onPress={changeModal}>
              <ModalButtonSubmitText>Confirmar envio</ModalButtonSubmitText>
            </ModalButtonSubmit>
          </ModalContainer>
        </Modal>
        <Modal
          onBackdropPress={() => setSecondModalIsOpen(false)}
          onBackButtonPress={() => setSecondModalIsOpen(false)}
          isVisible={secondModalIsOpen}
        >
          <SecondModalContainer>
            <SecondModalButtonClose onPress={() => setSecondModalIsOpen(false)}>
              <AntDesign name="close" color="#CCD2E3" size={30} />
            </SecondModalButtonClose>
            <SecondModalTitle>Link da missão enviado com sucesso</SecondModalTitle>
            <SecondModalBanner
              source={require('../../../public/assets/Mission/mission-second-modal-banner.png')}
            />
          </SecondModalContainer>
        </Modal>
      </Container>
    </ScrollableContainer>
  )
}
