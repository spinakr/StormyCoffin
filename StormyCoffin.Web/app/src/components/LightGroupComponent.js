import React, { Component, PropTypes } from 'react';

class LightGroupComponent extends Component {
  render() {
    const style = (color) => {
      return {
        backgroundColor: color ? '#4CAF50' : '#008CBA',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
      };
    };
    return (
      <div>
        {this.props.signalLights.map((signal, index) => {
          return (
            <button style={style(index % 2 === 0)} key={index}>
              {index}
            </button>
          );
        })}
      </div>
    );
  }
}

LightGroupComponent.propTypes = {
  signalLights: PropTypes.array,
};

export default LightGroupComponent;
