/*Overview component in which there are all the components that create the main FleetMe application. It is the page in which user arrive after the login*/

import React from 'react';

import  {OverviewHeader} from './OverviewHeader';
import  {MapPosition} from './MapPosition';
import  {KpiPanels} from './KpiPanels';
import  {CostPanels} from './CostPanels';
import  {Navigation} from './Navigation';
import  {KpiHeader} from './KpiHeader';
import  {PeopleManagementHeader} from './PeopleManagementHeader';
import  {PeopleManagementPanels} from './PeopleManagementPanels';
import  {TripManagementPanels} from './TripManagementPanels';
import  {TripManagementHeader} from './TripManagementHeader';
import  {Footer} from './Footer';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';

export class Overview extends React.Component {

//Constructor of the function created because there must be the information of the current car analyzed 

constructor(props)
  {
      super(props)
      this.state = {employee: "0",
                    employeeName: "",
                    trip: "0",
                    panel: "Overview Companyimport",
                    carData: [],
                    }
      this.changeEmployee=this.changeEmployee.bind(this)
      this.changeTrip=this.changeTrip.bind(this)
      this.changePanel=this.changePanel.bind(this)
  }

  //modify employee state
  changeEmployee(newEmployee, newEmployeeName)
  {
      this.setState({ employee: newEmployee});
      this.setState({ employeeName: newEmployeeName});
      this.setState({trip: "0"})
  }

  //modify trip state
  changeTrip(newTrip)
  {
      this.setState({trip: newTrip});
  }

  //modify the panel that is currently shown
  changePanel(newPanel)
  {
      this.setState({
          panel: newPanel
      })
  }

  render() {
      
    let latitude = 48.19284
    let longitude = 11.568518
    let acceleration = 4
    let generalRisk = 2
    let energy = 30
    let fuel = 70
    let employeeName
      
    if(this.state.employee == "0")
    {
        //obtains data from DB when employee is overall
    }
    else
    {   
        //obtains data from DB when employee is selected and trip is overall
        if(this.state.trip == "0" && this.state.employee != "0")
        {
            let tripUrl = 'http://localhost:3000/user/' + this.state.employee + '/trips'
            fetch(tripUrl)
                .then(res => res.json())
                .then(carData => this.setState({carData}))
            try {
                const last = this.state.carData.length-1
                acceleration = this.state.carData[last].segmentLastTripAccelerationStars;
                generalRisk=this.state.carData[last].lastTripBrakingStars;
                energy=this.state.carData[last].remainingRange;
                fuel=this.state.carData[last].remainingFuel;
                latitude=this.state.carData[last].gpsLat;                   
                longitude=this.state.carData[last].gpsLng
            } catch(e) {}
        }
        else
        {
            //obtains data from DB when employee and trip are selected
            let tripUrl = 'http://localhost:3000/api/' + this.state.trip
            fetch(tripUrl)
                .then(res => res.json())
                .then(carData => this.setState({carData}))
            try {
                const last = this.state.carData.length-1
                acceleration = this.state.carData[last].segmentLastTripAccelerationStars;
                generalRisk=this.state.carData[last].lastTripBrakingStars;
                energy=this.state.carData[last].remainingRange;
                fuel=this.state.carData[last].remainingFuel;
                latitude=this.state.carData[last].gpsLat;                   
                longitude=this.state.carData[last].gpsLng
            } catch(e) {}
        }
    }

    //Defines the panel component which is different in function of what is selected in navigation panel (employee kpi or costPanels)
    let panel
    
    //renders the kpi management section in panel if it is active.
    if(this.state.panel=="Kpi Management")
    {
        panel = <div>
                    <KpiHeader employee={this.state.employee}/>
                    <KpiPanels
                    acceleration={acceleration}
                    generalRisk={generalRisk}
                    energy={energy}
                    fuel={fuel}
                    />
                </div>
    }
    
    //renders the people management section in panel if it is active. It contains the list of employees
    if(this.state.panel=="People Management")
    {
        panel = <div>
                    <PeopleManagementHeader />
                    <PeopleManagementPanels 
                      changePanel={this.changePanel}
                      changeEmployee={this.changeEmployee}/>
                </div>
    }
    
    //renders the trip management section in panel if it is active. It contains the list of trips
    if(this.state.panel=="Trip Management")
    {
        panel = <div>
                    <TripManagementHeader />
                    <TripManagementPanels 
                      employee={this.state.employee}
                      changePanel={this.changePanel}
                      changeTrip={this.changeTrip}/>
                </div>
    }
    
    return (
      <div>
        <OverviewHeader />
        <MapPosition latitude={latitude} longitude={longitude}/>

        <div className="col-sm-3 navigation_div">
          <Navigation
            changePanel={this.changePanel}
            changeEmployee={this.changeEmployee}
            changeTrip={this.changeTrip}
            changePanel={this.changePanel}
            employee={this.state.employee}
            employeeName={this.state.employeeName}
            trip={this.state.trip}
          />
        </div>

        <div className="col-sm-9">
          {panel}
        </div>

      </div>
    );
  }
}