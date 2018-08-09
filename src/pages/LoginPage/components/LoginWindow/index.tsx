import { withRouter } from 'react-router-dom';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import withAdmin from '../../../../store/reducers/admin';
import View from './view';

const enhance = compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withAdmin,
  withRouter,
  withHandlers({
    onSubmit: ({ adminActions }: { adminActions: any }) => adminActions.login,
    onEnter: (props: any) => (event: any) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        props.adminActions.login(props.email, props.password);
      }
    }
  }),
  lifecycle<any, any>({
    componentDidMount: function() {
      window.addEventListener('keydown', this.props.onEnter);
    },
    componentWillUnmount: function() {
      window.removeEventListener('keydown', this.props.onEnter);
    }
  })
);

export default enhance(View);
