import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../theme';

const Component = styled.div`
  font-family: Avenir-Roman;
  font-size: 1.563rem;
  text-align: left;
  letter-spacing: 1px;
  color: ${Colors.MEDIUM_GREY};
`;

interface InputLabelPropsType {
  children?: React.ReactNode;
}

const InputLabel: React.SFC<InputLabelPropsType> = ({
  children
}: InputLabelPropsType) => <Component>{children}</Component>;

export default InputLabel;
