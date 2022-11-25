import React from 'react';
import styled from 'styled-components/native';
import AppNavigator from './Router/AppNavigator';
import AppLoader from './Components/AppLoader';
import {Loader} from './Helper';

const Container = styled.View`
  flex: 1;
`;

function StartComponent() {
  return (
    <Container>
      <AppLoader ref={e => Loader.setLoader(e)} />
      <AppNavigator />
    </Container>
  );
}

export default StartComponent;
