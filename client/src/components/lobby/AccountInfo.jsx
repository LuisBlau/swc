import React, { useState, useEffect, useContext } from 'react';
import globalContext from '../../context/global/globalContext';
const AccountInfo = (props) => {
  const { 
    onNavigate
  } = props;
  const { chipsAmount, userName, email } = useContext(globalContext);

  return(
    <div className="lobby-content">
      <div className="page lobby-page page-forward">
        <div>
          <div className="page-content change-page-enter-done">
            <div className="lobby-account-info-container">
              <div className="navigation-panel title">
                <div className="navigation-panel-content">
                  <div className="navigation-panel-title">Account Information</div>
                </div>
              </div>
              <div className="panel lobby-page-content">
                <div
                  className="scroll-panel"
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    touchAction: "none"
                  }}
                >
                  <div
                    className="scroll-wrapper"
                    style={{ transform: "translate(0px, 0px) translateZ(0px)" }}
                  >
                    <div className="account-info-personal">
                      <div className="account-info-sub-title">Personal Info</div>
                      <div className="account-info-data-panel personal-info">
                        <div className="account-info-field">
                          <div className="account-info-field-label">Nick:</div>
                          <div className="account-info-field-value">{userName}</div>
                        </div>
                        <div className="account-info-field">
                          <div className="account-info-field-label">E-mail:</div>
                          <div className="account-info-field-value">
                            {email}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="account-info-status">
                      <div className="account-info-sub-title">Account Status</div>
                      <div className="account-info-data-panel rating-block">
                        <div className="account-info-data-panel-title">
                          Rating Info
                        </div>
                        <div className="rating-panel">
                          <div className="rating-item" />
                          <div className="rating-item" />
                          <div className="rating-item" />
                          <div className="rating-item" />
                          <div className="rating-item empty" />
                        </div>
                        {/* <div className="account-info-field">
                          <div className="account-info-field-label">
                            Krill Wave:
                          </div>
                          <div className="account-info-field-value">New Seal</div>
                        </div> */}
                      </div>
                      <div className="account-info-data-panel money-block real-money-block">
                        <div className="currency-list">
                          <div className="account-info-field currency CHIPS">
                            <div className="account-info-field-label">uBTC</div>
                            <div className="account-info-field-value">{chipsAmount}</div>
                          </div>
                          {/* <div className="account-info-field currency BCHCHIPS">
                            <div className="account-info-field-label">uBCH</div>
                            <div className="account-info-field-value">0</div>
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="account-info-data-panel money-block currencies-block">
                        <div className="currency-list">
                          <div className="account-info-field currency KRILL">
                            <div className="account-info-field-label">Krill</div>
                            <div className="account-info-field-value">0</div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div
                    className="iScrollVerticalScrollbar iScrollLoneScrollbar show-hide-scrollbar-animation"
                    style={{
                      position: "absolute",
                      zIndex: 9999,
                      width: 7,
                      bottom: 2,
                      top: 2,
                      right: 1,
                      overflow: "hidden",
                      pointerEvents: "none",
                      transform: "translateZ(0px)",
                      transitionDuration: "0ms",
                      opacity: 0
                    }}
                  >
                    <div
                      className="iScrollIndicator"
                      style={{
                        boxSizing: "border-box",
                        position: "absolute",
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "1px solid rgba(255, 255, 255, 0.9)",
                        borderRadius: 3,
                        width: "100%",
                        transitionDuration: "0ms",
                        display: "none",
                        height: 516,
                        transform: "translate(0px, 0px) translateZ(0px)"
                      }}
                    />
                  </div>
                </div>
                <div className="top-shadow" />
                <div className="bottom-shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-button-holder">
        <div className="panel button lobby-menu-button">
          <div className="button-content" />
        </div>
      </div>
      <div className="panel side-overlay" />
    </div>
  )
}
export default AccountInfo;