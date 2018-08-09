import * as React from 'react';
import Cell from '../../../../../components/Cell';
import CellRow from '../../../../../elements/CellRow';
import CellText from '../../../../../elements/CellText';
import Indent from '../../../../../elements/Indent';

export interface TopicCommentCellInterface {
  _id?: any;
  content?: any;
  className?: any;
  creator?: any;
  children?: React.ReactNode;
}
const TopicCommentCell = ({
  _id,
  content,
  className,
  creator
}: TopicCommentCellInterface) => (
  <Cell className={className}>
    <Indent width="30px" />
    <CellRow>
      <CellText>{_id}</CellText>
    </CellRow>
    <CellRow>
      <CellText>{content}</CellText>
    </CellRow>
    <CellRow>
      <CellText>{creator}</CellText>
    </CellRow>
  </Cell>
);
export default TopicCommentCell;
