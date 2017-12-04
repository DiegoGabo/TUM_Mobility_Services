//Component that renders Google Map inserting a marker that indicates the current position of the car

import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

//API key necessary to use google map
const params = {v: '3.exp', key: 'AIzaSyCvFKFLNyeslv9r5VdA86Vnu1-e-E_-HQ4'};

export class MapPosition extends React.Component {

  
  //function executed when google map is created
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    
    //takes latitude and longitude from the parent component
    const coords = {
      lat: this.props.latitude,
      lng: this.props.longitude
    };

      
    return (
      <Gmaps
        width={'100%'}
        height={'350px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={15}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Last Position of the car'}
          />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={25}
        />
      </Gmaps>
    );
  }

};
