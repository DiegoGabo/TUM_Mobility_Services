/*Component in which there are the information about acceleration and pre-emptive driving*/
import {EmployeePanel} from './EmployeePanel'

import React from 'react';

export class PeopleManagementPanels extends React.Component {

  constructor(props)
  {
    super(props)
    this.setState({listEmployee: [],
                   order: "true",
                  })
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
      if (this.state.order == "false"){
          this.setState({order:"true"})
      }
      else{
          this.setState({order:"false"})
      }
  }

  //obtain the list of employees
  componentDidMount()
  {
      fetch('https://bemostwanted.herokuapp.com/users')
              .then(res => res.json())
              .then(listEmployees => this.setState({listEmployee: listEmployees,
                                                    order: "true"}))
  }

  render()
  {
    //create the list of employees
    let employeePanels
    try{
        if (this.state.order == "true"){
            employeePanels = this.state.listEmployee.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} ).map((employee) =>
                            <EmployeePanel
                                    name={employee.name}
                                    key={employee._id}
                                    value={employee.id}
                                    position={employee.position}
                                    image={employee.image}
                                    ranking={employee.id}
                                    changePanel={this.props.changePanel}
                                    changeEmployee={this.props.changeEmployee}/>)
        }                                                                                                                           
        if (this.state.order == "false"){
             employeePanels = this.state.listEmployee.sort(function(a,b) {return (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0);} ).map((employee) =>
                            <EmployeePanel
                                    name={employee.name}
                                    key={employee._id}
                                    value={employee.id}
                                    position={employee.position}
                                    image={employee.image}
                                    ranking={employee.id}
                                    changePanel={this.props.changePanel}
                                    changeEmployee={this.props.changeEmployee}/>)                                                                                                                   
        }                                                                                                                
      
    }
    catch(e){}

    return (
      <div>
        <div>
        <div className="content_header">
         <div className="col-sm-2 content_header_column">
         </div>

         <div className="col-sm-4 content_header_column">
            <div className="col-sm-2"><i className="fa fa-user-circle icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Name - Last Name</h3><hr/></div>
         </div>

         <div className="col-sm-4 content_header_column">
            <div className="col-sm-2"><i className="fa fa-id-card-o icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Position</h3><hr/></div>
         </div>

         <div className="col-sm-2 content_header_column">
            <div className="col-sm-12" onClick={this.handleClick}><i className="fa fa-sort-numeric-asc icon" aria-hidden="true"></i></div>
         </div>

        </div>
      </div>
        {employeePanels}
      </div>
    );
  }
}
