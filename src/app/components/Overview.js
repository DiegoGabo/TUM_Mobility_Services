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
  

  render() {
  
    let latitude = 48.19284
    let longitude = 11.568518
      
    return (
      <div>
        <OverviewHeader />
        <MapPosition latitude={latitude} longitude={longitude}/>
        
        <div className="col-sm-3">
          <Filter />
        </div>
        
        <div className="col-sm-9">
          <PanelHeader />
          <Panels />
        </div>
        
      </div>
    );
  }
}
