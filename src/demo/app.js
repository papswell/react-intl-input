import React, { Component } from 'react';

import BasicExample from './basic';
import CustomRendering from './custom-rendering';
import ReduxIntegration from './redux-integration';
import SyncSelection from './sync-selection';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BasicExample />
        <CustomRendering />
        <ReduxIntegration />
        <SyncSelection />
      </div>
    );
  }
}

export default App;
