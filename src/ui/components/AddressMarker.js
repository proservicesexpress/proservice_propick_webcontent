import React, { Component } from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
    Marker
} from "react-google-maps";

const { compose } = require("recompose");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const google = window.google
const MapWithAMarkerWithLabel = compose(
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 13.842449, lng: 100.640528 }}>
        <MarkerWithLabel
            position={{ lat: 13.842449, lng: 100.640528 }}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{ backgroundColor: "#009BFF", fontSize: "16px", padding: "10px" }}>
            <div>Propick</div>
        </MarkerWithLabel>
    </GoogleMap>
    );
export default class AddressMarker extends Component {
    render(){
        return (
            <MapWithAMarkerWithLabel
                googleMapURL={this.props.googleMapURL}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}
