import React, { useState } from 'react'
import {
  ButtonDetail,
  ButtonDetailText,
  ButtonSubmit,
  ButtonSubmitText,
  CarouselButtonSubmit,
  CarouselContainer,
  CarouselImage,
  CarouselOptionText,
  Code,
  CodeArea,
  Container,
  Discount,
  ExtraText,
  Gif,
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
  ModalChooseSubTitle,
  ModalChooseTitle,
  ModalContainer,
  ModalDiscountNumber,
  ModalDiscountText,
  ModalTitle,
  ModalValidity,
  Name,
  NormalText,
  PaginationContainer,
  PaginationDot,
  Validity
} from './style'
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons'
import { DropdownCouponDetail } from '../../../DropdownCouponDetail'
import { Asset } from 'expo-asset'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import CouponsApi from '../../../../services/CouponsApi'
import { useUser } from '../../../../contexts/AuthContext'

export const DetailItem: React.FC<App.Tickets> = (coupom) => {
  const { userKey } = useUser()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalChooseIsOpen, setModalChooseIsOpen] = useState(false)
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [showGif, setShowGif] = useState(false)

  const [activeIndex, setActiveIndex] = useState(0)

  const gif = Asset.fromModule(require('../../../../../public/assets/gift.gif'))

  const openModal = () => {
    setModalIsOpen(true)
  }

  const openChooseModal = () => {
    setModalChooseIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const closeChooseModal = () => {
    setModalChooseIsOpen(false)
  }

  const openGif = () => {
    setShowGif(true)
    CouponsApi.updateView(userKey, coupom.id)
    setTimeout(() => {
      closeChooseModal()
      openModal()
    }, 2000)
  }

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  const renderItem = ({ item }: { item }) => (
    <CarouselContainer>
      <CarouselImage source={require('../../../../../public/assets/gift.png')} />
      <CarouselOptionText>{item.title}</CarouselOptionText>
      <CarouselButtonSubmit onPress={openGif}>
        <ButtonSubmitText>Escolher</ButtonSubmitText>
      </CarouselButtonSubmit>
    </CarouselContainer>
  )

  const renderPagination = () => (
    <PaginationContainer>
      {data.map((_, index) => (
        <PaginationDot key={index} active={index === activeIndex} />
      ))}
    </PaginationContainer>
  )

  const data = [
    {
      title: 'Opção 1'
    },
    {
      title: 'Opção 2'
    },
    {
      title: 'Opção 3'
    }
  ]

  return (
    <Container>
      <ItemTop>
        <ItemAvatarItem>
          <ItemAvatarImage source={{ uri: coupom.img }} />
        </ItemAvatarItem>
        <ItemTopInfo>
          <Name>{coupom.camp_name}</Name>
          <NormalText>{coupom.store_name}</NormalText>
        </ItemTopInfo>
      </ItemTop>
      <Line></Line>
      <ItemBottom>
        <ItemLeft>
          {/* <LineInfo>
            <ExtraText>10%</ExtraText>
            <Discount>De desconto</Discount>
          </LineInfo> */}
          <Validity>Validade até {coupom.validate}</Validity>
          <ButtonDetail onPress={toggleDropdown}>
            <ButtonDetailText>
              Ver detalhes {dropdownIsOpen ? <Icon>↑</Icon> : <Icon>↓</Icon>}
            </ButtonDetailText>
          </ButtonDetail>
        </ItemLeft>
        {coupom.view ? (
          <ButtonSubmit onPress={openModal}>
            <ButtonSubmitText>Usar Cupom</ButtonSubmitText>
          </ButtonSubmit>
        ) : (
          <ButtonSubmit onPress={openChooseModal}>
            <ButtonSubmitText>Usar Cupom</ButtonSubmitText>
          </ButtonSubmit>
        )}
      </ItemBottom>
      {dropdownIsOpen && <DropdownCouponDetail coupom={coupom} />}
      <Modal
        onBackdropPress={closeChooseModal}
        onBackButtonPress={closeChooseModal}
        isVisible={modalChooseIsOpen}
      >
        <ModalContainer>
          <ModalChooseTitle>Escolha um presente para ganhar</ModalChooseTitle>
          <ModalChooseSubTitle>
            Clique em cima de um dos presentes para ganhar um cupom
          </ModalChooseSubTitle>
          {showGif ? (
            <Gif
              source={gif}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            ></Gif>
          ) : (
            <>
              <CarouselContainer>
                <Carousel
                  data={data}
                  renderItem={renderItem}
                  sliderWidth={Dimensions.get('window').width - 70}
                  itemWidth={300}
                  onSnapToItem={setActiveIndex}
                />
              </CarouselContainer>
              {renderPagination()}
            </>
          )}

          <ModalButtonClose onPress={closeChooseModal}>
            <AntDesign name="close" color="#000" size={30} />
          </ModalButtonClose>
        </ModalContainer>
      </Modal>
      <Modal
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        isVisible={modalIsOpen}
      >
        <ModalContainer>
          <ModalAvatarItem>
            <ModalAvatarImage source={{ uri: coupom.img }} />
          </ModalAvatarItem>
          <ModalTitle>{coupom.store_name}</ModalTitle>
          <LineInfo>
            <ModalDiscountNumber>{coupom.award}</ModalDiscountNumber>
          </LineInfo>
          <ModalValidity>Validade até {coupom.validate}</ModalValidity>
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
