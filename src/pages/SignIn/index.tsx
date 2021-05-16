/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colorPalette, Container } from '../../styles/global';

import { Instruction, Logo, InputContainer, CodeInput, QRCode } from './styles';
import logoImg from '../../assets/logo.png';
import qrCode from '../../assets/QR_Code.png';

import api from '../../services/api';

const SignIn: React.FC = () => {
  const [code, setCode] = React.useState('');
  const navigation = useNavigation();

  const handleSubmit = (data: string): void => {
    if (data.length === 6) {
      setCode(data);
    }
  };

  useEffect(() => {
    async function handleSignIn(): Promise<void> {
      const response = await api.get('sessionsUser');

      const { user } = response.data;

      if (user.code === code) {
        navigation.navigate('ProfileSelection');
      }
    }
    handleSignIn();
  }, [code, navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container style={{ backgroundColor: colorPalette.taraweraDarkBlue }}>
          <Logo source={logoImg} />
          <Instruction>
            Insert the code or scan QR Code (if available)
          </Instruction>
          <InputContainer>
            <CodeInput
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={(input) => {
                handleSubmit(input);
              }}
            />
            <QRCode source={qrCode} />
          </InputContainer>
          <Instruction>
            In your first login, you need connect to same network that the
            automation panel is connected to.
          </Instruction>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
