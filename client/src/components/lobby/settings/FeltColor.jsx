import React from 'react';

const FeltColor = (props) => {
  const { 
    onNavigate
  } = props;
  return(
    <div className="table-felt-option">
      <div className="panel menu-item table-felt-option-item felt-1 select">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-felt-option-item felt-2">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-felt-option-item felt-3">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-felt-option-item felt-4">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
    </div>
  )
}
export default FeltColor;