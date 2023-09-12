import React, {useState} from 'react';

import Overview from './cashier/Overview';
import Deposit from './cashier/Deposit';
import Withdraw from './cashier/Withdraw';
import Transfer from './cashier/Transfer';
import History from './cashier/History';

const Cashier = (props) => {
  const [cashierTab, setCashierTab] = useState("overview");
  // const { 
  //   onNavigate
  // } = props;
  return(
    <div className="lobby-content">
      <div className="page lobby-page page-forward">
        <div>
          <div className="page-content change-page-enter-done">
            <div className="cashier-container">
              <div className="navigation-panel back title">
                <div className="navigation-panel-content">
                  <div className="navigation-panel-title">Cashier</div>
                  <div className="panel navigation-panel-back">
                    <div className="navigation-panel-back-content">Back</div>
                  </div>
                  <div className="panel button refresh-button">
                    <div className="button-content" />
                  </div>
                </div>
              </div>
              <div className="panel lobby-page-content">
                <div
                  className="panel screen-component lobby-page poker-widget-cashier-wrapper"
                  tabIndex={0}
                >
                  <div className="screen-wrapper">
                    <div className="panel screen-content">
                      <div className="">
                        <div className="poker-widget root-content cashier html5-wrapper swc-common swc poker-widget-design-desktop">
                          <div className="poker-widget-content">
                            <div className="poker-widget-wrapper screen-type-page">
                              <div className="poker-widget-page pw-cashier">
                                <div className="panel pw-cashier-content">
                                  <div className="tabs">
                                    <div className="tabs-content">
                                      <div className={`panel cashier-tab overview ${cashierTab==='overview'?'selected':''}`} onClick={()=>setCashierTab("overview")}>
                                        <div className="cashier-tab-ico" />
                                        <div className="cashier-tab-content">
                                          <div className="cashier-tab-name">
                                            Overview
                                          </div>
                                        </div>
                                      </div>
                                      <div className={`panel cashier-tab deposit ${cashierTab==='deposit'?'selected':''}`} onClick={()=>setCashierTab("deposit")}>
                                        <div className="cashier-tab-ico" />
                                        <div className="cashier-tab-content">
                                          <div className="cashier-tab-name">
                                            Deposit
                                          </div>
                                        </div>
                                      </div>
                                      <div className={`panel cashier-tab cashout ${cashierTab==='cashout'?'selected':''}`} onClick={()=>setCashierTab("cashout")}>
                                        <div className="cashier-tab-ico" />
                                        <div className="cashier-tab-content">
                                          <div className="cashier-tab-name">
                                            Withdraw
                                          </div>
                                        </div>
                                      </div>
                                      <div className={`panel cashier-tab transfer ${cashierTab==='transfer'?'selected':''}`} onClick={()=>setCashierTab("transfer")}>
                                        <div className="cashier-tab-ico" />
                                        <div className="cashier-tab-content">
                                          <div className="cashier-tab-name">
                                            Transfer
                                          </div>
                                        </div>
                                      </div>
                                      <div className={`panel cashier-tab history ${cashierTab==='history'?'selected':''}`} onClick={()=>setCashierTab("history")}>
                                        <div className="cashier-tab-ico" />
                                        <div className="cashier-tab-content">
                                          <div className="cashier-tab-name">
                                            History
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-holder">

                                  {cashierTab==='overview'? <Overview />:''}
                                  {cashierTab==='deposit'? <Deposit />:''}
                                  {cashierTab==='cashout'? <Withdraw />:''}
                                  {cashierTab==='transfer'? <Transfer />:''}
                                  {cashierTab==='history'? <History />:''}

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="poker-widget-context-menu" />
                          </div>
                        </div>
                      </div>
                    </div>
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
export default Cashier;