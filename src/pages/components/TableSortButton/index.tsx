import * as React from 'react';
import styled from 'styled-components';
import TableTitle from '../../elements/TableTitle';
import arrowIcon from '../../../assets/images/icons/i-os-cheveron-back-button-copy@2x.png';
import { Colors } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const ArrowIcon = styled.img`
  display: flex;
  width: 12px;
  height: 7px;
  padding: 5px;
  transform: rotate(${props => (props['data-asc'] ? `180deg` : 0)});
  box-sizing: content-box;
`;

const Title = TableTitle.extend`
  color: ${props =>
    props['data-selected'] ? Colors.BLUE : Colors.MEDIUM_GREY};
`;

export interface TableSortButtonInterface {
  name?: string;
  label?: string;
  onChange?: any;
  asc?: any;
  setAsc?: any;
  selected?: boolean;
}

const TableSortButton = ({
  name,
  label,
  onChange,
  asc,
  setAsc,
  selected
}: TableSortButtonInterface) => (
  <Wrapper
    className="input-field-component"
    onClick={() => onChange(name, !asc)}
  >
    <Title data-selected={selected}>{label}</Title>
    <ArrowIcon data-asc={asc} src={arrowIcon} alt="change-sort" />
  </Wrapper>
);

export default TableSortButton;
