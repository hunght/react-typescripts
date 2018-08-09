import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import reducer from './reducers';
import sagas from './reducers/sagas';

const saga = createSagaMiddleware();

const middleware = [thunk, saga];
// if (process.env.NODE_ENV !== 'production') {
// 	middleware.push(createLogger())
// }

export const store = createStore(reducer, applyMiddleware(...middleware));

saga.run(sagas);

// if (process.env.NODE_ENV !== 'production') {
store.subscribe(() => console.log('getState', store.getState()));
// }

interface AppContainerInterface {
  children?: React.ReactNode;
}

const AppContainer: React.SFC<AppContainerInterface> = ({
  children
}: AppContainerInterface) => <Provider store={store}>{children}</Provider>;

export default AppContainer;
