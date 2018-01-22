//Component that show the current information about the fuel consumption and battery of the current car

import React from 'react';

import '../css/fuelPanel.css';
import  {InfoButton} from './InfoButton';

export class FuelPanel extends React.Component {

  render() {

    let fuelPercentage = this.props.value + '%'

    let thumb = ""
    if (this.props.value < 7)
    {
        thumb = <i className="fa fa-thumbs-o-up content_icon thumb_icon" aria-hidden="true"></i>
    }
    else
    {
        thumb = <i className="fa fa-thumbs-o-down content_icon thumb_icon" aria-hidden="true"></i>
    }

    return (

      <div className="contentPanel starPanel">

      <div className="w3-bar panel">

        <div className="col-sm-4 content_panel_column first_content_panel_column">
          <div>
            <div className ="infoButton"><InfoButton description="text"/></div>
            <h4 className="kpi_title">{this.props.title}</h4>
          </div>
          <div className = "star_panel_icons">
            <div className="progress"><div className="progress-bar panel_bar" role="progressbar" aria-valuenow="30"aria-valuemin="0" aria-valuemax="30" style={{width: fuelPercentage}}></div></div>
          </div>
        </div>

        <div className="col-sm-4 content_panel_column">
          <h3>{this.props.value} on 100km</h3>
        </div>

        <div className="col-sm-4 content_panel_column">
          <div>{thumb}</div>
        </div>

      </div>
      </div>
    );
  }
}
