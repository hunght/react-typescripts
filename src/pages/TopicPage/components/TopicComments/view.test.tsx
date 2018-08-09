import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';
import TestContainer from '../../../../testUtils';

describe('components/TopicComments', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component topic={{ data: {}, errors: {} }} />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
