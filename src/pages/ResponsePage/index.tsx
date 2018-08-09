import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle, withHandlers } from 'recompose';
import withResponse from '../../store/reducers/response';
import View, { ResponsePageInterface } from './view';

const enhancer = compose<any, any>(
  withRouter,
  withResponse,
  lifecycle({
    componentDidMount: function(this: any) {
      let {
        responseActions,
        match: {
          params: { id }
        }
      } = this.props;
      responseActions.clearResponse();
      if (id) {
        responseActions.getResponse(id);
      } else {
        // TODO: throw exception
      }
    }
  }),
  withHandlers({
    onSubmit: ({ responseActions }: { responseActions: any }) =>
      responseActions.updateResponse
  })
);

const ResponsePage: React.ComponentClass<ResponsePageInterface> = enhancer(
  View
);

export default ResponsePage;
