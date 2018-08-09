import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import TestContainer from '../../../testUtils';

describe('components/Sidebar', () => {
  it('test recompose', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
