import React from 'react';
import '../css/rankingPanel.css';

export class RankingPanel extends React.Component {

  render() {
    return (
      <div className="filter_panel_ranking">
      <div className="w3-bar panel">
        <div className="row">
          <h3 className="kpi_title">Employee Benefits (2017)</h3>
        </div>
        <div className="row rankingRow">
          <table class="table table-hover rankingTable">
            <tr>
              <th>Rank</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Voucher</th>
              <th>KDI-Score</th>
              <th>delivered?</th>
              <th></th>
            </tr>
            <tr><td>____</td><td>________</td><td>________</td><td>_________</td><td>__________</td><td>_____</td></tr>
            <tr class="success">
              <td>1</td>
              <td>Marcus</td>
              <td>Aurelius</td>
              <td>50$ Amazon</td>
              <td>7.5/10</td>
              <td><input className="checkBox" type="checkbox" checked/></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Max</td>
              <td>Mustermann</td>
              <td>25$ Amazon</td>
              <td>5/10</td>
              <td><input className="checkBox" type="checkbox" checked/></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Christoph</td>
              <td>NG</td>
              <td>no vouchers</td>
              <td>2/10</td>
              <td><input className="checkBox" type="checkbox"/></td>
              <td></td>
            </tr>
        </table>
        </div>
      </div>
      </div>
    );
  }
}
