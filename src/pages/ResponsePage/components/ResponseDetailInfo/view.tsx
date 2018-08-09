import * as React from 'react';
import Block from '../../../elements/Block';
import Indent from '../../../elements/Indent';
import { TitleLeft } from '../../../elements/Title';
import FormField from '../../../components/FormField';
import TextRow from '../TextRow';

export interface ResponseDetailInfoInterface {
  response?: any;
  onChange?: any;
  match?: any;
  children?: React.ReactNode;
}

const ResponseDetailInfo = ({
  response: { data, errors },
  onChange,
  match: {
    params: { edit }
  }
}: ResponseDetailInfoInterface) => (
  <Block data-direction="column">
    <TitleLeft>Detail Info</TitleLeft>
    <Indent height="25px" />
    <TextRow>
      <FormField
        type="text"
        edit={!!edit}
        value={data.text}
        error={errors.text}
        onChange={onChange}
        required={true}
        sync={true}
        fieldName="text"
        label="Text:"
      />
    </TextRow>
  </Block>
);

export default ResponseDetailInfo;
