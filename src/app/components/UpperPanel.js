import React from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import '../css/upperPanel.css';

export class UpperPanel extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        notificationData:{
          labels: ['Total (last 7 days)', 'New'],
          datasets:[
            {
              backgroundColor: ['white', '#595959'],
              borderColor: ['white', '#595959'],
              data: [50,4],
            }
          ]
        },
        tripData:{
          labels: ['Last six days', 'Today'],
          datasets:[
            {
              backgroundColor: ['white', '#595959'],
              borderColor: ['white', '#595959'],
              data: [50,10],
            }
          ]
        }
      }
  }

  render() {
    return (
      <div style={{height: "160px", backgroundColor: "#428bca"}} className="upperPanel">
      <div className="col-sm-12">
        <div className="col-sm-4">
          <div className="panelHeaderName">
            <h3>New Notifications</h3>
          </div>
          <div className="notificationChart">
            <Doughnut
              data= {this.state.notificationData}
              options={{
              maintainAspectRatio: false,
              responsive: true,
              defaultFontColor: 'white',
              legend:{
                display: false
              },
              title:{
                display:false,
                text:'New notifications/Total notifications',
                fontSize:14
              }
              }}
            />
          </div>
         </div>

        <div className="col-sm-4">
          <div className="panelHeaderName">
            <h3>Number of Trips (last 7 days)</h3>
          </div>
          <div className="tripChart">
            <Pie
              data= {this.state.tripData}
              options={{
              maintainAspectRatio: false,
              responsive: true,
              defaultFontColor: 'white',
              legend:{
                display: false
              },
              title:{
                display:false,
                text:'New notifications/Total notifications',
                fontSize:14
              }
              }}
            />
            </div>
         </div>

        <div className="col-sm-4">
          <div className="panelHeaderName">
            <h3>Total Number of Emplyoees</h3>
          </div>
          <div className="employeeNumber">
            <div><i className="fa fa-user-circle icon" aria-hidden="true"></i></div>
          </div>
          <div className="panelHeaderSubName">
            <h3>3</h3>
          </div>
         </div>

      </div>
      </div>
    )
  }
}
