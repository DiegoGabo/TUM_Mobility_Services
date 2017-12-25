/*Component in which there are the information about acceleration and pre-emptive driving*/
import {EmployeePanel} from './EmployeePanel'

import React from 'react';

export class PeopleManagementPanels extends React.Component {

  constructor(props)
  {
    super(props)
    this.setState({listEmployee: []})
  }

  //obtain the list of employees
  componentDidMount()
  {
      fetch('http://localhost:3000/users')
              .then(res => res.json())
              .then(listEmployee => this.setState({listEmployee}))
  }
    
  render() 
  { 
    //create the list of employees
    let employeePanels
    try{
      employeePanels = this.state.listEmployee.map((employee) =>
                            <EmployeePanel 
                                    name={employee.name}
                                    key={employee._id}
                                    value={employee.id}
                                    position="Senior Consultant"
                                    ranking={employee.id}
                                    changePanel={this.props.changePanel}
                                    changeEmployee={this.props.changeEmployee}/>)
    }
    catch(e){}
        
    return (
      <div>
        {employeePanels}
      </div>
    );
  }
}
