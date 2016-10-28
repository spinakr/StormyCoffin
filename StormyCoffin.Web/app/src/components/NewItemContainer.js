import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NewItem from './NewItemComponent';

class NewItemContainer extends Component {
  handleNewItemAdded() {
    this.props.dispatch({
      type: 'NEW_ITEM_ADDED',
      payload: {
        newItem: this.props.newItem,
      },
    });
  }
  handleItemInputChanged(name) {
    this.props.dispatch({
      type: 'ITEM_INPUT_NAME_CHANGED',
      payload: {
        name,
      },
    });
  }
  render() {
    return (
      <NewItem
        handleNewItemAdded={this.handleNewItemAdded.bind(this)}
        handleItemInputChanged={this.handleItemInputChanged.bind(this)}
        newItem={this.props.newItem}
      />
    );
  }
}

const mapStateToProps = state => ({
  newItem: state.newItem,
});

NewItemContainer.propTypes = {
  dispatch: PropTypes.func,
  newItem: PropTypes.object,
};

export default connect(mapStateToProps)(NewItemContainer);
