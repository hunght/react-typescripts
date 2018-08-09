import * as React from 'react';
import Cell from '../../../../../components/Cell';
import CellRow from '../../../../../elements/CellRow';
import CellText from '../../../../../elements/CellText';
import Indent from '../../../../../elements/Indent';

export interface ResponseCommentCellInterface {
  _id?: any;
  content?: any;
  className?: any;
  creator?: any;
  children?: React.ReactNode;
}
const ResponseCommentCell = ({
  _id,
  content,
  className,
  creator
}: ResponseCommentCellInterface) => (
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
export default ResponseCommentCell;
