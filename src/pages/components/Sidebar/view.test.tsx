import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';
import { topicsSection } from './index';

describe('components/Sidebar', () => {
  it('render with data', () => {
    const renderedComponent = mount(
      <Component topicsSection={topicsSection} />
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
