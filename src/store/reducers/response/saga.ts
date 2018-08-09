import { call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  createResponse as createResponseApi,
  getResponse as getResponseApi,
  updateResponse as updateResponseApi
} from '../../api/aws';

import validate from './validate';
import { ResponseActions } from './actions';
import { TopicActions } from '../topic/actions';

export function* getResponse(action: any) {
  try {
    const { response } = yield select();
    yield put({ type: ResponseActions.LOADING });
    const { data } = yield call(
      getResponseApi,
      action.payload ? action.payload.id : response.data._id
    );
    yield put({ type: ResponseActions.SET, payload: data });
  } catch (e) {
    yield put({ type: ResponseActions.ERROR, payload: e.message });
  }
}

export function* setResponse(action: any) {
  const { response } = yield select();
  try {
    const error = validate(response.data);
    yield put({
      type: ResponseActions.ERROR,
      payload: error
    });
  } catch (e) {
    yield put({
      type: ResponseActions.ERROR,
      payload: e.message
    });
  }
}

export function* createResponse(action: any) {
  yield put({ type: ResponseActions.LOADING });
  const { response, topic } = yield select();
  const errors = validate(response.data);
  if (Object.keys(errors).length !== 0) {
    yield put({
      type: ResponseActions.ERROR,
      payload: errors
    });
  }
  if (Object.keys(response.errors).length !== 0) {
    return;
  }
  if (Object.keys(response.data).length === 0) {
    return;
  }
  try {
    const dataCreateResponse = {
      text: response.data.text,
      topic: topic.data
    };
    const { data, error } = yield call(createResponseApi, dataCreateResponse);
    console.log('-4--4--4-4-4-4----', data, error);
    yield put({ type: ResponseActions.CLEAR });
    yield put({ type: TopicActions.GET });
  } catch (error) {
    console.log('-5555555555----', error);
    yield put({
      type: ResponseActions.ERROR,
      payload: { common: error.message }
    });
  }
}

export function* updateResponse(action: any) {
  yield put({ type: ResponseActions.LOADING });
  const { response } = yield select();
  const errors = validate(response.data);
  if (Object.keys(errors).length !== 0) {
    yield put({ type: ResponseActions.ERROR, payload: errors });
  }
  if (Object.keys(response.errors).length !== 0) {
    return;
  }
  if (Object.keys(response.data).length === 0) {
    return;
  }
  try {
    const { data, error } = yield call(updateResponseApi, response.data);
    console.log('-4--4--4-4-4-4----', data, error);
    yield put({ type: ResponseActions.SET, payload: data });
  } catch (error) {
    yield put({
      type: ResponseActions.ERROR,
      payload: { common: error.message }
    });
  }
}

export function* updateResponseField(action: any) {
  const { response } = yield select();
  response.data[action.payload.fieldName] = action.payload.value;
  try {
    yield put({ type: ResponseActions.SET, payload: response.data });
    yield call(delay, 500);
  } catch (error) {
    yield put({
      type: ResponseActions.ERROR,
      payload: { common: error.message }
    });
  }
}
