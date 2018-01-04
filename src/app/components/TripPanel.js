/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/tripPanel.css';

export class TripPanel extends React.Component {

  constructor(props)
  {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  //if you click on the trip panel it changes the current trip and the panel in "Kpi management"
  handleClick(e)
  {
      this.props.changePanel("Kpi Management")
      this.props.changeTrip(this.props.date)
  }

  render() {
    return (
      <div className = "contentPanel tripPanel">
        <div className="w3-bar panel" value={this.props.value} onClick={this.handleClick}>

          <div className="col-sm-3 content_panel_column">
            <h4>{this.props.date.substring(0,10)}</h4>
          </div>

          <div className="col-sm-3 content_panel_column">
            <h4>{this.props.date.substring(11,16)}</h4>
          </div>

          <div className="col-sm-3 content_panel_column vehiclePicture">
            <img src="http://www.bmw.de/dam/brandBM/common/newvehicles/i-series/i3/2017/design/BMW-i-series-i3-design-colors-04.jpg.resource.1502371240835.jpg"/>
          </div>

          <div className="col-sm-3 content_panel_column">
            <h4>{this.props.vehicle}</h4>
          </div>

        </div>
      </div>
    );
  }
}
