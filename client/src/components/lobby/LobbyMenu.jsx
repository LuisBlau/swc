import React, { Component } from 'react';

class LobbyMenu extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
    fullTables: false,
    emptyTables: false
  }
  hideFullTables = () => {
    this.setState({
      fullTables: !this.state.fullTables
    })
  }

  hideEmptyTables = () => {
    this.setState({
      emptyTables: !this.state.emptyTables,
    })
  }

  render() {
  return(
    true?
    <div className="lobby-menu">
      <div className="page lobby-page-menu page-forward">
        <div>
          <div className="page-content change-page-enter-done">
            <div className="lobby-main-menu-container">
              <div className="navigation-panel title">
                <div className="navigation-panel-content">
                  <div className="navigation-panel-title">SwC Poker</div>
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
                    <div className="menu-items">
                      <div className="panel menu-item lobby-menu-item games" onClick={()=>this.props.switchContent('cashgames')}>
                        <div className="menu-item-content">Poker Games</div>
                        <div className="menu-item-ico" />
                      </div>
                      <div className="panel menu-item lobby-menu-item settings" onClick={()=>this.props.switchContent('settings')}>
                        <div className="menu-item-content">Settings</div>
                        <div className="menu-item-ico" />
                      </div>
                      <div className="panel menu-item lobby-menu-item account" onClick={()=>this.props.switchContent('accountinfo')}>
                        <div className="menu-item-content">Account</div>
                        <div className="menu-item-ico" />
                      </div>
                      <div className="panel menu-item lobby-menu-item cashier" onClick={()=>this.props.switchContent('cashier')}>
                        <div className="menu-item-content">Cashier</div>
                        <div className="menu-item-ico" />
                      </div>
                      <div className="panel menu-item lobby-menu-item about">
                        <div className="menu-item-content">About</div>
                        <div className="menu-item-ico" />
                      </div>
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
                        height: 313,
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
    </div>
    :
    <div className="lobby-menu">
      <div className="page lobby-page-menu page-forward">
        <div>
          <div className="page-content">
            <div className="lobby-tables-filter-menu-container">
              <div className="navigation-panel back title">
                <div className="navigation-panel-content">
                  <div className="navigation-panel-title">
                    Cash Games
                  </div>
                  <div className="panel navigation-panel-back">
                    <div className="navigation-panel-back-content">
                      Lobby
                    </div>
                  </div>
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
                    style={{
                      transform:
                        "translate(0px, 0px) translateZ(0px)"
                    }}
                  >
                    <div className="menu-items">
                      <div className="panel menu-item gameType" onClick={()=>this.props.switchContent('cashgames')}>
                        <div className="menu-item-content">
                          Game Type
                        </div>
                        <div className="menu-item-ico" />
                        <div className="menu-item-value">
                          Hold'em
                        </div>
                      </div>
                      <div className="panel menu-item potType" onClick={()=>this.props.switchContent('cashgames')}>
                        <div className="menu-item-content">
                          Limit Type
                        </div>
                        <div className="menu-item-ico" />
                        <div className="menu-item-value">Any</div>
                      </div>
                      <div className="panel menu-item baseStake" onClick={()=>this.props.switchContent('cashgames')}>
                        <div className="menu-item-content">
                          Stakes
                        </div>
                        <div className="menu-item-ico" />
                        <div className="menu-item-value">Any</div>
                      </div>
                      <div className="panel menu-item players" onClick={()=>this.props.switchContent('cashgames')}>
                        <div className="menu-item-content">
                          Seats
                        </div>
                        <div className="menu-item-ico" />
                        <div className="menu-item-value">Any</div>
                      </div>
                      <div className="panel menu-item _RhyWX" onClick={()=>this.props.switchContent('cashgames')}>
                        <div className="menu-item-content">
                          Hide Full Tables{" "}
                          <div className={`panel simple-check-box ${(this.state.fullTables? 'checked' : '')}`} onClick={this.hideFullTables} />
                        </div>
                      </div>
                      <div className="panel menu-item _G2gY9" onClick={()=>this.props.switchContent('cashgames')}>
                        <div className="menu-item-content">
                          Hide Empty Tables{" "}
                          <div className={`panel simple-check-box ${(this.state.emptyTables? 'checked' : '')}`} onClick={this.hideEmptyTables} />
                        </div>
                      </div>
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
                        border:
                          "1px solid rgba(255, 255, 255, 0.9)",
                        borderRadius: 3,
                        width: "100%",
                        transitionDuration: "0ms",
                        display: "none",
                        height: 391,
                        transform:
                          "translate(0px, 0px) translateZ(0px)"
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
    </div>
  )
  }
}

export default LobbyMenu;