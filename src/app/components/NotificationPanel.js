/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/notificationPanel.css';

const employee_icon = <div className="row"><i className="fa fa-user-circle content_icon" aria-hidden="true"></i></div>
const car_icon = <div className="row"><i className="fa fa-car content_icon" aria-hidden="true"></i></div>
const empty_star = <span className="fa fa-star-o empty_star icon"></span>;
const brake = <span className="fa fa-chain-broken icon"></span>;
const energy = <span className="fa fa-battery-quarter icon"></span>;



export class NotificationPanel extends React.Component {

  render() {
    let value = this.props.value + 'px'
    let icon = this.props.type == 0 ? employee_icon : car_icon;
    let onClick = ""

    let fuel = <div className="progress"><div className="progress-bar panel_bar" role="progressbar" aria-valuenow="70"aria-valuemin="0" aria-valuemax="60" style={{width: value}}></div></div>
    let star = <div>{empty_star} {empty_star} {empty_star} {empty_star} {empty_star}</div>


    let graphics = fuel;
    switch (this.props.graphics) {
      case '0':
        graphics = fuel;
        break;
      case '1':
        graphics = star;
        break;
      case '2':
        graphics = brake;
        icon = <img src="https://carsales.pxcrush.net/carsales/car/cil/cc5510749349972002116.jpg?width=600&height=300&overlay&aspect=FitWithIn&watermark=1775422672"/>
        break;
      case '3':
        graphics = energy;
        icon = <img src="https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2013/11/bmw_i3_top_post.png?itok=bnK2Upuo"/>
        break;
      case '4':
        graphics = fuel;
        icon = <img src="http://sajam.rs/wp-content/uploads/msa2017_bmw_i8.jpg"/>
        break;
    }

    return (
      <div onClick={this.props.onClick} className="contentPanel notificationPanel">
        <div className="w3-bar panel">
          <div className="col-sm-3 content_panel_column first_content_panel_column">
            <h4>{this.props.date}</h4>
          </div>
          <div className="col-sm-4 content_panel_column">
            <div className="row"><h4>{this.props.name}</h4></div>
            {icon}
          </div>
          <div className="col-sm-5 content_panel_column">
            <div className="row"><h4>{this.props.problem}</h4></div>
            <div className="row progress_row">
                {graphics}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
