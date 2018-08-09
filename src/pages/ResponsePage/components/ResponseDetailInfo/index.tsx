import * as React from 'react';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import withResponse from '../../../../store/reducers/response';
import View, { ResponseDetailInfoInterface } from './view';

export const enhancer = compose(
  withResponse,
  withRouter,
  withHandlers({
    onChange: ({ responseActions }: { responseActions: any }) =>
      responseActions.updateResponseField
  })
);

const ResponseDetailInfo: React.ComponentClass<
  ResponseDetailInfoInterface
> = enhancer(View);

export default ResponseDetailInfo;
