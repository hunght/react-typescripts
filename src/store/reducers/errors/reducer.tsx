import { ActionInterface } from '../index';
import { Errors } from './actions';

const initialState = {
  common: null
};

const reducer = (state = initialState, { type, payload }: ActionInterface) => {
  switch (type) {
    case Errors.CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
