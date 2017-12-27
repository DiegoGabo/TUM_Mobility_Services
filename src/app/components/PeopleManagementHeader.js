/*Component that renders the Panel with info about the employee*/

import React from 'react';

import '../css/contentHeader.css';
import '../css/peopleManagementHeader.css';

export class PeopleManagementHeader extends React.Component {

  render() {


    return (
      <div>
        <div className="content_header">
         <div className="col-sm-2 content_header_column">

         </div>

         <div className="col-sm-4 content_header_column">
            <div className="col-sm-2"><i className="fa fa-user-circle icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Name</h3><hr/></div>
         </div>

         <div className="col-sm-4 content_header_column">
            <div className="col-sm-2"><i className="fa fa-id-card-o icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Position</h3><hr/></div>
         </div>

         <div className="col-sm-2 content_header_column">
            <div className="col-sm-12"><i className="fa fa-sort-numeric-asc icon" aria-hidden="true"></i></div>
         </div>

        </div>
      </div>
    );
  }
}
