import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import TestContainer from '../../../../testUtils';

describe('components/TopicDetailInfo', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component topic={{ data: {} }} match={{ params: '' }} />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
