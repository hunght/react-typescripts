import { getTopics, clearTopics } from './actions';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';

const enhancer = compose(
  connect(
    (state: any) => ({
      topics: state.topics
    }),
    (dispatch: Dispatch<object>) => ({
      topicsActions: {
        getTopics: () => dispatch(getTopics),
        clearTopics: () => dispatch(clearTopics)
      }
    })
  )
);

export default enhancer;
