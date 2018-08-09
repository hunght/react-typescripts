import * as React from 'react';
import { mount } from 'enzyme';
import Component from '.';

describe('components/TableTitle', () => {
  it('renders without crashing', () => {
    const renderedComponent = mount(<Component title={``} />);
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
