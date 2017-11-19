import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import BasicExample from './basic';
import CustomInputExample from './custom-input';
import CustomRendering from './custom-rendering';
import ReduxIntegration from './redux-integration';
import SyncSelection from './sync-selection';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid>
          <BasicExample />
          <CustomInputExample />
          <CustomRendering />
          <ReduxIntegration />
          <SyncSelection />
        </Grid>
      </div>
    );
  }
}

export default App;
