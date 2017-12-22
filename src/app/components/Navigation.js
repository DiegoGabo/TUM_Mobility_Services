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
      this.state = {
                    activeMenu: "Overview Company",
                   }
      this.changeActiveMenu = this.changeActiveMenu.bind(this)
      this.handleClickEmployee = this.handleClickEmployee.bind(this)
  }

  //modify the active menu that is in navigation panel and can be Overview Company, People Management or Vehicle Management
  changeActiveMenu(newMenu)
  {
      this.setState({activeMenu: newMenu})
      this.props.changeEmployee("0","")
      this.props.changePanel(newMenu)
  }

  //mofify the active menu in navigation and the panel when you click on a specific employee
  handleClickEmployee(){
      
      this.props.changeEmployee(this.props.employee, this.props.employeeName)
      this.changeActiveMenu("People Management")
  }
    
  render() {
      
    let OverviewMenu = <div></div>
    let EmployeeMenu = <div></div>
    let VehicleMenu = <div></div>
    
    //Render the Overview Company section if it is active 
    if(this.state.activeMenu=="Overview Company")
    {   
        OverviewMenu=
            <div>
              <NavigationSubTitle title="Last Notifications" active="true"/>
              <NavigationSubTitle title="Average KPI-index" active="false"/>
              <NavigationSubTitle title="Cost Overview" active="false"/>
            </div>
    }
    
    //Render the People Management section if it is active 
    if(this.state.activeMenu=="People Management")
    {
        if(this.props.employee == "0")
        {
            EmployeeMenu=
                <div>
                  <NavigationSubTitle title="All Employees" />
                </div>
        }
        else
        {
            if(this.props.trip == "0")
            {
                EmployeeMenu=
                <div>
                  <NavigationSubTitle title={this.props.employeeName} active="false"/>
                  <NavigationSubTitle title="All Trips" active="false"/>
                </div>   
            }
            else
            {
                EmployeeMenu=
                <div>
                  <div onClick={this.handleClickEmployee}><NavigationSubTitle title={this.props.employeeName} active="true"/></div>
                  <NavigationSubTitle title={this.props.trip.substring(0, 10)} active="false" />
                  <NavigationSubTitle title="All KPIs" active="false"/>
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
