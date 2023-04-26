import React, { useState } from 'react'
import {
  ButtonSubmit,
  ButtonSubmitText,
  Container,
  HeaderContainer,
  HeaderRight,
  HeaderTitle,
  Input,
  InputIcon,
  InputItem,
  Item,
  ItemText,
  List,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  Picker,
  Wrapper
} from './style'
import { TouchableOpacity } from 'react-native'
import { NewMissionsListItem } from '../../components/layout/NewMissionsListItem'
import {
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  EvilIcons
} from '@expo/vector-icons'
import Modal from 'react-native-modal'
import { useNavigate } from '../../contexts/NavigateContext'

interface ItemProps {
  id: number
  title: string
  name: string
  image: string
}

export const NewMissions: React.FC = () => {
  const { openDrawerMenu } = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const [pickerOpen, setPickerOpen] = useState(false)
  const [secondPickerOpen, setSecondPickerOpen] = useState(false)

  const [value, setValue] = useState(null)
  const [secondValue, setSecondValue] = useState(null)
  const [pickerItems, setPickerItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ])
  const [secondPickerItems, setSecondPickerItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ])

  const items: ItemProps[] = [
    {
      id: 1,
      title: 'Item 1',
      name: 'Nome 1',
      image: 'https://picsum.photos/id/1/200/300'
    },
    {
      id: 2,
      title: 'Item 2',
      name: 'Nome 2',
      image: 'https://picsum.photos/id/2/200/300'
    },
    {
      id: 3,
      title: 'Item 3',
      name: 'Nome 3',
      image: 'https://picsum.photos/id/3/200/300'
    },
    {
      id: 4,
      title: 'Item 1',
      name: 'Nome 1',
      image: 'https://picsum.photos/id/1/200/300'
    },
    {
      id: 5,
      title: 'Item 2',
      name: 'Nome 2',
      image: 'https://picsum.photos/id/2/200/300'
    },
    {
      id: 6,
      title: 'Item 3',
      name: 'Nome 3',
      image: 'https://picsum.photos/id/3/200/300'
    }
  ]
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Novas Missões</HeaderTitle>
        <HeaderRight>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bell-outline" color="#fff" size={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openModal}>
            <AntDesign name="menufold" color="#fff" size={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openDrawerMenu}>
            <Feather name="menu" color="#fff" size={26} />
          </TouchableOpacity>
        </HeaderRight>
      </HeaderContainer>
      <Wrapper>
        <List>
          {items.map((item, index) => {
            return (
              <NewMissionsListItem
                id={item.id}
                image={item.image}
                name={item.name}
                title={item.title}
                key={index}
              />
            )
          })}
        </List>
      </Wrapper>
      <Modal
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        isVisible={isOpen}
      >
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Filtrar missões</ModalTitle>
            <ModalCloseButton onPress={closeModal}>
              <AntDesign name="close" color="#CCD2E3" size={30} />
            </ModalCloseButton>
          </ModalHeader>
          <Item style={{ zIndex: 30 }}>
            <ItemText>Tipo de missão</ItemText>
            <Picker
              open={pickerOpen}
              value={value}
              placeholderStyle={{ color: '#D0D2D1' }}
              showTickIcon={false}
              dropDownContainerStyle={{
                backgroundColor: '#0c0c0e'
              }}
              textStyle={{
                color: '#D0D2D1',
                borderBottomColor: 'rgba(255, 255, 255, 1)'
              }}
              listItemLabelStyle={{
                justifyContent: 'flex-start',
                flex: 1,
                borderColor: '#ccc',
                borderBottomWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 16
              }}
              items={pickerItems}
              setOpen={setPickerOpen}
              setValue={setValue}
              setItems={setPickerItems}
            ></Picker>
          </Item>
          <Item style={{ zIndex: 20 }}>
            <ItemText>Categoria do restaurante</ItemText>
            <Picker
              open={secondPickerOpen}
              value={secondValue}
              placeholderStyle={{ color: '#D0D2D1' }}
              showTickIcon={false}
              dropDownContainerStyle={{
                backgroundColor: '#0c0c0e'
              }}
              textStyle={{
                color: '#D0D2D1',
                borderBottomColor: 'rgba(255, 255, 255, 1)'
              }}
              listItemLabelStyle={{
                justifyContent: 'flex-start',
                flex: 1,
                borderColor: '#ccc',
                borderBottomWidth: 1,
                width: '100%',
                zIndex: 1000,
                paddingVertical: 10,
                paddingHorizontal: 16
              }}
              items={secondPickerItems}
              setOpen={setSecondPickerOpen}
              setValue={setSecondValue}
              setItems={setSecondPickerItems}
            ></Picker>
          </Item>
          <Item>
            <ItemText>Buscar por Bairro</ItemText>
            <InputItem>
              <Input placeholder="Buscar" />
              <InputIcon>
                <EvilIcons name="search" color="#fff" size={24} />
              </InputIcon>
            </InputItem>
          </Item>
          <ButtonSubmit>
            <ButtonSubmitText>Confirmar</ButtonSubmitText>
          </ButtonSubmit>
        </ModalContainer>
      </Modal>
    </Container>
  )
}
