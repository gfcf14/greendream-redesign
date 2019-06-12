import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { HomePage, NotFound } from 'components';
import { MainLanding } from 'containers';
import { MENU_ROUTES } from 'utils/routes';

function renderRoutes() {
  return MENU_ROUTES.map(r => (
    <Route
      key={r.key}
      exact
      path={r.path}
      render={() => (
        <MainLanding contentComponent={r.contentComponent} />
      )}
    />
  ));
}

export const RootRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" render={() => <MainLanding contentComponent={<HomePage />} />} />
      {renderRoutes()}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

