/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';


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
      <div>
        <div className="row" value={this.props.value} onClick={this.handleClick}>
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
         {this.props.date.substring(0,10)}
        </div>
        <div className="col-sm-4">
         {this.props.date.substring(12,16)}
        </div>
        <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}
