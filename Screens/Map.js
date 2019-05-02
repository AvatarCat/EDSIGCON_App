// React Native Maps: https://github.com/react-native-community/react-native-maps

import React from 'react';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';

export default class Map extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 41.4986,
          longitude: -81.6945,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <Marker
      coordinate={{latitude: 41.4986, longitude: -81.6945}}
      title="Renaissance Hotel"
    />
    </MapView>
    );
  }
}