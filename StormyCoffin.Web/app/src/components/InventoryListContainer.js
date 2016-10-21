import React, {Component} from 'react';
import {connect} from 'react-redux';
import InventoryList from './InventoryList';

class InventoryListContainer extends Component {
    handleOnInformationElementChanged(id, value) {
        this.props.dispatch({
            type: 'INFORMATION_ELEMENT_VALUE_CHANGED',
            payload: {
                id: id,
                value: value
            }
        });
    }
    render() {
        return (
            // <InventoryList policyDetails={this.props.policyDetails} onInformationElementChanged={this.handleOnInformationElementChanged.bind(this)} />
            <InventoryList />
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps)(InventoryListContainer);
