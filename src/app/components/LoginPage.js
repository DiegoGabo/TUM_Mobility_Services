/*Component that renders the login page which is rendered as soon as the application is launched*/

import React from 'react';
import ReactDOM from 'react-dom';
import  {Overview} from './Overview';
import  {RegistrationPage} from './RegistrationPage.js';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/login_page_style.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 


export class LoginPage extends React.Component {

  /*
  Constructor that initialize the class.
  changePage.bind allow the class to use this.changePage
  */
  constructor(props) {
	super(props);
	this.changePageToOverview = this.changePageToOverview.bind(this);
    this.changePageToRegistration= this.changePageToRegistration.bind(this);
  }
  
  changePageToOverview() {
   //check login and password
   ReactDOM.render(
        <Overview />,
 		document.getElementById('app')
    );
	//window.location.replace("../app/overview.html");
  }

  changePageToRegistration() {
   //go to registration page
   ReactDOM.render(
        <RegistrationPage />,
 		document.getElementById('app')
    );
	
  }
   
 
  render() {
    return (
      <div className="login_div">
        <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video muted src="app/videos/login_page_video.mp4" autoPlay loop>
          </video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content text-md-center">
          <div className="container">
            <h1>FleetMe <span className="badge badge-default login_badge">LogIn</span></h1>
          </div>
          <hr className="side" />
          <br />
          <p>Please log in with your credentials to the Fleet Management System:</p>
          <div className="container login">
            <form>
              <div className="form-group">
                <label>Account name (email address)</label>
                <input type="email" className="form-control" placeholder="Email" />
                </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="button_list">
                <div className="col-sm-6"><button type="submit" className="btn btn-default loginButton" onClick={this.changePageToOverview}>Login</button></div>
                <div className="col-sm-6"><button type="submit" className="btn btn-default loginButton" onClick={this.changePageToRegistration}>Register</button></div>
              </div>
            </form>
         </div>
         <div className="container footer">
           <footer>Created by Be Most Wanted (Prototype Version)</footer>
         </div>
        </div>
      </header>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="../script/bootstrap.min.js"></script>
    </div>
    );
  }
}
