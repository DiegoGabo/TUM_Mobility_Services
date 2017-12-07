/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';

import  {StarPanel} from './StarPanel';
import  {FuelPanel} from './FuelPanel';


export class Panels extends React.Component {

  render() {
	
    return (
      <div>
        <div className="w3-container">
          <ul className="w3-ul w3-card-4">

            <StarPanel 
                image="fa fa-tachometer w3-bar-item w3-circle w3-hide-small"
                title="Acceleration"
                subtitle="Acceleration assessment"
                value={this.props.acceleration}
            />
            <StarPanel 
                image="fa fa-exclamation-triangle w3-bar-item w3-circle w3-hide-small"
                title="General risk level"
                subtitle="Pre-emptive driving"
                value={this.props.generalRisk}
            />
            <FuelPanel energy={this.props.energy} fuel={this.props.fuel}/>
          </ul>
        </div>
      </div>
    );
  }
}
