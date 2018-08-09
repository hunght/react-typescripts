import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import TestContainer from '../../testUtils';

describe('components/TopicPage', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component topic={{ data: {} }} />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
