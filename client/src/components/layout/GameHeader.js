import React, { useContext } from 'react';
import authContext from '../../context/auth/authContext';
const GameHeader  = (props) => {
  const { onNavigate } = props;
  const { isLoggedIn, logout } = useContext(authContext);
  return (
  <div className="table-header-container">
    <div className="table-header-container-content">
      <div className="header-buttons left-buttons">
        <div className="panel button table-header-button lobby-button" tabIndex={-1}  onClick={() => onNavigate('lobby')}>
          <div className="button-content">
            <div className="button-text">Lobby</div>
          </div>
        </div>
      </div>
      {/* <div className="table-router-holder">
        <div className="table-router-container">
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
              <div
                className="panel TableIndicator TableIndicator_v_default TableIndicator_c_dark TableIndicatorContainer TableIndicatorContainer_v_default TableIndicatorContainer_c_dark table-indicator active"
                tabIndex={-1}
              >
                <div className="TableIndicator__content" />
              </div>
              <div className="panel button add-table-button" tabIndex={-1}>
                <div className="button-content" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="header-buttons right-buttons">
        <div
          className="panel button table-header-button action-request-table-button disable"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button replay-table-button"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button info-table-button"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button menu-table-button multi-table"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button stand-up-table-button disable"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button exit-table-button"
          tabIndex={-1}
          onClick={logout}
        >
          <div className="button-content" />
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
  );
};
export default GameHeader;