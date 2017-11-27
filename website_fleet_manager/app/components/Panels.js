import React from 'react';

//import '../css/panels.css';

import  {StarPanel} from './StarPanel';
import  {FuelPanel} from './FuelPanel';

export class Panels extends React.Component {

  render() {
      
    let acceleration = 3;
    let generalRisk=2;
    let energy=50;
    let fuel=70;
      
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
