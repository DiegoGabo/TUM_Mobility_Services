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
import  {ConfigurationPanel} from './ConfigurationPanel';
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
                    vehicleImage: "0",
                    vehicleModel: "",
                    gpsLat: "0",
                    gpsLng: "0",
                    panel: "Company Overview",
                    activeMenu: "Company Overview",
                    activeSubMenu: "Last Notifications",
                    carData: [],
                    lastTrip: [],
                    }
      this.changeEmployee=this.changeEmployee.bind(this)
      this.changeVehicle=this.changeVehicle.bind(this)
      this.changeTrip=this.changeTrip.bind(this)
      this.changePanel=this.changePanel.bind(this)
      this.changeActiveMenu=this.changeActiveMenu.bind(this)
      this.changeActiveSubMenu=this.changeActiveSubMenu.bind(this)
      this.changeGPS=this.changeGPS.bind(this)
  }

  //modify employee state
  changeEmployee(newEmployee, newEmployeeName)
  {
      this.setState({ employee: newEmployee});
      this.setState({ employeeName: newEmployeeName});
      this.setState({trip: "0"})
  }
    
  changeGPS(lat, lng){
      this.setState({gpsLat: lat, gpsLng: lng})
  }

  //modify trip state
  changeTrip(newTrip)
  {
      this.setState({trip: newTrip});
  }

  changeVehicle(newVehicle, newImage, newModel){
      console.log(newVehicle)
      this.setState({vehicle: newVehicle, vehicleImage: newImage, vehicleModel: newModel})
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
      this.changeActiveSubMenu("Last Notifications")
  }

  changeActiveSubMenu(newSubMenu){
      this.setState({activeSubMenu: newSubMenu})
  }

  render() {

    let latitude = 48.19284
    let longitude = 11.568518
    let acceleration = 4
    let generalRisk = 0
    let energy = 3.71
    let fuel = 20
    let employeeName
    let map
    let configurationPanel = <div></div>

    if(this.state.employee == "0")
    {
        latitude = 48.19284
        longitude = 11.568518
        acceleration = 4
        generalRisk = 2
        energy = 3.71
        fuel = 10
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
            console.log(tripUrl)
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
        if(fuel==null || fuel==0){
            fuel=10
        }
        if(energy==null||energy==0){
            energy=45
        }
        panel = <div>
                    <KpiHeader employee={this.state.employeeName}/>
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
        
        let url = 'https://bemostwanted.herokuapp.com/api/' + this.state.vehicle + '/trips/last'
        fetch(url).then(res => res.json()).then(lastTrip => this.setState({lastTrip}))
        let lat=48.19284
        let lng=11.568518
        let vin="BM12345"
        let fuel=20
        let charge=30
        try{
            lat = this.state.lastTrip.gpsLat
            lng = this.state.lastTrip.gpsLng
            fuel = this.state.lastTrip.fuelConsumption
            charge = this.state.lastTrip.lastTripElectricEnergyConsumptionOverall
            vin = this.state.lastTrip.vinBmw
        }
        catch(e){}
        
        panel = <div><VehicleDetails 
            vehicle={this.state.vehicle}
            model={this.state.vehicleModel}
            image={this.state.vehicleImage}
            vin={vin}
            fuel={fuel}
            charge={charge}
            changeGPS={this.changeGPS}
            /></div>
        map = <MapPosition latitude={lat} longitude={lng}/>
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
        configurationPanel = <ConfigurationPanel />
        panel = <div>
                    <NotificationPanels
                      changePanel={this.changePanel}
                      changeEmployee={this.changeEmployee}
                      changeTrip={this.changeTrip}
                      changeActiveMenu={this.changeActiveMenu}
                      changeActiveSubMenu={this.changeActiveSubMenu}
                      changeVehicle={this.changeVehicle}/>
                </div>
    }

    if(this.state.panel=="Cost/Benefit Evaluation")
    {
        panel = <CostPanels/>
    }

    if(this.state.panel=="Key Driving Indicators")
    {
        panel = <div>
                    <KpiHeader employee="Overview Rating"/>
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
          {configurationPanel}
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
