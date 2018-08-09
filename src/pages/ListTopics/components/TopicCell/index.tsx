import * as React from 'react';
import Cell from '../../../components/Cell';
import CellRow from '../../../elements/CellRow';
import CellText from '../../../elements/CellText';
import CellLink from '../../../elements/CellLink';
import Indent from '../../../elements/Indent';
export interface TopicCellInterface {
  onDelete?: any;
  _id?: any;
  name?: any;
  className?: any;
  subject?: any;
  history?: any;
  children?: React.ReactNode;
}
const TopicCell = ({
  onDelete,
  _id,
  name,
  className,
  subject,
  history
}: TopicCellInterface) => (
  <Cell className={className}>
    <Indent width="10px" />
    <CellRow>
      <CellText>{name}</CellText>
    </CellRow>
    <CellRow>
      <CellText>{subject}</CellText>
    </CellRow>
    <CellRow>
      <CellLink onClick={() => history.push(`/topic/${_id}`)}>More</CellLink>
    </CellRow>
    <CellRow>
      <CellLink onClick={(event: any) => onDelete(_id)}>Delete</CellLink>
    </CellRow>
  </Cell>
);
export default TopicCell;
