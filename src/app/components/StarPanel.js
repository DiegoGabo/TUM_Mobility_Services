/*Component that implements the rating system with stars*/

import React from 'react';

import '../css/starPanel.css';
import  {InfoButton} from './InfoButton';

//full_star, half_star and empty_star jsx
const full_star = <span className="fa fa-star full_star icon"></span>;
const half_star = <span className="fa fa-star-half-o half_star icon"></span>;
const empty_star = <span className="fa fa-star-o empty_star icon"></span>;

export class StarPanel extends React.Component {

  render() {

    //checks the value passed by the parent and sets the stars component
    let star0 = this.props.value > 0 ? full_star : empty_star;
    let star1 = this.props.value > 1 ? full_star : empty_star;
    let star2 = this.props.value > 2 ? full_star : empty_star;
    let star3 = this.props.value > 3 ? full_star : empty_star;
    let star4 = this.props.value > 4 ? full_star : empty_star;

    let thumb = ""
    if (this.props.value > 3)
    {
        thumb = <i className="fa fa-thumbs-o-up icon" aria-hidden="true"></i>
    }
    else
    {
        thumb = <i className="fa fa-thumbs-o-down icon" aria-hidden="true"></i>
    }

    return (
      <div className="filter_panel">
      <li className="w3-bar panel">

        <div className="row">
          <div className="col-sm-10"><h3 className="kpi_title">{this.props.title}</h3></div>
          <div className="col-sm-2"><InfoButton description="text"/></div>
        </div>

        <div className="row">

          <div className="col-sm-5">
            {star0}{star1}{star2}{star3}{star4}
          </div>

          <div className="col-sm-5">
            <h3>{this.props.value} out of five stars (highest)</h3>
          </div>

          <div className="col-sm-2">
            {thumb}
          </div>

        </div>

      </li>
      </div>
    );
  }
}
