/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colorPalette, Container } from '../../styles/global';
import { Instruction, Logo } from './styles';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

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
            You need to have an{' '}
            <Instruction style={{ fontFamily: 'JosefinSans-Bold' }}>
              Autômata
            </Instruction>{' '}
            device for the app to work. Use the button below to search or access
            our store.
          </Instruction>
          <Button
            style={{ marginBottom: 10 }}
            onPress={() => navigation.navigate('SignIn')}
          >
            Find Autômata Device
          </Button>
          <Button>Autômata Store</Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
