/*Header of the overview page in which there is Data-time, the company name and the menu with application*/

import React from 'react';
import Time from 'react-time'

import  {AppList} from './AppList';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';
import '../css/overviewHeader.css';


export class OverviewHeader extends React.Component {

  //initialize the initial state of date
  getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  }

  //constructor created because this component has a state necessary to manage time and data
  constructor(props) {
      super(props);
      this.state = {interval: null};
  }

  //update regurarly the value of Data-time
  componentDidMount() {
    const self = this;
    self.interval = setInterval(function() {
      self.setState({
        now: new Date(),
      });
    }, 1000);
  }

  //clear the value of Data-time when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {

    return (

      <nav className="navbar">
        
        {/*data-time*/}
        <div className="col-sm-3 w3-display-left nav_icon">
          <i className="fa fa-clock-o" aria-hidden="true">   <Time value={this.state.now} format="DD/MM/YYYY" /> <Time value={this.state.now} format="HH:mm:ss" /></i>
        </div>

        {/*company name*/}
        <div className="col-sm-6 w3-display-middle nav_icon">
          <i className="fa fa-money w3-display-middle" aria-hidden="true">   Consulting Company</i>
        </div>

        {/*profile information*/}
        <div className="col-sm-3 w3-display-right">
          <div className="dropdown w3-display-right">
            <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
              <span className="glyphicon glyphicon-user"></span>
                 Logged in as Steven Blind
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">Settings</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
        
        {/*list of application*/}
        <AppList />
        
      </nav>
    );
  }
}
