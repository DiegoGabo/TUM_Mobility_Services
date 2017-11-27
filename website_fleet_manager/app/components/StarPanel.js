import React from 'react';

import '../css/starPanel.css';

const full_star = <span class="fa fa-star" style={{fontSize: '2em', color: 'orange'}}></span>;
const half_star = <span class="fa fa-star-half-o " style={{fontSize: '2em', color: 'orange'}}></span>;
const empty_star = <span class="fa fa-star-o" style={{fontSize: '2em'}}></span>;

export class StarPanel extends React.Component {

  render() {
      
    let star0 = this.props.value > 0 ? full_star : empty_star;
    let star1 = this.props.value > 1 ? full_star : empty_star;
    let star2 = this.props.value > 2 ? full_star : empty_star;
    let star3 = this.props.value > 3 ? full_star : empty_star;
    let star4 = this.props.value > 4 ? full_star : empty_star;
    return (
      <li className="w3-bar panel">
        <i className={this.props.image} aria-hidden="true"></i>
        <div className="col-sm-10">
          <h2>{this.props.title}</h2>
          <hr className="divider" />
          <div className="col-sm-4">
              <h3>{this.props.subtitle}</h3>
          </div>
          <div className="col-sm-8">
              {star0}
              {star1}
              {star2}
              {star3}
              {star4}
          </div>
        </div>
      </li>
    );
  }
}
