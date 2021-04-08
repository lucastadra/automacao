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

export const colorPalette = {
  baseWhite: '#FFFFFF',
  saffronYellow: '#F6B93B',
  taraweraDarkBlue: '#0A3D62',
  indigoDarkBlue: '#4A69BD',
  seashellLightGray: '#F1F1F1',
  altoMediumGray: '#DADADA',
  silverDarkGray: 'BDBDBDB',
  pastelGreen: '#78E08F',
  keppelBlueyGreen: '#38ADA9',
};

export const FONT_BASE_SIZE = (): number => {
  if (PixelRatio.get() <= 4) {
    return 22;
  }
  return 28;
};
