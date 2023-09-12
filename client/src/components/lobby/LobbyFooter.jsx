import React from 'react';

const LobbyFooter = (props) => {
  return(
    <div className="lobby-footer">
      <div className="server-connection-status">
        <div className="server-connection-status-network">
          <div className="server-connection-status-item item-1 active" />
          <div className="server-connection-status-item item-2 active" />
          <div className="server-connection-status-item item-3 active" />
          <div className="server-connection-status-item item-4" />
          <div className="server-connection-status-item item-5" />
        </div>
        <div className="server-connection-status-disconnect-box">
          <div className="server-connection-status-disconnect lobby-server-connection-status active" />
          <div className="server-connection-status-disconnect game-server-connection-status active" />
        </div>
      </div>
      <div className="time-container">
        <div className="time-container-content">
          Time 09:57 PM
        </div>
      </div>
      <div className="revision">v 6.9.9.1</div>
      <div className="footer-lobby-menu-buttons">
        <div className="panel button footer-button footer-chat-button has-unread-messages">
          <div className="button-content">
            <div className="footer-button-icon">&nbsp;</div>
            <div className="footer-button-value">28</div>
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
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      1/1 Openface Chinese Pineapple Progressive,
                      Cutlass #1
                    </span>
                    <span className="chat-time">21:30</span>
                  </div>
                  <div className="chat-message admin-message clickable">
                    <span className="chat-author">System:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      The Mini Deep Satellite [3 Seats GTD] - 10
                      minutes left to register!
                    </span>
                    <span className="chat-time">21:35</span>
                  </div>
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      0.25/0.25 Openface Chinese 2-7 Pineapple,
                      Attard #1
                    </span>
                    <span className="chat-time">21:41</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">
                      ingermort:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(107, 140, 255)" }}
                    >
                      who is tourttes
                    </span>
                    <span className="chat-time">21:43</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">chug:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      FJB
                    </span>
                    <span className="chat-time">21:45</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      Have you been sleeping ok, Pman?
                    </span>
                    <span className="chat-time">21:45</span>
                  </div>
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      0.10/0.20 Hold'em, No-Rake Micro Stakes #2
                    </span>
                    <span className="chat-time">21:45</span>
                  </div>
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      0.05/0.10 Hold'em, No-Rake Micro Stakes #3
                    </span>
                    <span className="chat-time">21:45</span>
                  </div>
                  <div className="chat-message admin-message clickable">
                    <span className="chat-author">System:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Mini Deep Hyper Satellite [1 Seat GTD] is
                      starting in 15 minutes
                    </span>
                    <span className="chat-time">21:46</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">
                      Incognito:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(218, 165, 32)" }}
                    >
                      ^ needs 1
                    </span>
                    <span className="chat-time">21:47</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      The guy was from Nebraska that had an actual
                      bull in a car passenger seat
                    </span>
                    <span className="chat-time">21:47</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      looks so weird
                    </span>
                    <span className="chat-time">21:47</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      he was given a warning lol
                    </span>
                    <span className="chat-time">21:47</span>
                  </div>
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      0.10/0.20 Hold'em, No-Rake Micro Stakes #2
                    </span>
                    <span className="chat-time">21:50</span>
                  </div>
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      5/10 Hold'em, Turmeric #1
                    </span>
                    <span className="chat-time">21:52</span>
                  </div>
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      0.10/0.20 Hold'em, No-Rake Micro Stakes #2
                    </span>
                    <span className="chat-time">21:52</span>
                  </div>
                  <div className="chat-message dealer-message clickable">
                    <span className="chat-author">
                      Action Request:
                    </span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      1/2 Hold'em, Bay Leaf #1
                    </span>
                    <span className="chat-time">21:53</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">390CID:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(176, 224, 230)" }}
                    >
                      I am so glad we have secure borders, They
                      say we do!
                    </span>
                    <span className="chat-time">21:53</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      That Peter Santello video at the border is
                      something
                    </span>
                    <span className="chat-time">21:53</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">390CID:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(176, 224, 230)" }}
                    >
                      that bull is the BULL!
                    </span>
                    <span className="chat-time">21:54</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      Insane the Countries people came from and
                      all the ID's that are thrown on the ground
                    </span>
                    <span className="chat-time">21:54</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      and all the money
                    </span>
                    <span className="chat-time">21:54</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      so they can lie i guess about where theyre
                      really from
                    </span>
                    <span className="chat-time">21:54</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">390CID:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(176, 224, 230)" }}
                    >
                      All the africans?
                    </span>
                    <span className="chat-time">21:54</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      Chinese
                    </span>
                    <span className="chat-time">21:54</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">390CID:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(176, 224, 230)" }}
                    >
                      comin accross
                    </span>
                    <span className="chat-time">21:55</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      I thought an Israeli
                    </span>
                    <span className="chat-time">21:55</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      watch the video if you get time
                    </span>
                    <span className="chat-time">21:55</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">390CID:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(176, 224, 230)" }}
                    >
                      the bull video?
                    </span>
                    <span className="chat-time">21:56</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      oh lol
                    </span>
                    <span className="chat-time">21:56</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      i was wondering what you meant by that sorry
                    </span>
                    <span className="chat-time">21:56</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      The video about the border
                    </span>
                    <span className="chat-time">21:56</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      1 sec let me find it
                    </span>
                    <span className="chat-time">21:56</span>
                  </div>
                  <div className="chat-message">
                    <span className="chat-author">USALOVE:</span>
                    <span
                      className="chat-message-text"
                      style={{ color: "rgb(255, 140, 0)" }}
                    >
                      just surprising to see all the ID's from the
                      World and different currencies
                    </span>
                    <span className="chat-time">21:56</span>
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