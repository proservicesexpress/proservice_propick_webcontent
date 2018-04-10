import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { logoProservice } from '../../constants/configImagePath'

export default class Contact extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        var tagFollow = [];
        this.props.followUs.forEach((value) => {
            tagFollow.push(
                <a href="#"><i className={value}></i>{' '}</a>
            )
        })
        return (
            <div id="contactus" style={{ paddingBottom: '50px', background: '#444444' }} >
                <div className="container" >
                    <Fade top>
                        <div className="section-header">
                            <div className="section-title text-center wow fadeInDown"><h2 className="text-white">ติดต่อเรา</h2></div>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-2 col-md-2 hidden-xs"></div>
                    <div className="col-xs-12 col-sm-2 col-md-2">
                        <Fade left>
                            <a href="/proservice"><img src={logoProservice} alt="logo" /></a>
                        </Fade>
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 hidden-xs"></div>
                    <div className="col-xs-12 col-sm-2 col-md-2">
                        <Fade bottom>
                            <p className="text-center wow fadeInDown"><h4 className="text-white">บริษัท โปรเซอร์วิส จำกัด</h4></p>
                            <div className="term-privacy"><a href="/proservice/term">Term Service</a>{' | '}<a href="/proservice/privacy">Privacy</a></div>
                            <div className="address">
                                <h4 className="text-white">Follow Us</h4>
                                <p>{tagFollow}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-5">
                        <Fade right>
                            <p className="text-left wow fadeInDown text-white">ที่อยู่: {this.props.address}</p>
                            <p className="text-left wow fadeInDown text-white">โทร.: {this.props.tel}</p>
                            <p className="text-left wow fadeInDown text-white">Email: {this.props.email}</p>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}