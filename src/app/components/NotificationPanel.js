/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/notificationPanel.css';


const empty_star = <span className="fa fa-star-o empty_star icon"></span>;
const brake = <span className="fa fa-chain-broken icon"></span>;
const energy = <span className="fa fa-battery-quarter icon"></span>;



export class NotificationPanel extends React.Component {

  constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
      if(this.props.type == "Employee"){
          this.props.changeActiveMenu("People Management")
          this.props.changePanel("Kpi Management")
          this.props.changeEmployee(this.props.id, this.props.name)
          this.props.changeTrip(this.props.date)
      }
      else{
          this.props.changeActiveMenu("Vehicle Management")
          this.props.changePanel("Vehicle Management")
      }
  }

  render() {
    let value = this.props.value + 'px'

    let fuel = <div className="progress"><div className="progress-bar panel_bar" role="progressbar" aria-valuenow="70"aria-valuemin="0" aria-valuemax="60" style={{width: value}}></div></div>
    let star = <div>{empty_star} {empty_star} {empty_star} {empty_star} {empty_star}</div>

    let bmwDescription = this.props.type == "Vehicle" ? "BMW" : ""

    let graphics = fuel;
    switch (this.props.problem) {
      case '':
        graphics = fuel;
        break;
      case 'Bad Driving Behaviour':
        graphics = star;
        break;
      case 'Inspection of Braking System':
        graphics = brake;
      case 'Low Charging State':
        graphics = energy;
        break;
      case 'Low Utilization':
        graphics = fuel;
        break;
    }

    return (
      <div onClick={this.handleClick} className="contentPanel notificationPanel">

        <div className="w3-bar panel">

          <div className="col-sm-3 content_panel_column first_content_panel_column">
            <h4 className ="dateNotification">{this.props.date}</h4>
            <h4 className ="hourNotification">{this.props.hour}</h4>
          </div>

          <div className="col-sm-3 content_panel_column">
            <div className="row"><h4>{bmwDescription}{this.props.name}</h4></div>
            <div class="notificationImage">
              <img src={this.props.photo}/>
            </div>
          </div>

          <div className="col-sm-4 content_panel_column">
            <div className="col-sm-1 content_panel_column">
            </div>
            <div className="col-sm-11 content_panel_column">
              <div className="row"><h4>{this.props.problem} ({this.props.value})</h4></div>
              <div className="row progress_row">
                  {graphics}
              </div>
            </div>
          </div>

          <div className="col-sm-2 content_panel_column">
            <div className="col-sm-6"></div>
            <div className = "col-sm-4 buttonEmailDiv">
              <button className = "buttonEmail">PDF</button>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
