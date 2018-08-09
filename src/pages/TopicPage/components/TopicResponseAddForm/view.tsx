import * as React from 'react';
import styled from 'styled-components';
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

export interface TopicResponseAddFormInterface {
  response?: any;
  onSubmit?: any;
  onChange?: any;
  children?: React.ReactNode;
}

const TopicResponseAddForm = ({
  response: { data, errors, loading },
  onSubmit,
  onChange
}: TopicResponseAddFormInterface) => (
  <TopicAddFormWindow width="100%" height="276px">
    <TopicAddFormTitleLeft>Add New Response</TopicAddFormTitleLeft>
    <Error>{errors.common}</Error>
    <Block>
      <FormFieldBlock
        type="textarea"
        edit={true}
        onChange={onChange}
        value={data.text}
        error={errors.text}
        fieldName="text"
        label="Text"
      />
    </Block>
    <SubmitButton onClick={onSubmit}>
      {loading && <Loading />}
      {!loading && <span>Add</span>}
    </SubmitButton>
  </TopicAddFormWindow>
);

export default TopicResponseAddForm;
