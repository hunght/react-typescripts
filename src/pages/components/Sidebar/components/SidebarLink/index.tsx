import styled from 'styled-components';
import { Colors } from '../../../../../theme';

const SidebarLink = styled.div`
  font-family: Avenir;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: ${Colors.BLUE};
  }
`;

export default SidebarLink;

{
  /*
const SidebarLink = styled.div`
  font-family: Avenir;
  font-size: 0.9rem;
  font-weight: 600; 
  letter-spacing: 1.2px;
  text-align: left;
  text-transform: uppercase;
  ${
    ({active, disable}: {active?: any, disable?: any}) => active ?
        `color: ${Colors.BLUE};` :
            (disable ? 
                `color: ${Colors.MEDIUM_GREY_50}` :
                `color: ${Colors.MEDIUM_GREY_50};
                 cursor: pointer;
                 &:hover{
                    color: ${Colors.BLUE};
                 }
            `)
  }
`;
*/
}
