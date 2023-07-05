import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResetKeyButton.module.css';

const ResetKeyButton = ({ onClick }) => {
  return (
    <button id="reset-key-button" className={styles.button} onClick={onClick}>
      Mudar API Key
    </button>
  );
};

ResetKeyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetKeyButton;