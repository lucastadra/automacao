import React from 'react';

import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import {
  useFonts,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';

import {
  Container,
  Instruction,
  Logo,
  InputContainer,
  CodeInput,
  QRCode,
} from './styles';

import logoImg from '../../assets/logo.png';
import qrCode from '../../assets/QR_Code.png';

i18n.translations = {
  en: {
    instruction: 'Insert the code or scan QR Code (if available)',
    info:
      'In your first login, you need connect to same network that the automation panel is connected to.',
  },
  pt: {
    instruction: 'Insira o código ou Scaneie o código QR (se disponível)',
    info:
      'Em seu primeiro login, você precisa se conectar à mesma rede à qual o painel de automação está conectado.',
  },
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

const SignIn: React.FC = () => {
  useFonts({ JosefinSans_400Regular });

  return (
    <Container>
      <Logo source={logoImg} />
      <Instruction>{i18n.t('instruction')}</Instruction>
      <InputContainer>
        <CodeInput />
        <QRCode source={qrCode} />
      </InputContainer>
      <Instruction>{i18n.t('info')}</Instruction>
    </Container>
  );
};

export default SignIn;
