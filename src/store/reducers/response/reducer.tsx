import { ActionInterface } from '../index';
import { ResponseActions } from './actions';

export interface ResponseStateInterface {
  errors: object;
  data: object;
  loading: boolean;
}

export const initialState: ResponseStateInterface = {
  errors: {},
  data: {},
  loading: false
};

const reducer = (
  state: ResponseStateInterface = initialState,
  { type, payload }: ActionInterface
) => {
  switch (type) {
    case ResponseActions.LOADING:
      return { ...state, ...{ loading: true } };
    case ResponseActions.SET:
      return {
        ...state,
        ...{ data: payload },
        ...{ loading: false }
      };
    case ResponseActions.ERROR:
      return {
        ...state,
        ...{ errors: payload },
        ...{ loading: false }
      };
    case ResponseActions.CLEAR:
      return {
        ...state,
        ...{ data: {} },
        ...{ errors: {} },
        ...{ loading: false }
      };
    default:
      return state;
  }
};

export default reducer;
