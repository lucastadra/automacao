import styled, { css } from 'styled-components/native';
import * as global from '../../styles/global';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  margin: 0 auto;
  border: solid 3px ${global.colorPalette.saffronYellow};
  border-radius: 10px;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px 15px;
  align-items: center;
  justify-content: center;
  /* ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `} */
`;
export const TextInput = styled.TextInput`
  color: ${global.colorPalette.saffronYellow};
  flex: 1;
  width: 100%;
  font-family: 'JosefinSans-Regular';
  font-size: ${global.FONT_BASE_SIZE}px;
`;
