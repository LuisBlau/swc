import React, { useState, useEffect, useContext } from 'react';
import globalContext from '../../context/global/globalContext';

const CashGames = (props) => {
  const { 
    onNavigate,
    setTableID
  } = props;
  const [tableDB, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tables } = useContext(globalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_URI + '/api/tables/all', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ key: 'value' }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        // console.log("lobby data = ", data);
        setTables(data);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return(
  <div className="lobby-content">
     <div className="page lobby-page page-forward">
      <div>
        <div className="page-content">
          <div className="lobby-extended-tables-container">
            <div className="navigation-panel title">
              <div className="navigation-panel-content">
                <div className="navigation-panel-title">
                  Cash Games
                </div>
                <div className="panel button list-mode table">
                  <div className="button-content" />
                </div>
              </div>
            </div>
            <div className="panel lobby-page-content">
              <div className="table-list-header">
                <div className="panel menu-item header-column table-name">
                  <div className="menu-item-content">Name</div>
                  <div className="menu-item-ico" />
                </div>
                <div className="panel menu-item header-column table-stakes">
                  <div className="menu-item-content">
                    Stakes
                  </div>
                  <div className="menu-item-ico" />
                </div>
                <div className="panel menu-item header-column table-pot">
                  <div className="menu-item-content">Type</div>
                  <div className="menu-item-ico" />
                </div>
                <div className="panel menu-item header-column table-avg-pot">
                  <div className="menu-item-content">
                    Avg. Pot
                  </div>
                  <div className="menu-item-ico" />
                </div>
                <div className="panel menu-item header-column table-hands-per-hour">
                  <div className="menu-item-content">H/hr</div>
                  <div className="menu-item-ico" />
                </div>
                <div className="panel menu-item header-column table-players desc">
                  <div className="menu-item-content">
                    Players
                  </div>
                  <div className="menu-item-ico" />
                </div>
                <div className="panel menu-item header-column game-type">
                  <div className="menu-item-content">Game</div>
                  <div className="menu-item-ico" />
                </div>
                <div className="header-column game-type-link" />
              </div>
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
                  <div className="pull-down-wrapper">
                    <div className="pull-down">
                      <div className="icon" />
                      <div className="spin" />
                    </div>
                  </div>
                  <div className="table-list">
                    {/* <div className="table-menu-item-wrapper" onClick={() => onNavigate('play')}>
                      <div className="viewable-monitor">
                        <div
                          className="panel table-line"
                          style={{
                            backgroundColor: "rgb(250, 201, 65)"
                          }}
                        >
                          <div
                            className="cell table-name"
                            style={{
                              color: "rgb(1, 1, 1)",
                              fontWeight: "bold"
                            }}
                          >
                            <div className="panel cell-content">
                              <div className="table-icons-block">
                                <div className="table-icons">
                                  <div className="panel table-icon  scroll-prevent-default bad-beat-jackpot">
                                    <div className="table-icon-content" />
                                  </div>
                                </div>
                              </div>
                              <div className="text">
                              Online Poker (Demo) #1
                              </div>
                            </div>
                          </div>
                          <div
                            className="cell table-stakes"
                            style={{ color: "rgb(1, 1, 1)" }}
                          >
                            <div className="panel cell-content">
                              100 / 200
                            </div>
                          </div>
                          <div
                            className="cell table-pot"
                            style={{ color: "rgb(1, 1, 1)" }}
                          >
                            <div className="panel cell-content">
                              NL
                            </div>
                          </div>
                          <div
                            className="cell table-avg-pot"
                            style={{ color: "rgb(1, 1, 1)" }}
                          >
                            <div className="panel cell-content">
                              0
                            </div>
                          </div>
                          <div
                            className="cell table-hands-per-hour"
                            style={{ color: "rgb(1, 1, 1)" }}
                          >
                            <div className="panel cell-content">
                              0
                            </div>
                          </div>
                          <div
                            className="cell table-players"
                            style={{ color: "rgb(1, 1, 1)" }}
                          >
                            <div className="panel cell-content">
                              1/6
                            </div>
                          </div>
                          <div className="cell game-type">
                            <div className="panel cell-content">
                              Hold'em
                            </div>
                          </div>
                          <div className="panel cell game-type-link">
                            <div className="cell-content mt-money-01" />
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {
                    tableDB.map((item) => {

                      let table = tables? tables.find((t) => t.id == item._id) : {currentNumberPlayers: '0'};
                      if (!table) {
                        table = {currentNumberPlayers: '0'};
                      }

                      return (
                        <div key={item._id} className="table-menu-item-wrapper"  onClick={
                          () => {
                            setTableID(item._id);
                            onNavigate('play');
                          }
                        }
                        >
                          <div className="viewable-monitor">
                            <div className="panel table-line">
                              <div className="cell table-name">
                                <div className="panel cell-content">
                                  <div className="table-icons-block">
                                    <div className="table-icons">
                                      <div className="panel table-icon  scroll-prevent-default run-it-twice">
                                        <div className="table-icon-content" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text">
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                              <div className="cell table-stakes">
                                <div className="panel cell-content">
                                  {item.limit/200} / {item.limit/100}
                                </div>
                              </div>
                              <div className="cell table-pot">
                                <div className="panel cell-content">
                                  NL
                                </div>
                              </div>
                              <div className="cell table-avg-pot">
                                <div className="panel cell-content">
                                  0
                                </div>
                              </div>
                              <div className="cell table-hands-per-hour">
                                <div className="panel cell-content">
                                  0
                                </div>
                              </div>
                              <div className="cell table-players">
                                <div className="panel cell-content">
                                  {table.currentNumberPlayers}/{item.maxPlayers}
                                </div>
                              </div>
                              <div className="cell game-type">
                                <div className="panel cell-content">
                                  Hold'em
                                </div>
                              </div>
                              <div className="panel cell game-type-link">
                                <div className="cell-content mt-money-01" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                    <div className="table-menu-item-wrapper" onClick={() => onNavigate('game')}>
                      <div className="viewable-monitor">
                        <div
                          className="panel table-line"
                          style={{
                            backgroundColor: "#5eed82"
                          }}
                        >
                          <div
                            className="cell table-name"
                            style={{
                              color: "rgb(1, 1, 1)",
                              fontWeight: "bold"
                          }}
                          >
                            <div className="panel cell-content">
                              <div className="table-icons-block">
                                <div className="table-icons">
                                  <div className="panel table-icon  scroll-prevent-default run-it-twice">
                                    <div className="table-icon-content" />
                                  </div>
                                </div>
                              </div>
                              <div className="text">
                                Offline Poker with Bots #1
                              </div>
                            </div>
                          </div>
                          <div className="cell table-stakes">
                            <div className="panel cell-content">
                              5 / 10
                            </div>
                          </div>
                          <div className="cell table-pot">
                            <div className="panel cell-content">
                              NL
                            </div>
                          </div>
                          <div className="cell table-avg-pot">
                            <div className="panel cell-content">
                              100
                            </div>
                          </div>
                          <div className="cell table-hands-per-hour">
                            <div className="panel cell-content">
                              128
                            </div>
                          </div>
                          <div className="cell table-players">
                            <div className="panel cell-content">
                              4/5
                            </div>
                          </div>
                          <div className="cell game-type">
                            <div className="panel cell-content">
                              Hold'em
                            </div>
                          </div>
                          <div className="panel cell game-type-link">
                            <div className="cell-content mt-money-01" />
                          </div>
                        </div>
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
                      display: "block",
                      height: 130,
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
      <div className="menu-button-holder">
        <div className="panel button lobby-menu-button">
          <div className="button-content" />
        </div>
      </div>
      <div className="panel side-overlay" />
    </div>
  )
}

export default CashGames;