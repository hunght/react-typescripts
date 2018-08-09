import * as React from 'react';
import { shallow } from 'enzyme';
import Component from './authenticated';

describe('AuthRoute', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });
});
