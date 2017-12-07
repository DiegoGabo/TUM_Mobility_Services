/*Overview component in which there are all the components that create the main FleetMe application. It is the page in which user arrive after the login*/

import React from 'react';

import  {OverviewHeader} from './OverviewHeader';
import  {AppList} from './AppList';
import  {MapPosition} from './MapPosition';
import  {Panels} from './Panels';
import  {Footer} from './Footer';
import  {AppHeader} from './AppHeader';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';

export class Overview extends React.Component {

  //Constructor of the function created because there must be the information of the current car analyzed
  constructor(props) {
  	super(props);
    this.state = {vehicle: "WBY1Z21000V308999",
                  carData: []
                 }
    this.changeCar = this.changeCar.bind(this)
  }
    
  componentDidMount() {
    fetch('http://localhost:3000/api?vinBmw=WBY1Z21000V308999')
      .then(res => res.json())
      .then(carData => this.setState({ carData}));
  }
    
  //Function that modify the current state 
  changeCar(e)
  {
    this.setState({vehicle: e.target.value})
    console.log(e.target.value)
    let url = 'http://localhost:3000/api?vinBmw=' + e.target.value
    fetch(url)
      .then(res => res.json())
      .then(carData => this.setState({ carData}));
  }

  render() {
    
    //value taken by database are here initialized
    let acceleration = 5;
	let generalRisk=5;
	let energy=20;
	let fuel=0;
    let latitude = 10;
    let longitude = 10;
    
    console.log(this.state.carData)
    
    //block in which data from heroku are fetched
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
        <AppHeader  handleChange={this.changeCar}/>
        <MapPosition latitude={latitude} longitude={longitude}/>
        <Panels 
          acceleration={acceleration}
          energy={energy}
          fuel={fuel}
          generalRisk={generalRisk}
        />
        <Footer />
      </div>
    );
  }
}
