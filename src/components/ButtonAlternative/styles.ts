import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import * as global from '../../styles/global';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${global.colorPalette.taraweraDarkBlue};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
export const ButtonText = styled.Text`
  color: ${global.colorPalette.baseWhite};
  font-family: 'JosefinSans-SemiBold';
  font-size: ${global.FONT_BASE_SIZE}px;
`;
