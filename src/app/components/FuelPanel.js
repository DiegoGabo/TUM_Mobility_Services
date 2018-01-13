//Component that show the current information about the fuel consumption and battery of the current car

import React from 'react';

import '../css/fuelPanel.css';
import  {InfoButton} from './InfoButton';

export class FuelPanel extends React.Component {

  render() {

    let energyPercentage = this.props.energy + '%'
    let fuelPercentage = this.props.fuel + '%'

    return (

      <div>
      <li className="w3-bar panel">

        <div className="row">
          <div className="col-sm-10"><h3 className="kpi_title">Fuel/Electric Consumption</h3></div>
          <div className="col-sm-2"><InfoButton description="text"/></div>
        </div>

        <div className="row">

          <div className="col-sm-5">

            <div className="col-sm-5">
              <div className="progress">
                <div className="progress-bar panel_bar" role="progressbar" aria-valuenow="70"aria-valuemin="0" aria-valuemax="100" style={{width: fuelPercentage}}></div>
              </div>
            </div>

          </div>

          <div className="col-sm-5">
            <h3>Fuel consumption: {this.props.fuel}l/100km</h3>
          </div>

          <div className="col-sm-2">
            <i className="fa fa-thumbs-o-down icon" aria-hidden="true"></i>
          </div>

        </div>

        <div className="row">

          <div className="col-sm-5">

            <div className="col-sm-5">
              <div className="progress">
                <div className="progress-bar panel_bar" role="progressbar" aria-valuenow="30"aria-valuemin="0" aria-valuemax="60" style={{width: energyPercentage}}></div>
              </div>
            </div>

          </div>

          <div className="col-sm-5">
            <h3>Electric consumption: {this.props.energy}kwH</h3>
          </div>

          <div className="col-sm-2">
            <i className="fa fa-thumbs-o-down icon" aria-hidden="true"></i>
          </div>

        </div>

      </li>
      </div>
    );
  }
}
