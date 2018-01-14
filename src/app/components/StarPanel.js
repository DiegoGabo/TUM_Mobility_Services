/*Component that implements the rating system with stars*/

import React from 'react';

import '../css/contentPanel.css';
import '../css/starPanel.css';
import  {InfoButton} from './InfoButton';

//full_star, half_star and empty_star jsx
const full_star = <span className="fa fa-star full_star content_icon"></span>;
const half_star = <span className="fa fa-star-half-o half_star content_icon"></span>;
const empty_star = <span className="fa fa-star-o empty_star content_icon"></span>;

export class StarPanel extends React.Component {

  render() {
//<div className="col-sm-2"><InfoButton description="text"/></div>
    //checks the value passed by the parent and sets the stars component
    let star0 = this.props.value > 0 ? full_star : empty_star;
    let star1 = this.props.value > 1 ? full_star : empty_star;
    let star2 = this.props.value > 2 ? full_star : empty_star;
    let star3 = this.props.value > 3 ? full_star : empty_star;
    let star4 = this.props.value > 4 ? full_star : empty_star;

    let thumb = ""
    if (this.props.value > 3)
    {
        thumb = <i className="fa fa-thumbs-o-up content_icon thumb_icon" aria-hidden="true"></i>
    }
    else
    {
        thumb = <i className="fa fa-thumbs-o-down content_icon thumb_icon" aria-hidden="true"></i>
    }

    return (
      <div className="contentPanel starPanel">

      <div className="w3-bar panel">

        <div className="col-sm-4 content_panel_column first_content_panel_column">
          <div>
            <div className ="infoButton"><InfoButton description="text"/></div>
            <h4 className="kpi_title">{this.props.title}</h4>
          </div>
          <div className = "star_panel_icons">
            {star0} {star1} {star2} {star3} {star4}
          </div>
        </div>

        <div className="col-sm-4 content_panel_column">
          <h3>{this.props.value} out of five stars (highest)</h3>
        </div>

        <div className="col-sm-4 content_panel_column">
          <div>{thumb}</div>
        </div>

      </div>
      </div>
    );
  }
}
