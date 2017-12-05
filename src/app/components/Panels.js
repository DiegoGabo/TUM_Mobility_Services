/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';

//import '../css/panels.css';

import  {StarPanel} from './StarPanel';
import  {FuelPanel} from './FuelPanel';

export class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {carData: []};
  }

  componentDidMount() {
    fetch('http://localhost:3000/api?vinBmw=WBY1Z21000V308999')
      .then(res => res.json())
      .then(carData => this.setState({ carData }));
  }

  render() {
    console.log(this.state.carData)
    const {data} = this.state;
    console.log(data);
    let acceleration = 3;
    let generalRisk=2;
    let energy=50;
    let fuel=70;

	// let acceleration = this.state.carData[0].segmentLastTripAccelerationStars;
 //    let generalRisk=this.state.carData[0].lastTripRecuperationOverall;
 //    let energy=this.state.carData[0].remainingRange;
 //    let fuel=this.state.carData[0].remainingFuel;
      
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
