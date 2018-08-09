import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';
import TestContainer from '../../testUtils';

describe('components/ListTopics', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component topics={{ data: [] }} />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
