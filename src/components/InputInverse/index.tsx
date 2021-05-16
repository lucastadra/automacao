/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const [isFilled, setIsFilled] = useState(false);
  const inputValueRef = useRef<InputValueReference>({ value: '' });

  return (
    <Container>
      <TextInput
        ref={inputElementRef}
        // onBlur={handleInputBlur}
        defaultValue=""
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        keyboardAppearance="dark"
        {...rest}
      />
    </Container>
  );
};

export default Input;
