import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import withResponse from '../../../../store/reducers/response';
import View, { ResponseCommentsInterface } from './view';

export const enhancer = compose(
  withRouter,
  withResponse
);

const ResponseComments: React.ComponentClass<
  ResponseCommentsInterface
> = enhancer(View);

export default ResponseComments;
