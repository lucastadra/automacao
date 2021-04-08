import styled from 'styled-components/native';
import * as global from '../../styles/global';

export const Container = styled.View`
  /* flex: 1; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #0a3d62;
  /* width: 100%; */
  /* padding: 0 40px; */
`;

export const Logo = styled.Image`
  width: 100%;
  height: 22%;
  resize-mode: contain;
`;

export const Instruction = styled.Text`
  color: #f6b93b;
  font-size: ${global.FONT_BASE_SIZE}px;
  font-family: 'JosefinSans_400Regular';
  text-align: left;
  margin: 15% 0;
`;

export const InputContainer = styled.View`
  margin: 0 auto;
  border: solid 3px #f6b93b;
  border-radius: 10px;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px 15px;
  align-items: center;
  justify-content: center;
`;

export const CodeInput = styled.TextInput`
  color: #f6b93b;
  flex: 1;
  width: 100%;
  font-family: 'JosefinSans_400Regular';
  font-size: ${global.FONT_BASE_SIZE}px;
`;

export const QRCode = styled.Image`
  resize-mode: contain;
  height: 100%;
  margin-right: -8px;
`;
