import * as React from 'react';
import { compose, withHandlers, lifecycle } from 'recompose';
import withComment from '../../../../store/reducers/comment';
import View, { ResponseCommentAddFormInterface } from './view';

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
      commentActions.createResponseComment
  })
);

const ResponseCommentAddForm: React.ComponentClass<
  ResponseCommentAddFormInterface
> = enhancer(View);

export default ResponseCommentAddForm;
