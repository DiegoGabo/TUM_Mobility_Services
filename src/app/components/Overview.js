/*Overview component in which there are all the components that create the main FleetMe application. It is the page in which user arrive after the login*/

import React from 'react';

import  {OverviewHeader} from './OverviewHeader';
import  {MapPosition} from './MapPosition';
import  {Panels} from './Panels';
import  {Filter} from './Filter';
import  {PanelHeader} from './PanelHeader';
import  {Footer} from './Footer';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';

export class Overview extends React.Component {

  //Constructor of the function created because there must be the information of the current car analyzed
    
  constructor(props)
  {
      super(props);
      this.state = {employee: "Overall",
                    trip: "Overall"}
      this.changeEmployee=this.changeEmployee.bind(this)
      this.changeTrip=this.changeTrip.bind(this)
  }
    
  //modify employee state
  changeEmployee(newEmployee)
  {
      this.setState({
			employee: newEmployee
		});
       console.log(newEmployee)
  }
   
  //modify trip state
  changeTrip(newTrip)
  {
      this.setState({
			trip: newTrip
		});
       console.log(newTrip)
  }

  render() {
<<<<<<< HEAD
    
    //value taken by database are here initialized
    let acceleration = 5;
	let generalRisk=5;
	let energy=20;
	let fuel=0;
    let latitude = 10;
    let longitude = 10;
    
    console.log(this.state.carData)
    
    //block in which data from localhost are fetched
	try {
        const last = this.state.carData.length-1
        acceleration = this.state.carData[last].segmentLastTripAccelerationStars;
        generalRisk=this.state.carData[last].lastTripBrakingStars;
        energy=this.state.carData[last].remainingRange;
        fuel=this.state.carData[last].remainingFuel;
        latitude=this.state.carData[last].gpsLat;
        longitude=this.state.carData[last].gpsLng
		console.log(acceleration)
		console.log(generalRisk)
		console.log(fuel)
		console.log(energy)
    } catch(e) {
        
    }
      
    return (
      <div>
        <OverviewHeader />
        <MapPosition latitude={latitude} longitude={longitude}/>
        
        <div className="col-sm-3">
          <Filter 
            changeEmployee={this.changeEmployee}
            changeTrip={this.changeTrip}        
          />
        </div>
        
        <div className="col-sm-9">
          <PanelHeader />
          <Panels 
            acceleration={acceleration}
            generalRisk={generalRisk}
            energy={energy}
            fuel={fuel}
        />
        </div>
        
      </div>
    );
  }
}
