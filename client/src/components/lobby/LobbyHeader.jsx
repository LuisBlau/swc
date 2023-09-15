import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import authContext from '../../context/auth/authContext';
import globalContext from '../../context/global/globalContext';
const LobbyHeader = (props) => {
  const { chipsAmount, userName } = useContext(globalContext);

  const { 
    switchContent
  } = props;

  const [usersCount, setUsersCount] = useState(0);
  const [tablesCount, setTablesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_URI + '/api/users/count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        setUsersCount(data.count);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_URI + '/api/tables/count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        setTablesCount(data.count);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return(
      <div className="lobby-header">
        <div className="panel lobby-logo" />
        <div className="bottom-shadow" />
        <div className="info-holder">
          <div className="lobby-info">
            <div className="lobby-info-item players">
              <div className="value"> {usersCount} </div>
              <div className="label"> players</div>
            </div>
            <div className="lobby-info-item active-tables">
              <div className="value"> {tablesCount} </div>
              <div className="label"> tables</div>
            </div>
            <div className="lobby-info-item active-tournaments">
              <div className="value"> 0 </div>
              <div className="label"> tournaments</div>
            </div>
          </div>
        </div>
        <div className="mini-profile-holder">
          <div className="mini-profile-container">
            <div className="panel avatar gender-male" />
            <div className="profile-name-block">
              <div className="panel profile-name">
                <div className="mini-profile-name">{userName}</div>
                {/* <div className="mini-profile-status">New Seal</div> */}
              </div>
            </div>
            <div className="mini-profile-fields">
              <div className="mini-profile-field currency-CHIPS">
                <div className="mini-profile-field-icon uBTC" />
                <div className="panel mini-profile-field-value uBTC">{chipsAmount }</div>
              </div>
              {/* <div className="mini-profile-field currency-KRILL">
                <div className="mini-profile-field-icon Krill" />
                <div className="panel mini-profile-field-value Krill">0</div>
              </div> */}
            </div>
            <div className="mini-profile-actions">
              <div className="mini-profile-button account">
                <div
                  className="panel simple-button gray-button mini-profile-cashier-button"
                  tabIndex={0}
                >
                  <div className="simple-button-content" onClick={() => switchContent('accountinfo')}>Account</div>
                </div>
              </div>
              <div className="mini-profile-button cashier">
                <div
                  className="panel simple-button gray-button mini-profile-cashier-button"
                  tabIndex={0}
                >
                  <div className="simple-button-content" onClick={() => switchContent('cashier')}>Cashier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jackpot-holder" />
        <div className="panel button full-screen-button">
          <div className="button-content" />
        </div>
      </div>
  )
}

export default LobbyHeader;