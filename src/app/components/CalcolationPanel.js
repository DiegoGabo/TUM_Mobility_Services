import React from 'react';

import '../css/calcolationPanel.css';
import {Bar, Line, Pie} from 'react-chartjs-2';

export class CalcolationPanel extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        chartData:{
          labels: ['Mentainance Costs', 'Fuel Costs'],
          datasets:[
            {
              label:'2016',
              backgroundColor: "#3B3838",
              data: [400,100],
            }, {
              label:'2017',
              backgroundColor: "#00B0F0",
              data: [370,95],
            }
          ]
        }
      }
  }

  render() {
    return (
      <div className="filter_panel_calcolation">
      <div className="w3-bar panel">
        <div className="row">
          <h3 className="kpi_title">Company Yearly Costs</h3>
        </div>
        <div className="row calcolationRow">
          <Bar
            data= {this.state.chartData}
            options={{
            title:{
              display:true,
              text:'Overall variable costs (in thousand euro)',
              fontSize:10
            }
            }}
          />
        </div>
      </div>
      </div>
    );
  }
}
