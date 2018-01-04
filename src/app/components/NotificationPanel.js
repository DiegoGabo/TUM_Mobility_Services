/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/notificationPanel.css';

const employee_icon = <div className="row"><i className="fa fa-user-circle content_icon" aria-hidden="true"></i></div>
const car_icon = <div className="row"><i className="fa fa-car content_icon" aria-hidden="true"></i></div>

export class NotificationPanel extends React.Component {

  render() {
    let value = this.props.value + 'px'
    let icon = this.props.type == 0 ? employee_icon : car_icon;
    return (
      <div className="contentPanel notificationPanel">
        <div className="w3-bar panel">
          <div className="col-sm-3 content_panel_column first_content_panel_column">
            <h4>{this.props.date}</h4>
          </div>
          <div className="col-sm-4 content_panel_column">
            <div className="row"><h4>{this.props.name}</h4></div>
            {icon}
          </div>
          <div className="col-sm-5 content_panel_column">
            <div className="row"><h4>{this.props.problem}</h4></div>
            <div className="row progress_row">
              <div className="progress">
                <div className="progress-bar panel_bar" role="progressbar" aria-valuenow="70"aria-valuemin="0" aria-valuemax="60" style={{width: value}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
