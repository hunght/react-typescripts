import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';

describe('components/TableHeader', () => {
  it('test recompose', () => {
    const renderedComponent = mount(
      <Component items={[]} onChange={() => ''} />
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
