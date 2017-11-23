import React from 'react';

export class OverviewHeader extends React.Component {
  
  render() {
      
    var styleNav = {
        height: "70px",
        backgroundColor: "#009688"
    };
    return ( 
      <div>
        <nav className="navbar navbar-default" style={styleNav}>
        /*
        //date and hour
        <div className="col-sm-3 w3-display-left">
          <i className="fa fa-clock-o" aria-hidden="true" style="font-size: 36px; margin-right: 15px; color: whitesmoke">   april 2017</i>
        </div>
        
        //company name
        <div className="col-sm-6 w3-display-middle">
          <i className="fa fa-money w3-display-middle" aria-hidden="true" style="font-size: 36px;  margin-right: 15px; color: whitesmoke">   Consulting Company</i>
        </div>
        
        //user panel
        <div className="col-sm-3 w3-display-right"  >
             <div className="dropdown w3-display-right" style="margin-right: 10px">
             <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" style="background-color: #B2DFDB">
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
        */
      </nav>
    </div>
    );
  }
}