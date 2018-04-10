import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { HowWorkLeftImage, HowWorkRightImage } from '../../constants/configImagePath'

export default class HowWork extends Component {
    render() {
        return (
            <div id="howwork" className="section-height howwork-bg">
                <div className="row text-center">
                    <Fade left>
                        <div className="col-xs-12 col-sm-6 col-md-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                            <div className="howwork-content" style={{ backgroundImage: "url(" + HowWorkLeftImage + ")" }}>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-xs-12 col-sm-6 col-md-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                            <div className="howwork-content" style={{ backgroundImage: "url(" + HowWorkRightImage + ")" }}>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}