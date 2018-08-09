import * as React from 'react';
import styled from 'styled-components';
import Block from '../elements/Block';
import Button from '../elements/Button';
import ContentBlock from '../elements/ContentBlock';
import Indent from '../elements/Indent';
import Loading from '../elements/Loading';
import ResponseInfo from './components/ResponseInfo';
import ResponseDetailInfo from './components/ResponseDetailInfo';
import SidebarBlock from '../components/Sidebar';
import ResponseCommentAddForm from './components/ResponseCommentAddForm';
import ResponseComments from './components/ResponseComments';

const SubmitButton = styled(Button)`
  margin: 0 auto;
`;

export interface ResponsePageInterface {
  onSubmit?: any;
  response?: any;
  children?: React.ReactNode;
  match?: any;
}

const ResponsePage = ({
  response,
  onSubmit,
  match: {
    params: { edit }
  }
}: ResponsePageInterface) => (
  <Block data-height="100%">
    <SidebarBlock />
    <ContentBlock data-width="100%" data-justify="center">
      <Block data-direction="column" data-width="80%">
        {response.loading && <Loading />}
        <Indent height="80px" />
        <ResponseInfo />
        <Indent height="61px" />
        <ResponseDetailInfo />
        <Indent height="61px" />
        {!!edit && (
          <SubmitButton onClick={onSubmit}>
            {!response.loading && <span>Save</span>}
          </SubmitButton>
        )}
        <Indent height="61px" />
        <ResponseComments />
        {!edit && <ResponseCommentAddForm />}
        <Indent height="61px" />
      </Block>
    </ContentBlock>
  </Block>
);

export default ResponsePage;
