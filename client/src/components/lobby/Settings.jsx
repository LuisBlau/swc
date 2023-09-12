import React, { useState } from 'react';

import TableTheme from './settings/TableTheme';
import FeltColor from './settings/FeltColor';
import Background from './settings/Background';
import CardBack from './settings/CardBack';

const Settings = (props) => {
  const [tableSkinTab, setTableSkinTab] = useState("table-_KLspC");
  // const { 
  //   onNavigate
  // } = props;
  return(
    <div className="lobby-content">
      <div className="page lobby-page page-forward">
        <div>
          <div className="page-content change-page-enter-done">
            <div className="lobby-table-skins-container table-_KLspC">
              <div className="navigation-panel title">
                <div className="navigation-panel-content">
                  <div className="navigation-panel-title">Table's Skins</div>
                </div>
              </div>
              <div className="panel lobby-page-content">
                <div className="tab-buttons">
                  <div className={`panel menu-item table-_KLspC  ${tableSkinTab==='table-_KLspC'?'select':''}`} onClick={()=>setTableSkinTab("table-_KLspC")}>
                    <div className="menu-item-content">Table Theme</div>
                    <div className="menu-item-ico" />
                  </div>
                  <div className={`panel menu-item table-felt ${tableSkinTab==='table-felt'?'select':''}`} onClick={()=>setTableSkinTab("table-felt")}>
                    <div className="menu-item-content">Felt Color</div>
                    <div className="menu-item-ico" />
                  </div>
                  <div className={`panel menu-item table-background ${tableSkinTab==='table-background'?'select':''}`} onClick={()=>setTableSkinTab("table-background")}>
                    <div className="menu-item-content">Background</div>
                    <div className="menu-item-ico" />
                  </div>
                  <div className={`panel menu-item table-cards ${tableSkinTab==='table-cards'?'select':''}`} onClick={()=>setTableSkinTab("table-cards")}>
                    <div className="menu-item-content">Cards</div>
                    <div className="menu-item-ico" />
                  </div>
                </div>

                {tableSkinTab==='table-_KLspC'? <TableTheme />:''}
                {tableSkinTab==='table-felt'? <FeltColor />:''}
                {tableSkinTab==='table-background'? <Background />:''}
                {tableSkinTab==='table-cards'? <CardBack />:''}

                <div className="buttons-holder">
                  <div className="panel button save-button">
                    <div className="button-content">Apply</div>
                  </div>
                </div>
                <div className="table-skins-preview">
                  <div
                    className="panel preview-layer preview-table-_KLspC _KLspC-default"
                    style={{
                      backgroundImage:
                        'url("https://play.swcpoker.club/res/res-5.png?v=dc378dfae33f81af29229c3100195b9a")'
                    }}
                  />
                  <div
                    className="panel preview-layer preview-table-felt felt-1"
                    style={{
                      backgroundImage:
                        'url("https://play.swcpoker.club/res/res-6.png?v=8f602b3200f628fce2649b36b40adaeb")'
                    }}
                  />
                  <div
                    className="panel preview-layer preview-table-cards cards-default"
                    style={{
                      backgroundImage:
                        'url("https://play.swcpoker.club/res/res-10.png?v=2f40fa0fc24d639006313c9edeff4b20")'
                    }}
                  />
                  <div
                    className="panel preview-layer preview-table-card-back card-back-default"
                    style={{
                      backgroundImage:
                        'url("https://play.swcpoker.club/res/res-14.png?v=65111f6b3ca4348b5ab75f46e00a441b")'
                    }}
                  />
                  <div
                    className="panel preview-layer preview-table-background background-default"
                    style={{
                      backgroundImage:
                        'url("https://play.swcpoker.club/res/res-17.jpg?v=603cb02da50e0e9065efb4a12cbfebf4")'
                    }}
                  />
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
export default Settings;