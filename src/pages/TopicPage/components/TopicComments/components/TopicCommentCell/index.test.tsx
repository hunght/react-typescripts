import * as React from 'react';
import { mount } from 'enzyme';
import Component from '.';

describe('components/TopicCommentCell', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(<Component />);
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
