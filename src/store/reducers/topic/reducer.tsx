import { ActionInterface } from '../index';
import { TopicActions } from './actions';

export interface TopicStateInterface {
  errors: object;
  data: object;
  loading: boolean;
}

export const initialState: TopicStateInterface = {
  errors: {},
  data: {},
  loading: false
};

const reducer = (
  state: TopicStateInterface = initialState,
  { type, payload }: ActionInterface
) => {
  switch (type) {
    case TopicActions.LOADING:
      return { ...state, ...{ loading: true } };
    case TopicActions.SET:
      return {
        ...state,
        ...{ data: payload },
        ...{ loading: false }
      };
    case TopicActions.ERROR:
      return {
        ...state,
        ...{ errors: payload },
        ...{ loading: false }
      };
    case TopicActions.CLEAR:
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
