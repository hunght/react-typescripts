import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, withState, withPropsOnChange } from 'recompose';
import View, { TopicResponseTableInterface } from './view';

export const enhancer = compose(
  withRouter,
  withState('limit', 'setLimit', 4),
  withState('isShowMore', 'setIsShowMore', false),
  withPropsOnChange(
    ['isShowMore'],
    ({
      isShowMore,
      setLimit,
      items
    }: {
      isShowMore: any;
      setLimit: any;
      items: any;
    }) => {
      if (!isShowMore) {
        setLimit(4);
      } else {
        setLimit(items.length);
      }
    }
  )
);

const TopicResponseTable: React.ComponentClass<
  TopicResponseTableInterface
> = enhancer(View);

export default TopicResponseTable;
