import { Errors, clearErrors } from './index';
let dispatch = jest.fn();
let getStore = jest.fn();
describe('store/errors/actions', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    getStore = jest.fn(() => ({ errors: {} }));
  });
  test('clearErrors', () => {
    clearErrors()(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(Errors.CLEAR);
  });
});
