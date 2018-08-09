import * as React from 'react';
import Block from '../../../elements/Block';
import Indent from '../../../elements/Indent';
import { TitleLeft } from '../../../elements/Title';
import FormField from '../../../components/FormField';
import TextRow from '../TextRow';

export interface TopicInfoInterface {
  topic?: any;
  onChange?: any;
  match?: any;
  children?: React.ReactNode;
}

const TopicDetailInfo = ({
  topic: { data, errors },
  onChange,
  match: {
    params: { edit }
  }
}: TopicInfoInterface) => (
  <Block data-direction="column">
    <TitleLeft>Detail Info</TitleLeft>
    <Indent height="25px" />
    <TextRow>
      <FormField
        type="text"
        edit={!!edit}
        value={data.name}
        error={errors.name}
        onChange={onChange}
        required={true}
        sync={true}
        fieldName="name"
        label="Name:"
      />
    </TextRow>
    <TextRow>
      <FormField
        type="text"
        edit={!!edit}
        value={data.subject}
        error={errors.subject}
        onChange={onChange}
        required={true}
        sync={true}
        fieldName="subject"
        label="Subject:"
      />
    </TextRow>
  </Block>
);

export default TopicDetailInfo;
