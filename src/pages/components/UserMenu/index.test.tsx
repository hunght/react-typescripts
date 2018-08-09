import * as React from 'react';
import { mount } from 'enzyme';
import Component from './index';
import TestContainer from '../../../testUtils';
import { store } from '../../../testUtils';
import { Admin } from '../../../store/reducers/admin/actions';

describe('components/UserMenu', () => {
  it('renders without crashing', () => {
    let renderedComponent = mount(
      <TestContainer>
        <Component />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).length).toBe(1);
  });
  it('render Log out element', () => {
    store.dispatch({ type: Admin.UPDATE, payload: { id: 43 } });
    let renderedComponent = mount(
      <TestContainer>
        <Component />
      </TestContainer>
    );
    expect(renderedComponent.find(Component).find('div.log-out').length).toBe(
      1
    );
  });
});
