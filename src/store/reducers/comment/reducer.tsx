import { ActionInterface } from '../index';
import { CommentActions } from './actions';

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
    case CommentActions.LOADING:
      return { ...state, ...{ loading: true } };
    case CommentActions.SET:
      return {
        ...state,
        ...{ data: payload },
        ...{ loading: false }
      };
    case CommentActions.ERROR:
      return {
        ...state,
        ...{ errors: payload },
        ...{ loading: false }
      };
    case CommentActions.CLEAR:
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
