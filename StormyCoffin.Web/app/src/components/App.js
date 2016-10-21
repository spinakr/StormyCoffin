import React, {Component, PropTypes} from 'react';
import InventoryListContainer from './InventoryListContainer';

class App extends Component {
    render() {
         return (
             <div>
                <h1>Stormy Coffin</h1>
                <InventoryListContainer />
            </div>
        );
    }
}

App.propTypes = {
    
};

export default App;