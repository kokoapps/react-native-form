import React from 'react';
import { View, Text, Button } from 'react-native';
import { Input, Form } from './src/components';

type Props = {};

export default (props: Props) => {
  const {} = props;
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 32,
          fontWeight: '700',
          marginBottom: 50
        }}
      >
        Form
      </Text>
      <Form>
        <Input placeholder="שם פרטי" />
        <Input placeholder="שם משפחה" />
        <Input placeholder="אימייל" />
        <Input placeholder="טלפון" />
        <Input placeholder="כתובת" />
        <Input placeholder="עיר" />
        <Input placeholder="מיקוד" />
        <Input placeholder="סיסמה" />
        <Input placeholder="אימות סיסמה" />
        <Button onPress={() => null} title="שלח" />
      </Form>
    </View>
  );
};
