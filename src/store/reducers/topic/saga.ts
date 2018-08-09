import { call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  getTopic as getTopicApi,
  createTopic as createTopicApi,
  deleteTopic as deleteTopicApi,
  updateTopic as updateTopicApi
} from '../../api/aws';
import validate from './validate';
import { TopicActions } from './actions';
import { TopicsActions } from '../topics/actions';

export function* setTopic(action: any) {
  const { topic } = yield select();
  try {
    const error = validate(topic.data);
    yield put({ type: TopicActions.ERROR, payload: error });
  } catch (e) {
    yield put({ type: TopicActions.ERROR, payload: e.message });
  }
}

export function* getTopic(action: any) {
  try {
    const { topic } = yield select();
    yield put({ type: TopicActions.LOADING });
    const { data } = yield call(
      getTopicApi,
      action.payload ? action.payload.id : topic.data._id
    );
    yield put({ type: TopicActions.SET, payload: data });
  } catch (e) {
    yield put({ type: TopicActions.ERROR, payload: e.message });
  }
}

export function* createTopic(action: any) {
  yield put({ type: TopicActions.LOADING });
  const { topic } = yield select();
  const errors = validate(topic.data);
  if (Object.keys(errors).length !== 0) {
    yield put({ type: TopicActions.ERROR, payload: errors });
  }
  if (Object.keys(topic.errors).length !== 0) {
    return;
  }
  if (Object.keys(topic.data).length === 0) {
    return;
  }
  try {
    const { data, error } = yield call(createTopicApi, topic.data);
    console.log('-4--4--4-4-4-4----', data, error);
    yield put({ type: TopicActions.CLEAR });
    yield put({ type: TopicsActions.GET });
  } catch (error) {
    console.log('-5555555555----', error);
    yield put({
      type: TopicActions.ERROR,
      payload: { common: error.message }
    });
  }
}

export function* deleteTopic(action: any) {
  try {
    yield put({ type: TopicsActions.LOADING });
    const { data, error } = yield call(deleteTopicApi, action.payload);
    console.log('-delete----', data, error);
    yield put({ type: TopicsActions.GET });
  } catch (error) {
    console.log('-delete_error----', error);
    yield put({
      type: TopicsActions.ERROR,
      payload: { common: error.message }
    });
  }
}

export function* updateTopic(action: any) {
  yield put({ type: TopicActions.LOADING });
  const { topic } = yield select();
  const errors = validate(topic.data);
  if (Object.keys(errors).length !== 0) {
    yield put({ type: TopicActions.ERROR, payload: errors });
  }
  if (Object.keys(topic.errors).length !== 0) {
    return;
  }
  if (Object.keys(topic.data).length === 0) {
    return;
  }
  try {
    const { data, error } = yield call(updateTopicApi, topic.data);
    console.log('-4--4--4-4-4-4----', data, error);
    yield put({ type: TopicActions.SET, payload: data });
  } catch (error) {
    yield put({
      type: TopicsActions.ERROR,
      payload: { common: error.message }
    });
  }
}

export function* updateTopicField(action: any) {
  const { topic } = yield select();
  topic.data[action.payload.fieldName] = action.payload.value;
  try {
    yield put({ type: TopicActions.SET, payload: topic.data });
    yield call(delay, 500);
  } catch (error) {
    yield put({
      type: TopicsActions.ERROR,
      payload: { common: error.message }
    });
  }
}
