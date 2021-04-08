/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  // const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputValueRef = useRef<InputValueReference>({ value: '' });

  // const handleInputFocus = useCallback(() => {
  //   setIsFocused(true);
  // }, []);
  const handleInputBlur = useCallback(() => {
    // setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container>
      <TextInput
        ref={inputElementRef}
        name={name}
        onBlur={handleInputBlur}
        defaultValue=""
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Input;
