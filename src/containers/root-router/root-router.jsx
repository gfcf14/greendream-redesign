import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { NotFound } from 'components';
import { MainLanding } from 'containers';

function renderRoutes() {
  return (
    <Route component={MainLanding} />
  );
}

export const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      {renderRoutes()}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

