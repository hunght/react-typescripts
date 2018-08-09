import * as React from 'react';
import styled from 'styled-components';
import Title from '../../elements/Title';
import Indent from '../../elements/Indent';
import Line from '../../elements/Line';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const PageTitleBlock = ({ title }: { title?: string }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Indent height="32px" />
    <Line width="100%" />
  </Wrapper>
);

export default PageTitleBlock;
