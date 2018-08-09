/*
import { 
  TopicsActions, 
  getTopics, 
} from './index';
jest.mock('../../../api/aws', () => ({getTopics: () => ({data: {test: 'test'}})}));

let dispatch = jest.fn();
let getStore = jest.fn();

describe('store/topics/actions', () => {

  beforeEach(() => {
    dispatch = jest.fn();
    getStore = jest.fn(() => ({employer: {}}));
  });

  test('getTopics', () => {

    getTopics(dispatch, getStore);
    
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(TopicsActions.GET);

  });

});
*/
import { TopicsActions, getTopics } from './index';
jest.mock('../../../api/aws', () => ({
  getTopics: () => ({ data: { test: 'test' } })
}));

let dispatch = jest.fn();
let getStore = jest.fn();

describe('store/topics/actions', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    getStore = jest.fn();
  });
  test('getTopics', () => {
    getTopics(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(TopicsActions.GET);
  });
});
