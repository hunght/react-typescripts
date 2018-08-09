import * as React from 'react';
import { compose, withPropsOnChange, withState } from 'recompose';
import View, { TableHeaderInterface } from './view';

const enhancer = compose(
  withState('selectedSort', 'setSelectedSort', null),
  withPropsOnChange(
    ['selectedSort'],
    ({ selectedSort, onChange }: { selectedSort: any; onChange: any }) => {
      if (typeof onChange === 'function') {
        onChange(selectedSort);
      }
      return { selectedSort };
    }
  )
);

const TableHeader: React.ComponentClass<TableHeaderInterface> = enhancer(View);

export default TableHeader;
