import * as React from 'react';
import styled from 'styled-components';
import SidebarLink from '../SidebarLink';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

export interface IconSidebarLinkInterface {
  onClick?: any;
  className?: any;
  icon?: any;
  activeIcon?: any;
  active?: any;
  disable?: any;
  children?: React.ReactChildren;
}

const IconSidebarLink = ({
  onClick,
  className,
  icon,
  activeIcon,
  active,
  disable,
  children
}: IconSidebarLinkInterface) => (
  <Wrapper onClick={onClick} className={className}>
    {icon && activeIcon && active ? (
      <IconWrapper>{activeIcon}</IconWrapper>
    ) : (
      <IconWrapper>{icon}</IconWrapper>
    )}
    <SidebarLink>{children}</SidebarLink>
  </Wrapper>
);

export default IconSidebarLink;

{
  /*disable={disable} active={active} */
}
