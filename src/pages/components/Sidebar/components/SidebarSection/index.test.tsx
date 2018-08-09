import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import { topicsSection } from '../../index';

describe('components/SidebarSection', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(<Component points={[]} />);
    expect(renderedComponent.find(Component).length).toBe(1);
  });

  it('render Topics section', () => {
    const renderedComponent = mount(
      <Component title="Topics" points={topicsSection} />
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
