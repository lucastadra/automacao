/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { colorPalette, Container } from '../../styles/global';

import { Instruction, Logo, InputContainer, CodeInput, QRCode } from './styles';
import logoImg from '../../assets/logo.png';
import qrCode from '../../assets/QR_Code.png';

import api from '../../services/api';

interface User {
  id: number;
  email: string;
  name: string;
  type: string;
  code: string;
  avatarUrl: string;
  userRole: string;
}

const SignIn: React.FC = () => {
  const [code, setCode] = React.useState('');
  const handleSubmit = (data: string): void => {
    if (data.length === 9) {
      setCode(data);
    }
  };

  useEffect(() => {
    async function handleSignIn(): Promise<void> {
      const response = await api.get('sessionsUser');

      const { user } = response.data;

      if (user.code === code) {
        console.log('Login');
      }
    }
    handleSignIn();
  }, [code]);

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
              maxLength={9}
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
