/*Overview component in which there are all the components that create the main FleetMe application. It is the page in which user arrive after the login*/

import React from 'react';

import  {OverviewHeader} from './OverviewHeader';
import  {MapPosition} from './MapPosition';
import  {Panels} from './Panels';
import  {CostPanels} from './CostPanels';
import  {Filter} from './Filter';
import  {PanelHeader} from './PanelHeader';
import  {Footer} from './Footer';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';

export class Overview extends React.Component {

  //Constructor of the function created because there must be the information of the current car analyzed

  constructor(props)
  {
      super(props);
      this.state = {employee: "overall",
                    trip: "overall",
                    panel: "kpi",
                    carData: [],
                    }
      this.changeEmployee=this.changeEmployee.bind(this)
      this.changeTrip=this.changeTrip.bind(this)
      this.changePanel=this.changePanel.bind(this)
  }

  //modify employee state
  changeEmployee(newEmployee)
  {
      this.setState({
      employee: newEmployee
    });
       console.log(newEmployee)
  }

  //modify trip state
  changeTrip(newTrip)
  {
      this.setState({
      trip: newTrip
    });
       console.log(newTrip)
  }

  changePanel(newPanel)
  {
      this.setState({
          panel: newPanel
      })
  }

  render() {
      
    let latitude = 48.19284
    let longitude = 11.568518
    let acceleration = 4
    let generalRisk = 2
    let energy = 30
    let fuel = 70
      
    if(this.state.employee == "overall")
    {
        
    }
    
    else
    {
        if(this.state.employee == "overall")
        {
            
        }
        else
        {
            if(this.state.trip == "overall")
            {
                let tripUrl = 'http://localhost:3000/user/' + this.state.employee + '/trips'
                fetch(tripUrl)
                  .then(res => res.json())
                  .then(carData => this.setState({carData}))
                try {
                    const last = this.state.carData.length-1
                    acceleration = this.state.carData[last].segmentLastTripAccelerationStars;
                    generalRisk=this.state.carData[last].lastTripBrakingStars;
                    energy=this.state.carData[last].remainingRange;
                    fuel=this.state.carData[last].remainingFuel;
                    latitude=this.state.carData[last].gpsLat;
                    longitude=this.state.carData[last].gpsLng
                } catch(e) {}
            }
            else
            {
                console.log(this.state.trip)
                /**/
            }
        }
    }

    
    
    let panel
    if(this.state.panel=="kpi")
    {
        panel = <Panels
            acceleration={acceleration}
            generalRisk={generalRisk}
            energy={energy}
            fuel={fuel}
        />
    }
    
    if(this.state.panel=="cost")
    {
        panel = <CostPanels />
    }

    return (
      <div>
        <OverviewHeader />
        <MapPosition latitude={latitude} longitude={longitude}/>

        <div className="col-sm-3 navigation_div">
          <Filter
            changeEmployee={this.changeEmployee}
            changeTrip={this.changeTrip}
            changePanel={this.changePanel}
          />
        </div>

        <div className="col-sm-9">
          <PanelHeader />
          {panel}
        </div>

      </div>
    );
  }
}
