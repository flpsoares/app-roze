import React, { useEffect, useState } from 'react'
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
  SecondModalButtonClose,
  Banner
} from './style'
import { Header } from '../../components/Header'
import { Discount } from '../../components/layout/MissionDetail/Discount'
import { Description } from '../../components/layout/MissionDetail/Description'
import { CompleteMission } from '../../components/layout/MissionDetail/CompleteMission'
import { Numbers } from '../../components/layout/MissionDetail/Numbers'
import { AntDesign } from '@expo/vector-icons'

import Modal from 'react-native-modal'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamsList } from '../../routes/RootStackParamsList'
import MissionsApi from '../../services/MissionsApi'
import { useUser } from '../../contexts/AuthContext'
import { Alert } from 'react-native'

export const MissionDetail: React.FC = () => {
  const { userKey } = useUser()

  const route = useRoute<RouteProp<RootStackParamsList, 'MissionDetail'>>()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false)
  const [mission, setMission] = useState<App.MissionDetail>()

  const [link, setLink] = useState('')

  const changeModal = () => {
    setModalIsOpen(false)
    setSecondModalIsOpen(true)
  }

  const sendLink = () => {
    if (link !== '') {
      MissionsApi.sendLink(userKey, route.params.id, link).then((res) => {
        changeModal()
      })
    } else {
      Alert.alert('Erro', 'Digite um link antes de confirmar')
    }
  }

  useEffect(() => {
    MissionsApi.detail(userKey, route.params.id).then((res) => {
      setMission(res.data)
    })
  }, [])

  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Header hasPadding title="Detalhes da missão" />
        <Banner source={{ uri: mission?.img }} />
        <Wrapper>
          <Discount text={mission?.base_award} />
          <Description text={mission?.desc} />
          <CompleteMission />
          <ButtonObjective onPress={() => setModalIsOpen(true)}>
            <ButtonObjectiveText>Objetivo da missão</ButtonObjectiveText>
          </ButtonObjective>
          {/* <Numbers /> */}
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
            {/* <ModalInfo>
              <ModalInfoText>Número de visualizações: 80,000</ModalInfoText>
              <ModalInfoText>Número de curtidas: 80,000</ModalInfoText>
              <ModalInfoText>Lorem ipsum: 80,000</ModalInfoText>
            </ModalInfo> */}
            <Discount text={mission?.base_award} />
            <ModalSendLinkText>Enviar o link para Aprovação</ModalSendLinkText>
            <ModalInput
              placeholder="https://www.instagram.com/"
              placeholderTextColor="#a1a1a1"
              onChangeText={(value) => setLink(value)}
            />
            <ModalButtonSubmit onPress={sendLink}>
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
