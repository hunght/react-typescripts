import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import TestContainer from '../../testUtils';

require('../../testUtils/__mocks__/sessionstorage');

describe('components/ListTopics', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
