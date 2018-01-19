/*Component in which there are the information about acceleration and pre-emptive driving*/
import {VehiclePanel} from './VehiclePanel'

import React from 'react';

export class VehicleManagementPanels extends React.Component {

  constructor(props)
  {
    super(props)
     this.setState({listVehicles: []})
  }

  //obtain the list of employees
  componentDidMount()
  {
      // fetch('https://bemostwanted.herokuapp.com/users')
      //         .then(res => res.json())
      //         .then(listEmployee => this.setState({listEmployee}))
  }

  render()
  {
    //create the list of employees
    // let employeePanels
    // try{
    //   employeePanels = this.state.listEmployee.map((employee) =>
    //                         <EmployeePanel
    //                                 name={employee.name}
    //                                 key={employee._id}
    //                                 value={employee.id}
    //                                 position={employee.position}
    //                                 image={employee.image}
    //                                 ranking={employee.id}
    //                                 changePanel={this.props.changePanel}
    //                                 changeEmployee={this.props.changeEmployee}/>)
    // }
    // catch(e){}

    return (
      <div>
        <VehiclePanel/>
        <VehiclePanel/>
        <VehiclePanel/>
        <VehiclePanel/>
        <VehiclePanel/>
        <VehiclePanel/>
      </div>
    );
  }
}
