import React, { Component } from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import './../../css/warehouse.css'
import { Service1, Service2, Service3 } from '../../constants/configImagePath'

export default class Service extends Component {
    render() {
        var tagDetail = []
        var imageService = [Service1, Service2, Service3]
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                tagDetail.push(
                    <Fade bottom>
                        <div key={i} className="col-xs-12 col-sm-4 col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <img className="card-img-top" src={imageService[i]} alt="image" />
                                    <p className="card-block">{value}</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                )
            })
        }
        return (
            <div id="service" className="padding-bottom-section propick-service-bg">
                <div className="row howgood-row-height-name">
                    <div className="col-xs-12 col-sm-3 col-md-3 hidden-xs"></div>
                    <Flip bottom>
                        <div className="col-xs-12 col-sm-6 col-md-6 service-head">
                            <p>{this.props.name}</p>
                        </div>
                    </Flip>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-1 col-md-1 hidden-xs"></div>
                    <div className="col-xs-12 col-sm-10 col-md-10">
                        {tagDetail}
                    </div>
                </div>
                <div className="col-xs-12 col-sm-1 col-md-1 hidden-xs"></div>
            </div>
        )
    }
}