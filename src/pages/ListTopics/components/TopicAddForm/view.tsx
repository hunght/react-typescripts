import * as React from 'react';
import styled from 'styled-components';
import Indent from '../../../elements/Indent';
import Window from '../../../elements/Window';
import Block from '../../../elements/Block';
import Error from '../../../elements/Error';
import Loading from '../../../elements/Loading';
import { TitleLeft } from '../../../elements/Title';
import Button from '../../../elements/Button';
import FormFieldBlock from '../../../components/FormFieldBlock';

const SubmitButton = styled(Button)`
  position: absolute;
  bottom: -35px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const TopicAddFormWindow = styled(Window)`
  padding: 40px;
`;

const TopicAddFormTitleLeft = styled(TitleLeft)`
  padding: 0 0 20px 0;
`;

export interface TopicAddFormInterface {
  topic?: any;
  onSubmit?: any;
  onChange?: any;
  children?: React.ReactNode;
}

const TopicAddForm = ({
  topic: { data, errors, loading },
  onSubmit,
  onChange
}: TopicAddFormInterface) => (
  <TopicAddFormWindow width="100%" height="276px">
    <TopicAddFormTitleLeft>Add New Topic</TopicAddFormTitleLeft>
    <Error>{errors.common}</Error>
    <Block>
      <FormFieldBlock
        type="text"
        edit={true}
        onChange={onChange}
        value={data.name}
        error={errors.name}
        fieldName="name"
        label="Name"
      />
      <Indent width="40px" />
      <FormFieldBlock
        type="text"
        edit={true}
        onChange={onChange}
        value={data.subject}
        error={errors.subject}
        fieldName="subject"
        label="Subject"
      />
    </Block>
    <SubmitButton onClick={onSubmit}>
      {loading && <Loading />}
      {!loading && <span>Add</span>}
    </SubmitButton>
  </TopicAddFormWindow>
);

export default TopicAddForm;
