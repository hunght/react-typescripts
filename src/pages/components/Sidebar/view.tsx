import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../theme';
import SidebarSection from './components/SidebarSection';

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  width: 240px;
  background-color: ${Colors.WHITE};
  box-shadow: 3px -0px 7px 0 rgba(196, 231, 247, 0.5);
  border: solid 1px ${Colors.SUPER_LIGHT_BLUE};
  flex-direction: column;
`;

export interface SidebarInterface {
  history?: any;
  topicsSection?: any;
  children?: React.ReactChildren;
}

const Sidebar = ({ history, topicsSection }: SidebarInterface) => (
  <Wrapper>
    <SidebarSection title="Topics" history={history} points={topicsSection} />
  </Wrapper>
);

export default Sidebar;
