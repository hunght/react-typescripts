import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../theme';
import Logo from '../../elements/Logo';
import UserMenu from '../UserMenu';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81px;
  background-color: ${Colors.WHITE};
  box-shadow: 0px 3px 7px 0 rgba(196, 231, 247, 0.5);
  border: solid 1px #c4e7f7;
  width: 100%;
  position: fixed;
  z-index: 1;
  @media (min-width: 500px) {
    justify-content: space-between;
  }
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <UserMenu />
  </Wrapper>
);

export default Header;
