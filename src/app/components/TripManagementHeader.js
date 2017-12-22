/*Component that renders the Panel with info about the employee*/

import React from 'react';

export class TripManagementHeader extends React.Component {

  render() {
      
   
    return (
      <div>
        <div className="row">
         <div className="col-sm-2"></div>
        
         <div className="col-sm-4">
            <h4>Date</h4>
         </div>
        
         <div className="col-sm-4">
            <h4>Hour</h4>
         </div>
        
         <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}
