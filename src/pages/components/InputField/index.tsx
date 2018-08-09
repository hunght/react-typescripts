import * as React from 'react';
import styled from 'styled-components';
import Input from '../../elements/Input';
import Indent from '../../elements/Indent';
import IconInputLabel from '../../elements/IconInputLabel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 29px;
`;

interface InputFieldPropsType {
  label?: string;
  icon?: React.ReactNode;
  value?: string;
  type?: string;
  placeholder?: string;
  altLabel?: string;
  onChange?: (value: any) => void;
}

const InputField = ({
  placeholder,
  label,
  value,
  type,
  onChange,
  altLabel,
  icon
}: InputFieldPropsType) => (
  <Wrapper className="input-field-component">
    <IconInputLabel icon={icon} altLabel={altLabel}>
      {label}
    </IconInputLabel>
    <Indent height="16px" />
    <Input
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  </Wrapper>
);

export default InputField;
