/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';

//import '../css/panels.css';

import  {StarPanel} from './StarPanel';
import  {FuelPanel} from './FuelPanel';

export class Panels extends React.Component {

  render() {
	
	//var carData = require("../../../data4react.js");
	//let vehicleId = "WBY1Z21000V308999";
	//carData4react(vehicleId, function(react){console.log(react)});
     
    let acceleration = 3;
    let generalRisk=2;
    let energy=50;
    let fuel=70;

	//let acceleration = carData[react.lenght-1].segmentLastTripAccelerationStars;
    //let generalRisk=carData[react.lenght-1].;
    //let energy=carData[react.lenght-1].;
    //let fuel=carData[react.lenght-1].;
      
    return (
      <div>
        <div className="w3-container">
          <ul className="w3-ul w3-card-4">
            <StarPanel 
                image="fa fa-tachometer w3-bar-item w3-circle w3-hide-small"
                title="Acceleration"
                subtitle="Acceleration assessment"
                value={acceleration}
            />
            <StarPanel 
                image="fa fa-exclamation-triangle w3-bar-item w3-circle w3-hide-small"
                title="General risk level"
                subtitle="Pre-emptive driving"
                value={generalRisk}
            />
            <FuelPanel energy={energy} fuel={fuel}/>
          </ul>
        </div>
      </div>
    );
  }
}
