/*Component that renders the Panel with info about the employee*/

import React from 'react';

export class TripManagementHeader extends React.Component {

  render() {


    return (
      <div>
        <div className="content_header">
         <div className="col-sm-3 content_header_column">
            <div className="col-sm-3"><i className="fa fa-calendar icon" aria-hidden="true"></i></div>
            <div className="col-sm-9"><h3>Date</h3></div>
            <div className = "content_header_line"><hr/></div>
         </div>

         <div className="col-sm-3 content_header_column">
            <div className="col-sm-3"><i className="fa fa-clock-o icon" aria-hidden="true"></i></div>
            <div className="col-sm-9"><h3>Hour</h3></div>
            <div className = "content_header_line"><hr/></div>
         </div>

         <div className="col-sm-6 content_header_column">
            <div className="col-sm-2"><i className="fa fa-car icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Vehicle Designation</h3></div>
            <div className = "content_header_line"><hr/></div>
         </div>

        </div>
      </div>
    );
  }
}
