import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';

describe('components/TableHeader', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(<Component items={[]} />);
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
