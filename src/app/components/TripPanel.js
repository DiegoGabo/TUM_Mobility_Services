/*Component in which there are the information about acceleration and pre-emptive driving*/
import React from 'react';

import '../css/contentPanel.css';
import '../css/tripPanel.css';

var images = ["http://www.bmw.de/dam/brandBM/common/newvehicles/i-series/i3/2017/design/BMW-i-series-i3-design-colors-04.jpg.resource.1502371240835.jpg", 
              "http://pngimg.com/uploads/bmw/bmw_PNG1711.png",
              "https://www.bmwgroup.com/content/dam/bmw-group-websites/bmwgroup_com/innovation/effizienz_und_elektromobilit%C3%A4t/Innovationen_Effizienz_Elektromobilitaet_BMW_i8.png.grp-transform/large/Innovationen_Effizienz_Elektromobilitaet_BMW_i8.png",
              "https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2013/11/bmw_i3_top_post.png?itok=bnK2Upuo",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNv8QXBhB91IpiQQGpXcccb4CuIhihyEC4jtoVndRrg_7lUUM"];

export class TripPanel extends React.Component {

  constructor(props)
  {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  //if you click on the trip panel it changes the current trip and the panel in "Kpi management"
  handleClick(e)
  {
      this.props.changePanel("Kpi Management")
      this.props.changeTrip(this.props.date)
  }

  render() {
    let image = images[0]
    if(this.props.vehicle == "WBY1Z21000V308999"){
        image = images[1]   
    }
    if(this.props.vehicle == "WBA1S51010V834224"){
        image = images[2]   
    }
    if(this.props.vehicle == "WBAUD91090P381103"){
        image = images[3]   
    }
    if(this.props.vehicle == "WBA1J71080V593471"){
        image = images[4]   
    }
      
    return (
      <div className = "contentPanel tripPanel">
        <div className="w3-bar panel" value={this.props.value} onClick={this.handleClick}>

          <div className="col-sm-3 content_panel_column">
            <h4>{this.props.date.substring(0,10)}</h4>
          </div>

          <div className="col-sm-3 content_panel_column">
            <h4>{this.props.date.substring(11,16)}</h4>
          </div>

          <div className="col-sm-3 content_panel_column vehiclePicture">
            <img src={image}/>
          </div>

          <div className="col-sm-3 content_panel_column">
            <h4>{this.props.vehicle}</h4>
          </div>

        </div>
      </div>
    );
  }
}
