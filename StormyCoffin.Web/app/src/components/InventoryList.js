import React, { Component, PropTypes } from 'react';

class InventoryList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => {
            return (<li key={index}> {item.name} </li>);
          })}
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
        );
  }
}

InventoryList.propTypes = {
  items: PropTypes.array,
};

export default InventoryList;
