import React from 'react';

const Background = (props) => {
  const { 
    onNavigate
  } = props;
  return(
    <div className="table-background-option">
      <div className="panel menu-item table-background-option-item background-default select">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-background-option-item background-2">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-background-option-item background-3">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-background-option-item background-4">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
      <div className="panel menu-item table-background-option-item background-5">
        <div className="menu-item-content">
          <div className="check-ico" />
        </div>
      </div>
    </div>
  )
}
export default Background;