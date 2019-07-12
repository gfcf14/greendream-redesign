import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { AppPreview, HomePage, NotFound } from 'components';
import { MainLanding, PageContainer } from 'containers';
import { OLD_APPS, PREVIEW_GAMES, PREVIEW_PROGRAMS } from 'utils/constants';
import { injectItemKey } from 'utils/helpers';
import { MENU_ROUTES } from 'utils/routes';

function renderOldAppRoutes() {
  return Object.keys(OLD_APPS).map(key => (
    OLD_APPS[`${key}`].map((oldApp) => {
      const { name, component } = oldApp;

      return (
        <Route
          exact
          path={`/${key}/${name}/${name}`}
          render={() => component}
        />
      );
    })
  ));
}

function renderPreviewRoutes(startingPath, appArray) {
  return appArray.map(injectItemKey).map((app) => {
    const { path, title, key } = app;

    let tableName = startingPath.substring(1, startingPath.length - 1);
    tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

    const appPreviewProps = {
      rowName: path,
      rowTitle: title,
      tableName,
    };

    const previewRouteProps = {
      titleContent: {
        title,
        titleImage: path,
        order: 'reverse',
        isPreview: true,
      },
      bodyContent: {
        content: <AppPreview {...appPreviewProps} />,
      },
    };

    return (
      <Route
        key={key}
        exact
        path={`${startingPath}${path}`}
        render={() => (
          <MainLanding contentComponent={<PageContainer {...previewRouteProps} />} />
        )}
      />
    );
  });
}

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

export function RootRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" render={() => <MainLanding contentComponent={<HomePage />} />} />
        {renderRoutes()}
        {renderPreviewRoutes('/programs/', PREVIEW_PROGRAMS)}
        {renderPreviewRoutes('/games/', PREVIEW_GAMES)}
        {renderOldAppRoutes()}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
