import * as React from 'react';
import Block from '../elements/Block';
import ContentBlock from '../elements/ContentBlock';
import Indent from '../elements/Indent';
import Loading from '../elements/Loading';
import PageTitleBlock from '../components/PageTitleBlock';
import TopicTable from './components/TopicTable';
import Sidebar from '../components/Sidebar';
import TopicAddForm from './components/TopicAddForm';

export interface ListTopicInterface {
  topics?: any;
  children?: React.ReactNode;
}

const ListTopics = ({ topics }: ListTopicInterface) => (
  <Block data-height="100%">
    <Sidebar />
    <ContentBlock data-width="100%" data-justify="center">
      <Block data-direction="column" data-width="80%">
        <Indent height="48px" />
        <PageTitleBlock title="Topics" />
        <Indent height="48px" />
        {topics.loading && <Loading />}
        {topics.data.length ? <TopicTable items={topics.data} /> : ''}
        <TopicAddForm />
        <Indent height="61px" />
      </Block>
    </ContentBlock>
  </Block>
);

export default ListTopics;
