import React, { useState, useEffect, useContext, useRef } from 'react';
import Axios from 'axios';
import globalContext from '../../../context/global/globalContext';
const History = (props) => {
  const { userName } = useContext(globalContext);
  const moneyTypeRef = useRef("");
  const transactionTypeRef = useRef("");
  const [history, setHistory] = useState([]);

  const handleHistory = async() => {
    const moneyType = moneyTypeRef.current.value;
    const transactionType = transactionTypeRef.current.value;
        
    if(!userName) return;

    try {
      const res = await Axios.post( process.env.REACT_APP_SERVER_URI + '/api/transactions/history', {
        name:userName,
        currency:moneyType,
        type: transactionType
      });
      setHistory(res.data);
    } catch (error) {
      // console.error(error);
    }
  }

  useEffect(() => {
    handleHistory();
  }, []);

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
                        <select className="select-box" ref={moneyTypeRef}  onChange={handleHistory}>
                          <option
                            className="select-box-option none"
                            disabled=""
                            hidden=""
                            value=""
                          >
                            Money Type
                          </option>
                          <option className="select-box-option" value="uBTC">
                            uBTC
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
                        <select className="select-box" ref={transactionTypeRef} onChange={handleHistory}>
                          <option
                            className="select-box-option none"
                            disabled=""
                            hidden=""
                            value=""
                          >
                            Transaction Type
                          </option>
                          <option className="select-box-option" value="deposit">
                            Deposit
                          </option>
                          <option className="select-box-option" value="withdraw">
                            Withdraw
                          </option>
                          <option className="select-box-option" value="transfer">
                            Transfer
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="date-block">
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
                </div> */}
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
                    <div className="cell-text">Currency</div>
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
                {/* <div className="panel header-cell action">
                  <div className="cell-content">
                    <div className="cell-text">Action</div>
                  </div>
                </div> */}
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
                  >
                    <div className="history-items">
                    {history.map((item, index) => {
                      return (
                      <div className="panel history-item scroll-prevent-default CHIPS" key={item._id}>
                        <div className="panel cell history-type-icon first-item">
                          <div className="cell-content">
                            <div className="cell-content-text">{(++index).toString()}</div>
                          </div>
                        </div>
                        <div className="panel cell history-type">
                          <div className="cell-content">
                            <div className="cell-content-text">{item.currency}</div>
                          </div>
                        </div>
                        <div className="panel cell available">
                          <div className="cell-content">
                            <div className="cell-content-text">{item.type}</div>
                          </div>
                        </div>
                        <div className="panel cell in-game">
                          <div className="cell-content">
                            <div className="cell-content-text">{item.status}</div>
                          </div>
                        </div>
                        <div className="panel cell total">
                          <div className="cell-content">
                            <div className="cell-content-text">{item.amount}</div>
                          </div>
                        </div>
                      </div>
                      )
                    })}
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
              {/* <div className="pw-list-spinner-holder">
                <div className="poker-widget-spinner" />
              </div> */}
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