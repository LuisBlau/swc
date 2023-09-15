import React, { useState, useEffect } from 'react';

const LobbyFooter = (props) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to format the time as HH:MM AM/PM
    const formatTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    // Function to update the current time
    const updateCurrentTime = () => {
      const now = new Date();
      const formattedTime = formatTime(now);
      setCurrentTime(formattedTime);
    };

    // Update the current time every 30 seconds
    const intervalId = setInterval(updateCurrentTime, 30000);

    // Initialize the current time
    updateCurrentTime();
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return(
    <div className="lobby-footer">
      <div className="server-connection-status">
        <div className="server-connection-status-network">
          <div className="server-connection-status-item item-1 active" />
          <div className="server-connection-status-item item-2 active" />
          <div className="server-connection-status-item item-3 active" />
          <div className="server-connection-status-item item-4 active" />
          <div className="server-connection-status-item item-5" />
        </div>
        <div className="server-connection-status-disconnect-box">
          <div className="server-connection-status-disconnect lobby-server-connection-status active" />
          <div className="server-connection-status-disconnect game-server-connection-status active" />
        </div>
      </div>
      <div className="time-container">
        <div className="time-container-content">
          Time {currentTime}
        </div>
      </div>
      <div className="revision">v 8.1.9.6</div>
      <div className="footer-lobby-menu-buttons">
        <div className="panel button footer-button footer-chat-button has-unread-messages">
          <div className="button-content">
            <div className="footer-button-icon">&nbsp;</div>
            <div className="footer-button-value">0</div>
          </div>
        </div>
        <div
          className="panel button footer-button footer-opened-tournaments-button disable"
          tabIndex={-1}
        >
          <div className="button-content">
            <div className="footer-button-icon">&nbsp;</div>
            <div className="footer-button-value">0</div>
          </div>
        </div>
        <div
          className="panel button footer-button footer-opened-tables-button disable"
          tabIndex={-1}
        >
          <div className="button-content">
            <div className="footer-button-icon">&nbsp;</div>
            <div className="footer-button-value">0</div>
          </div>
        </div>
      </div>
      <div className="footer-lobby-chat">
        <div
          className="panel lobby-chat-container chat-container ct-lobby with-smiles minimized"
          tabIndex={0}
        >
          <div className="panel chat-container-content chat-animation">
            <div className="panel button _MS4tm-chat-button">
              <div className="button-content" />
            </div>
            <div className="chat-input-holder">
              <div
                className="panel button smiles-button disable"
                tabIndex={-1}
              >
                <div className="button-content" />
              </div>
              <div className="editable-panel chat-input input-field disabled">
                <div
                  tabIndex={-1}
                  className="editable-panel-content"
                  contentEditable="false"
                />
              </div>
              <div
                className="panel button chat-send-button disable"
                tabIndex={-1}
              >
                <div className="button-content" />
              </div>
            </div>
            <div className="chat-messages">
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
                      "translate(0px, -673px) translateZ(0px)"
                  }}
                >
                  <div className="chat-message">
                    <span className="chat-author">
                      pmaniac1122:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(0, 255, 255)" }}
                    >
                      fuck tourttes fuck{" "}
                    </span>
                    <span className="chat-time">21:27</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">390CID:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(176, 224, 230)" }}
                    >
                      the bull in the caddy is so funny
                    </span>
                    <span className="chat-time">21:56</span>
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
                    pointerEvents: "none"
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
                      display: "block",
                      height: 8,
                      transform:
                        "translate(0px, 1px) translateZ(0px)"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="panel _MS4tm-chat-button lobby-open-chat-button" />
        </div>
      </div>
    </div>
  )
}

export default LobbyFooter;