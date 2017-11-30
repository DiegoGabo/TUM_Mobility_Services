/*Overview component in which there are all the components that create the main FleetMe application. It is the page in which user arrive after the login*/

import React from 'react';

import  {OverviewHeader} from './OverviewHeader';
import  {AppList} from './AppList';
import  {MapPosition} from './MapPosition';
import  {Panels} from './Panels';
import  {Footer} from './Footer';
import  {AppHeader} from './AppHeader';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';

export class Overview extends React.Component {

  //Constructor of the function created because there must be the information of the current car analyzed
  constructor(props) {
  	super(props);
    this.state = {vehicle: "WBY1Z21000V308999"}
    this.changeCar = this.changeCar.bind(this)
  }
    
  //Function that modify the current state 
  changeCar()
    {
           //TODO
    }
    
  render() {
      
    //latitude and longitude in which there is the marker in the map<!-- 
    let latitude = 48.161502;
    let longitude = 11.524362;
      
    return (
      <div>
        <OverviewHeader />
        <AppHeader  hancleChange={this.changeCar}/>
        <MapPosition latitude={latitude} longitude={longitude}/>
        <Panels />
        <Footer />
      </div>
    );
  }
}
