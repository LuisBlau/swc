import React, { useState, useEffect, useContext } from 'react';
import globalContext from '../../../context/global/globalContext';
const Overview = (props) => {
  const { chipsAmount } = useContext(globalContext);

  return(
    <div className="pw-tab pw-cashier-status">
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
            <div className="money-table">
              <div className="money-table-header">
                <div className="header-cell money-type-icon first-item">
                  <div className="header-cell-content">
                    <div className="header-cell-content-text" />
                  </div>
                </div>
                <div className="header-cell money-type">
                  <div className="header-cell-content">
                    <div className="header-cell-content-text" />
                  </div>
                </div>
                <div className="header-cell available">
                  <div className="header-cell-content">
                    <div className="header-cell-content-text">Available</div>
                  </div>
                </div>
                <div className="header-cell in-game">
                  <div className="header-cell-content">
                    <div className="header-cell-content-text">In Game</div>
                  </div>
                </div>
                <div className="header-cell total">
                  <div className="header-cell-content">
                    <div className="header-cell-content-text">Total</div>
                  </div>
                </div>
              </div>
              <div className="money-table-list">
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
                    <div className="money-items">
                      <div className="panel money-item scroll-prevent-default CHIPS">
                        <div className="panel cell money-type-icon first-item">
                          <div className="cell-content">
                            <div className="cell-content-text" />
                          </div>
                        </div>
                        <div className="panel cell money-type">
                          <div className="cell-content">
                            <div className="cell-content-text">uBTC</div>
                          </div>
                        </div>
                        <div className="panel cell available">
                          <div className="cell-content">
                            <div className="cell-content-text">{chipsAmount}</div>
                          </div>
                        </div>
                        <div className="panel cell in-game">
                          <div className="cell-content">
                            <div className="cell-content-text">0</div>
                          </div>
                        </div>
                        <div className="panel cell total">
                          <div className="cell-content">
                            <div className="cell-content-text">{chipsAmount}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="iScrollVerticalScrollbar iScrollLoneScrollbar"
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
                        height: 258,
                        transform: "translate(0px, 0px) translateZ(0px)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="player-tickets-block scroll-prevent-default">
              <div className="player-tickets-header">
                <div className="header-cell first-item">
                  <div className="header-cell-content">
                    <div className="header-cell-content-text">Tickets</div>
                  </div>
                </div>
              </div>
              <div className="player-tickets-list">
                <div className="scroll-panel-holder">
                  <div className="scroll-panel-wrapper">
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
                        <div className="tickets">
                          <div className="panel ticket-item-container ticket-item empty ticket-item-money-type-undefined">
                            <div className="ticket-item-container-content">
                              <div className="name" />
                              <div className="expiration-date" />
                              <div className="amount" />
                            </div>
                          </div>
                          <div className="panel ticket-item-container ticket-item empty ticket-item-money-type-undefined">
                            <div className="ticket-item-container-content">
                              <div className="name" />
                              <div className="expiration-date" />
                              <div className="amount" />
                            </div>
                          </div>
                          <div className="panel ticket-item-container ticket-item empty ticket-item-money-type-undefined">
                            <div className="ticket-item-container-content">
                              <div className="name" />
                              <div className="expiration-date" />
                              <div className="amount" />
                            </div>
                          </div>
                          <div className="panel ticket-item-container ticket-item empty ticket-item-money-type-undefined">
                            <div className="ticket-item-container-content">
                              <div className="name" />
                              <div className="expiration-date" />
                              <div className="amount" />
                            </div>
                          </div>
                          <div className="panel ticket-item-container ticket-item last empty ticket-item-money-type-undefined">
                            <div className="ticket-item-container-content">
                              <div className="name" />
                              <div className="expiration-date" />
                              <div className="amount" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="panel button ticket-nav-button prev disable"
                  tabIndex={-1}
                >
                  <div className="button-content">
                    <div className="button-text">‹</div>
                  </div>
                </div>
                <div
                  className="panel button ticket-nav-button next disable"
                  tabIndex={-1}
                >
                  <div className="button-content">
                    <div className="button-text">›</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="iScrollVerticalScrollbar iScrollLoneScrollbar"
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
export default Overview;