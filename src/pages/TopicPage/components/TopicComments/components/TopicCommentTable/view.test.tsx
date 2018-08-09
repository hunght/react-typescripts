import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';

describe('pages/components/TopicCommentTable', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(<Component items={[]} />);

    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
