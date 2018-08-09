import * as React from 'react';
import styled from 'styled-components';
import Indent from '../../elements/Indent';
import { Colors } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Text = styled.div`
  font-size: 1rem;
  letter-spacing: 1.6px;
  text-align: center;
  color: ${Colors.MEDIUM_GREY_50};
  cursor: pointer;
  font-weight: 500;
`;

const UserMenu = (props: any) => (
  <Wrapper>
    {props.adminStore.data &&
      props.adminStore.data.id && (
        <Text className="log-out" onClick={props.onClick}>
          Log out
        </Text>
      )}
    <Indent width="64px" />
  </Wrapper>
);

export default UserMenu;
