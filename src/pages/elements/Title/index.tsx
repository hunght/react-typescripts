import styled from 'styled-components';
import { Colors } from '../../../theme';

const Title = styled.div`
  font-family: Avenir;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 0.8px;
  text-align: center;
  color: ${Colors.MEDIUM_GREY};
`;

export const TitleLeft = Title.extend`
  text-align: left;
`;

export default Title;
