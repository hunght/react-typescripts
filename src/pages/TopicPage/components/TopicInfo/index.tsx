import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import withTopic from '../../../../store/reducers/topic';
import View, { TopicInfoInterface } from './view';

export const enhancer = compose(
  withTopic,
  withRouter
);

const TopicInfo: React.ComponentClass<TopicInfoInterface> = enhancer(View);

export default TopicInfo;
