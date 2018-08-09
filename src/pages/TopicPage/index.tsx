import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle, withHandlers } from 'recompose';
import withTopic from '../../store/reducers/topic';
import View, { TopicPageInterface } from './view';

const enhancer = compose<any, any>(
  withRouter,
  withTopic,
  lifecycle({
    componentDidMount: function(this: any) {
      let {
        topicActions,
        match: {
          params: { id }
        }
      } = this.props;
      topicActions.clearTopic();
      if (id) {
        topicActions.getTopic(id);
      } else {
        // TODO: throw exception
      }
    }
  }),
  withHandlers({
    onSubmit: ({ topicActions }: { topicActions: any }) =>
      topicActions.updateTopic
  })
);

const TopicPage: React.ComponentClass<TopicPageInterface> = enhancer(View);

export default TopicPage;
