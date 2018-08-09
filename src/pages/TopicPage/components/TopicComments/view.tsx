import * as React from 'react';
import Block from '../../../elements/Block';
import TopicCommentTable from './components/TopicCommentTable';
import TableTitle from '../../../components/TableTitle';

export interface TopicCommentsInterface {
  topic?: any;
  children?: React.ReactNode;
}

const TopicComments = ({
  topic: {
    data: { comments },
    loading
  }
}: TopicCommentsInterface) => {
  return (
    <Block data-direction="column">
      <TableTitle title={`Comments`} />
      {!loading && comments && comments.length ? (
        <TopicCommentTable items={comments} />
      ) : (
        ''
      )}
    </Block>
  );
};
export default TopicComments;
