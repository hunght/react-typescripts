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

const TableTitle = ({ title }: { title?: string }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Indent height="10px" />
    <Line width="100%" />
    <Indent height="20px" />
  </Wrapper>
);

export default TableTitle;
