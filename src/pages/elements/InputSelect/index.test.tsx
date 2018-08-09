import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('elements/InputSelect', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(<Component options={[]} />);
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
