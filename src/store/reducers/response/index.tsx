import {
  createResponse,
  getResponse,
  updateResponseField,
  updateResponse,
  clearResponse
} from './actions';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';

const enhancer = compose(
  connect(
    (state: any) => ({
      response: state.response
    }),
    (dispatch: Dispatch<object>) => ({
      responseActions: {
        getResponse: (id: any) => dispatch(getResponse(id)),
        createResponse: () => dispatch(createResponse()),
        clearResponse: () => dispatch(clearResponse()),
        updateResponse: () => dispatch(updateResponse()),
        updateResponseField: (fieldName: string, value: any, sync: boolean) =>
          dispatch(updateResponseField(fieldName, value, sync))
      }
    })
  )
);

export default enhancer;
