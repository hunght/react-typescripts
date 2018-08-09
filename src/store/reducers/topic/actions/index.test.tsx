import { TopicActions, getTopic, clearTopic } from './index';

let dispatch = jest.fn();
let getStore = jest.fn();

describe('store/topic/actions', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    getStore = jest.fn(() => ({ topic: {} }));
  });
  test('getTopic', () => {
    const id = 34;
    getTopic(id)(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(TopicActions.GET);
    expect(dispatch.mock.calls[0][0].payload.id).toBe(id);
  });
  test('clearTopic', () => {
    clearTopic()(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(TopicActions.CLEAR);
  });
});
