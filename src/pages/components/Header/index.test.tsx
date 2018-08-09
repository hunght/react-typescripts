import * as React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('components/Header', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });
});
