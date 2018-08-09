import * as React from 'react';
import Block from '../elements/Block';
import LoadingAnimation from '../elements/LoadingAnimation';

const LoadingPage = ({ history }: { history?: any }) => (
  <Block
    data-width="100%"
    data-height="100%"
    data-direction="column"
    data-align="center"
    data-justify="center"
  >
    <LoadingAnimation />
    <span>You are logged in!</span>
  </Block>
);

export default LoadingPage;
