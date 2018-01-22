import React from 'react';
import '../css/vehicleDetails.css';

export class VehicleDetails extends React.Component {

  render() {
    return (
      <div className="vehicle_details">
      <div className = "w3-bar panel vehicleDetails">
        <div className = "col-sm-4 vehicle_name">
          <h2>BMW i3 </h2>
          <h4>WBY1Z21000V308999</h4>
        </div>
        <div className = "col-sm-8 vehicle_picture">
          <img src="https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2013/11/bmw_i3_top_post.png?itok=bnK2Upuo"/>
        </div>

        <div className = "col-sm-4 vehicle_information1">
          <i className="fa fa-check-square-o icon" aria-hidden="true"></i>
          <h4>Number of Trips: 20</h4>
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
