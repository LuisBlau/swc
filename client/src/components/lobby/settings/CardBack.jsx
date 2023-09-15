import React from 'react';

const CardBack = (props) => {
  const { 
    onNavigate
  } = props;
  return(
    <div className="table-card-back-option">
      <div className="panel menu-item table-card-back-option-item card-back-default">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-card-back-option-item card-back-2 select">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-card-back-option-item card-back-3">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
    </div>
  )
}
export default CardBack;