import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';
import '../css/registrationPage.css';

export class RegistrationPage extends React.Component {

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
            <h1>FleetMe <span className="badge badge-default login_badge">Registration</span></h1>
          </div>
          <hr className="side" />
          <br />
          <p>Please insert your data to register on Fleet Management System:</p>
          <div className="container">
            <form>
					<div className="col-sm-12">
						<div className="row">
							<div className="col-sm-6 form-group">
								<label>First Name</label>
								<input type="text" placeholder="Enter First Name Here.." className="form-control"/>
							</div>
							<div className="col-sm-6 form-group">
								<label>Last Name</label>
								<input type="text" placeholder="Enter Last Name Here.." className="form-control"/>
							</div>
						</div>					
						<div className="form-group">
							<label>Address</label>
							<textarea placeholder="Enter Address Here.." rows="1" className="form-control"></textarea>
						</div>	
						<div className="row">
							<div className="col-sm-4 form-group">
								<label>City</label>
								<input type="text" placeholder="Enter City Name Here.." className="form-control"/>
							</div>	
							<div className="col-sm-4 form-group">
								<label>State</label>
								<input type="text" placeholder="Enter State Name Here.." className="form-control"/>
							</div>	
							<div className="col-sm-4 form-group">
								<label>Zip</label>
								<input type="text" placeholder="Enter Zip Code Here.." className="form-control"/>
							</div>		
						</div>
						<div className="row">
							<div className="col-sm-6 form-group">
								<label>Title</label>
								<input type="text" placeholder="Enter Designation Here.." className="form-control"/>
							</div>		
							<div className="col-sm-6 form-group">
								<label>Company</label>
								<input type="text" placeholder="Enter Company Name Here.." className="form-control"/>
							</div>	
						</div>						
					<div className="form-group">
						<label>Phone Number</label>
						<input type="text" placeholder="Enter Phone Number Here.." className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Email Address</label>
						<input type="text" placeholder="Enter Email Address Here.." className="form-control"/>
					</div>	
					<div className="form-group">
						<label>Website</label>
						<input type="text" placeholder="Enter Website Name Here.." className="form-control"/>
					</div>
					<button type="button" className="btn btn-default loginButton">Submit</button>					
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


