import { Dispatch } from 'react-redux';

const NAME = 'Topics.';
export const TopicsActions = {
  LOADING: NAME + 'LOADING',
  GET: NAME + 'GET',
  SET: NAME + 'SET',
  CLEAR: NAME + 'CLEAR',
  ERROR: NAME + 'ERROR'
};

export const getTopics = async (dispatch: Dispatch<object>, getStore: any) => {
  dispatch({ type: TopicsActions.GET });
};

export const clearTopics = async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: TopicsActions.CLEAR });
};
