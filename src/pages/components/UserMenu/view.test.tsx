import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';

describe('components/UserMenu', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(
      <Component adminStore={{ user: { id: 43 } }} />
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
