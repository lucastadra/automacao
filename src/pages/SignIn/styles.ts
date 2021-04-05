import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0a3d62;
  width: 100%;
`;

export const Logo = styled.Image`
  width: 70% !important;
  height: 22%;
  resize-mode: contain;
  align-self: flex-end !important;
`;

export const Instruction = styled.Text`
  color: #f6b93b;
  font-size: 20px;
  font-family: 'JosefinSans_400Regular';
  text-align: justify;
  margin: 38px 0;
  padding: 0 34px;
`;

export const InputContainer = styled.View`
  margin: 0 auto;
  border: solid 3px #f6b93b;
  border-radius: 10px;
  height: 60px;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 6px 4px 6px 28px;
  align-items: center;
  justify-content: center;
`;

export const CodeInput = styled.TextInput`
  color: #f6b93b;
  flex: 1;
  width: 100%;
  font-size: 24px;
`;

export const QRCode = styled.Image`
  resize-mode: contain;
  height: 100%;
`;
