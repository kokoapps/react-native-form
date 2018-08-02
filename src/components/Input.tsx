import React from 'react';
import {
  TextInput,
  TextInputAndroidProps,
  TextInputIOSProps,
  TextInputProperties
} from 'react-native';

type Props = TextInputProperties & {
  error?: string;
  touched?: boolean;
};

export const Input = (props: Props) => {
  const { ...rest } = props;
  return <TextInput {...rest} />;
};
