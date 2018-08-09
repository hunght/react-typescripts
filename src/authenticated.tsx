import * as React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';
import withAdmin from './store/reducers/admin';
import LoginPage from './pages/LoginPage';

interface AuthTransitionComponentInterface {
  children?: any;
  adminActions?: any;
  adminStore?: any;
}
/* tslint:disable */
const AuthTransitionComponent = withAdmin(({children, adminActions, adminStore, ...props}: AuthTransitionComponentInterface) =>
  (
  <TransitionGroup>
    {adminActions.checkAdminIsLoggedIn()}
    <CSSTransition key={!adminStore.data ? '0' : adminStore.data.id} classNames="fade" timeout={250}>
        {!adminStore.data ? <LoginPage /> : children}
    </CSSTransition>
  </TransitionGroup>
  ));

const AuthRoute = ({ component: Component, ...rest }: {component?: any, exact?: boolean, path?: string}) => (
  <Route
    {...rest}
    render={props => <AuthTransitionComponent {...{...rest, ...props}}><Component {...props} /></AuthTransitionComponent>}
  />
);
/* tslint:enable */

export default AuthRoute;
