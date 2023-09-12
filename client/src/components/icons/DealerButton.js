import React from 'react';
import PropTypes from 'prop-types';
import dealerImg from '../../assets/game/dealer-button.svg';

const DealerButton = ({ width, height }) => (
  <img width={width} height={height} src={dealerImg} />
);

DealerButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

DealerButton.defaultProps = {
  width: '40px',
  height: '40px',
};

export default DealerButton;