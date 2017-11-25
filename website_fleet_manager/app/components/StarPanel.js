import React from 'react';

import '../css/starPanel.css';

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
          </tr>
        </div>
      </li>
    );
  }
}