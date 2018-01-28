import React from 'react';
import '../css/vehicleDetails.css';

export class VehicleDetails extends React.Component {

  render() {
    return (
      <div className="vehicle_details">
      <div className = "w3-bar panel vehicleDetails">
        <div className = "col-sm-4 vehicle_name">
          <h2>BMW {this.props.vehicle}</h2>
          <h4>WBY1Z21000V308999</h4>
        </div>
        <div className = "col-sm-8 vehicle_picture">
          <img src={this.props.image}/>
        </div>

        <div className = "col-sm-4 vehicle_information1">
          <i className="fa fa-check-square-o icon" aria-hidden="true"></i>
          <h4>Number of Trips: {this.props.state}</h4>
          <h4>Status: <h2>OK</h2></h4>
        </div>
        <div className = "col-sm-4 vehicle_information1">
          <i className="fa fa-filter icon" aria-hidden="true"></i>
          <h4>Remaining Fuel: 0l</h4>
          <h4>Available: <h2>YES</h2></h4>
        </div>
        <div className = "col-sm-4 vehicle_information1">
          <i className="fa fa-plug icon" aria-hidden="true"></i>
          <h4>Charging State: Low</h4>
          <h4>Pluged-In: <h2>YES</h2></h4>
        </div>

      </div>
      </div>
    );
  }
}
