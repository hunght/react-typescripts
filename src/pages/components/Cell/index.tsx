import styled from 'styled-components';
import { Colors } from '../../../theme';

const Cell = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: ${Colors.WHITE};
  box-shadow: 0 3px 7px 0 rgba(196, 231, 247, 0.5);
  border: solid 1px #c4e7f7;
  transition: box-shadow 0.3s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 22px 1px rgba(196, 231, 247, 1);
    transition: box-shadow 0.3s ease-out;
  }
`;

export default Cell;
