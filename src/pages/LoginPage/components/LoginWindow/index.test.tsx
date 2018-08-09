import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';
import TestContainer from '../../../../testUtils';

describe('pages/LoginWindow', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component adminStore={{ loading: false }} />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
