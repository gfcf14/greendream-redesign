import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import {
  AppPreview,
  HomePage,
  NotFound,
  ProfilePage,
  TutorialPreview,
} from 'components';
import { ExternalLanding, MainLanding, PageContainer } from 'containers';
import {
  COMING_SOON_CONFIG,
  OLD_APPS,
  PREVIEW_GAMES,
  PREVIEW_PROGRAMS,
  TUTORIAL_TITLES,
} from 'utils/constants';
import { capitalizeFromLower, injectItemKey } from 'utils/helpers';
import {
  EXTERNAL_ROUTES,
  MENU_ROUTES,
  PRACTICE_PATHS,
  TRICK_PATHS,
  TUTORIAL_PATHS,
  TUTORIAL_PREVIEW_ROUTES,
} from 'utils/routes';

function renderTutorialPaths(pathList, tutorialType) {
  return Object.keys(pathList).map((languageKey) => {
    const pathArray = pathList[`${languageKey}`];

    return pathArray.map((path) => {
      const { key, value } = path;

      return (
        <Route
          key={key}
          exact
          path={`/${tutorialType}/${languageKey}/${value}`}
          render={() => (
            <MainLanding contentComponent={<PageContainer {...COMING_SOON_CONFIG} />} />
          )}
        />
      );
    });
  });
}

function renderTutorialPreviewRoutes() {
  return TUTORIAL_PREVIEW_ROUTES.map((tutPrevRoute) => {
    const { key, path } = tutPrevRoute;
    const language = path.substring(1);
    const tutorialPreviewProps = {
      titleContent: {
        title: TUTORIAL_TITLES[`${language}`],
        titleImage: language,
        order: 'reverse',
        isPreview: true,
      },
      bodyContent: {
        content: <TutorialPreview language={language} />,
      },
    };

    return (
      <Route
        key={key}
        exact
        path={`/tutorials${path}`}
        render={() => (
          <MainLanding contentComponent={<PageContainer {...tutorialPreviewProps} />} />
        )}
      />
    );
  });
}

function renderProfileRoute() {
  const profileRouteProps = {
    bodyContent: {
      content: <ProfilePage />,
    },
  };

  return (
    <Route
      exact
      path="/profile"
      render={() => (
        <MainLanding contentComponent={<PageContainer {...profileRouteProps} />} />
      )}
    />
  );
}

function renderExternalRoutes() {
  return EXTERNAL_ROUTES.map(route => (
    <Route
      exact
      path={route.path}
      component={ExternalLanding}
      key={route.key}
    />
  ));
}

function renderOldAppRoutes() {
  return Object.keys(OLD_APPS).map(key => (
    OLD_APPS[`${key}`].map((oldApp) => {
      const { name, component } = oldApp;

      return (
        <Route
          exact
          path={`/${key}/${name}/${name}`}
          component={component}
        />
      );
    })
  ));
}

function renderPreviewRoutes(startingPath, appArray) {
  return appArray.map(injectItemKey).map((app) => {
    const { path, title, key } = app;

    let tableName = startingPath.substring(1, startingPath.length - 1);
    tableName = capitalizeFromLower(tableName);

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
        {renderExternalRoutes()}
        {renderProfileRoute()}
        {renderTutorialPreviewRoutes()}
        {renderTutorialPaths(PRACTICE_PATHS, 'practice')}
        {renderTutorialPaths(TRICK_PATHS, 'tricks')}
        {renderTutorialPaths(TUTORIAL_PATHS, 'tutorials')}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
