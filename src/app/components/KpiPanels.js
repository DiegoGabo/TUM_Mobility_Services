/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';

import  {StarPanel} from './StarPanel';
import  {FuelPanel} from './FuelPanel';


export class KpiPanels extends React.Component {

  render() {
    return (
      <div>
            <StarPanel
                title="Acceleration"
                subtitle="General Driving Behaviour"
                value={this.props.acceleration}
            />

            <StarPanel
                title="Pre-emptive Driving Style"
                value={this.props.generalRisk}
            />

            <StarPanel
                title="Accident Ratio"
                value={5}
            />

            <FuelPanel
                title="Fuel Consumption"
                value={this.props.fuel}
            />

            <FuelPanel
                title="Energy Consumption"
                value={this.props.energy}
            />

            <FuelPanel
                title="CO2-Emission Volume"
                value={80}
            />


      </div>
    );
  }
}
