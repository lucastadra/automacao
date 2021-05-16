import styled from 'styled-components/native';
import * as global from '../../styles/global';

export const Container = styled.View`
  background-color: ${global.colorPalette.taraweraDarkBlue};
`;

export const Logo = styled.Image`
  width: 100%;
  height: 22%;
  resize-mode: contain;
`;

export const Instruction = styled.Text`
  color: ${global.colorPalette.saffronYellow};
  font-size: ${global.FONT_BASE_SIZE}px;
  font-family: 'JosefinSans-Regular';
  text-align: left;
  margin: 14% 0;
`;
