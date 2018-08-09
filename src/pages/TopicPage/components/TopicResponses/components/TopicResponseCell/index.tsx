import * as React from 'react';
import Cell from '../../../../../components/Cell';
import CellRow from '../../../../../elements/CellRow';
import CellText from '../../../../../elements/CellText';
import CellLink from '../../../../../elements/CellLink';
import Indent from '../../../../../elements/Indent';

export interface TopicResponseCellInterface {
  _id?: any;
  text?: any;
  className?: any;
  children?: React.ReactNode;
  history?: any;
}
const TopicResponseCell = ({
  _id,
  text,
  className,
  history
}: TopicResponseCellInterface) => (
  <Cell className={className}>
    <Indent width="30px" />
    <CellRow>
      <CellText>{_id}</CellText>
    </CellRow>
    <CellRow>
      <CellText>{text}</CellText>
    </CellRow>
    <CellRow>
      <CellLink onClick={() => history.push(`/response/${_id}`)}>More</CellLink>
    </CellRow>
  </Cell>
);
export default TopicResponseCell;
