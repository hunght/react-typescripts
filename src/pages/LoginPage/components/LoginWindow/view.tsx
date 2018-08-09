import * as React from 'react';
import styled from 'styled-components';
import Title from '../../../elements/Title';
import Window from '../../../elements/Window';
import InputField from '../../../components/InputField';
import Button from '../../../elements/Button';
import loading from '../../../../assets/oval.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .login-window {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Inputs = styled.div`
  width: ${props => (props['data-is-mobile-view'] ? '80%' : '300px')};
`;

const LoginTitle = styled(Title)`
  height: 30px;
  justify-content: center;
`;
const LoginButton = styled(Button)`
  position: relative;
  top: -40px;
`;

const ErrorWindow = styled(Window)`
  height: auto;
  color: #fb5b62;
  padding: 15px 30px;
  text-align: center;
`;

const emailIcon = (
  <img
    width={20}
    height={16}
    alt="email-icon"
    src={require('../../../../assets/images/icons/input/email-icon@2x.png')}
  />
);
const lockIcon = (
  <img
    width={17}
    height={20}
    alt="lock-icon"
    src={require('../../../../assets/images/icons/input/lock-icon@2x.png')}
  />
);

interface LoginWindowPropsType {
  title?: string;
  email?: string;
  isMobileView?: boolean;
  password?: string;
  onSubmit?: any;
  setEmail?: any;
  setPassword?: any;
  children?: React.ReactNode;
  illustration?: React.ReactNode;
  disableVerification?: any;
  error?: string;
  adminStore?: any;
}

const LoginWindow: React.SFC<LoginWindowPropsType> = ({
  title = 'Welcome Back',
  isMobileView,
  email = '',
  password = '',
  setEmail,
  setPassword,
  disableVerification,
  onSubmit,
  adminStore
}: LoginWindowPropsType) => (
  <Wrapper>
    <LoginTitle>{title}</LoginTitle>
    <Window className="login-window" width={isMobileView ? '100vw' : '696px'}>
      <Inputs data-is-mobile-view={isMobileView}>
        <InputField
          type="text"
          value={email}
          onChange={setEmail}
          icon={emailIcon}
          label="Email Address"
        />
        <InputField
          type="password"
          value={password}
          onChange={setPassword}
          icon={lockIcon}
          label="Password"
        />
      </Inputs>
    </Window>
    <LoginButton onClick={() => onSubmit(email, password)}>
      {adminStore.loading && <img src={loading} />}
      {!adminStore.loading && <span>Submit</span>}
    </LoginButton>
    {adminStore.error && (
      <ErrorWindow
        className="error-login-window"
        width={isMobileView ? '100vw' : '675px'}
      >
        {adminStore.error}
      </ErrorWindow>
    )}
  </Wrapper>
);

export default LoginWindow;
