import React, { Component } from 'react';
import 'raf/polyfill';
import '../css/Lobby.css';

import LogIn from './LogIn';
import Register from './Register';
import Spinner from './Spinner';

import LobbyHeader from "../components/lobby/LobbyHeader";
import LobbyFooter from "../components/lobby/LobbyFooter";
import LobbyMenu from "../components/lobby/LobbyMenu";
import LobbyTableRouterHolder from "../components/lobby/LobbyTableRouterHolder";

import CashGames from "../components/lobby/CashGames";
import Settings from "../components/lobby/Settings";
import AccountInfo from "../components/lobby/AccountInfo";
import Cashier from "../components/lobby/Cashier";
import About from "../components/lobby/About";
class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'lobby',
      currentContent: 'cashgames',
      auth: 'login'
    };
  }

  switchContent = (content) => {
    this.setState(() => ({
      currentContent: content,
    }));
  };

  setAuthWindow = (auth) => {
    this.setState(() => ({
      auth: auth,
    }));
  }

  state = {
    loading: true,
  }

  cardAnimationDelay = 0;

  loadTable = () => {

  }
  
  async componentDidMount() {
      
  }

  render() {
    return (
      <div id="rootUI" className="poker-root">
        <div className="root-content desktop swc-common swc" style={{ width: "100%", height: "100%", position: "absolute" }} >
          <div className="_XWsmJ-container standard-screen landscape force-expandable-lobby-menu locale-en animate">
            <div className="_XWsmJ-content">
              {this.state.auth === 'login'? <LogIn setAuthWindow={this.setAuthWindow} /> : ''}
              {this.state.auth === 'register'? <Register setAuthWindow={this.setAuthWindow} /> : ''}
              <div className="panel screen-component lobby-page lobby-container modal"
                tabIndex={0}
                style={{ zIndex: 2 }}>
                <div className="panel modal-bg" />
                <div className="screen-wrapper">
                  <div className="panel screen-content">
                    <div className="lobby-content-wrapper">
                      <div className="lobby-container-content _wNjpt">
                        <LobbyHeader switchContent={this.switchContent} />
                        <LobbyTableRouterHolder />
                          {
                            (this.state.currentContent === 'cashgames' && <CashGames onNavigate={this.props.onNavigate} setTableID={this.props.setTableID} />) ||
                            (this.state.currentContent === 'settings' && <Settings />) ||
                            (this.state.currentContent === 'accountinfo' && <AccountInfo />) ||
                            (this.state.currentContent === 'cashier' && <Cashier />) ||
                            (this.state.currentContent === 'about' && <About />)
                          }
                        <LobbyMenu switchContent={this.switchContent} />
                        <LobbyFooter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="NotificationsContainer">
                <div className="NotificationsContainer__content">
                  <div className="NotificationsContainer__notifications">
                    <div />
                  </div>
                </div>
              </div>
              <div className="portals" />
              <div className="tooltip-portal" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Lobby;