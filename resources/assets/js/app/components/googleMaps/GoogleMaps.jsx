import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker} from 'react-gmaps';

const coords = {
  lat: -25.4353676,
  lng: -49.278431
};

export default class App extends Component {

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={14}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyDlEyZ_acJRpOYj5_715_4_1GLTRshO7Lc'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    );
  }
}
