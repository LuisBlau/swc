import React from 'react';

const Withdraw = (props) => {
  return(
    <div className="pw-tab pw-cashier-cashout">
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
            <div className="right-block">
              <div className="cashout-method-content">
                <div className="payment-method swc">
                  <div className="exchange-rate-block uBTC">
                    <div className="current-curs">
                      1 chip = 1 uBTC 1,000,000 chips = 1 BTC
                    </div>
                  </div>
                  <div className="header-block payment-method-header">
                    <div className="header-block-content">
                      <div className="header-block-text">Bitcoin Address</div>
                    </div>
                  </div>
                  <div className="payment-method-content">
                    <div className="payment-method-fields">
                      <div className="field-block input-text-field swc--address-field">
                        <div className="field-value">
                          <div className="field-value-content">
                            <input
                              name="swc[address]"
                              tabIndex={0}
                              className="input-field"
                              placeholder="Address"
                              type="text"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="error">
                          <div className="error-content" />
                        </div>
                      </div>
                      <div className="payment-method-amount">
                        <div className="header-block amount-field--header">
                          <div className="header-block-content">
                            <div className="header-block-text">
                              Withdrawal Amount
                            </div>
                          </div>
                        </div>
                        <div className="field-block input-text-field amount-field">
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
                        <div className="cashout-amount-unit">uBTC</div>
                      </div>
                      <div className="player-balance-block uBTC">
                        <div className="player-balance">
                          <span>
                            <span className="field"> Available balance: </span>
                            <span className="value">0 uBTC</span>
                          </span>
                        </div>
                        <div className="min-amount">
                          <span>
                            <span className="field"> Minimum withdrawal: </span>
                            <div className="panel value">500 uBTC</div>
                          </span>
                        </div>
                      </div>
                      <div className="priority-block">
                        <div className="header-block priority-field--header">
                          <div className="header-block-content">
                            <div className="header-block-text">
                              Bitcoin tx priority
                            </div>
                          </div>
                        </div>
                        <div className="field-block selectbox-field swc--priority-field">
                          <div className="field-value">
                            <div className="field-value-content">
                              <div className="select-field">
                                <select className="select-box no-selected">
                                  <option
                                    className="select-box-option none"
                                    disabled=""
                                    hidden=""
                                    value=""
                                  >
                                    Bitcoin tx priority
                                  </option>
                                  <option className="select-box-option" value={6}>
                                    6 blocks (~11.882 sat/Byte)
                                  </option>
                                  <option className="select-box-option" value={25}>
                                    25 blocks (~8.354 sat/Byte)
                                  </option>
                                  <option className="select-box-option" value={50}>
                                    50 blocks (~8.354 sat/Byte)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="error">
                            <div className="error-content" />
                          </div>
                        </div>
                      </div>
                      <div className="password-block">
                        <div className="header-block password-field--header">
                          <div className="header-block-content">
                            <div className="header-block-text">Password</div>
                          </div>
                        </div>
                        <div className="field-block input-text-field password-field">
                          <div className="field-value">
                            <div className="field-value-content">
                              <input
                                name=""
                                tabIndex={0}
                                className="input-field"
                                placeholder=""
                                type="password"
                                defaultValue="Swcpoker921$"
                              />
                            </div>
                          </div>
                          <div className="error">
                            <div className="error-content" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-method-buttons">
                    <div className="payment-button-wrapper">
                      <div
                        className="panel simple-button payment-button submit"
                        tabIndex={0}
                      >
                        <div className="simple-button-content">Submit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-cashout-message-block">
                <div className="text-block">
                  Withdrawals may take up to 24 hours to process and are done by
                  hand for our mutual security. Bitcoin network fee is deducted from
                  withdrawal amount, so you will receive less than your requested
                  amount. SwC does not charge a fee for withdrawals. Fee estimation
                  is at time of request, and may vary at time of processing.
                </div>
              </div>
            </div>
            <div className="payments-block">
              <div className="payments-list">
                <div className="panel payment-method-item swc selected">
                  <div className="name">Swc</div>
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
export default Withdraw;