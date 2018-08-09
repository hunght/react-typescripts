import * as React from 'react';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import withTopic from '../../../../store/reducers/topic';
import View, { TopicInfoInterface } from './view';

export const enhancer = compose(
  withTopic,
  withRouter,
  withHandlers({
    onChange: ({ topicActions }: { topicActions: any }) =>
      topicActions.updateTopicField
  })
);

const TopicDetailInfo: React.ComponentClass<TopicInfoInterface> = enhancer(
  View
);

export default TopicDetailInfo;
