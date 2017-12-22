/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';


export class NotificationPanel extends React.Component {
    
  render() {
    return (
      <div>
        <div className="row">

          <div className="col-sm-3">
            <h4>42/12/2017</h4>
          </div>
        
          <div className="col-sm-3">
            <div className="row"><h4>Max Mustermann</h4></div>
            <div className="row"><i className="fa fa-user-circle" aria-hidden="true"></i></div>
          </div>
        
          <div className="col-sm-6">
            <div className="row"><h4>High Fuel Consumption</h4></div>
            <div className="row">
              <div className="progress">
                <div className="progress-bar panel_bar" role="progressbar" aria-valuenow="70"aria-valuemin="0" aria-valuemax="100" style={{width: 70}}></div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}
