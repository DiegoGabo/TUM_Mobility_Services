import React from 'react';

import '../css/fuelPanel.css';

export class FuelPanel extends React.Component {

  render() {
    
    let energy = this.props.energy +'%';
    let fuel = this.props.fuel + '%';
    return (
      <li className="w3-bar">
      <i className="fa fa-plug w3-bar-item w3-circle w3-hide-small" aria-hidden="true"></i>
      <div>

        <h2>Fuel Consumption</h2>
        <hr className="divider" />
        <div className="col-sm-5">
          <div className="col-sm-4">
            <h4>Energy Consumption</h4>
          </div>
          <div className="col-sm-8">
            <div className="progress">
              <div  className="progress-bar" role="progress-bar progress-bar-warning progress-bar-striped"  aria-valuemin="0" aria-valuemax="100" style={{width: energy, display: 'inline'}}>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-5">
          <div className="col-sm-4">
            <h4>Fuel Consumption</h4>
          </div>
          <div className="col-sm-8">
            <div className="progress">
              <div  className="progress-bar progress-bar-success progress-bar-striped" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style={{width: fuel}}>
            </div>
          </div>
          </div>
        </div>
      </div>
    </li>
    );
  }
}
