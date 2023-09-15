import React from 'react';
const About = () => {
  return(
    <div className="lobby-content">
      <div className="page lobby-page page-forward">
        <div>
          <div className="page-content change-page-enter-done">
            <div className="lobby-account-info-container">
              <div className="navigation-panel title">
                <div className="navigation-panel-content">
                  <div className="navigation-panel-title">About</div>
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
                      <div className="account-info-sub-title">SwC Poker</div>
                      <div className="account-info-data-panel personal-info">
                        <div className="account-info-field">
                          <div className="account-info-field-label">v8.1.9.6</div>
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
export default About;