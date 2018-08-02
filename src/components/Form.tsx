import React, { Component } from 'react';
import { View, GestureResponderEvent } from 'react-native';

type Props = {
  children: any;
};

export const Form = (props: Props) => {
  const { children } = props;
  return <View>{children}</View>;
};
