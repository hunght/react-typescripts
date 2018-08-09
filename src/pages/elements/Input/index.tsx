import * as React from 'react';
import InputText from '../../elements/InputText';
import InputSelect from '../../elements/InputSelect';
import Error from '../../elements/Error';

interface InputInterface {
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  error?: object;
  type?: string;
  options?: any;
  onChange?: any;
}

const Input: React.SFC<InputInterface> = (props: InputInterface) => (
  <div>
    {props.type &&
      (props.type === 'text' ||
        props.type === 'textarea' ||
        props.type === 'password') && <InputText {...props} />}
    {props.type && props.type === 'select' && <InputSelect {...props} />}
    {props.error && <Error>{(props as any).error}</Error>}
  </div>
);

export default Input;
