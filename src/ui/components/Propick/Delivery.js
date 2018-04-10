import React, { Component } from 'react'
import Pulse from 'react-reveal/Pulse'
import DeliveryDetail from '../Propick/DeliveryDetail'
import { Form, FormGroup, InputGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Link } from 'react-router-dom'
import { LocationIcon } from '../../constants/configImagePath'
import Map from './Map'
import AddressMarker from '../AddressMarker'
import * as Value from './../../constants/variable'
const googleMapURL = Value.googleMapUrl
var tagMap = "", tagDetail = "";

export default class Delivery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addressFrom: '', latFrom: 0, lngFrom: 0,
            addressTo: '', latTo: 0, lngTo: 0,
            isCalculate: false,
            isRenderSearch: false,
            isFirst: true
        }
        this.onChangeFrom = (address) => { this.setState({ addressFrom: address, isRenderSearch: true, isCalculate: false }) }
        this.onChangeTo = (address) => this.setState({ addressTo: address, isRenderSearch: true, isCalculate: false })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.isFirst) {
            return true
        } else {
            if (nextState.isRenderSearch) {
                return true
            } else if (nextState.isCalculate && nextState.latFrom > 0 && nextState.latTo > 0
                && nextState.lngFrom > 0 && nextState.lngTo > 0) {
                return true
            } else {
                return false
            }
        }
    }

    handleFormSubmit = async (event) => {
        event.preventDefault()
        this.setState({
            isFirst: false,
            isRenderSearch: false
        })

        await geocodeByAddress(this.state.addressFrom)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.setState({
                    latFrom: latLng.lat, lngFrom: latLng.lng,
                    isCalculate: this.state.latFrom !== latLng.lat || this.state.lngFrom !== latLng.lng
                })
            }
            )
            .catch(error => console.error('geocodeByAddressError', error))

        await geocodeByAddress(this.state.addressTo)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.setState({
                    latTo: latLng.lat, lngTo: latLng.lng,
                    isCalculate: this.state.latTo !== latLng.lat || this.state.lngTo !== latLng.lng
                })
            }
            )
            .catch(error => console.error('Error', error))
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.latFrom !== this.state.latFrom || prevState.latTo !== this.state.latTo)
            || (prevState.lngFrom !== this.state.lngFrom || prevState.lngTo !== this.state.lngTo)) {
            this.setState({ isCalculate: false })
        }
    }

    render() {
        const shouldFetchSuggestions = ({ value }) => value.length > 3
        const myStyles = {
            input: { width: '100%' },
            autocompleteContainer: { backgroundColor: '#ffffff', height: '50%', zIndex: '10' },
            autocompleteItem: { color: 'black' }
        }

        const fromInputProps = {
            value: this.state.addressFrom,
            onChange: this.onChangeFrom,
            placeholder: 'Search Place...',
            autoFocus: true,
        }
        const toInputProps = {
            value: this.state.addressTo,
            onChange: this.onChangeTo,
            placeholder: 'Search Place...',
            autoFocus: true,
        }

        const renderSuggestion = ({ formattedSuggestion }) => (
            <div>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small>{formattedSuggestion.secondaryText}</small>
            </div>
        )

        if (this.state.isFirst) {
            tagMap = <AddressMarker googleMapURL={googleMapURL} />
        } else if (this.state.isCalculate && !this.state.isRenderSearch) {
            tagMap = <Map latFrom={this.state.latFrom} lngFrom={this.state.lngFrom} latTo={this.state.latTo} lngTo={this.state.lngTo}
                googleMapURL={googleMapURL} />
            tagDetail = <DeliveryDetail latFrom={this.state.latFrom} lngFrom={this.state.lngFrom} latTo={this.state.latTo} lngTo={this.state.lngTo} />
        }

        return (
            <div id="delivery">
                <div className="row">
                    <div id="map" className="col-xs-12 col-sm-6 col-md-6" >
                        {tagMap}

                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <Pulse>
                            <div className="row"><div className="col-xs-12 col-sm-12 col-md-12">
                                <Form inline id="formCalculate" onSubmit={this.handleFormSubmit}>
                                    <img className="hidden-xs" src={LocationIcon} alt="image" />
                                    <FormGroup controlId="formInlineName">
                                        <ControlLabel><h4><b>FROM</b></h4></ControlLabel>{' '}
                                        <PlacesAutocomplete id="from" inputProps={fromInputProps}
                                            renderSuggestion={renderSuggestion}
                                            shouldFetchSuggestions={shouldFetchSuggestions}
                                            styles={myStyles} />
                                    </FormGroup>{' '}
                                    <FormGroup controlId="formInlineEmail">
                                        <ControlLabel><h4><b>TO</b></h4></ControlLabel>{' '}
                                        <PlacesAutocomplete id="to" inputProps={toInputProps}
                                            renderSuggestion={renderSuggestion}
                                            shouldFetchSuggestions={shouldFetchSuggestions}
                                            styles={myStyles} />
                                    </FormGroup>{' '}
                                    <div id="delivery-button">
                                        <Button type="submit" className="btn btn-warning btn-lg"><i className="fa fa-dollar (alias)"></i>{' '}CHECK PRICE</Button>
                                        {' '}
                                        <Link to="/downloadapp">
                                            <Button type="button" className="btn btn-warning btn-lg">
                                                <i className="fa fa-hand-o-up"></i>{' '}
                                                ORDER
                                            </Button>
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                            </div>
                        </Pulse>
                        {tagDetail}
                    </div>
                </div>

            </div>
        )
    }

}