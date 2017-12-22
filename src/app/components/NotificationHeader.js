/*Component that renders the Panel with info about the employee*/

import React from 'react';

export class NotificationHeader extends React.Component {

  render() {
      
   
    return (
      <div>
        <div className="row">
        
          <div className="col-sm-3">
            <div className="col-sm-2"><i className="fa fa-calendar" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h4>Date</h4></div>
          </div>
        
          <div className="col-sm-3">
            <div className="col-sm-2"><i className="fa fa-user-circle" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h4>Employee/Vehicle</h4></div>
          </div>
        
          <div className="col-sm-3">
            <div className="col-sm-2"><i className="fa fa-list" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h4>Description</h4></div>
          </div>
        
        </div>
      </div>
    );
  }
}
