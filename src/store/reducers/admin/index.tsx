import { logout, login, checkAdminIsLoggedIn } from './actions';
// import { logout, getUserInfo, login, checkUserIsLoggedIn } from './actions';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';

export const UserRegistrationStatus = {
  EMAIL_SENT: 'email_sent',
  PASSWORD_PROTECTED: 'password_protected',
  EMAIL_CONFIRMED: 'email_confirmed',
  NAME_SUBMITTED: 'name_submitted',
  GOAL_CREATED: 'goal_created',
  BANK_LINKED: 'bank_linked',
  USER_CREATED: 'user_created',
  PENDING_BANK_UPDATE: 'pending_bank_update'
};

const enhancer = compose(
  connect(
    (state: any) => ({
      adminStore: state.admin
    }),
    (dispatch: Dispatch<object>) => ({
      adminActions: {
        // getUserInfo: (id: string, token: string) => dispatch(getUserInfo(id, token)),
        login: (email: string, password: string) =>
          dispatch(login(email, password)),
        logout: () => dispatch(logout()),
        checkAdminIsLoggedIn: () => dispatch(checkAdminIsLoggedIn())
      }
    })
  )
);

export default enhancer;
