import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../theme';

const Component = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-family: Avenir-Roman;
  letter-spacing: 0.6px;
  border: solid 1px rgba(21, 136, 181, 0.3);
  ${({ disabled }) =>
    disabled
      ? `background-color: ${Colors.GREY};`
      : `background-color: ${Colors.BLUE_30};`}
  color: ${Colors.MEDIUM_GREY};
  font-size: 1rem;
  padding: 0 14px;
  &::placeholder {
    color: ${Colors.LIGHT_BLUE};
  }
`;

interface InputTextType {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  options?: any;
  onChange?: any;
}

const InputSelect: React.SFC<InputTextType> = ({
  value,
  disabled,
  placeholder,
  options,
  onChange
}: InputTextType) => (
  <Component
    value={value || ''}
    disabled={disabled}
    onChange={e => onChange(e.target.value)}
  >
    {options.map((data: any, index: number) => (
      <option value={data.value} key={index}>
        {data.text}
      </option>
    ))}
  </Component>
);

export default InputSelect;
