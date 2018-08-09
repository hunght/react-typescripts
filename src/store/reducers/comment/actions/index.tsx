import { Dispatch } from 'react-redux';

const NAME = 'Comment.';
export const CommentActions = {
  SET: NAME + 'SET',
  CLEAR: NAME + 'CLEAR',
  TOPIC_CREATE: NAME + 'TOPIC_CREATE',
  RESPONSE_CREATE: NAME + 'RESPONSE_CREATE',
  // DELETE: NAME + 'DELETE',
  UPDATE_FIELD: NAME + 'UPDATE_FIELD',
  LOADING: NAME + 'LOADING',
  ERROR: NAME + 'ERROR'
};

export const setComment = (comment: any) => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({
    type: CommentActions.SET,
    payload: comment
  });
};

export const clearComment = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: CommentActions.CLEAR });
};

export const createTopicComment = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: CommentActions.TOPIC_CREATE });
};

export const createResponseComment = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: CommentActions.RESPONSE_CREATE });
};

// export const deleteComment = (id: any) => async (dispatch: Dispatch<object>, getStore: any) => {

//   dispatch({type: CommentActions.DELETE, payload: id});

// };

export const updateCommentField = (
  fieldName: string,
  value: any,
  sync = false
) => async (dispatch: Dispatch<object>, getStore: any) => {
  dispatch({
    type: CommentActions.UPDATE_FIELD,
    payload: { fieldName, value, sync }
  });
};
