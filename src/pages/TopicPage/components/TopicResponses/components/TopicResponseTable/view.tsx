import * as React from 'react';
import styled from 'styled-components';
import TopicResponseCell from '../TopicResponseCell';
import TableHeader from '../../../../../components/TableHeader';
import { Colors } from '../../../../../../theme';
import Button from '../../../../../elements/Button';
import Indent from '../../../../../elements/Indent';

const tableHeaders = [
  { name: '_id', label: 'ID' },
  { name: 'text', label: 'Text' },
  { label: '' }
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Cell = styled(TopicResponseCell)`
  margin: 10px 0;
  box-sizing: border-box;
`;

const LinkAll = styled(Button)`
  color: ${Colors.WHITE};
  width: 100px;
  height: 50px;
`;

const ButtonAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export interface TopicResponseTableInterface {
  items?: any;
  limit?: any;
  isShowMore?: any;
  setIsShowMore?: any;
  history?: any;
  children?: React.ReactNode;
}

const TopicResponseTable = ({
  items,
  limit,
  isShowMore,
  setIsShowMore,
  history
}: TopicResponseTableInterface) => (
  <Wrapper>
    <TableHeader items={tableHeaders} />
    {items.slice(0, limit).map((cellProps: any, index: any) => (
      <Cell history={history} key={index} {...cellProps} />
    ))}
    {limit <= items.length && (
      <ButtonAll>
        <LinkAll onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? `Hide` : `Show All`}
        </LinkAll>
      </ButtonAll>
    )}
    <Indent height="41px" />
  </Wrapper>
);

export default TopicResponseTable;
