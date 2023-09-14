import React from 'react';

const History = (props) => {
  return(
    <div className="pw-tab pw-cashier-history">
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
            <div className="filters-block">
              <div className="filters-block-content">
                <div className="filter-block selectbox-filter money-type">
                  <div className="filter-value">
                    <div className="filter-value-content">
                      <div className="select-field filter-component">
                        <select className="select-box">
                          <option
                            className="select-box-option none"
                            disabled=""
                            hidden=""
                            value=""
                          >
                            Money Type
                          </option>
                          <option className="select-box-option" value="" />
                          <option className="select-box-option" value={82}>
                            uBTC
                          </option>
                          <option className="select-box-option" value={102}>
                            uBCH
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-block selectbox-filter transaction-type">
                  <div className="filter-value">
                    <div className="filter-value-content">
                      <div className="select-field filter-component">
                        <select className="select-box">
                          <option
                            className="select-box-option none"
                            disabled=""
                            hidden=""
                            value=""
                          >
                            Transaction Type
                          </option>
                          <option className="select-box-option" value="" />
                          <option className="select-box-option" value="tt-deposit">
                            Deposit
                          </option>
                          <option className="select-box-option" value="tt-cashout">
                            Withdraw
                          </option>
                          <option className="select-box-option" value="tt-transfer">
                            Transfer
                          </option>
                          <option className="select-box-option" value="tt-rakeback">
                            Rakeback
                          </option>
                          <option
                            className="select-box-option"
                            value="tt-affiliate-payment"
                          >
                            Affiliate Payment
                          </option>
                          <option
                            className="select-box-option"
                            value="tt-system-adjustment"
                          >
                            System Credit
                          </option>
                          <option
                            className="select-box-option"
                            value="tt-system-adjustment-rev"
                          >
                            System Debit
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date-block">
                  <div className="filter-block datepicker-filter start-date">
                    <div className="filter-value">
                      <div className="filter-value-content">
                        <div className="date-picker-component filter-component">
                          <div>
                            <div className="react-datepicker-wrapper">
                              <div className="react-datepicker__input-container">
                                <input
                                  className="date-picker-custom"
                                  type="text"
                                  tabIndex={0}
                                  placeholder="Date"
                                  defaultValue="04/08/2023"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="date-dash">
                    <div className="date-dash-content">-</div>
                  </div>
                  <div className="filter-block datepicker-filter end-date">
                    <div className="filter-value">
                      <div className="filter-value-content">
                        <div className="date-picker-component filter-component">
                          <div>
                            <div className="react-datepicker-wrapper">
                              <div className="react-datepicker__input-container">
                                <input
                                  className="date-picker-custom"
                                  type="text"
                                  tabIndex={0}
                                  placeholder="Date"
                                  defaultValue="03/09/2023"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-block">
              <div className="history-header">
                <div className="panel header-cell id">
                  <div className="cell-content">
                    <div className="cell-text">ID</div>
                    <div className="cell-ico" />
                  </div>
                </div>
                <div className="panel header-cell date">
                  <div className="cell-content">
                    <div className="cell-text">Date / Time</div>
                    <div className="cell-ico" />
                  </div>
                </div>
                <div className="panel header-cell type">
                  <div className="cell-content">
                    <div className="cell-text">Type</div>
                    <div className="cell-ico" />
                  </div>
                </div>
                <div className="panel header-cell status">
                  <div className="cell-content">
                    <div className="cell-text">Status</div>
                    <div className="cell-ico" />
                  </div>
                </div>
                <div className="panel header-cell value">
                  <div className="cell-content">
                    <div className="cell-text">Amount</div>
                    <div className="cell-ico" />
                  </div>
                </div>
                <div className="panel header-cell action">
                  <div className="cell-content">
                    <div className="cell-text">Action</div>
                  </div>
                </div>
              </div>
              <div className="history-list">
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
                  />
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
                        height: 358,
                        transform: "translate(0px, 0px) translateZ(0px)"
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="pw-list-spinner-holder">
                <div className="poker-widget-spinner" />
              </div>
            </div>
            <div className="buttons-holder" />
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
export default History;