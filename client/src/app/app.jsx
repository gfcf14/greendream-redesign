import React, { Fragment } from 'react';
import { RootHelmet, RootRouter } from 'containers';
import './app.scss';

function App() {
  return (
    <Fragment>
      <RootHelmet />
      <RootRouter />
    </Fragment>
  );
}

export default App;
