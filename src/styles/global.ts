import { PixelRatio } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
`;

export const FONT_BASE_SIZE = (): number => {
  if (PixelRatio.get() <= 4) {
    return 18;
  }
  return 24;
};
