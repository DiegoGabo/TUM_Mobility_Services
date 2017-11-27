import React from 'react';

import '../css/starPanel.css';

const full_star = <span class="fa fa-star" style={{fontSize: '2em', color: 'orange'}}></span>;
const half_star = <span class="fa fa-star-half-o " style={{fontSize: '2em', color: 'orange'}}></span>;
const empty_star = <span class="fa fa-star-o" style={{fontSize: '2em'}}></span>;

export class StarPanel extends React.Component {

  render() {
    return (
      <li className="w3-bar panel">
        <i className="fa fa-tachometer w3-bar-item w3-circle w3-hide-small" aria-hidden="true"></i>
        <div className="w3-bar-item">
          <h2>Acceleration</h2>
          <hr className="divider" />
          <tr>
            <td width="30%">
              <h3>Acceleration Assessment</h3>
            </td>
            <td width="70%">
              {full_star}
              {full_star}
              {full_star}
              {half_star}
              {empty_star}
            </td>
          </tr>
        </div>
      </li>
    );
  }
}
