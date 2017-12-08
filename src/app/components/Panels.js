/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';

import  {StarPanel} from './StarPanel';
import  {FuelPanel} from './FuelPanel';


export class Panels extends React.Component {

  render() {
	
    return (
      <div>
        <div className="w3-container">
          <ul className="w3-ul">

            <StarPanel 
                title="Acceleration"
                subtitle="General Driving Behaviour"
                value="4"
            />
        
            <FuelPanel energy="40" fuel="0"/>
        
            <StarPanel 
                title="Pre-emptive Driving Style"
                value="2"
            />
            
          </ul>
        </div>
      </div>
    );
  }
}
