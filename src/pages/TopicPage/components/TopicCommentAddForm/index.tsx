import * as React from 'react';
import { compose, withHandlers, lifecycle } from 'recompose';
import withComment from '../../../../store/reducers/comment';
import View, { TopicAddFormInterface } from './view';

export const enhancer = compose(
  withComment,
  lifecycle({
    componentDidMount: function() {
      (this.props as any).commentActions.clearComment();
    }
  }),
  withHandlers({
    onChange: ({ commentActions }: { commentActions: any }) =>
      commentActions.updateCommentField,
    onSubmit: ({ commentActions }: { commentActions: any }) =>
      commentActions.createTopicComment
  })
);

const TopicAddForm: React.ComponentClass<TopicAddFormInterface> = enhancer(
  View
);

export default TopicAddForm;
