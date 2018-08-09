import * as React from 'react';
import styled from 'styled-components';
import Text from '../../elements/Text';
import Indent from '../../elements/Indent';
import Input from '../../elements/Input';
import { Colors } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const AltText = Text.extend`
  color: ${Colors.DARK_GREY};
`;

const Rquired = styled.span`
  color: ${Colors.ERROR_RED};
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

const FormField = ({
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
    <Text>
      {label}
      {edit && required && <Rquired>*</Rquired>}
    </Text>
    <Indent width="5px" />
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

export default FormField;
