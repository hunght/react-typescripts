import { compose, withHandlers } from 'recompose';
import withAdmin from '../../../store/reducers/admin';
import View from './view';

const enhance = compose(
  withAdmin,
  withHandlers({
    onClick: ({ adminActions }: { adminActions: any }) => adminActions.logout
  })
);

const UserMenu = enhance(View);

export default UserMenu;
