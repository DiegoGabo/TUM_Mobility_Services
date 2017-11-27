import React from 'react';
//import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat:  48.161502,
  lng: 11.524362
};

const params = {v: '3.exp', key: 'AIzaSyCvFKFLNyeslv9r5VdA86Vnu1-e-E_-HQ4'};

export class MapPosition extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'250px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={15}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Last Position of the car'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={25}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

};