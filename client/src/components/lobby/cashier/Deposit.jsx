import React from 'react';

const Deposit = (props) => {
  return(
    <div className="pw-tab pw-cashier-deposit">
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
          <div className="tab-content swc without_currency_selection">
            <div className="payments-block">
              <div className="payments-list">
                <div className="panel payment-method-item swc selected">
                  <div className="name">Swc</div>
                  <div className="ico" />
                </div>
                <div className="panel sideshift-button payment-method-item">
                  <div className="ico" />
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-content">
                <div className="min-amount">Min.deposit: 0.01</div>
                <div className="limits">
                  Max.deposit: 999,999,999,999 / 24 hours; 999,999,999,999 / 7 days;
                  999,999,999,999 / 30 days
                </div>
                <div className="current-limit">
                  Remaining limit: 999,999,999,999
                </div>
              </div>
            </div>
            <div className="deposit-method-content">
              <div className="payment-method bitcoin">
                <div className="exchange-rate-block btc">
                  <div className="current-curs">
                    1 chip = 1 uBTC 1,000,000 chips = 1 BTC
                  </div>
                </div>
                <div className="header-block payment-method-header">
                  <div className="header-block-content">
                    <div className="header-block-text">
                      Deposit Bitcoin to this address:
                    </div>
                  </div>
                </div>
                <div className="payment-method-content">
                  <div className="address">
                    <div className="address-content">
                      <div className="field-block input-text-field">
                        <div className="field-label">
                          <div className="field-label-content">
                            <div className="field-label-text">
                              <span />
                            </div>
                          </div>
                        </div>
                        <div className="field-value">
                          <div className="field-value-content">
                            <input
                              tabIndex={0}
                              className="input-field"
                              type="text"
                              readOnly=""
                              defaultValue="ABCDEFGHIJ1234567890ABCDEFGHIJ1234567890XX"
                            />
                          </div>
                        </div>
                        <div className="error">
                          <div className="error-content" />
                        </div>
                      </div>
                    </div>
                    <div className="address-warning" />
                  </div>
                  <div className="DepositBottomArea">
                    <div className="DepositLeftBlock">
                      <div className="payment-button-wrapper copy-button-wrapper">
                        <div
                          className="panel simple-button payment-button copy-button"
                          tabIndex={0}
                        >
                          <div className="simple-button-content">Copy Address</div>
                        </div>
                      </div>
                      <div className="payment-button-wrapper toggle-address-button-wrapper">
                        <div
                          className="panel simple-button payment-button toggle-address-button"
                          tabIndex={0}
                        >
                          <div className="simple-button-content">
                            Use Old Format
                          </div>
                        </div>
                      </div>
                      <div className="sc-exchange-rate">
                        Deposits are credited after 1 confirmation.
                      </div>
                    </div>
                    <div className="DepositRightBlock">
                      <div className="pw-cashier-qr-code">
                        <div className="qr-code-content">
                          <svg
                            shapeRendering="crispEdges"
                            height={128}
                            width={128}
                            viewBox="0 0 29 29"
                          >
                            <path fill="#FFFFFF" d="M0,0 h29v29H0z" />
                            <path
                              fill="#000000"
                              d="M0 0h7v1H0zM9 0h1v1H9zM12 0h1v1H12zM14 0h2v1H14zM17 0h1v1H17zM19 0h2v1H19zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM11 1h2v1H11zM14 1h2v1H14zM17 1h1v1H17zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h5v1H8zM14 2h2v1H14zM17 2h2v1H17zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM9 3h3v1H9zM14 3h3v1H14zM18 3h1v1H18zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM13 4h6v1H13zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h2v1H8zM11 5h1v1H11zM13 5h1v1H13zM15 5h1v1H15zM18 5h2v1H18zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h2v1H8zM12 7h1v1H12zM17 7h1v1H17zM0 8h2v1H0zM3 8h1v1H3zM6 8h2v1H6zM10 8h1v1H10zM13 8h1v1H13zM15 8h2v1H15zM18 8h1v1H18zM20 8h1v1H20zM22 8h3v1H22zM26 8h2v1H26zM0 9h4v1H0zM5 9h1v1H5zM7 9h2v1H7zM10 9h2v1H10zM13 9h2v1H13zM16 9h3v1H16zM20 9h1v1H20zM22 9h1v1H22zM25 9h1v1H25zM28,9 h1v1H28zM1 10h3v1H1zM6 10h5v1H6zM14 10h1v1H14zM17 10h3v1H17zM21 10h1v1H21zM23 10h1v1H23zM26 10h2v1H26zM0 11h5v1H0zM13 11h3v1H13zM19 11h1v1H19zM22 11h1v1H22zM24 11h1v1H24zM26 11h1v1H26zM1 12h2v1H1zM4 12h4v1H4zM12 12h4v1H12zM17 12h2v1H17zM21 12h2v1H21zM28,12 h1v1H28zM1 13h2v1H1zM5 13h1v1H5zM8 13h5v1H8zM14 13h1v1H14zM16 13h6v1H16zM25 13h2v1H25zM1 14h1v1H1zM4 14h1v1H4zM6 14h1v1H6zM9 14h1v1H9zM12 14h2v1H12zM16 14h3v1H16zM20 14h5v1H20zM28,14 h1v1H28zM1 15h1v1H1zM3 15h3v1H3zM7 15h1v1H7zM9 15h1v1H9zM12 15h2v1H12zM15 15h1v1H15zM17 15h1v1H17zM22 15h2v1H22zM28,15 h1v1H28zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM11 16h1v1H11zM14 16h1v1H14zM16 16h2v1H16zM20 16h1v1H20zM23 16h1v1H23zM25 16h1v1H25zM2 17h1v1H2zM4 17h2v1H4zM9 17h2v1H9zM13 17h1v1H13zM16 17h1v1H16zM18 17h1v1H18zM22 17h2v1H22zM25 17h1v1H25zM27,17 h2v1H27zM0 18h1v1H0zM2 18h1v1H2zM5 18h3v1H5zM10 18h1v1H10zM16 18h1v1H16zM21 18h2v1H21zM27,18 h2v1H27zM3 19h1v1H3zM9 19h1v1H9zM11 19h1v1H11zM15 19h3v1H15zM19 19h1v1H19zM23 19h1v1H23zM25 19h1v1H25zM27 19h1v1H27zM0 20h1v1H0zM2 20h1v1H2zM4 20h6v1H4zM11 20h3v1H11zM18 20h1v1H18zM20 20h5v1H20zM26 20h1v1H26zM28,20 h1v1H28zM8 21h1v1H8zM11 21h2v1H11zM14 21h1v1H14zM17 21h2v1H17zM20 21h1v1H20zM24,21 h5v1H24zM0 22h7v1H0zM8 22h1v1H8zM11 22h4v1H11zM17 22h1v1H17zM20 22h1v1H20zM22 22h1v1H22zM24 22h1v1H24zM27 22h1v1H27zM0 23h1v1H0zM6 23h1v1H6zM11 23h5v1H11zM18 23h1v1H18zM20 23h1v1H20zM24 23h1v1H24zM26,23 h3v1H26zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM10 24h2v1H10zM14 24h2v1H14zM17 24h1v1H17zM20 24h5v1H20zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM10 25h2v1H10zM13 25h1v1H13zM16 25h1v1H16zM19 25h1v1H19zM22 25h1v1H22zM24 25h1v1H24zM27 25h1v1H27zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h2v1H10zM13 26h2v1H13zM16 26h1v1H16zM18 26h1v1H18zM20 26h1v1H20zM23 26h3v1H23zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM8 27h4v1H8zM15 27h4v1H15zM20 27h1v1H20zM22 27h2v1H22zM27 27h1v1H27zM0 28h7v1H0zM8 28h3v1H8zM12 28h2v1H12zM15 28h1v1H15zM17 28h1v1H17zM19 28h2v1H19zM23 28h2v1H23zM27 28h1v1H27z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="DepositBottomBlock">
                      <div className="sc-exchange-rate new-addres-info">
                        A new address is provided for each deposit. Please do not
                        send to an old address.
                      </div>
                    </div>
                  </div>
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
export default Deposit;