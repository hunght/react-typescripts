import * as React from 'react';
import styled from 'styled-components';
import TableSortButton from '../TableSortButton';
import TableTitle from '../../elements/TableTitle';
import CellRow from '../../elements/CellRow';

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
`;

export interface TableHeaderInterface {
  onChange?: any;
  items?: any;
  className?: any;
  selectedSort?: any;
  setSelectedSort?: any;
  children?: React.ReactNode;
}

const TableHeader = ({
  items,
  className,
  onChange,
  selectedSort,
  setSelectedSort
}: TableHeaderInterface) => {
  return (
    <Wrapper className={className}>
      {items.map((headerProps: any, index: any) => (
        <CellRow key={index}>
          {headerProps.sort ? (
            <TableSortButton
              onChange={(name: any, asc: any) => setSelectedSort({ name, asc })}
              selected={selectedSort && headerProps.name === selectedSort.name}
              asc={
                selectedSort && headerProps.name === selectedSort.name
                  ? selectedSort.asc
                  : true
              }
              {...headerProps}
            />
          ) : (
            <TableTitle>{headerProps.label}</TableTitle>
          )}
        </CellRow>
      ))}
    </Wrapper>
  );
};

export default TableHeader;
