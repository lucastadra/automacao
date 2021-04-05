import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 70% !important;
  height: 22%;
  resize-mode: contain;
  align-self: flex-end !important;
`;

export const Instruction = styled.Text`
  color: #fbc531;
  font-size: 22px;
  font-family: "JosefinSans_400Regular";
  text-align: justify;
  margin: 38px 0;
  padding: 0 34px;
`;
