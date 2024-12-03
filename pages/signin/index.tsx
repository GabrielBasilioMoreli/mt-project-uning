import React from 'react';

import { ScrollView } from 'react-native';

import { Input } from '../../src/components/screen/input';

import { Container, Content, Title } from './style';

import { Button } from '../../src/components/screen/input/button';


export const SignIn: React.FunctionComponent = () => {

return (

<ScrollView

keyboardShouldPersistTaps="handled"

contentContainerStyle={{ flex: 1 }}

>

<Container>

<Content>

<Title>Login</Title>

<Input placeholder="Email"/>

<Input placeholder="Senha"/>

<Button title='Entrar'/>

</Content>

</Container>

</ScrollView>

);

};