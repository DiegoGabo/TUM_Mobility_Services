/*Component that renders the Panel with info about the employee*/

import React from 'react';

import '../css/filter.css';

export class Filter extends React.Component {

  render() {
    return (
      <div>
        
        <div className="filter_title">
            <div className="filter_title"><h2>Selection options</h2></div>
        </div>
        
        <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-user-o icon" aria-hidden="true"></i>
          </div>
        
          <div className="col-sm-8">
            <h3 className="select_text">Selection on Empl./Trip</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-down icon" aria-hidden="true"></i>
          </div>
        </div>
        
        <div className="row"> 
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <div className="col-sm-12">
              <h4 className="filter_text"><i className="fa fa-search-plus" aria-hidden="true"></i> Employee - Hans Peter</h4>
            </div>
        
            <div className="col-sm-12">
              <h4 className="filter_text"><i className="fa fa-search-plus" aria-hidden="true"></i> Trip - 2017/10/02 #1 </h4>
            </div>
          </div>
        </div>
        
        <div className="row"></div>
        <hr/>
        <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-industry icon" aria-hidden="true"></i>
          </div>

          <div className="col-sm-8">
            <h3 className="select_text">Selection on Empl./Trip</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-right icon" aria-hidden="true"></i>
          </div>
        </div>
        
        <hr/>
        <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-usd icon" aria-hidden="true"></i>
          </div>

          <div className="col-sm-8">
            <h3 className="select_text">Selection on Empl./Trip</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-right icon" aria-hidden="true"></i>
          </div>
        </div>
        
      </div>
    );
  }
}
