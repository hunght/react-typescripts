import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import withResponse from '../../../../store/reducers/response';
import View, { ResponseInfoInterface } from './view';

export const enhancer = compose(
  withResponse,
  withRouter
);

const ResponseInfo: React.ComponentClass<ResponseInfoInterface> = enhancer(
  View
);

export default ResponseInfo;
