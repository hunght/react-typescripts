import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../theme';

const Component = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-family: Avenir-Roman;
  letter-spacing: 0.6px;
  ${({ disabled }) =>
    disabled
      ? `
    background-color: ${Colors.GREY};
  `
      : `
  background-color: ${
    Colors.BLUE_30
  };`} border: solid 1px rgba(21, 136, 181, 0.3);
  color: ${Colors.MEDIUM_GREY};
  font-size: 1rem;
  padding: 13px 14px;
  &::placeholder {
    color: ${Colors.LIGHT_BLUE};
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-family: Avenir-Roman;
  letter-spacing: 0.6px;
  ${({ disabled }) =>
    disabled
      ? `
    background-color: ${Colors.GREY};
  `
      : `
  background-color: ${
    Colors.BLUE_30
  };`} border: solid 1px rgba(21, 136, 181, 0.3);
  color: ${Colors.MEDIUM_GREY};
  font-size: 1rem;
  padding: 13px 14px;
  &::placeholder {
    color: ${Colors.LIGHT_BLUE};
  }
`;

interface InputTextType {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  value?: string;
  onChange?: any;
}

const transform = (value: any) => {
  if (!value) {
    return '';
  }

  if (typeof value === 'string' && !value.trim()) {
    return '';
  }

  return value;
};

const InputText: React.SFC<InputTextType> = ({
  type,
  value,
  disabled,
  placeholder,
  onChange
}: InputTextType) =>
  type === 'textarea' ? (
    <TextArea
      value={transform(value)}
      disabled={disabled}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  ) : (
    <Component
      type={type}
      value={transform(value)}
      disabled={disabled}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  );

export default InputText;
