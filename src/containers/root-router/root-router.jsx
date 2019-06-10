import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { NotFound } from 'components';
import { MainLanding } from 'containers';

function renderRoutes() {
  return (
    <Route exact path="/" component={MainLanding} />
  );
}

export const RootRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {renderRoutes()}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

