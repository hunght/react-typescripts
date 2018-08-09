import * as React from 'react';
import { compose, withHandlers, lifecycle } from 'recompose';
import withResponse from '../../../../store/reducers/response';
import View, { TopicResponseAddFormInterface } from './view';

export const enhancer = compose(
  withResponse,
  lifecycle({
    componentDidMount: function() {
      (this.props as any).responseActions.clearResponse();
    }
  }),
  withHandlers({
    onChange: ({ responseActions }: { responseActions: any }) =>
      responseActions.updateResponseField,
    onSubmit: ({ responseActions }: { responseActions: any }) =>
      responseActions.createResponse
  })
);

const TopicResponseAddForm: React.ComponentClass<
  TopicResponseAddFormInterface
> = enhancer(View);

export default TopicResponseAddForm;
