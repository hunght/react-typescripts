import * as React from 'react';
import { mount } from 'enzyme';
import Component from '.';
import TestContainer from '../../../../testUtils';

describe('components/TopicResponses', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component topic={{ data: {} }} />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
