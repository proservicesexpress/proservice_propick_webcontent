import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from "react-google-maps"
import * as Value from './../../constants/variable'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directions: {},
            distance: 0
        }
    }

    render() {
        let latFrom = this.props.latFrom
        let lngFrom = this.props.lngFrom
        let latTo = this.props.latTo
        let lngTo = this.props.lngTo

        const { compose, withProps, lifecycle } = require("recompose");
        const google = window.google
        const MapWithADirectionsRenderer = compose(
            withProps({
                googleMapURL: this.props.googleMapURL,
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `400px` }} />,
                mapElement: <div style={{ height: `100%` }} />,
            }),
            withScriptjs,
            withGoogleMap,
            lifecycle({
                componentDidMount() {
                    const DirectionsService = new google.maps.DirectionsService();

                    DirectionsService.route({
                        origin: new google.maps.LatLng(latFrom, lngFrom),
                        destination: new google.maps.LatLng(latTo, lngTo),
                        travelMode: google.maps.TravelMode.DRIVING,
                    }, (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            this.setState({
                                directions: result,
                            });
                        } else {
                            console.error(`error fetching directions ${result}`);
                        }
                    });
                }
            })
        )(props =>
            <GoogleMap defaultZoom={7} defaultCenter={new google.maps.LatLng(latTo, lngTo)}>
                {props.directions && <DirectionsRenderer directions={props.directions} />}
            </GoogleMap>
            );

        return (
            <MapWithADirectionsRenderer />
        )
    }
}