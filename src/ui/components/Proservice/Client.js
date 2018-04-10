import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import {
    bankchina, bangkokbank, bangjak, huawei, kasikorn,
    medical, msig, tmb, tot, aig, abn
} from '../../constants/configImagePath'

export default class Client extends Component {
    render() {
        let images = [bankchina, bangkokbank, bangjak, huawei, kasikorn];
        let images2 = [medical, msig, tmb, tot, abn]
        let tagImage = [], tagImage2 = [];
        images.forEach((value, i) => {
            tagImage.push(
                <Fade top>
                    <div key={i} className="col-xs-12 col-sm-2 col-md-2 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
                        <div className="ourclient" >
                            <img src={value} alt="img" />
                        </div>
                    </div>
                </Fade>)
        });
        images2.forEach((value, i) => {
            tagImage2.push(
                <Fade top>
                    <div key={i} className="col-xs-12 col-sm-2 col-md-2 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
                        <div className="ourclient" >
                            <img src={value} alt="img" />
                        </div>
                    </div>
                </Fade>)
        });
        return (
            <div id="client">
                <Fade top>
                    <div className="section-header">
                        <div className="section-title text-center wow fadeInDown"><h2>{this.props.name}</h2></div>
                    </div>
                </Fade>
                <div className="row client">
                    <div className="col-xs-6 col-sm-1 col-md-1 hidden-xs"></div>
                    <div className="features">{tagImage}</div>
                    <div className="col-xs-6 col-sm-1 col-md-1 hidden-xs"></div>
                </div>
                <div className="row client">
                    <div className="col-xs-6 col-sm-1 col-md-1 hidden-xs"></div>
                    <div className="features">{tagImage2}</div>
                    <div className="col-xs-6 col-sm-1 col-md-1 hidden-xs"></div>
                </div>
            </div>
        )
    }
}