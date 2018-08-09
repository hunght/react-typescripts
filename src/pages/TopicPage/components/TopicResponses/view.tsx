import * as React from 'react';
import Block from '../../../elements/Block';
import TopicResponseTable from './components/TopicResponseTable';
import TableTitle from '../../../components/TableTitle';

export interface TopicResponsesInterface {
  topic?: any;
  children?: React.ReactNode;
}

const TopicResponses = ({
  topic: {
    data: { responses },
    loading
  }
}: TopicResponsesInterface) => {
  return (
    <Block data-direction="column">
      <TableTitle title={`Responses`} />
      {!loading && responses && responses.length ? (
        <TopicResponseTable items={responses} />
      ) : (
        ''
      )}
    </Block>
  );
};
export default TopicResponses;
