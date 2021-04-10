import React from 'react';

import { colorPalette, Container } from '../../styles/global';

import { Instruction, Logo, InputContainer, CodeInput, QRCode } from './styles';

import logoImg from '../../assets/logo.png';
import qrCode from '../../assets/QR_Code.png';

const SignIn: React.FC = () => (
  <Container style={{ backgroundColor: colorPalette.taraweraDarkBlue }}>
    <Logo source={logoImg} />
    <Instruction>Insert the code or scan QR Code (if available)</Instruction>
    <InputContainer>
      <CodeInput keyboardType="number-pad" maxLength={6} />
      <QRCode source={qrCode} />
    </InputContainer>
    <Instruction>
      In your first login, you need connect to same network that the automation
      panel is connected to.
    </Instruction>
  </Container>
);

export default SignIn;
