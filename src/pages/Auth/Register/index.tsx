import React, { useState } from 'react'
import { Platform, KeyboardAvoidingView, Alert } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import {
  Banner,
  ButtonPlus,
  Container,
  Content,
  HalfInputItem,
  Header,
  Input,
  InputItem,
  InputLine,
  InputTitle,
  ScrollableContainer,
  SelectImageArea,
  SelectImageButton,
  SelectImageIcon,
  Step,
  Steps,
  SubmitButton,
  SubmitButtonText,
  SubTitle,
  Title
} from './style'
import AuthApi from '../../../services/AuthApi'
import { useNavigate } from '../../../contexts/NavigateContext'

export const Register = () => {
  const { navigateToLogin } = useNavigate()

  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [celphone, setCelphone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [popularSocialMedia, setPopularSocialMedia] = useState('')
  const [socialMedia, setSocialMedia] = useState('')
  const [gender, setGender] = useState('')
  const [imageFile, setImageFile] = useState<File>()

  const [step, setStep] = useState(1)

  const [image, setImage] = useState(null)

  const handleBirthChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '')

    // Formata a string para o formato desejado: xx/xx/xxxx
    let formattedValue = ''
    if (numericValue.length > 0) {
      formattedValue += numericValue.substring(0, 2)
    }
    if (numericValue.length > 2) {
      formattedValue += '/' + numericValue.substring(2, 4)
    }
    if (numericValue.length > 4) {
      formattedValue += '/' + numericValue.substring(4, 8)
    }

    setBirthDate(formattedValue)
  }

  const handleCelphoneChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '')

    let formattedValue = ''
    if (numericValue.length > 0) {
      formattedValue += '(' + numericValue.substring(0, 2)
    }
    if (numericValue.length > 2) {
      formattedValue += ') ' + numericValue.substring(2, 7)
    }
    if (numericValue.length > 7) {
      formattedValue += '-' + numericValue.substring(7, 11)
    }

    setCelphone(formattedValue)
  }

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      alert('Permissão para acessar a galeria de imagens é necessária')
      return
    }

    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleSubmit = () => {
    const birth = birthDate.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1')

    let formatedGender = ''

    if (gender === 'Homem') {
      formatedGender = 'male'
    }

    if (gender === 'Mulher') {
      formatedGender = 'female'
    }

    if (gender === 'Other') {
      formatedGender = 'other'
    }

    const reqData: App.Register = {
      name,
      email,
      birth,
      city,
      state,
      street: address,
      tel: celphone,
      social_link: popularSocialMedia,
      social_link_2: socialMedia,
      pwd: password,
      gender: formatedGender,
      img: image
    }

    AuthApi.register(reqData)
      .then((res) => {
        Alert.alert('Aviso', res.data.text)
        navigateToLogin()
      })
      .catch((e: any) => {
        Alert.alert('Erro', e.response.data.error)
        console.log(e.response)
      })
  }

  const validateField = (value: string) => {
    if (value === '') return false
    return true
  }

  const cities = ['city 1', 'city 2', 'city 3', 'city 4', 'city 5']

  const genders = ['Homem', 'Mulher', 'Outro']

  const next = () => {
    if (step === 1) {
      if (
        !validateField(name) ||
        !validateField(birthDate) ||
        !validateField(celphone) ||
        !validateField(email) ||
        !validateField(password) ||
        !validateField(confirmPassword)
      ) {
        return Alert.alert('Aviso', 'Preencha todos os campos para continuar')
      }

      if (password.length < 6) {
        return Alert.alert('Aviso', 'A senha deve conter pelo menos 6 dígitos')
      }

      if (password !== confirmPassword) {
        return Alert.alert('Aviso', 'As senhas devem ser iguais')
      }

      if (birthDate.length < 10) {
        return Alert.alert('Aviso', 'Data de nascimento inválid')
      }

      if (celphone.length < 15) {
        return Alert.alert('Aviso', 'Celular inválido')
      }
      setStep(step + 1)
    }
    if (step === 2) {
      if (
        !validateField(address) ||
        !validateField(city) ||
        !validateField(state) ||
        !validateField(popularSocialMedia) ||
        !validateField(socialMedia)
      ) {
        return Alert.alert('Aviso', 'Preencha todos os campos para continuar')
      }
      setStep(step + 1)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <ScrollableContainer
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SafeAreaView>
          <Container>
            {step === 1 && (
              <Banner
                source={require('../../../../public/assets/Auth/register-banner-01.png')}
              />
            )}
            {step === 2 && (
              <Banner
                source={require('../../../../public/assets/Auth/register-banner-02.png')}
              />
            )}
            {step === 3 && (
              <Banner
                source={require('../../../../public/assets/Auth/register-banner-03.png')}
              />
            )}
            <Content>
              <Header>
                {step !== 3 ? <Title>Registre-se</Title> : <Title>Perfil</Title>}
                <Steps>
                  <Step isActive={step === 1} />
                  <Step isActive={step === 2} />
                  <Step isActive={step === 3} />
                </Steps>
              </Header>
              {step === 3 && (
                <SubTitle>
                  Para que seu perfil seja visto, adicione uma foto para o seu
                  perfil.
                </SubTitle>
              )}
              {step === 1 && (
                <>
                  <InputItem>
                    <InputTitle>Nome do usuário:</InputTitle>
                    <Input
                      value={name}
                      onChangeText={(e) => setName(e)}
                      placeholderTextColor="#464646"
                      placeholder="Exemplo"
                    />
                  </InputItem>
                  <InputItem>
                    <InputTitle>Data de nascimento:</InputTitle>
                    <Input
                      value={birthDate}
                      onChangeText={(e) => handleBirthChange(e)}
                      placeholderTextColor="#464646"
                      placeholder="00/00/0000"
                    />
                  </InputItem>
                  <InputItem>
                    <InputTitle>Celular:</InputTitle>
                    <Input
                      value={celphone}
                      onChangeText={(e) => handleCelphoneChange(e)}
                      placeholderTextColor="#464646"
                      placeholder="(DDD) 00000-0000"
                    />
                  </InputItem>
                  <InputItem>
                    <InputTitle>Email:</InputTitle>
                    <Input
                      value={email}
                      onChangeText={(e) => setEmail(e)}
                      placeholderTextColor="#464646"
                      placeholder="E-mail@exemplo.com"
                    />
                  </InputItem>
                  <InputItem>
                    <InputTitle>Gênero:</InputTitle>
                    <SelectDropdown
                      data={genders}
                      rowStyle={{
                        backgroundColor: '#141517'
                      }}
                      buttonStyle={{
                        backgroundColor: '#141517',
                        borderRadius: 30,
                        width: '100%'
                      }}
                      defaultButtonText="Selecione"
                      rowTextStyle={{ color: '#fff' }}
                      buttonTextStyle={{ color: '#fff' }}
                      onSelect={(selectedItem, index) => {
                        setCity(selectedItem)
                      }}
                    />
                  </InputItem>
                  <InputItem>
                    <InputTitle>Senha:</InputTitle>
                    <Input
                      value={password}
                      onChangeText={(e) => setPassword(e)}
                      placeholderTextColor="#464646"
                      secureTextEntry
                      placeholder="********"
                    />
                  </InputItem>
                  <InputItem>
                    <InputTitle>Confirmar senha:</InputTitle>
                    <Input
                      value={confirmPassword}
                      onChangeText={(e) => setConfirmPassword(e)}
                      placeholderTextColor="#464646"
                      secureTextEntry
                      placeholder="********"
                    />
                  </InputItem>
                </>
              )}
              {step === 2 && (
                <>
                  <InputItem>
                    <InputTitle>Endereço:</InputTitle>
                    <Input
                      value={address}
                      onChangeText={(e) => setAddress(e)}
                      placeholderTextColor="#464646"
                      placeholder="Exemplo"
                    />
                  </InputItem>
                  <InputLine>
                    <HalfInputItem>
                      <InputTitle>Cidade:</InputTitle>
                      <SelectDropdown
                        data={cities}
                        rowStyle={{
                          backgroundColor: '#141517'
                        }}
                        buttonStyle={{
                          backgroundColor: '#141517',
                          borderRadius: 30,
                          width: '100%'
                        }}
                        defaultButtonText="Selecione"
                        rowTextStyle={{ color: '#fff' }}
                        buttonTextStyle={{ color: '#fff' }}
                        onSelect={(selectedItem, index) => {
                          setCity(selectedItem)
                        }}
                      />
                    </HalfInputItem>
                    <HalfInputItem>
                      <InputTitle>Estado:</InputTitle>
                      <SelectDropdown
                        data={cities}
                        rowStyle={{
                          backgroundColor: '#141517'
                        }}
                        buttonStyle={{
                          backgroundColor: '#141517',
                          borderRadius: 30,
                          width: '100%'
                        }}
                        defaultButtonText="Selecione"
                        rowTextStyle={{ color: '#fff' }}
                        buttonTextStyle={{ color: '#fff' }}
                        onSelect={(selectedItem, index) => {
                          setState(selectedItem)
                        }}
                      />
                    </HalfInputItem>
                  </InputLine>
                  <InputItem>
                    <InputTitle>Rede social com mais seguidores:</InputTitle>
                    <Input
                      value={popularSocialMedia}
                      onChangeText={(e) => setPopularSocialMedia(e)}
                      placeholderTextColor="#464646"
                      placeholder="Exemplo"
                    />
                  </InputItem>
                  <InputItem>
                    <InputTitle>Rede social:</InputTitle>
                    <Input
                      value={socialMedia}
                      onChangeText={(e) => setSocialMedia(e)}
                      placeholderTextColor="#464646"
                      placeholder="Exemplo"
                    />
                  </InputItem>
                </>
              )}
              {step === 3 && (
                <SelectImageArea>
                  <SelectImageButton onPress={handlePickImage}>
                    <ButtonPlus>
                      <Entypo size={22} name="plus" color="#000" />
                    </ButtonPlus>

                    {image ? (
                      <SelectImageIcon
                        source={{ uri: image }}
                        style={{ width: 100, height: 100, borderRadius: 500 }}
                      />
                    ) : (
                      <SelectImageIcon
                        source={require('../../../../public/assets/Auth/image-icon.png')}
                      />
                    )}
                  </SelectImageButton>
                </SelectImageArea>
              )}
              {step < 3 ? (
                <SubmitButton onPress={next}>
                  <SubmitButtonText>Prosseguir</SubmitButtonText>
                </SubmitButton>
              ) : (
                <SubmitButton onPress={handleSubmit}>
                  <SubmitButtonText>Finalizar cadastro</SubmitButtonText>
                </SubmitButton>
              )}
            </Content>
          </Container>
        </SafeAreaView>
      </ScrollableContainer>
    </KeyboardAvoidingView>
  )
}
