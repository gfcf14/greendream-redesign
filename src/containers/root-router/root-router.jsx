import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { NotFound } from 'components';

export const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

