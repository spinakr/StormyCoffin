import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';

class AppContainer extends Component {
  render() {
    return <App />;
  }
}

export default connect()(AppContainer);
