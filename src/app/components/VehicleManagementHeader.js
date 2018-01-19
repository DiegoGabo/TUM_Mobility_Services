/*Component that renders the Panel with info about the employee*/

import React from 'react';

import '../css/contentHeader.css';
//import '../css/vehicleManagementHeader.css';

export class VehicleManagementHeader extends React.Component {

  render() {


    return (
      <div>
        <div className="content_header">
         <div className="col-sm-2 content_header_column">
         </div>

         <div className="col-sm-3 content_header_column">
            <div className="col-sm-2"><i className="fa fa-car icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Vehicle Type</h3><hr/></div>
         </div>

         <div className="col-sm-3 content_header_column">
         <div className="col-sm-3"><i className="fa fa-check-square-o icon" aria-hidden="true"></i></div>
         <div className="col-sm-9"><h3>Status</h3><hr/></div>
         </div>

         <div className="col-sm-3 content_header_column">
            <div className="col-sm-2"><i className="fa fa-id-card-o icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Designation</h3><hr/></div>
         </div>

         <div className="col-sm-1 content_header_column">
         </div>

        </div>
      </div>
    );
  }
}
