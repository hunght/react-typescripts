import * as React from 'react';
import styled from 'styled-components';
import Line from '../../../elements/Line';
import Block from '../../../elements/Block';
import Indent from '../../../elements/Indent';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

interface TextRowInterface {
  className?: string;
  children?: React.ReactNode;
}

const TextRow = ({ children, className = '' }: TextRowInterface) => (
  <Wrapper>
    <Indent height="25px" />
    <Block data-align="center">{children}</Block>
    <Indent height="25px" />
    <Line width="100%" />
  </Wrapper>
);

export default TextRow;
