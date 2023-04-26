import React, { useLayoutEffect, useState, useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Logo } from '../../../components/Logo'
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TextInput
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

interface ForgotaPasswordProps {
  navigation: any
}

export const ForgotPassword = ({ navigation }: ForgotaPasswordProps) => {
  const { navigateToRegister } = useNavigate()
  const [step, setStep] = useState(1)

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

  const back = () => {
    navigation.setOptions({})
  }

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
                  placeholder="E-mail@exemplo.com"
                  placeholderTextColor="#464646"
                />
              </InputItem>
              <SubmitButton onPress={next}>
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
                  <MiniInput maxLength={1} />
                  <MiniInput maxLength={1} />
                  <MiniInput maxLength={1} />
                </MiniInputSeparator>
                <MiniInputSeparator>
                  <MiniInput maxLength={1} />
                  <MiniInput maxLength={1} />
                  <MiniInput maxLength={1} />
                </MiniInputSeparator>
              </MiniInputArea>
              <SubmitButton onPress={next}>
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
                  placeholder="********"
                  secureTextEntry
                  placeholderTextColor="#464646"
                />
              </InputItem>
              <InputItem>
                <InputTitle>Nova senha novamente</InputTitle>
                <Input
                  placeholder="********"
                  secureTextEntry
                  placeholderTextColor="#464646"
                />
              </InputItem>
              <SubmitButton>
                <SubmitButtonText>Confirmar</SubmitButtonText>
              </SubmitButton>
            </>
          )}
        </Container>
      </ScrollableContainer>
    </KeyboardAvoidingView>
  )
}
