import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import withTopic from '../../../../store/reducers/topic';
import View, { TopicResponsesInterface } from './view';

export const enhancer = compose(
  withRouter,
  withTopic
);

const CompanyProfile: React.ComponentClass<TopicResponsesInterface> = enhancer(
  View
);

export default CompanyProfile;
