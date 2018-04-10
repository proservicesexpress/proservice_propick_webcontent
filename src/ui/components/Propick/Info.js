import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { PropickLogo, AppStore, PlayStore, Mobile, BGInfoPropick } from '../../constants/configImagePath'

export default class Info extends Component {
    render() {
        let title = "", titleDetail = ""
        if (this.props.detail) {
            title = this.props.detail[0]
            titleDetail = this.props.detail[1]
        }
        return (
            <div id="propick-info" >
                <div className="row propick-info-bg" style={{ backgroundImage: "url(" + BGInfoPropick + ")" }}>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <Fade left>
                            <div className="row">
                                <div className="propick-logo">
                                    <img src={PropickLogo} alt="propick" />
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 text-center text-white">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="row info-detail hidden-xs">
                                <div className="col-xs-12 col-sm-12 col-md-12 text-white">
                                    <p>{titleDetail}</p>
                                </div>
                            </div>
                        </Fade>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 propick-logo-download">
                                <Fade left><img src={AppStore} alt="propick" /> </Fade>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 propick-logo-download">
                                <Fade left><img src={PlayStore} alt="propick" /> </Fade>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}