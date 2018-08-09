import styled from 'styled-components';
import { Colors } from '../../../theme';

interface LinePropsType {
  width?: string;
}

const Line = styled.div`
  height: 1px;
  width: ${({ width = '90vw' }: LinePropsType) => width};
  opacity: 0.25;
  background-color: ${Colors.LIGHT_BLUE};
  border: solid 1px ${Colors.LIGHT_BLUE};
  color: ${Colors.MEDIUM_GREY};
`;

export default Line;
