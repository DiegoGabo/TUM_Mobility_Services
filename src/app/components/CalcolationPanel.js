import React from 'react';

import '../css/calcolationPanel.css';
import {Bar, Line, Pie} from 'react-chartjs-2';

export class CalcolationPanel extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        chartData:{
          labels: ['2017/Sep', '2017/Oct', '2017/Nov', '2017/Dec', '2018/Jan'],
          datasets:[
            {
              label: ['Maintenance Costs'],
              borderColor: "#3B3838",
              data: [2000,1800, 1700, 0, 1300],
            }, {
              label: ['Fuel Costs'],
              borderColor: "#F8BA71",
              data: [4000,3900, 2400, 500, 1800],
            }, {
              label: ['Employee Benefits Costs'],
              borderColor: "#00B0F0",
              data: [1,1,1,0,1],
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
          <h3 className="kpi_title">Company Cost Categories</h3>
        </div>
        <div className="row calcolationRow">
          <Line
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
