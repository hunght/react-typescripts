import { ActionInterface } from '../index';
import { Admin } from './actions';

export interface AdminStateInterface {
  error: object | undefined;
  data: any;
  loading: boolean;
}

export const initialState: AdminStateInterface = {
  error: undefined,
  data: null,
  loading: false
};

const reducer = (
  state: AdminStateInterface = initialState,
  { type, payload }: ActionInterface
) => {
  switch (type) {
    case Admin.LOG_OUT:
      return initialState;
    case Admin.LOADING:
      return { ...state, ...{ loading: true } };
    case Admin.ERROR:
      return {
        ...state,
        ...{ error: payload },
        ...{ data: null },
        ...{ loading: false }
      };
    case Admin.UPDATE:
      return { ...state, ...{ data: payload }, ...{ loading: false } };
    default:
      return state;
  }
};

export default reducer;
