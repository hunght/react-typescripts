import * as React from 'react';
import styled from 'styled-components';
import Text from '../../elements/Text';
import Indent from '../../elements/Indent';
import Input from '../../elements/Input';
import { Colors } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 29px;
  position: relative;
`;

const AltText = Text.extend`
  color: ${Colors.DARK_GREY};
`;

const Label = Text.extend`
  font-size: 1.563rem;
`;

const Rquired = styled.span`
  font-size: 1.563rem;
`;

export interface FormInterface {
  type: any;
  edit?: boolean;
  required?: boolean;
  fieldName?: any;
  value?: any;
  error?: any;
  className?: any;
  onChange?: any;
  label?: string;
  options?: any;
  sync?: boolean;
}

const FormFieldBlock = ({
  type,
  edit,
  required = false,
  fieldName,
  value,
  error,
  onChange,
  label,
  options,
  sync,
  className
}: FormInterface) => (
  <Wrapper className={className}>
    <Label>
      {label}
      {edit && required && <Rquired>*</Rquired>}
    </Label>
    <Indent height="16px" />
    {!edit && <AltText>{value}</AltText>}
    {edit && (
      <Input
        type={type}
        name={fieldName}
        value={value}
        error={error}
        options={options}
        onChange={(data: any) => onChange(fieldName, data, sync)}
      />
    )}
  </Wrapper>
);

export default FormFieldBlock;
