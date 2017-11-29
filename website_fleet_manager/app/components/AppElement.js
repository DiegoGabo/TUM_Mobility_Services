import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';
import '../css/appElement.css';

export class AppElement extends React.Component {

  render() {
    return (
        <div className="col-sm-3 appElement">
          <div className="card">
            <i className={this.props.image} aria-hidden="true"></i>
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.subtitle}}</p>
          </div>
        </div>
    );
  }
}
