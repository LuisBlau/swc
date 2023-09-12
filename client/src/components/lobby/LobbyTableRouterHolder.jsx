import React from 'react';

const LobbyTableRouterHolder = (props) => {
  return(
    <div className="lobby-table-router-holder">
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
            style={{
              transform: "translate(0px, 0px) translateZ(0px)"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default LobbyTableRouterHolder;