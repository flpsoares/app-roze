import React, { useLayoutEffect, useState, useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Logo } from '../../../components/Logo'
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert
} from 'react-native'
import {
  Banner,
  BannerArea,
  Container,
  Input,
  InputItem,
  InputTitle,
  MiniInput,
  MiniInputArea,
  MiniInputSeparator,
  ScrollableContainer,
  SubmitButton,
  SubmitButtonText,
  Title
} from './style'
import { useNavigate } from '../../../contexts/NavigateContext'
import { primary } from '../../../styles/globalVar'
import AuthApi from '../../../services/AuthApi'

interface ForgotaPasswordProps {
  navigation: any
}

export const ForgotPassword = ({ navigation }: ForgotaPasswordProps) => {
  const { navigateToLogin } = useNavigate()
  const [step, setStep] = useState(1)

  const [email, setEmail] = useState('')
  const [key, setKey] = useState('')

  const [codeOne, setCodeOne] = useState('')
  const [codeTwo, setCodeTwo] = useState('')
  const [codeThree, setCodeThree] = useState('')
  const [codeFour, setCodeFour] = useState('')
  const [codeFive, setCodeFive] = useState('')
  const [codeSix, setCodeSix] = useState('')

  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const input5Ref = useRef(null)
  const input6Ref = useRef(null)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleTextChange = (text, ref, code) => {
    if (code === 1) {
      setCodeOne(text)
    }
    if (code === 2) {
      setCodeTwo(text)
    }
    if (code === 3) {
      setCodeThree(text)
    }
    if (code === 4) {
      setCodeFour(text)
    }
    if (code === 5) {
      setCodeFive(text)
    }
    if (code === 6) {
      setCodeSix(text)
    }
    if (ref !== null) {
      if (text.length > 0 && ref.current) {
        ref.current.focus()
      }
    }
  }

  useLayoutEffect(() => {
    if (step === 1) {
      navigation.setOptions({ title: 'Recuperação de senha' })
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome name="angle-left" size={30} color={primary} />
          </TouchableOpacity>
        )
      })
    }
    if (step === 2) {
      navigation.setOptions({ title: 'Código de recuperação' })
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={previous}>
            <FontAwesome name="angle-left" size={30} color={primary} />
          </TouchableOpacity>
        )
      })
    }
    if (step === 3) {
      navigation.setOptions({ title: 'Alterar sua senha' })
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={previous}>
            <FontAwesome name="angle-left" size={30} color={primary} />
          </TouchableOpacity>
        )
      })
    }
  }, [step])

  const next = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const previous = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const sendMail = () => {
    if (email !== '') {
      AuthApi.sendMailToReset(email)
        .then((res) => {
          Alert.alert('Sucesso', res.data.text)
          next()
        })
        .catch((e) => Alert.alert('Erro', e.response.data.error))
    } else {
      return Alert.alert('Erro', 'Preencha o email antes de enviar')
    }
  }

  const sendCode = () => {
    if (
      codeOne !== '' &&
      codeTwo !== '' &&
      codeThree !== '' &&
      codeFour !== '' &&
      codeFive !== '' &&
      codeSix !== ''
    ) {
      AuthApi.sendCodeToReset(
        `${codeOne}${codeTwo}${codeThree}${codeFour}${codeFive}${codeSix}`,
        email
      )
        .then((res) => {
          Alert.alert('Sucesso', 'Código válido')
          setKey(res.data.key)
          next()
        })
        .catch((e) => Alert.alert('Erro', e.response.data.error))
    } else {
      return Alert.alert('Insira o código antes de enviar')
    }
  }

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      return Alert.alert('Erro', 'As senhas devem ser iguais')
    }

    if (password.length < 6) {
      return Alert.alert('Erro', 'A senha deve conter pelo menos 6 dígitos')
    }

    AuthApi.sendPasswordToReset(key, password, email).then((res) => {
      Alert.alert('Sucesso', 'Senha alterada com sucesso')
      navigateToLogin()
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={40}
    >
      <ScrollableContainer
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          {step === 1 && (
            <>
              <BannerArea>
                <Banner
                  source={require('../../../../public/assets/Auth/forgot-banner-01.png')}
                />
              </BannerArea>
              <Title>
                Digite seu email abaixo para que possamos lhe enviar um código de
                recuperação de senha. Após enviado, digite o código e altere sua
                senha.
              </Title>
              <InputItem>
                <InputTitle>E-mail</InputTitle>
                <Input
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  placeholder="E-mail@exemplo.com"
                  placeholderTextColor="#464646"
                />
              </InputItem>
              <SubmitButton onPress={sendMail}>
                <SubmitButtonText>Enviar</SubmitButtonText>
              </SubmitButton>
            </>
          )}
          {step === 2 && (
            <>
              <BannerArea>
                <Banner
                  source={require('../../../../public/assets/Auth/forgot-banner-02.png')}
                />
              </BannerArea>
              <Title>
                Digite abaixo o código de recuperação que enviamos para o seu email e
                prossiga para criar uma nova senha.
              </Title>
              <MiniInputArea>
                <MiniInputSeparator>
                  <MiniInput
                    maxLength={1}
                    ref={input1Ref}
                    value={codeOne}
                    onChangeText={(text) => handleTextChange(text, input2Ref, 1)}
                  />
                  <MiniInput
                    maxLength={1}
                    ref={input2Ref}
                    value={codeTwo}
                    onChangeText={(text) => handleTextChange(text, input3Ref, 2)}
                  />
                  <MiniInput
                    maxLength={1}
                    ref={input3Ref}
                    value={codeThree}
                    onChangeText={(text) => handleTextChange(text, input4Ref, 3)}
                  />
                </MiniInputSeparator>
                <MiniInputSeparator>
                  <MiniInput
                    maxLength={1}
                    ref={input4Ref}
                    value={codeFour}
                    onChangeText={(text) => handleTextChange(text, input5Ref, 4)}
                  />
                  <MiniInput
                    maxLength={1}
                    ref={input5Ref}
                    value={codeFive}
                    onChangeText={(text) => handleTextChange(text, input6Ref, 5)}
                  />
                  <MiniInput
                    maxLength={1}
                    ref={input6Ref}
                    value={codeSix}
                    onChangeText={(text) => handleTextChange(text, null, 6)}
                  />
                </MiniInputSeparator>
              </MiniInputArea>
              <SubmitButton onPress={sendCode}>
                <SubmitButtonText>Enviar</SubmitButtonText>
              </SubmitButton>
            </>
          )}
          {step === 3 && (
            <>
              <BannerArea>
                <Banner
                  source={require('../../../../public/assets/Auth/forgot-banner-03.png')}
                />
              </BannerArea>
              <Title>
                Digite abaixo sua nova senha, inclua letras maiúsculas, minúsculas e
                números (Mínimo 8 caracteres).
              </Title>
              <InputItem>
                <InputTitle>Nova senha:</InputTitle>
                <Input
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  placeholder="********"
                  secureTextEntry
                  placeholderTextColor="#464646"
                />
              </InputItem>
              <InputItem>
                <InputTitle>Nova senha novamente</InputTitle>
                <Input
                  value={confirmPassword}
                  onChangeText={(value) => setConfirmPassword(value)}
                  placeholder="********"
                  secureTextEntry
                  placeholderTextColor="#464646"
                />
              </InputItem>
              <SubmitButton onPress={handleChangePassword}>
                <SubmitButtonText>Confirmar</SubmitButtonText>
              </SubmitButton>
            </>
          )}
        </Container>
      </ScrollableContainer>
    </KeyboardAvoidingView>
  )
}
