import * as React from 'react';
import styled from 'styled-components';

import header from '../../../assets/images/logo.svg';
// https://github.com/Microsoft/TypeScript-React-Starter/issues/12

const Wrapper = styled.img`
  width: 136px;
  height: 27px;
  padding: 12px 48px;
  box-sizing: content-box;
`;
Wrapper.displayName = 'img';

const Logo = () => <Wrapper src={header} alt="logo" />;

export default Logo;
