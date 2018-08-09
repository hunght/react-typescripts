import { call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  createTopicComment as createTopicCommentApi,
  createResponseComment as createResponseCommentApi
} from '../../api/aws';
import validate from './validate';
import { CommentActions } from './actions';
import { TopicActions } from '../topic/actions';
import { ResponseActions } from '../response/actions';

export function* setComment(action: any) {
  const { comment } = yield select();
  try {
    const error = validate(comment.data);
    yield put({
      type: CommentActions.ERROR,
      payload: error
    });
  } catch (e) {
    yield put({
      type: CommentActions.ERROR,
      payload: e.message
    });
  }
}

export function* createTopicComment(action: any) {
  yield put({ type: CommentActions.LOADING });
  const { comment, topic } = yield select();
  const errors = validate(comment.data);
  if (Object.keys(errors).length !== 0) {
    yield put({
      type: CommentActions.ERROR,
      payload: errors
    });
  }
  if (Object.keys(comment.errors).length !== 0) {
    return;
  }
  if (Object.keys(comment.data).length === 0) {
    return;
  }
  try {
    const dataCreateComment = {
      content: comment.data.content,
      topic: topic.data,
      creator: comment.data.creator
    };
    const { data, error } = yield call(
      createTopicCommentApi,
      dataCreateComment
    );
    console.log('-4--4--4-4-4-4----', data, error);
    yield put({ type: CommentActions.CLEAR });
    yield put({ type: TopicActions.GET });
  } catch (error) {
    console.log('-5555555555----', error);
    yield put({
      type: CommentActions.ERROR,
      payload: { common: error.message }
    });
  }
}

export function* createResponseComment(action: any) {
  console.log('here');
  yield put({ type: CommentActions.LOADING });
  const { comment, response } = yield select();
  const errors = validate(comment.data);
  if (Object.keys(errors).length !== 0) {
    yield put({
      type: CommentActions.ERROR,
      payload: errors
    });
  }
  if (Object.keys(comment.errors).length !== 0) {
    return;
  }
  if (Object.keys(comment.data).length === 0) {
    return;
  }
  try {
    const dataCreateComment = {
      content: comment.data.content,
      response: response.data,
      creator: comment.data.creator
    };
    const { data, error } = yield call(
      createResponseCommentApi,
      dataCreateComment
    );
    console.log('-4--4--4-4-4-4----', data, error);
    yield put({ type: CommentActions.CLEAR });
    yield put({ type: ResponseActions.GET });
  } catch (error) {
    console.log('-5555555555----', error);
    yield put({
      type: CommentActions.ERROR,
      payload: { common: error.message }
    });
  }
}

export function* updateCommentField(action: any) {
  const { comment } = yield select();
  comment.data[action.payload.fieldName] = action.payload.value;
  try {
    yield put({
      type: CommentActions.SET,
      payload: comment.data
    });
    yield call(delay, 500);
  } catch (error) {
    yield put({
      type: CommentActions.ERROR,
      payload: { common: error.message }
    });
  }
}
