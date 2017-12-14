/*Component that renders the Panel with info about the employee*/

import React from 'react';

import '../css/panelHeader.css';

export class PanelHeader extends React.Component {

  render() {
    return (
      <div>
        <div className="panel_header">
        
          <div className="col-sm-4">
            <div className="col-sm-2">
              <i className="fa fa-user-circle icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <h3>Hans Peter</h3>
              <hr/>
            </div>
          </div>
        
           <div className="col-sm-4">
            <div className="col-sm-2">
              <i className="fa fa-bar-chart icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <h3>Overall rating 2/10</h3>
              <hr/>
            </div>
          </div>
        
           <div className="col-sm-4">
            <div className="col-sm-2">
              <i className="fa fa-car icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <h3>No dedicated company car</h3>
              <hr/>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}