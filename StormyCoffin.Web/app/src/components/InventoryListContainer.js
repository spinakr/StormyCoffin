import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import InventoryList from './InventoryList';

class InventoryListContainer extends Component {
  render() {
    return (
      <InventoryList items={this.props.items} />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

InventoryListContainer.propTypes = {
  items: PropTypes.array,
};

export default connect(mapStateToProps)(InventoryListContainer);
