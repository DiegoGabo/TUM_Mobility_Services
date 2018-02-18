import React from 'react';
import '../css/vehicleDetails.css';

export class VehicleDetails extends React.Component {
    
  constructor(props)
  {
    super(props)
    this.setState({lastTrip: []})
  }
   
  //obtains the list of trips given the current employee
  componentDidMount()
  {
      let url = 'https://bemostwanted.herokuapp.com/api/' + this.props.vehicle + '/trips'
      fetch(url)
          .then(res => res.json())
          .then(lastTrip => this.setState({lastTrip}))
  }

  render() {{this.props.vehicle}
    let fuel= 30, chargingState=3
    let state="Not Available", plugged="NO", numberTrips=0
    if(this.props.charge>0){
        state="Low"
        plugged="YES"
    }
    try{
        numberTrips = this.state.lastTrip.length
        
    }
    catch(e){}
    return (
      <div className="vehicle_details">
      <div className = "w3-bar panel vehicleDetails">
        <div className = "col-sm-4 vehicle_name">
          <h2>BMW {this.props.model}</h2>
          <h4>{this.props.vin}</h4>
        </div>
        <div className = "col-sm-8 vehicle_picture">
          <img src={this.props.image}/>
        </div>

        <div className = "col-sm-4 vehicle_information1">
          <i className="fa fa-check-square-o icon" aria-hidden="true"></i>
          <h4>Number of Trips: {numberTrips}</h4>
          <h4>Status: <h2>OK</h2></h4>
        </div>
        <div className = "col-sm-4 vehicle_information1">
          <i className="fa fa-filter icon" aria-hidden="true"></i>
          <h4>Remaining Fuel: {this.props.fuel}l</h4>
          <h4>Available: <h2>YES</h2></h4>
        </div>
        <div className = "col-sm-4 vehicle_information1">
          <i className="fa fa-plug icon" aria-hidden="true"></i>
          <h4>Charging State: {state}</h4>
          <h4>Pluged-In: 
            <h2>{plugged}</h2></h4>
        </div>
      </div>
     <div style={{height: 160}}></div>
      </div>
    );
  }
}
