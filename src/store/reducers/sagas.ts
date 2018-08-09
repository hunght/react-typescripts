import { takeEvery, takeLatest } from 'redux-saga/effects';
import { getTopics } from './topics/saga';
import {
  setTopic,
  getTopic,
  createTopic,
  deleteTopic,
  updateTopic,
  updateTopicField
} from './topic/saga';
import {
  setComment,
  createTopicComment,
  updateCommentField,
  createResponseComment
} from './comment/saga';
import {
  setResponse,
  getResponse,
  createResponse,
  updateResponse,
  updateResponseField
} from './response/saga';
import { TopicsActions } from './topics/actions';
import { TopicActions } from './topic/actions';
import { CommentActions } from './comment/actions';
import { ResponseActions } from './response/actions';
function* sagas() {
  yield takeEvery(TopicsActions.GET, getTopics);
  yield takeEvery(TopicActions.SET, setTopic);
  yield takeLatest(TopicActions.GET, getTopic);
  yield takeLatest(TopicActions.CREATE, createTopic);
  yield takeLatest(TopicActions.DELETE, deleteTopic);
  yield takeLatest(TopicActions.UPDATE, updateTopic);
  yield takeLatest(TopicActions.UPDATE_FIELD, updateTopicField);
  yield takeLatest(CommentActions.SET, setComment);
  yield takeLatest(CommentActions.TOPIC_CREATE, createTopicComment);
  yield takeLatest(CommentActions.RESPONSE_CREATE, createResponseComment);
  yield takeLatest(CommentActions.UPDATE_FIELD, updateCommentField);
  yield takeLatest(ResponseActions.SET, setResponse);
  yield takeLatest(ResponseActions.GET, getResponse);
  yield takeLatest(ResponseActions.UPDATE, updateResponse);
  yield takeLatest(ResponseActions.CREATE, createResponse);
  yield takeLatest(ResponseActions.UPDATE_FIELD, updateResponseField);
}

export default sagas;
