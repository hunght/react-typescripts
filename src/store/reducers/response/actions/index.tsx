import { Dispatch } from 'react-redux';

const NAME = 'Response.';
export const ResponseActions = {
  SET: NAME + 'SET',
  CLEAR: NAME + 'CLEAR',
  CREATE: NAME + 'CREATE',
  GET: NAME + 'GET',
  UPDATE: NAME + 'UPDATE',
  // DELETE: NAME + 'DELETE',
  UPDATE_FIELD: NAME + 'UPDATE_FIELD',
  LOADING: NAME + 'LOADING',
  ERROR: NAME + 'ERROR'
};

export const getResponse = (id: number) => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: ResponseActions.GET, payload: { id } });
};

export const setResponse = (response: any) => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: ResponseActions.SET, payload: response });
};

export const clearResponse = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: ResponseActions.CLEAR });
};

export const createResponse = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: ResponseActions.CREATE });
};

export const updateResponse = () => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: ResponseActions.UPDATE });
};

// export const deleteResponse = (id: any) => async (dispatch: Dispatch<object>, getStore: any) => {
//   dispatch({ type: ResponseActions.DELETE, payload: id });
// };

export const updateResponseField = (
  fieldName: string,
  value: any,
  sync = false
) => async (dispatch: Dispatch<object>, getStore: any) => {
  dispatch({
    type: ResponseActions.UPDATE_FIELD,
    payload: { fieldName, value, sync }
  });
};
