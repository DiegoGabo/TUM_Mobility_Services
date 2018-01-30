/*Component that renders the Panel with info about the employee*/

import React from 'react';

import '../css/kpiHeader.css';

export class KpiHeader extends React.Component {

  render() {

    return (
      <div>
        <div className="panel_header">

          <div className="col-sm-4">
            <div className="col-sm-2">
              <i className="fa fa-user-circle icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <h3>{this.props.employee}</h3>
              <hr/>
            </div>
          </div>

           <div className="col-sm-4">
            <div className="col-sm-2">
              <i className="fa fa-list icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <h3>Description</h3>
              <hr/>
            </div>
          </div>

           <div className="col-sm-4">
            <div className="col-sm-2">
              <i className="fa fa-bar-chart icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <h3>Evaluation</h3>
              <hr/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
