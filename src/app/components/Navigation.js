/*Component that renders the Panel with info about the employee*/

import React from 'react';
import Select from 'react-select';

import  {NavigationTitle} from './NavigationTitle';
import  {NavigationSubTitle} from './NavigationSubTitle';

import '../css/navigation.css';

export class Navigation extends React.Component {

  constructor(props)
  {
      super(props);
      this.state = {employee: "0",
                    trip: "0",
                    activeMenu: "Overview Company",
                    listTrip: [],
                    listEmployee: [],
                   }
      this.handleChangeEmploee = this.handleChangeEmploee.bind(this)
      this.handleChangeTrip = this.handleChangeTrip.bind(this)
      this.changeActiveMenu = this.changeActiveMenu.bind(this)
  }

   //function executed when you change the value of select employee menu
   handleChangeEmploee(e) {
		this.setState({
			employee: e.target.value,
            trip: "0"
		});
       this.props.changeEmployee(e.target.value)
       let tripUrl = 'http://localhost:3000/user/' + e.target.value + '/trips'
       fetch(tripUrl)
              .then(res => res.json())
              .then(listTrip => this.setState({listTrip}))
       
  }

   //function executed when you change the value of select trip menu
   handleChangeTrip(e) {
		this.setState({
			trip: e.target.value
		});
       this.props.changeTrip(e.target.value)
  }

  changeActiveMenu(newMenu)
  {
      this.setState({activeMenu: newMenu})
  }
    
  render() {
      
    let OverviewMenu = <div></div>
    let EmployeeMenu = <div></div>
    let VehicleMenu = <div></div>
    
    if(this.state.activeMenu=="Overview Company")
    {   
        OverviewMenu=
            <div>
              <NavigationSubTitle title="Last Notifications" />
              <NavigationSubTitle title="Average KPI-index" />
              <NavigationSubTitle title="Cost Overview" />
            </div>
    }
      
    if(this.state.activeMenu=="People Management")
    {
        if(this.state.employee == "0")
        {
            EmployeeMenu=
                <div>
                  <NavigationSubTitle title="All Employees" />
                </div>
        }
        else
        {
            if(this.state.trip == "0")
            {
                EmployeeMenu=
                <div>
                  <NavigationSubTitle title={this.state.employee} />
                  <NavigationSubTitle title="All Trips" />
                </div>   
            }
            else
            {
                EmployeeMenu=
                <div>
                  <NavigationSubTitle title={this.state.employee} />
                  <NavigationSubTitle title={this.state.trip} />
                  <NavigationSubTitle title="All KPIs" />
                </div>   
            }
        }
    }
    
    return (
      <div className="navigation_all">

        <div className="navigation_title">
            <h2 className="navigation_title-text">Navigation</h2>
        </div>

        <NavigationTitle title="Overview Company" icon="fa fa-building-o" handleClick={this.changeActiveMenu}/>
        {OverviewMenu}
        <hr className ="hr_Row"/>
        
        <NavigationTitle title="People Management" icon="fa fa-user-o" handleClick={this.changeActiveMenu}/>
        {EmployeeMenu}
        <hr className ="hr_Row"/>
        
        <NavigationTitle title="Vehicle Management" icon="fa fa-car" handleClick={this.changeActiveMenu}/>

      </div>
    );
  }
}
