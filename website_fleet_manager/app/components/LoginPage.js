import React from 'react';

//import '../css/login_page_style.css';

export class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video muted src="videos/login_page_video.mp4" autoplay="" loop="">
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
              <button type="submit" className="btn btn-default loginButton">Login</button>
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
