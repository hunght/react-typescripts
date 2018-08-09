import { CommentActions, clearComment } from './index';

let dispatch = jest.fn();
let getStore = jest.fn();
describe('store/comment/actions', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    getStore = jest.fn(() => ({ comment: {} }));
  });

  test('clearComment', () => {
    clearComment()(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(CommentActions.CLEAR);
  });
});
