import React from 'react';

//import '../css/panels.css';

import  {StarPanel} from './StarPanel';
import  {FuelPanel} from './FuelPanel';

export class Panels extends React.Component {
  
  render() {
    return (
      <div>
        <div className="w3-container">
          <ul className="w3-ul w3-card-4"> 
            <StarPanel />
            <StarPanel /> 
            <FuelPanel />
          </ul>
        </div>
      </div>
    );
  }
}