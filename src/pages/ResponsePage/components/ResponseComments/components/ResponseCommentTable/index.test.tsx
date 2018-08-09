import * as React from 'react';
import { mount } from 'enzyme';
import Component from '.';
import TestContainer from '../../../../../../testUtils';

describe('pages/components/ResponseCommentTable', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component items={[]} />
      </TestContainer>
    );

    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
