import React from 'react';
import PropTypes from 'prop-types';
import dealerImg from '../../assets/game/dealer-button.svg';

const DealerButton = ({ width, height }) => {
  const imgStyle = {
    width: width + 'px', // Add 'px' to specify the unit
    height: height + 'px', // Add 'px' to specify the unit
  };

   return (      
      <img alt="Dealer" style={imgStyle} src={dealerImg} />
    );
}

DealerButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

DealerButton.defaultProps = {
  width: '30',
  height: '30',
};

export default DealerButton;