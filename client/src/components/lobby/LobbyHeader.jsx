import React from 'react';

const LobbyHeader = (props) => {
  const { 
    switchContent
  } = props;
  return(
      <div className="lobby-header">
        <div className="panel lobby-logo" />
        <div className="bottom-shadow" />
        <div className="info-holder">
          <div className="lobby-info">
            <div className="lobby-info-item players">
              <div className="value"> 159</div>
              <div className="label"> players</div>
            </div>
            <div className="lobby-info-item active-tables">
              <div className="value"> 72</div>
              <div className="label"> tables</div>
            </div>
            <div className="lobby-info-item active-tournaments">
              <div className="value"> 7</div>
              <div className="label"> tournaments</div>
            </div>
          </div>
        </div>
        <div className="mini-profile-holder">
          <div className="mini-profile-container">
            <div className="panel avatar gender-male" />
            <div className="profile-name-block">
              <div className="panel profile-name">
                <div className="mini-profile-name">Player1</div>
                <div className="mini-profile-status">New Seal</div>
              </div>
            </div>
            <div className="mini-profile-fields">
              <div className="mini-profile-field currency-CHIPS">
                <div className="mini-profile-field-icon uBTC" />
                <div className="panel mini-profile-field-value uBTC">0</div>
              </div>
              <div className="mini-profile-field currency-KRILL">
                <div className="mini-profile-field-icon Krill" />
                <div className="panel mini-profile-field-value Krill">0</div>
              </div>
            </div>
            <div className="mini-profile-actions">
              <div className="mini-profile-button account">
                <div
                  className="panel simple-button gray-button mini-profile-cashier-button"
                  tabIndex={0}
                >
                  <div className="simple-button-content" onClick={() => switchContent('accountinfo')}>Account</div>
                </div>
              </div>
              <div className="mini-profile-button cashier">
                <div
                  className="panel simple-button gray-button mini-profile-cashier-button"
                  tabIndex={0}
                >
                  <div className="simple-button-content" onClick={() => switchContent('cashier')}>Cashier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jackpot-holder" />
        <div className="panel button full-screen-button">
          <div className="button-content" />
        </div>
      </div>
  )
}

export default LobbyHeader;