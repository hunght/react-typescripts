import { Dispatch } from 'react-redux';
import { login as loginAPI } from '../../../api/aws';

const NAME = 'Admin.';
export const Admin = {
  UPDATE: NAME + 'UPDATE',
  CHANGE_TOKEN: NAME + 'CHANGE_TOKEN',
  LOADING: NAME + 'LOADING',
  LOG_OUT: NAME + 'LOG_OUT',
  ERROR: NAME + 'ERROR'
};

const checkEmail = (email: string) => {
  /* tslint:disable */
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* tslint:enable */
  return re.test(email.toLowerCase());
};

const checkPassword = (password: string) => {
  // const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
  // return re.test(password.toLowerCase());
  return true;
};

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  dispatch({ type: Admin.LOADING, payload: { loading: true } });

  if (!checkEmail(email)) {
    return dispatch({
      type: Admin.UPDATE,
      payload: {
        loading: false,
        error: 'Invalid email!'
      }
    });
  }

  if (!checkPassword(password)) {
    return dispatch({
      type: Admin.UPDATE,
      payload: {
        loading: false,
        error: 'Invalid password!'
      }
    });
  }

  const { data, error } = await loginAPI(email, password);

  if (error || !data.role || data.role !== 'admin') {
    return dispatch({
      type: Admin.ERROR,
      payload: {
        error: 'Invalid login or password!'
      }
    });
  }

  sessionStorage.setItem('admin', JSON.stringify(data));
  return dispatch({
    type: Admin.UPDATE,
    payload: data
  });
};

export const logout = () => (dispatch: Dispatch<object>) => {
  sessionStorage.removeItem('admin');
  dispatch({ type: Admin.LOG_OUT });
};

export const checkAdminIsLoggedIn = () => (
  dispatch: Dispatch<object>,
  getStore: any
) => {
  let store = getStore();
  let adminFromStore: any = store.admin;
  let admin = JSON.parse(sessionStorage.getItem('admin') as string);

  if (!adminFromStore.data && admin) {
    dispatch({
      type: Admin.UPDATE,
      payload: admin
    });
  }
};
