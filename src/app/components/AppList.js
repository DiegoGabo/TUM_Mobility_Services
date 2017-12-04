/*Component that contain the expandible menu with all the applications of FleetMe*/
import React from 'react';

import  {AppElement} from './AppElement';
import {Collapse} from 'react-bootstrap';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';
import '../css/appList.css'; 

export class AppList extends React.Component {

  //constructor to set the initial state necessaty to obtain the collapsation of the menu
  constructor(props) {
  	super(props)
    this.state = {detailed: false}
    this.toggle = this.toggle.bind(this)
  }

  //function launched after click on arrow to collapse/expand the applist
  toggle() {
  	console.log(this.state.detailed)
  	this.setState({detailed: !this.state.detailed})
  }

  render() {

    return (
      <div>

        {/*clickable arrow*/}
        <p className="expand" onClick={this.toggle}>
          <i className="fa fa-chevron-down" aria-hidden="true" onClick={this.toggle}></i>
        </p>

        {/*list of application*/}
        <Collapse in={this.state.detailed}>
          <div className="card card-block">
            <AppElement image="fa fa-car" title="Vehicle Management" subtitle="Manage all vehicles of your company"/>
            <AppElement image="fa fa-user-circle" title="Employees Management" subtitle="Manage all employees of your company"/>
            <AppElement image="fa fa-bar-chart" title="KPI Management" subtitle="Manage KPI"/>
            <AppElement image="fa fa-map" title="Trips Management" subtitle="Manage all trips of your company"/>
          </div>
        </Collapse>

    </div>
    );
  }
}
