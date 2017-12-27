/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/notificationPanel.css';

export class NotificationPanel extends React.Component {

  render() {
    return (
      <div className="contentPanel notificationPanel">
        <div className="w3-bar panel">
          <div className="col-sm-3 content_panel_column first_content_panel_column">
            <h4>27/12/2017</h4>
          </div>
          <div className="col-sm-4 content_panel_column">
            <div className="row"><h4>Max Mustermann</h4></div>
            <div className="row"><i className="fa fa-user-circle content_icon" aria-hidden="true"></i></div>
          </div>
          <div className="col-sm-5 content_panel_column">
            <div className="row"><h4>High Fuel Consumption</h4></div>
            <div className="row progress_row">
              <div className="progress">
                <div className="progress-bar panel_bar" role="progressbar" aria-valuenow="70"aria-valuemin="0" aria-valuemax="100" style={{width: '100px'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
