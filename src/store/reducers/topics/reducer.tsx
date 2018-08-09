import { ActionInterface } from '../index';
import { TopicsActions } from './actions';

export interface TopicsStateType {
  data?: any;
  loading?: boolean;
  error?: { type: string; errorMessage: string; statusCode: number };
}

export const initialState: TopicsStateType = {
  error: undefined,
  data: [],
  loading: false
};

const reducer = (
  state: TopicsStateType = initialState,
  { type, payload }: ActionInterface
) => {
  switch (type) {
    case TopicsActions.LOADING:
      return { ...state, ...{ loading: true } };
    case TopicsActions.SET:
      return {
        ...state,
        ...{ data: payload },
        ...{ loading: false }
      };
    case TopicsActions.ERROR:
      return {
        ...state,
        ...{ error: payload },
        ...{ loading: false }
      };
    case TopicsActions.CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
