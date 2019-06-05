import React, { Fragment } from 'react';
import { NotFound } from 'components';
import { RootHelmet } from 'containers';
import './app.scss';

function App() {
  return (
    <Fragment>
      <RootHelmet />
      <NotFound />
    </Fragment>
  );
}

export default App;
