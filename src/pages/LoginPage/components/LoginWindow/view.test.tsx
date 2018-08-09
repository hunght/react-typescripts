import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';

describe('components/LoginWindow', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(
      <Component adminStore={{ loading: false }} />
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
