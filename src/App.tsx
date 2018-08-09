import * as React from 'react';
import styled from 'styled-components';
import Header from './pages/components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReduxContainer from './store';
import AuthRoute from './authenticated';
import ListTopics from './pages/ListTopics';
import TopicPage from './pages/TopicPage';
import ResponsePage from './pages/ResponsePage';
import './App.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 700px;
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ReduxContainer>
          <Route
            render={({ location }) => (
              <Wrapper>
                <Header />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={250}
                  >
                    <Switch location={location}>
                      <AuthRoute exact={true} path="/" component={ListTopics} />
                      <AuthRoute
                        exact={true}
                        path="/topics"
                        component={ListTopics}
                      />
                      <AuthRoute
                        exact={true}
                        path="/topic/:id"
                        component={TopicPage}
                      />
                      <AuthRoute
                        exact={true}
                        path="/topic/:id/:edit"
                        component={TopicPage}
                      />
                      <AuthRoute
                        exact={true}
                        path="/response/:id"
                        component={ResponsePage}
                      />
                      <AuthRoute
                        exact={true}
                        path="/response/:id/:edit"
                        component={ResponsePage}
                      />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </Wrapper>
            )}
          />
        </ReduxContainer>
      </BrowserRouter>
    );
  }
}

export default App;
