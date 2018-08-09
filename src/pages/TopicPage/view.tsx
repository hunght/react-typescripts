import * as React from 'react';
import styled from 'styled-components';
import Block from '../elements/Block';
import Button from '../elements/Button';
import ContentBlock from '../elements/ContentBlock';
import Indent from '../elements/Indent';
import Loading from '../elements/Loading';
import TopicInfo from './components/TopicInfo';
import TopicDetailInfo from './components/TopicDetailInfo';
import SidebarBlock from '../components/Sidebar';
import TopicCommentAddForm from './components/TopicCommentAddForm';
import TopicResponseAddForm from './components/TopicResponseAddForm';
import TopicComments from './components/TopicComments';
import TopicResponses from './components/TopicResponses';

const SubmitButton = styled(Button)`
  margin: 0 auto;
`;

export interface TopicPageInterface {
  onSubmit?: any;
  topic?: any;
  children?: React.ReactNode;
  match?: any;
}

const TopicPage = ({
  topic,
  onSubmit,
  match: {
    params: { edit }
  }
}: TopicPageInterface) => (
  <Block data-height="100%">
    <SidebarBlock />
    <ContentBlock data-width="100%" data-justify="center">
      <Block data-direction="column" data-width="80%">
        {topic.loading && <Loading />}
        <Indent height="80px" />
        <TopicInfo />
        <Indent height="61px" />
        <TopicDetailInfo />
        <Indent height="61px" />
        {!!edit && (
          <SubmitButton onClick={onSubmit}>
            {!topic.loading && <span>Save</span>}
          </SubmitButton>
        )}
        <Indent height="61px" />
        <TopicComments />
        {!edit && <TopicCommentAddForm />}
        <Indent height="61px" />
        <TopicResponses />
        {!edit && <TopicResponseAddForm />}
        <Indent height="61px" />
      </Block>
    </ContentBlock>
  </Block>
);

export default TopicPage;
