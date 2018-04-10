import React, { Component } from 'react'
import './../../css/propick.css'
import Menu from '../Propick/Menu'
import HomeMenu from '../Home/HomeMenu'
import Footer from '../Home/Footer'
import dataPrivacy from '../../../api/dataPrivacy.json'

export default class Privacy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            detail: []
        }
    }

    componentDidMount() {
        var data = dataPrivacy
        this.loadData(data.privacy);
    }

    loadData(data) {
        this.setState({
            name: data.namw,
            detail: data.detail
        })
    }

    render() {
        const { name, detail } = this.state
        let detailParagaph = []
        detail.forEach((value, i) => {
            detailParagaph.push(<p><b>{value.name}</b></p>)
            value.detail.forEach((values, i) => {
                detailParagaph.push(<p>{values}</p>)
            })
            detailParagaph.push(<br />)
        })

        return (
            <div id="privacy-propick">
                <HomeMenu />
                <Menu />
                <div className="propick-section-header">
                    <div className="section-title text-center wow fadeInDown">
                        <h4>Privacy</h4>
                        <h4 className="text-center">{name}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-2 col-md-2 hidden-xs">
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-8">
                        <div className="text-justify">
                            {detailParagaph}
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}