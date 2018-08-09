import styled from 'styled-components';
import { Colors } from '../../../theme';

const Link = styled.a`
  font-size: 0.85rem;
  letter-spacing: 0.6px;
  text-align: left;
  font-weight: 500;
  color: ${props => (props['data-disable'] ? Colors.GREY : Colors.BLUE)};
  cursor: ${props => (props['data-disable'] ? 'inherit' : 'pointer')};
`;

export default Link;
