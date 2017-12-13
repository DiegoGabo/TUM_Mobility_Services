import React from 'react';
import '../css/rankingPanel.css';

export class RankingPanel extends React.Component {

  render() {
    return (
      <div className="filter_panel_ranking">
      <li className="w3-bar panel">
        <div className="row">
          <h3 className="kpi_title">Employee Ranking</h3>
        </div>
        <div className="row rankingRow">
          <table class="table table-hover rankingTable">
            <tr>
              <th>Rank</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Score</th>
            </tr>
            <tr><td>____</td><td>________</td><td>________</td><td>___</td><td>_____</td></tr>
            <tr class="success">
              <td>1</td>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>10/10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Eve</td>
              <td>Jackson</td>
              <td>24</td>
              <td>8/10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John</td>
              <td>Doe</td>
              <td>34</td>
              <td>7/10</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Stephanie</td>
              <td>Landon</td>
              <td>47</td>
              <td>6/10</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mike</td>
              <td>Johnson</td>
              <td>19</td>
              <td>2/10</td>
            </tr>
        </table>
        </div>
      </li>
      </div>
    );
  }
}
