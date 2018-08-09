import {
  createTopic,
  deleteTopic,
  updateTopic,
  updateTopicField,
  getTopic,
  clearTopic
} from './actions';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';

const enhancer = compose(
  connect(
    (state: any) => ({
      topic: state.topic
    }),
    (dispatch: Dispatch<object>) => ({
      topicActions: {
        getTopic: (id: any) => dispatch(getTopic(id)),
        createTopic: () => dispatch(createTopic()),
        updateTopic: () => dispatch(updateTopic()),
        deleteTopic: (id: any) => dispatch(deleteTopic(id)),
        clearTopic: () => dispatch(clearTopic()),
        updateTopicField: (fieldName: string, value: any, sync: boolean) =>
          dispatch(updateTopicField(fieldName, value, sync))
      }
    })
  )
);

export default enhancer;
