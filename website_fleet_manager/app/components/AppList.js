import React from 'react';

import  {AppElement} from './AppElement';
import {Collapse} from 'react-bootstrap';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';
import '../css/appList.css'; 

export class AppList extends React.Component {

  constructor(props) {
  	super(props)
    this.state = {detailed: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
  	console.log(this.state.detailed)
  	this.setState({detailed: !this.state.detailed})
  }

  render() {

    return (
      <div>

        <p className="expand" onClick={this.toggle}>
          <i className="fa fa-chevron-down" aria-hidden="true" onClick={this.toggle}></i>
        </p>

        <Collapse in={this.state.detailed}>
          <div className="card card-block">
            <AppElement />
            <AppElement />
            <AppElement />
            <AppElement />
          </div>
        </Collapse>

    </div>
    );
  }
}
