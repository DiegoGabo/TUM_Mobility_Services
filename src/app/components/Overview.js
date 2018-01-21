/*Overview component in which there are all the components that create the main FleetMe application. It is the page in which user arrive after the login*/

import React from 'react';

import  {OverviewHeader} from './OverviewHeader';
import  {MapPosition} from './MapPosition';
import  {MapCars} from './MapCars';
import  {UpperPanel} from './UpperPanel';
import  {KpiPanels} from './KpiPanels';
import  {CostPanels} from './CostPanels';
import  {Navigation} from './Navigation';
import  {KpiHeader} from './KpiHeader';
import  {PeopleManagementPanels} from './PeopleManagementPanels';
import  {TripManagementPanels} from './TripManagementPanels';
import  {TripManagementHeader} from './TripManagementHeader';
import  {NotificationHeader} from './NotificationHeader';
import  {NotificationPanels} from './NotificationPanels';
import  {VehicleManagementPanels} from './VehicleManagementPanels';
import  {VehicleManagementHeader} from './VehicleManagementHeader';
import  {VehicleDetails} from './VehicleDetails';
import  {Footer} from './Footer';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';
import '../css/overview.css';

export class Overview extends React.Component {

//Constructor of the function created because there must be the information of the current car analyzed

constructor(props)
  {
      super(props)
      this.state = {employee: "0",
                    employeeName: "",
                    trip: "0",
                    vehicle: "0",
                    panel: "Company Overview",
                    activeMenu: "Company Overview",
                    activeSubMenu: "Last Notifications",
                    carData: [],
                    }
      this.changeEmployee=this.changeEmployee.bind(this)
      this.changeVehicle=this.changeVehicle.bind(this)
      this.changeTrip=this.changeTrip.bind(this)
      this.changePanel=this.changePanel.bind(this)
      this.changeActiveMenu=this.changeActiveMenu.bind(this)
      this.changeActiveSubMenu=this.changeActiveSubMenu.bind(this)
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
    
  changeVehicle(newVehicle){
      this.setState({vehicle: newVehicle})
  }

  //modify the panel that is currently shown
  changePanel(newPanel)
  {
      this.setState({
          panel: newPanel
      })
  }

  //modify the active menu that is in navigation panel and can be Overview Company, People Management or Vehicle Management
  changeActiveMenu(newMenu)
  {
      this.setState({activeMenu: newMenu})
      this.changeEmployee("0","")
      this.changeTrip("0")
      this.changePanel(newMenu)
  }

  changeActiveSubMenu(newSubMenu){
      this.setState({activeSubMenu: newSubMenu})
  }

  render() {

    let latitude = 48.19284
    let longitude = 11.568518
    let acceleration = 4
    let generalRisk = 2
    let energy = 30
    let fuel = 70
    let employeeName
    let map

    if(this.state.employee == "0")
    {
        latitude = 48.19284
        longitude = 11.568518
        acceleration = 4
        generalRisk = 2
        energy = 30
        fuel = 70
        map = <UpperPanel/>
    }
    else
    {
        //obtains data from DB when employee is selected and trip is overall
        if(this.state.trip == "0" && this.state.employee != "0")
        {
            let tripUrl = 'https://bemostwanted.herokuapp.com/user/' + this.state.employee + '/trips'
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
            map = <div className="col-sm-12"></div>
        }
        else
        {
            //obtains data from DB when employee and trip are selected
            let tripUrl = 'https://bemostwanted.herokuapp.com/api/' + this.state.trip
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
            map = <MapPosition latitude={latitude} longitude={longitude}/>
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
                    <PeopleManagementPanels
                      changePanel={this.changePanel}
                      changeEmployee={this.changeEmployee}/>
                </div>
    }

    //renders the people management section in panel if it is active. It contains the list of employees
    if(this.state.panel=="Vehicle Management")
    {
        panel = <div>
                    <VehicleManagementHeader />
                    <VehicleManagementPanels
                      changePanel={this.changePanel}
                      changeVehicle={this.changeVehicle}/>
                </div>
        map = <MapCars />
    }
        
    if(this.state.panel=="Vehicle Panel"){
        map = <MapPosition latitude="48.493607" longitude="11.868653"/>
        panel = <div><VehicleDetails/></div>
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

   if(this.state.panel=="Company Overview")
    {
        panel = <div>
                    <NotificationPanels
                      changePanel={this.changePanel}
                      changeEmployee={this.changeEmployee}
                      changeTrip={this.changeTrip}
                      changeActiveMenu={this.changeActiveMenu}
                      changeActiveSubMenu={this.changeActiveSubMenu}/>
                </div>
    }

    if(this.state.panel=="Cost/Benefit Evaluation")
    {
        panel = <CostPanels/>
    }

    if(this.state.panel=="Key Driving Indicators")
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

    return (
      <div>
        <OverviewHeader />
        {map}
        <div className="row">
        <div className="col-sm-3 navigation_div ">
          <Navigation
            changePanel={this.changePanel}
            changeEmployee={this.changeEmployee}
            changeTrip={this.changeTrip}
            changePanel={this.changePanel}
            changeActiveMenu={this.changeActiveMenu}
            changeActiveSubMenu={this.changeActiveSubMenu}
            activeMenu={this.state.activeMenu}
            activeSubMenu={this.state.activeSubMenu}
            employee={this.state.employee}
            employeeName={this.state.employeeName}
            trip={this.state.trip}
          />
        </div>

        <div className="col-sm-9">
          {panel}
        </div>
        </div>
        <div className="row">
          <Footer />
        </div>


      </div>
    );
  }
}
