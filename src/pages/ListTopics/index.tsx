import { compose, lifecycle } from 'recompose';
import withTopics from '../../store/reducers/topics';
import View, { ListTopicInterface } from './view';

const enhance = compose(
  withTopics,
  lifecycle({
    componentDidMount: function() {
      (this.props as any).topicsActions.clearTopics();
      (this.props as any).topicsActions.getTopics();
    }
  })
);

const ListTopics: React.ComponentClass<ListTopicInterface> = enhance(View);

export default ListTopics;
