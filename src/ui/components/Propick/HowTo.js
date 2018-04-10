import React, { Component } from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import './../../css/timeline.css'
import { ScreenLogin, ScreenMarkLocation, ScreenChooseService, ScreenConfirm } from '../../constants/configImagePath'
import ControlledCarousel from '../Propick/ControlledCarousel'

export default class HowTo extends Component {
    render() {
        let images = [ScreenLogin, ScreenMarkLocation, ScreenChooseService, ScreenConfirm];
        let tagDetail = [];
        let carouselDetail = [];
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                carouselDetail.push(
                    { "image": images[i], "title": value }
                )
                tagDetail.push(<div key={i}><h3 className="text-white"><i className="fa fa-check-circle"></i> {value}</h3></div>)
            })
        }

        return (
            <div id="howto" className="howto-bg">
                <div className="container section-height" >
                    <div className="row howgood-row-height-name">
                        <div className="col-xs-12 col-sm-3 col-md-3 hidden-xs"></div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <Flip bottom>
                                <div className="howto-head">
                                    <p>{this.props.name}</p>
                                </div>
                            </Flip>
                        </div>
                    </div>
                    <div className="row">
                        <Fade right>
                            <div className="image-gallery">
                                <ControlledCarousel item={carouselDetail} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}