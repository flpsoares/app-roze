import React, { useState } from 'react'
import {
  Button,
  ButtonText,
  Container,
  Line,
  ModalButtonSubmit,
  ModalButtonSubmitText,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalInput,
  ModalSendLinkText,
  ModalSubTitle,
  ModalTitle,
  ObjetiveBox,
  ObjetiveText,
  SecondModalBanner,
  SecondModalButtonClose,
  SecondModalContainer,
  SecondModalTitle
} from './style'
import { useNavigate } from '../../contexts/NavigateContext'
import { Discount } from '../layout/MissionDetail/Discount'
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons'
import MissionsApi from '../../services/MissionsApi'
import { useUser } from '../../contexts/AuthContext'
import { Alert } from 'react-native'
import { useList } from '../../contexts/ListContext'

interface DropdownListProps {
  id: number
  id_camp: number
  base_award: string
  desc: string
}

export const DropdownMissionList: React.FC<DropdownListProps> = ({
  id,
  id_camp,
  base_award,
  desc
}) => {
  const { navigateToMissionDetail } = useNavigate()
  const { userKey } = useUser()
  const { redoMissions } = useList()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false)
  const [link, setLink] = useState('')

  const changeModal = () => {
    setModalIsOpen(false)
    setSecondModalIsOpen(true)
  }

  const sendLink = () => {
    if (link !== '') {
      MissionsApi.sendLink(userKey, id, link)
        .then((res) => {
          redoMissions()
          changeModal()
        })
        .catch((e) => console.log(e.response.data))
    } else {
      Alert.alert('Erro', 'Digite um link antes de confirmar')
    }
  }

  return (
    <Container>
      <Button onPress={() => navigateToMissionDetail({ id, id_camp })}>
        <ButtonText>Detalhes da missão</ButtonText>
      </Button>
      <Line />
      <Button onPress={() => setModalIsOpen(true)}>
        <ButtonText>Enviar para aprovação</ButtonText>
      </Button>
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
          <ObjetiveBox>
            <ObjetiveText>{desc}</ObjetiveText>
          </ObjetiveBox>
          <Discount text={base_award} />
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
            source={require('../../../assets/Mission/mission-second-modal-banner.png')}
          />
        </SecondModalContainer>
      </Modal>
    </Container>
  )
}
