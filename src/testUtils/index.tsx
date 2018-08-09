import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReduxContainer from '../store';
import { store } from '../store';
export { store };

const TestContainer = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ReduxContainer>{children}</ReduxContainer>
  </BrowserRouter>
);
export default TestContainer;
