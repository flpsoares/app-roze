import React, { useEffect, useState } from 'react'
import {
  ButtonClear,
  ButtonClearText,
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
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { NewMissionsListItem } from '../../components/layout/NewMissionsListItem'
import {
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  EvilIcons
} from '@expo/vector-icons'
import Modal from 'react-native-modal'
import { useNavigate } from '../../contexts/NavigateContext'
import MissionsApi from '../../services/MissionsApi'
import { useUser } from '../../contexts/AuthContext'
import { primary } from '../../styles/globalVar'

export const NewMissions: React.FC = () => {
  const { openDrawerMenu } = useNavigate()
  const { userKey } = useUser()

  const [isOpen, setIsOpen] = useState(false)

  const [missions, setMissions] = useState<App.Mission[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const [makeRequest, setMakeRequest] = useState(false)

  const [category, setCategory] = useState('')
  const [district, setDistrict] = useState('')

  const [secondPickerOpen, setSecondPickerOpen] = useState(false)
  const [districtPickerOpen, setDistrictPickerOpen] = useState(false)

  const [secondPickerItems, setSecondPickerItems] = useState([
    { value: 'Churrascaria', label: 'Churrascaria' },
    { value: 'Mexicana', label: 'Culinária Mexicana' },
    { value: 'Japonesa', label: 'Culinária Japonesa' },
    { value: 'Italiana', label: 'Culinária Italiana' }
  ])

  const [districtsPickerItems, setDistrictsPickerItems] = useState([])

  const toggleMakeRequest = () => {
    setMakeRequest(!makeRequest)
    closeModal()
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const clearFilters = () => {
    setCategory('')
    setDistrict('')
    toggleMakeRequest()
  }

  useEffect(() => {
    setIsLoading(true)
    if (district !== '' && category === '') {
      MissionsApi.list(userKey, district)
        .then((res) => {
          setMissions(res.data.camps)
          const pickerItems = res.data.districts?.map((d) => ({
            label: d,
            value: d
          }))
          setDistrictsPickerItems(pickerItems)
        })
        .finally(() => setIsLoading(false))
    }

    if (district !== '' && category !== '') {
      MissionsApi.list(userKey, district, category)
        .then((res) => {
          setMissions(res.data.camps)
          const pickerItems = res.data.districts?.map((d) => ({
            label: d,
            value: d
          }))
          setDistrictsPickerItems(pickerItems)
        })
        .finally(() => setIsLoading(false))
    }

    if (district === '' && category !== '') {
      MissionsApi.list(userKey, undefined, category)
        .then((res) => {
          setMissions(res.data.camps)
          const pickerItems = res.data.districts?.map((d) => ({
            label: d,
            value: d
          }))
          setDistrictsPickerItems(pickerItems)
        })
        .finally(() => setIsLoading(false))
    }

    if (district === '' && category === '') {
      MissionsApi.list(userKey)
        .then((res) => {
          setMissions(res.data.camps)
          const pickerItems = res.data.districts?.map((d) => ({
            label: d,
            value: d
          }))
          setDistrictsPickerItems(pickerItems)
        })
        .finally(() => setIsLoading(false))
    }
  }, [makeRequest])

  if (isLoading) {
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color={primary} size="large" />
        </View>
      </Container>
    )
  }

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
          {missions?.map((item, index) => {
            return (
              <NewMissionsListItem
                id={item.id}
                image={item.img}
                name={item.name}
                title={item.store}
                is_sub={item.is_sub}
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
            <ItemText>Categoria do restaurante</ItemText>
            <Picker
              open={secondPickerOpen}
              value={category}
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
              setValue={setCategory}
              setItems={setSecondPickerItems}
            ></Picker>
          </Item>
          <Item style={{ zIndex: 20 }}>
            <ItemText>Buscar por bairro</ItemText>
            <Picker
              open={districtPickerOpen}
              value={district}
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
              items={districtsPickerItems}
              setOpen={setDistrictPickerOpen}
              setValue={setDistrict}
              setItems={setDistrictsPickerItems}
            ></Picker>
          </Item>
          <ButtonSubmit onPress={toggleMakeRequest}>
            <ButtonSubmitText>Confirmar</ButtonSubmitText>
          </ButtonSubmit>
          <ButtonClear onPress={clearFilters}>
            <ButtonClearText>Limpar filtros</ButtonClearText>
          </ButtonClear>
        </ModalContainer>
      </Modal>
    </Container>
  )
}
