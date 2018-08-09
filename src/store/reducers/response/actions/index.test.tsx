import { ResponseActions, clearResponse } from './index';

let dispatch = jest.fn();
let getStore = jest.fn();

describe('store/comment/actions', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    getStore = jest.fn(() => ({ response: {} }));
  });

  test('clearResponse', () => {
    clearResponse()(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(ResponseActions.CLEAR);
  });
});
