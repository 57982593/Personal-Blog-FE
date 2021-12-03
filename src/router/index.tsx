import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../components/home';
import { NotFound } from '../components/basicComponts/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={ Home }/>
          <Redirect from={ '/' } to={ '/home' }/>
          <Route path={ '*' } component={ NotFound }/>
        </Switch>
      </BrowserRouter>
  );
}

export {
  App,
};
