import {
  createTopicComment,
  updateCommentField,
  clearComment,
  createResponseComment
} from './actions';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';

const enhancer = compose(
  connect(
    (state: any) => ({
      comment: state.comment
    }),
    (dispatch: Dispatch<object>) => ({
      commentActions: {
        createTopicComment: () => dispatch(createTopicComment()),
        createResponseComment: () => dispatch(createResponseComment()),
        clearComment: () => dispatch(clearComment()),
        updateCommentField: (fieldName: string, value: any, sync: boolean) =>
          dispatch(updateCommentField(fieldName, value, sync))
      }
    })
  )
);

export default enhancer;
