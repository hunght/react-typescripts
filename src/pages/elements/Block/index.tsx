import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  ${props => props['data-width'] && `width: ${props['data-width']}`};
  ${props => props['data-height'] && `height: ${props['data-height']}`};
  ${props => props['data-overflow'] && `height: ${props['data-overflow']}`};
  ${props =>
    props['data-min-height'] && `min-height: ${props['data-min-height']}`};
  ${props =>
    props['data-min-width'] && `min-width: ${props['data-min-width']}`};
  ${props =>
    props['data-direction'] && `flex-direction: ${props['data-direction']}`};
  ${props => props['data-flex'] && `flex: ${props['data-flex']}`};
  ${props =>
    props['data-justify'] && `justify-content: ${props['data-justify']}`};
  ${props => props['data-align'] && `align-items: ${props['data-align']}`};
  ${props => props['data-color'] && `background-color: ${props['data-color']}`};
`;

export default Block;
