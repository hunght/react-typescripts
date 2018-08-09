import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, withPropsOnChange, withState, withHandlers } from 'recompose';
import View, { TopicTableInterface } from './view';
import withTopic from '../../../../store/reducers/topic';

export const enhancer = compose(
  withRouter,
  withTopic,
  withState('sort', 'setSort', null),
  withPropsOnChange(['sort'], ({ sort, items }) => {
    if (sort && sort.name === '_id') {
      items.sort((a: any, b: any) => a._id - b._id);
    }
    if (sort && !sort.asc) {
      items.reverse();
    }
    return items;
  }),
  withHandlers({
    onDelete: ({ topicActions }: { topicActions: any }) =>
      topicActions.deleteTopic
  })
);

const TopicTable: React.ComponentClass<TopicTableInterface> = enhancer(View);

export default TopicTable;
