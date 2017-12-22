/*Component that renders the Panel with info about the employee*/

import React from 'react';

export class PeopleManagementHeader extends React.Component {

  render() {
      
   
    return (
      <div>
        <div className="row">
         <div className="col-sm-2"></div>
        
         <div className="col-sm-4">
            <h4>Name</h4>
         </div>
        
         <div className="col-sm-4">
            <h4>Position</h4>
         </div>
        
         <div className="col-sm-1">
            <h4>Ranking</h4>
         </div>
        
         <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}
