import styled from 'styled-components';

interface IndentPropsType {
  width?: string;
  height?: string;
}

const Indent = styled.div`
  display: flex;
  width: ${({ width = '100%' }: IndentPropsType) => width};
  height: ${({ height = '100%' }: IndentPropsType) => height};
`;

export default Indent;
