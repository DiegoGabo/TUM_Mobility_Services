/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';


export class EmployeePanel extends React.Component {
    
  constructor(props)
  {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  //modify the current employee selected and the current panel 
  handleClick(e)
  {
      this.props.changeEmployee(this.props.value, this.props.name)
      this.props.changePanel("Trip Management")
  }
    
  render() {
    return (
      <div>
        <div className="row" value={this.props.value} onClick={this.handleClick}>
         <div className="col-sm-2">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
         </div>
        
         <div className="col-sm-4">
            <h4>{this.props.name}</h4>
         </div>
        
         <div className="col-sm-4">
            <h4>{this.props.position}</h4>
         </div>
        
         <div className="col-sm-1">
            <h4>{this.props.ranking}/10</h4>
         </div>
        
         <div className="col-sm-1">
            <i className="fa fa-trash-o" aria-hidden="true"></i>
         </div>
        </div>
      </div>
    );
  }
}
