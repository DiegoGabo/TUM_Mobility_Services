//Component that renders Google Map inserting a marker that indicates the current position of the car

import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

//API key necessary to use google map
const params = {v: '3.exp', key: 'AIzaSyCvFKFLNyeslv9r5VdA86Vnu1-e-E_-HQ4'};

export class MapCars extends React.Component {


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
        height={'200px'}
        lat={48.493607}
        lng={11.868653}
        zoom={8}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={48.493607}
          lng={10.868653}
          draggable={true}
          />
        <Marker
          lat={48.193607}
          lng={10.568653}
          draggable={true}
          />
        <Marker
          lat={48.587746}
          lng={10.965355}
          draggable={true}
          />
        <Marker
          lat={48.081387}
          lng={10.830042}
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
