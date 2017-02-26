import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HighScoreComponent from '../components/highScoreComponent';
import { getHighScores } from '../modules/highScore';

class HighScoreContainer extends Component {
  componentDidMount() {
    this.props.getHighScores();
  }

  render() {
    const style = {
      border: '3px solid red',
      marginTop: '10px',
      padding: '10px',
    };

    return (
      <div style={style}>
        <HighScoreComponent scores={this.props.scores} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.highScore.scores,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getHighScores: bindActionCreators(getHighScores, dispatch),
  };
};

HighScoreContainer.propTypes = {
  scores: PropTypes.any,
  getHighScores: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HighScoreContainer);
