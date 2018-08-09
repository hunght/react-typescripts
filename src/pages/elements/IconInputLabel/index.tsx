import * as React from 'react';
import InputLabel from '../InputLabel';
import Indent from '../../elements/Indent';
import styled from 'styled-components';
import { Colors } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  justify-content: flex-start;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 28px;
  height: 32px;
`;

const AltLabel = styled.div`
  font-family: Avenir-Roman;
  font-size: 1rem;
  text-align: left;
  letter-spacing: 0.6px;
  color: ${Colors.MEDIUM_GREY};
`;

interface IconInputLabelPropsType {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  altLabel?: string;
}

const IconInputLabel: React.SFC<IconInputLabelPropsType> = ({
  icon,
  children,
  altLabel
}: IconInputLabelPropsType) => (
  <Wrapper>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <InputLabel>{children}</InputLabel>
    <Indent width="10px" />
    <AltLabel>{altLabel}</AltLabel>
  </Wrapper>
);

export default IconInputLabel;
