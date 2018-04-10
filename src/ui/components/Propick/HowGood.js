import React, { Component } from 'react'
import Flip from 'react-reveal/Flip'

export default class HowGood extends Component {
    render() {
        var tagDetail = []
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                tagDetail.push(
                    <div>
                        <Flip bottom>
                            <div key={i} className="col-xs-6 col-sm-3 col-md-3 howgood-detail hidden-xs">
                                <div className="head"><p>Good</p></div>
                                <span></span>
                                <div className="title"><p>{value}</p></div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 hidden-sm hidden-md hidden-lg">
                                <div className="head-mobile"><p><span className="head">Good</span> <span className="title">{value}</span></p></div>
                            </div>
                        </Flip>
                    </div>
                )
            })
        }
        return (
            <div id="howgood" className="howgood-bg">
                <div className="container section-height" >
                    <div className="row howgood-row-height-name">
                        <div className="col-sm-3 col-md-3 hidden-xs"></div>
                        <Flip bottom>
                            <div className="col-xs-12 col-sm-6 col-md-6 howgood">
                                <p>{this.props.name}</p>
                            </div>
                        </Flip>
                    </div>
                    <div className="row howgood-row-height-detail">
                        {tagDetail}
                    </div>
                </div>
            </div>
        )
    }
}