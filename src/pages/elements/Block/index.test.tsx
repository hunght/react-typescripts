import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('elements/Block', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(<Component />);

    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
