import * as React from 'react';
import styled from 'styled-components';
import Line from '../../elements/Line';
import FooterText from '../../elements/FooterText';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const FooterLine = Line.extend`
  position: absolute;
  top: 0;
`;

const Footer = () => (
  <Wrapper>
    <FooterLine />
    <FooterText>2018 Copyright Raven</FooterText>
  </Wrapper>
);

export default Footer;
