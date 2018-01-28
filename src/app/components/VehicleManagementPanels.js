/*Component in which there are the information about acceleration and pre-emptive driving*/
import {VehiclePanel} from './VehiclePanel'

import React from 'react';

export class VehicleManagementPanels extends React.Component {

  constructor(props)
  {
    super(props)
     this.setState({listVehicles: []})
  }

  //obtains the list of trips given the current employee
  componentDidMount()
  {
      let url = 'https://bemostwanted.herokuapp.com/api/cars'
      fetch(url)
          .then(res => res.json())
          .then(listVehicles => this.setState({listVehicles}))
  }
    
  render() 
  { 
    //creates the list of trips
    let vehiclesPanels
    try{
      vehiclesPanels = this.state.listVehicles.map((vehicle) =>
                            <VehiclePanel 
                                key={vehicle.id}
                                image={vehicle.image}
                                vehicle={vehicle.vin}
                                model={vehicle.model}
                                trips={vehicle.trips}
                                changePanel={this.props.changePanel}
                                changeVehicle={this.props.changeVehicle}
                                />)
    }
    catch(e){}
    return (
      <div>
        {vehiclesPanels}
      </div>
    );
  }
}
