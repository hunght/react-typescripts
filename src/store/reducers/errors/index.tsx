import { clearErrors } from './actions';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';

const enhancer = compose(
  connect(
    (state: any) => ({
      errors: state.errors
    }),
    (dispatch: Dispatch<object>) => ({
      errorsActions: {
        clearErrors: () => dispatch(clearErrors())
      }
    })
  )
);
export default enhancer;
