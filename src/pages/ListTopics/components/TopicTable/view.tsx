import * as React from 'react';
import styled from 'styled-components';
import TopicCell from '../TopicCell';
import TableHeader from '../../../components/TableHeader';

const tableHeaders = [
  { name: 'name', label: 'Name' },
  { name: 'subject', label: 'Subject' },
  { label: '' },
  { label: '' }
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Cell = styled(TopicCell)`
  margin: 10px 0;
  display: flex;
  box-sizing: border-box;
`;

export interface TopicTableInterface {
  onDelete?: any;
  items?: any;
  sort?: any;
  setSort?: any;
  history?: any;
  children?: React.ReactNode;
}

const TopicTable = ({
  onDelete,
  items,
  sort,
  setSort,
  history
}: TopicTableInterface) => (
  <Wrapper>
    <TableHeader items={tableHeaders} onChange={setSort} />
    {items.map((cellProps: any, index: any) => (
      <Cell history={history} onDelete={onDelete} key={index} {...cellProps} />
    ))}
  </Wrapper>
);

export default TopicTable;
