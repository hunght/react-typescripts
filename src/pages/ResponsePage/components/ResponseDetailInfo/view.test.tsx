import * as React from 'react';
import { mount } from 'enzyme';
import Component from './view';
import TestContainer from '../../../../testUtils';

describe('components/ResponseDetailInfo', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component response={{ data: {}, errors: {} }} match={{ params: '' }} />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
});
