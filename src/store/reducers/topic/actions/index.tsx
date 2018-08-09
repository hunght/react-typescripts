import { Dispatch } from 'react-redux';

const NAME = 'Topic.';
export const TopicActions = {
  SET: NAME + 'SET',
  GET: NAME + 'GET',
  CLEAR: NAME + 'CLEAR',
  CREATE: NAME + 'CREATE',
  UPDATE: NAME + 'UPDATE',
  DELETE: NAME + 'DELETE',
  UPDATE_FIELD: NAME + 'UPDATE_FIELD',
  LOADING: NAME + 'LOADING',
  ERROR: NAME + 'ERROR'
};

export const getTopic = (id: number) => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: TopicActions.GET, payload: { id } });
};

export const setTopic = (topic: any) => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: TopicActions.SET, payload: topic });
};

export const clearTopic = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: TopicActions.CLEAR });
};

export const createTopic = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: TopicActions.CREATE });
};

export const updateTopic = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: TopicActions.UPDATE });
};

export const deleteTopic = (id: any) => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: TopicActions.DELETE, payload: id });
};

export const updateTopicField = (
  fieldName: string,
  value: any,
  sync = false
) => async (dispatch: Dispatch<object>, getStore: any) => {
  dispatch({
    type: TopicActions.UPDATE_FIELD,
    payload: { fieldName, value, sync }
  });
};
