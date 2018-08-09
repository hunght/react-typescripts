import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: ${props => props['data-width']};
  height: ${props => props['data-height']};
  box-shadow: 0 3px 7px 0 rgba(196, 231, 247, 0.5);
  border: solid 1px #c4e7f7;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const IllustrationWrapper = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
`;

interface WindowPropsType {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  illustration?: React.ReactNode;
  className?: string;
}

const Window: React.SFC<WindowPropsType> = ({
  width = '696px',
  className,
  height = '351px',
  children,
  illustration
}: WindowPropsType) => (
  <Wrapper className={className} data-width={width} data-height={height}>
    {children}
    {illustration && <IllustrationWrapper>{illustration}</IllustrationWrapper>}
  </Wrapper>
);

export default Window;
