import React, { useState, useContext } from 'react';
import authContext from '../../context/auth/authContext';
import gameContext from '../../context/game/gameContext';
import modalContext from '../../context/modal/modalContext';
import Text from '../../components/typography/Text';
const GameHeader  = (props) => {
  const { onNavigate } = props;
  const { isLoggedIn, logout } = useContext(authContext);
  const { isPlayerSeated, standUp, leaveTable } = useContext(gameContext);
  const { openModal, closeModal } = useContext(modalContext);
  const handleSignOut = () => {
    openModal(
      () => (
        <Text>Are you sure want to leave the table?</Text>
      ),
      "",
      "LogOut",
      () => {
        closeModal();
        leaveTable();
        onNavigate('lobby');
        logout();
      },
    );
  };

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = (event) => {
    setShowTooltip(true);
    setTooltipPosition({
      position: 'absolute',
      background: '#fff',
      color: '#000',
      padding: '6px 6px',
      borderRadius: '3px',
      top: event.clientY + 30, // Adjust the position to your liking
      left: event.clientX - 30,
    });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (<>
    {(showTooltip && 
      <div className="tooltip" style={tooltipPosition}>
        {tooltipText}
      </div>
    )}
  <div className="table-header-container">
    <div className="table-header-container-content">
      <div className="header-buttons left-buttons">
        <div className="panel button table-header-button lobby-button" tabIndex={-1}  onClick={() => {
          leaveTable();
          onNavigate('lobby');
        }}>
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
          className="panel button table-header-button replay-table-button disable"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button info-table-button disable"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button menu-table-button multi-table disable"
          tabIndex={-1}
        >
          <div className="button-content" />
        </div>
        <div
          className={`panel button table-header-button stand-up-table-button ${isPlayerSeated ? '' : 'disable'}`}
          tabIndex={-1}
          onClick={isPlayerSeated?standUp:null}
          onMouseMove={(e)=>{
            setTooltipText("Stand Up");
            handleMouseMove(e);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="button-content" />
        </div>
        <div
          className="panel button table-header-button exit-table-button"
          tabIndex={-1}
          onClick={handleSignOut}
          onMouseMove={(e)=>{
            setTooltipText("Exit");
            handleMouseMove(e);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="button-content" />
        </div>
      </div>
    </div>
  </div>
  </>
  );
};
export default GameHeader;