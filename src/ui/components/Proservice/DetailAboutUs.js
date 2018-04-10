import React, { Component } from 'react'
import { ImageDetailAboutUs } from '../../constants/configImagePath'
import Fade from 'react-reveal/Fade'
export default class DetailAboutUs extends Component {
    render() {
        let tagDetail = [];
        let companyName = "", paragaph = "", title = ""
        if (this.props.detail) {
            companyName = this.props.detail.CompanyName
            paragaph = this.props.detail.Paragaph
            title = this.props.detail.Salocan
        }

        return (
            <div id="detailinfo" className="section-height">
                <div className="row text-center" >
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <Fade left>
                            <div className="panel-left">
                                <p className="companyname"><b>{companyName}</b></p>
                                <p className="paragaph">{paragaph}</p>
                                <p className="title"><b>{title}</b></p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <Fade right>
                            <div className="item quality-info" style={{ backgroundImage: "url(" + ImageDetailAboutUs + ")" }}>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}