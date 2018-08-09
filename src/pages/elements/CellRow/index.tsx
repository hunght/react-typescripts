import styled from 'styled-components';

const CellRow = styled.div`
  display: flex;
  flex: ${props => props['data-weight'] || '1'};
  justify-content: ${props => props['data-justify'] || 'flex-start'};
  align-items: ${props => props['data-align'] || 'center'};
`;

export default CellRow;
