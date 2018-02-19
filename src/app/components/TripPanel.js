/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/tripPanel.css';

var images = ["https://s3.eu-central-1.amazonaws.com/fleetme/cars/320i.jpeg", 
              "https://s3.eu-central-1.amazonaws.com/fleetme/cars/i3.png",
              "https://s3.eu-central-1.amazonaws.com/fleetme/cars/120.jpg",
              "https://s3.eu-central-1.amazonaws.com/fleetme/cars/120.jpg",
              "https://s3.eu-central-1.amazonaws.com/fleetme/cars/bmw-m235i.jpg"];

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
      this.props.changeTrip(this.props.id, this.props.date)
  }

  render() {
    let image = images[0]
    if(this.props.vehicle == "WBY1Z21000V308999"){
        image = images[1]   
    }
    if(this.props.vehicle == "WBA1S51010V834224"){
        image = images[2]   
    }
    if(this.props.vehicle == "WBAUD91090P381103"){
        image = images[3]   
    }
    if(this.props.vehicle == "WBA1J71080V593471"){
        image = images[4]   
    }
      
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
            <img src={image}/>
          </div>

          <div className="col-sm-3 content_panel_column">
            <h4>{this.props.vehicle}</h4>
          </div>

        </div>
      </div>
    );
  }
}
