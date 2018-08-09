import { combineReducers } from 'redux';
import errors from './errors/reducer';
import admin from './admin/reducer';
import topic from './topic/reducer';
import topics from './topics/reducer';
import comment from './comment/reducer';
import response from './response/reducer';
export interface ActionInterface {
  type?: string;
  payload?: any;
}

const rootReducer = combineReducers({
  errors,
  admin,
  topic,
  topics,
  comment,
  response
});

export default rootReducer;
