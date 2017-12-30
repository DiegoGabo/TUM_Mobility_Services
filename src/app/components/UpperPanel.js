import React from 'react';

export class UpperPanel extends React.Component {

  render() {
    return (
      <div style={{height: "200px", backgroundColor: "#428bca"}}>
      <div className="col-sm-12">
        <div className="col-sm-3">
          <div className="row">
            <h3>New Notifications</h3>
          </div>
          <div className="row">
            <h3>7</h3>
          </div>
         </div>
        
        <div className="col-sm-3">
          <div className="row">
            <h3>Overall Number of Trip</h3>
          </div>
          <div className="row">
            <h3>32</h3>
          </div>
         </div>
        
        <div className="col-sm-3">
          <div className="row">
            <h3>Weekly Number Trips</h3>
          </div>
          <div className="row">
            <h3>6</h3>
          </div>
         </div>
        
        <div className="col-sm-3">
          <div className="row">
            <h3>Total Number of Employees</h3>
          </div>
          <div className="row">
            <h3>5</h3>
          </div>
         </div>
        
      </div>
      </div>
    )
  }
}
