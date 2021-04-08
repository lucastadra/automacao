import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import * as global from '../../styles/global';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${global.colorPalette.saffronYellow};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
export const ButtonText = styled.Text`
  color: ${global.colorPalette.taraweraDarkBlue};
  font-family: 'JosefinSans_600SemiBold';
  font-size: ${global.FONT_BASE_SIZE}px;
`;
