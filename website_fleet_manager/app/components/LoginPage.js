import React from 'react';
import ReactDOM from 'react-dom';
import  {Overview} from './Overview';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/login_page_style.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


export class LoginPage extends React.Component {

  constructor(props) {
	super(props);
	this.changePage = this.changePage.bind(this);
  }
  
  changePage() {
   console.log("sono stato chiamato"); 
   ReactDOM.render(
        <Overview />,
 		document.getElementById('loginpage')
    );
	//window.location.replace("../app/overview.html");
  }

  render() {
    return (
      <div>
        <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video muted src="app/videos/login_page_video.mp4" autoPlay loop>
          </video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content text-md-center">
          <div className="container">
            <h1>FleetMe <span className="badge badge-primary">LogIn</span></h1>
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
              <button type="submit" className="btn btn-default loginButton" onClick={this.changePage}>Login</button>
            </form>
         </div>
         <div className="container footer">
           <footer>Created by Be Most Wanted (Prototype Version)</footer>
         </div>
        </div>
      </header>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
    </div>
    );
  }
}
