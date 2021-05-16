/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { colorPalette, Container } from '../../styles/global';

import { Instruction, Logo, InputContainer, CodeInput, QRCode } from './styles';

import api from '../../services/api';

interface IProfile {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
  userRole: string;
}

interface IProfileRender {
  item: IProfile;
  index: number;
}

const SignIn: React.FC = () => {
  const profiles: IProfile[] = [];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const ref = useRef(null);

  useEffect(() => {
    async function handleProfiles(): Promise<void> {
      const response = await api.get('/userProfiles');
      if (response.data.length > 0) {
        response.data.forEach((item: IProfile) => {
          profiles.push(item);
        });
      }
      console.log(profiles);
    }
    handleProfiles();
  }, [profiles]);

  const renderItem = useCallback(
    ({ item, index }: IProfileRender) => {
      return (
        <View
          style={{
            backgroundColor: 'floralwhite',
            borderRadius: 50,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          <Text style={{ fontSize: 30 }}>{item.name}</Text>
          <Text />
        </View>
      );
    },
    [activeIndex],
  );

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
          <Carousel
            layout="default"
            data={profiles}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={300}
            loop
            enableSnap
            onSnapToItem={(index: number) => setActiveIndex(index)}
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
