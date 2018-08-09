import * as React from 'react';
import { compose, withHandlers, lifecycle } from 'recompose';
import withTopic from '../../../../store/reducers/topic';
import View, { TopicAddFormInterface } from './view';

export const enhancer = compose(
  withTopic,
  lifecycle({
    componentDidMount: function() {
      (this.props as any).topicActions.clearTopic();
    }
  }),
  withHandlers({
    onChange: ({ topicActions }: { topicActions: any }) =>
      topicActions.updateTopicField,
    onSubmit: ({ topicActions }: { topicActions: any }) =>
      topicActions.createTopic
  })
);

const TopicAddForm: React.ComponentClass<TopicAddFormInterface> = enhancer(
  View
);

export default TopicAddForm;
