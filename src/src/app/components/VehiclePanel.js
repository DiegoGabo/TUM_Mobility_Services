/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/vehiclePanel.css';

export class VehiclePanel extends React.Component {

  constructor(props)
  {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  //modify the current employee selected and the current panel
  handleClick(e)
  {
      this.props.changeVehicle(this.props.id, this.props.image, this.props.model)
      this.props.changePanel("Vehicle Panel")
  }
    

  render() {
    return (
      <div onClick={this.handleClick} className = "contentPanel vehiclePanel">
        <div className="w3-bar panel" >
         <div className="col-sm-2 content_panel_column first_content_panel_column">
         <div class="vehicleImage">
           <img src={this.props.image}/>
         </div>
         </div>

         <div className="col-sm-3 content_panel_column">
            <h4>BMW {this.props.model}</h4>
         </div>

         <div className="col-sm-3 content_panel_column">
            <h4>OK</h4>
         </div>

         <div className="col-sm-3 content_panel_column">
            <h4>{this.props.vehicle}</h4>
         </div>


         <div className="col-sm-1 content_panel_column">
            <i className="fa fa-trash-o trashIcon" aria-hidden="true"></i>
         </div>
        </div>
      </div>
    );
  }
}
