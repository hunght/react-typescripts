import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../theme';
import IconSidebarLink from '../IconSidebarLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Point = styled(IconSidebarLink)`
  padding-left: 30px;
  padding-bottom: 30px;
`;

const SidebarTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 1.2px;
  text-align: left;
  color: ${Colors.MEDIUM_GREY};
  text-transform: uppercase;
  padding-top: 50px;
  padding-left: 20px;
  padding-bottom: 20px;
`;

export interface SidebarSectionInterface {
  points?: any;
  title?: any;
  history?: any;
  children?: React.ReactChildren;
}

const SidebarSection = ({
  points,
  title,
  history
}: SidebarSectionInterface) => (
  <Wrapper>
    <SidebarTitle>{title}</SidebarTitle>
    {points.map((props: any, index: any) => (
      <Point
        key={index}
        onClick={() => history.push(props.linkTo)}
        {...props}
      />
    ))}
  </Wrapper>
);

export default SidebarSection;
