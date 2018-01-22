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
      this.handleClickEmployee = this.handleClickEmployee.bind(this)
      this.handleClickLastNotifications = this.handleClickLastNotifications.bind(this)
      this.handleClickAverageKpiIndex = this.handleClickAverageKpiIndex.bind(this)
      this.handleClickCostOverview = this.handleClickCostOverview.bind(this)
      this.handleClickPeopleManagement = this.handleClickPeopleManagement.bind(this)
  }

  //mofify the active menu in navigation and the panel when you click on a specific employee
  handleClickEmployee(){
      this.props.changeEmployee(this.props.employee, this.props.employeeName)
      this.props.changePanel("Trip Management")
  }

  handleClickLastNotifications(){
      this.props.changeActiveSubMenu("Last Notifications")
      this.props.changePanel("Company Overview")
  }

  handleClickAverageKpiIndex(){
      this.props.changeActiveSubMenu("Key Driving Indicators")
      this.props.changePanel("Key Driving Indicators")
  }

  handleClickCostOverview(){
      this.props.changeActiveSubMenu("Cost/Benefit Evaluation")
      this.props.changePanel("Cost/Benefit Evaluation")
  }

  handleClickPeopleManagement(){
      this.props.changeActiveMenu("People Management")
  }

  render() {

    let OverviewMenu = <div></div>
    let EmployeeMenu = <div></div>
    let VehicleMenu = <div></div>

    let lastNotificationsActive = this.props.activeSubMenu == "Last Notifications" ? "true" : "false";
    let averageKpiActive = this.props.activeSubMenu == "Key Driving Indicators" ? "true" : "false";
    let costOverviewActive = this.props.activeSubMenu == "Cost/Benefit Evaluation" ? "true" : "false";

    //Render the Overview Company section if it is active
    if(this.props.activeMenu=="Company Overview")
    {
        OverviewMenu=
            <div>
              <div onClick={this.handleClickLastNotifications}><NavigationSubTitle title="Last Notifications"
                                description="Emplyoees that show a bad driving behaviour and warnings of vehicles are listed."
                                active={lastNotificationsActive}/></div>
              <div onClick={this.handleClickAverageKpiIndex}><NavigationSubTitle title="Key Driving Indicators"
                                description="The average driving indicators of all trips are evaluated."
                                active={averageKpiActive}/></div>
              <div onClick={this.handleClickCostOverview}><NavigationSubTitle title="Cost/Benefit Evaluation"
                                description="Budget dashboard of the company fleet department."
                                active={costOverviewActive}/></div>
            </div>
    }

    //Render the People Management section if it is active
    if(this.props.activeMenu=="People Management")
    {
        if(this.props.employee == "0")
        {
            EmployeeMenu=
                <div>
                  <NavigationSubTitle title="All Employees"
                                      description="Overview of all employees within the Fleet system"/>
                </div>
        }
        else
        {
            if(this.props.trip == "0")
            {
                EmployeeMenu=
                <div>
                  <div onClick={this.handleClickPeopleManagement}><NavigationSubTitle title="All Employees"
                                    description="Overview of all employees within the Fleet system"
                                    active="true"/></div>
                  <NavigationSubTitle title={this.props.employeeName}
                                    description="All trips of the selected employee"
                                    active="false" />
                </div>
            }
            else
            {
                EmployeeMenu=
                <div>
                  <div onClick={this.handleClickPeopleManagement}><NavigationSubTitle title="All Employees"
                                    description="Overview of all employees within the Fleet system"
                                    active="true"/></div>
                  <div onClick={this.handleClickEmployee}><NavigationSubTitle title={this.props.employeeName}
                                    description="All trips of the selected employee"
                                    active="true"/></div>
                  <NavigationSubTitle title={this.props.trip.substring(0, 10)}
                                    description="Key Driving Indicators of the selected trip"
                                    active="false" />
                </div>
            }
        }
    }

    return (
      <div className="navigation_all">

        <div className="navigation_title">
            <h2 className="navigation_title-text">Navigation</h2>
        </div>

        <NavigationTitle title="Company Overview" icon="fa fa-building-o icon"
                          description="Specific information regarding the whole company fleet are given. These include notifications, average driving statistcs and company impacts."
                           handleClick={this.props.changeActiveMenu}/>
        {OverviewMenu}
        <hr className ="hr_Row"/>

        <NavigationTitle title="People Management" icon="fa fa-user-o icon"
                          description="Specific employees can be selected as well as statistics to trips of each emyployee are given."
                          handleClick={this.props.changeActiveMenu}/>
        {EmployeeMenu}
        <hr className ="hr_Row"/>

        <NavigationTitle title="Vehicle Management" icon="fa fa-car icon"
                          description="In this section, the status of vehicles within the car pool can be inpected."
                          handleClick={this.props.changeActiveMenu}/>

      </div>
    );
  }
}
