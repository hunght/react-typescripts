import * as React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('pages/LoginPage', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });
});
