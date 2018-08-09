import { Admin, login, logout, checkAdminIsLoggedIn } from './index';
jest.mock('../../../api/aws', () => ({
  getUserInfoById: () => ({ data: { test: 'test' } })
}));

let dispatch = jest.fn();
let getStore = jest.fn();

describe('store/admin/actions', () => {
  beforeEach(() => {
    (global as any).sessionStorage = jest.fn();
    (global as any).sessionStorage.setItem = jest.fn();
    (global as any).sessionStorage.getItem = jest.fn(() => '{"id":"43"}');
    (global as any).sessionStorage.removeItem = jest.fn();
    dispatch = jest.fn();
    getStore = jest.fn(() => ({ admin: { data: null } }));
  });

  test('login', () => {
    const email = '';
    const password = '';
    login(email, password)(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(Admin.LOADING);
    // expect(dispatch.mock.calls[0][0].payload.id).toBe(id);
  });

  test('logout', () => {
    logout()(dispatch);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(Admin.LOG_OUT);
  });

  test('checkUserIsLoggedIn', () => {
    checkAdminIsLoggedIn()(dispatch, getStore);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toBe(Admin.UPDATE);
    // expect(dispatch.mock.calls[0][0].payload.id).toBe('43');
  });
});
