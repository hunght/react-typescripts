import * as React from 'react';
import Block from '../../../elements/Block';
import ResponseCommentTable from './components/ResponseCommentTable';
import TableTitle from '../../../components/TableTitle';

export interface ResponseCommentsInterface {
  response?: any;
  children?: React.ReactNode;
}

const ResponseComments = ({
  response: {
    data: { comments },
    loading
  }
}: ResponseCommentsInterface) => {
  return (
    <Block data-direction="column">
      <TableTitle title={`Comments`} />
      {!loading && comments && comments.length ? (
        <ResponseCommentTable items={comments} />
      ) : (
        ''
      )}
    </Block>
  );
};
export default ResponseComments;
