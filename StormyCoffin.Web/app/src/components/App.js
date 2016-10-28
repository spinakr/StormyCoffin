import React, { Component, PropTypes } from 'react';
import InventoryListContainer from './InventoryListContainer';
import NewItemContainer from './NewItemContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Stormy Coffin</h1>
        <NewItemContainer />
        <InventoryListContainer />
      </div>
        );
  }
}

App.propTypes = {

};

export default App;
