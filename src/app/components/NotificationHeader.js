/*Component that renders the Panel with info about the employee*/

import React from 'react';

import '../css/contentHeader.css';

export class NotificationHeader extends React.Component {

  render() {


    return (
      <div>
        <div className="content_header">

          <div className="col-sm-2 content_header_column">
            <div className="col-sm-2"><i className="fa fa-calendar icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Date</h3><hr/></div>
          </div>

          <div className="col-sm-3 content_header_column">
            <div className="col-sm-2"><i className="fa fa-user-circle icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Employee/Vehicle</h3><hr/></div>
          </div>

          <div className="col-sm-4 content_header_column">
            <div className="col-sm-2"><i className="fa fa-list icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Description</h3><hr/></div>
          </div>

          <div className="col-sm-3 content_header_column">
            <div className="col-sm-2"><i className="fa fa-list icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Description</h3><hr/></div>
          </div>

        </div>
      </div>
    );
  }
}
