/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/employeePanel.css';

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
      <div className = "contentPanel employeePanel">
        <div className="w3-bar panel" value={this.props.value} onClick={this.handleClick}>
         <div className="col-sm-2 content_panel_column first_content_panel_column">
            <i className="fa fa-user-circle content_icon" aria-hidden="true"></i>
         </div>

         <div className="col-sm-4 content_panel_column">
            <h4>{this.props.name}</h4>
         </div>

         <div className="col-sm-4 content_panel_column">
            <h4>{this.props.position}</h4>
         </div>

         <div className="col-sm-1 content_panel_column">
            <h4>{this.props.ranking}</h4>
         </div>

         <div className="col-sm-1 content_panel_column">
            <i className="fa fa-trash-o trashIcon" aria-hidden="true"></i>
         </div>
        </div>
      </div>
    );
  }
}
