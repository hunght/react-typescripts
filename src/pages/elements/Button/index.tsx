import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  width: 225px;
  height: 69px;
  border-radius: 4px;
  background: ${props =>
    props['data-disable']
      ? Colors.MEDIUM_GREY
      : `linear-gradient(to right, ${Colors.GREEN}, ${Colors.EMERALD}), 
      linear-gradient(${Colors.GREEN}, ${Colors.GREEN})
    `};
  box-shadow: 0 1px 0 0 rgba(106, 135, 0, 0.3),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
  font-size: 1.15rem;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${Colors.WHITE};
  transition: all 0.2s ease;
  cursor: ${props => (props['data-disable'] ? 'inherit' : 'pointer')};
  outline: none;
  :hover {
    box-shadow: 2px 2px 0 0 rgba(106, 135, 0, 0.3);
  }
  :active {
    opacity: 0.9;
  }
`;

interface ButtonInterface {
  children?: React.ReactNode;
  disable?: boolean;
  className?: string;
  onClick?: any;
}

const Button = ({ children, disable, className, onClick }: ButtonInterface) => (
  <Wrapper className={className} data-disable={disable} onClick={onClick}>
    {children}
  </Wrapper>
);

export default Button;
