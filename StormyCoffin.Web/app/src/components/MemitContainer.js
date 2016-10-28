import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LightGroupComponent from './LightGroupComponent';

class MemitContainer extends Component {
  render() {
    return (
      <LightGroupComponent signalLights={this.props.signalLights} />
    );
  }
}

const mapStateToProps = state => ({
  signalLights: state.signalLights,
});

MemitContainer.propTypes = {
  signalLights: PropTypes.array,
};

export default connect(mapStateToProps)(MemitContainer);
