import { call, put } from 'redux-saga/effects';
import { getTopics as getTopicsAPI } from '../../api/aws';
import { TopicsActions } from './actions';

export function* getTopics({ type }: any) {
  yield put({ type: TopicsActions.LOADING });
  try {
    const { topics } = yield call(getTopicsAPI);
    yield put({ type: TopicsActions.SET, payload: topics });
  } catch (e) {
    yield put({
      type: TopicsActions.ERROR,
      payload: e.message
    });
  }
}
