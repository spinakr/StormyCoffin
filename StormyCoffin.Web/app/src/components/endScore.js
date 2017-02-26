import React, { PropTypes } from 'react';
import Radium from 'radium';

const endScore = ({ score, modalActive, handleSubmit }) => {
  const modal = [
    modalActive ? 'block' : { display: 'none' },
    {
      position: 'fixed',
      zIndex: '1',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
    }];

  const modalContent = {
    backgroundColor: '#fefefe',
    margin: '15% auto', /* 15% from the top and centered */
    padding: '30px',
    border: '1px solid #888',
    width: '30%', /* Could be more or less, depending on screen size */
  };

  const submitButton = [{
    backgroundColor: '#768d87',
    borderRadius: '5px',
    border: '1px solid #566963',
    margin: '20px',
    fontFamily: 'Arial',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: '11px 23px',
    ':hover': {
      backgroundColor: '#6c7c7c',
    },
  }];

  return (
    <div style={modal}>
      <div style={modalContent}>
        <p>Score: {score.playerScore}</p>
        <p>Level Reached: {score.gameLevel}</p>
        <p>Time Score: {score.totalTimeSpentRecalling}</p>

        <button style={submitButton} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

endScore.propTypes = {
  score: PropTypes.object,
  modalActive: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default new Radium(endScore);
