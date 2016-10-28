import React, { Component, PropTypes } from 'react';

class NewItem extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.newItem.name}
          onChange={event => this.props.handleItemInputChanged(event.target.value)}
        />
        <button onClick={this.props.handleNewItemAdded.bind(this)}>Add item</button> &nbsp;

      </div>
    );
  }
}

NewItem.propTypes = {
  handleNewItemAdded: PropTypes.func,
  handleItemInputChanged: PropTypes.func,
  newItem: PropTypes.object,
};

export default NewItem;
