/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/vehiclePanel.css';

export class VehiclePanel extends React.Component {

  constructor(props)
  {
    super(props)
    //this.handleClick = this.handleClick.bind(this)
  }

  //modify the current employee selected and the current panel
  handleClick(e)
  {
      //this.props.changeEmployee(this.props.value, this.props.name)
      //this.props.changePanel("Trip Management")
  }

  render() {
    return (
      <div className = "contentPanel vehiclePanel">
        <div className="w3-bar panel" >
         <div className="col-sm-2 content_panel_column first_content_panel_column">
         <div class="vehicleImage">
           <img src="http://www.bmw.de/dam/brandBM/common/newvehicles/i-series/i3/2017/design/BMW-i-series-i3-design-colors-04.jpg.resource.1502371240835.jpg"/>
         </div>
         </div>

         <div className="col-sm-3 content_panel_column">
            <h4>BMW i3</h4>
         </div>

         <div className="col-sm-3 content_panel_column">
            <h4>OK</h4>
         </div>

         <div className="col-sm-3 content_panel_column">
            <h4>217872755781</h4>
         </div>


         <div className="col-sm-1 content_panel_column">
            <i className="fa fa-trash-o trashIcon" aria-hidden="true"></i>
         </div>
        </div>
      </div>
    );
  }
}
