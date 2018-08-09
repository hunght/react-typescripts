import * as React from 'react';
import styled from 'styled-components';
import LoginWindow from './components/LoginWindow';
import Footer from '../components/Footer';
import Block from '../elements/Block';

const WindowWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => (
  <Block data-height="100vh" data-flex={1} data-direction="column">
    <WindowWrapper>
      <LoginWindow />
    </WindowWrapper>
    <Footer />
  </Block>
);

export default LoginPage;
