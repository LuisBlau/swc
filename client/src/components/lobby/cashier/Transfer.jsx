import React from 'react';

const Transfer = (props) => {
  return(
    <div className="pw-tab pw-cashier-transfer">
      <div
        className="scroll-panel tab-scroll"
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
          style={{
            transform: "translate(0px, 0px) translateZ(0px)",
            position: "relative"
          }}
        >
          <div className="tab-content">
            <div className="transfer-block">
              <div className="transfer-block-content">
                <div className="exchange-rate-block uBTC">
                  <div className="current-curs">
                    1 chip = 1 uBTC 1,000,000 chips = 1 BTC
                  </div>
                </div>
                <div className="transfer-method-nick">
                  <div className="header-block nick-field--header">
                    <div className="header-block-content">
                      <div className="header-block-text">Player</div>
                    </div>
                  </div>
                  <div className="field-block input-text-field nick">
                    <div className="field-value">
                      <div className="field-value-content">
                        <input
                          tabIndex={0}
                          className="input-field"
                          placeholder="Player's Username"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="error">
                      <div className="error-content" />
                    </div>
                  </div>
                </div>
                <div className="transfer-method-amount">
                  <div className="header-block amount-field--header">
                    <div className="header-block-content">
                      <div className="header-block-text">Transfer amount</div>
                    </div>
                  </div>
                  <div className="field-block input-text-field amount">
                    <div className="field-value">
                      <div className="field-value-content">
                        <input
                          tabIndex={0}
                          className="input-field"
                          placeholder="Amount"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="error">
                      <div className="error-content" />
                    </div>
                  </div>
                  <div className="transfer-amount-unit">uBTC</div>
                </div>
                <div className="player-balance-block uBTC">
                  <span>
                    <span className="field"> Available balance: </span>
                    <span className="value">0 uBTC</span>
                  </span>
                </div>
                <div className="transfer-method-password">
                  <div className="header-block password-field--header">
                    <div className="header-block-content">
                      <div className="header-block-text">Password</div>
                    </div>
                  </div>
                  <div className="field-block input-text-field password">
                    <div className="field-value">
                      <div className="field-value-content">
                        <input
                          tabIndex={0}
                          className="input-field"
                          type="password"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="error">
                      <div className="error-content" />
                    </div>
                  </div>
                </div>
                <div className="buttons-holder">
                  <div className="panel simple-button transfer-button">
                    <div className="simple-button-content">Transfer</div>
                  </div>
                </div>
                <div className="transfer-warning-text">
                  All chip transfers are at your own risk, and cannot be reversed!
                  Please verify that you have entered all details correctly.
                </div>
                <div className="info-block">
                  <div className="info-block-content">
                    <div className="min-amount">Min.transfer: 0</div>
                    <div className="remaining-limit">Max.transfer: 0</div>
                    <div className="fee">Processing fee: no fee</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payments-block">
              <div className="payments-list">
                <div className="panel payment-method-item uBTC selected">
                  <div className="name">uBTC</div>
                  <div className="ico" />
                </div>
              </div>
            </div>
          </div>
          <object
            tabIndex={-1}
            type="text/html"
            data="about:blank"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              padding: 0,
              margin: 0,
              opacity: 0,
              zIndex: -1000,
              pointerEvents: "none"
            }}
          />
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
              height: 474,
              transform: "translate(0px, 0px) translateZ(0px)"
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default Transfer;