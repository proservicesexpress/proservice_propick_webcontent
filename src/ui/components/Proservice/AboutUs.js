import React, { Component } from 'react'
import './../../css/proservice.css'
import '../../css/aboutus.css'
import { BGAboutUs } from '../../constants/configImagePath'
import HomeMenu from '../Home/HomeMenu'
import Menu from '../Proservice/Menu'
import dataProservice from '../../../api/data-proservice.json';

export default class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutUs: [],
            introduction: [],
            benefit: []
        }
    }


    componentDidMount() {
        var data = dataProservice
        this.loadData(data.data.Proservice);
    }

    loadData(data) {
        this.setState({
            aboutUs: data.AboutUs,
            introduction: data.AboutUs.Detail.Introduction,
            benefit: data.AboutUs.Detail.Benefit
        })
    }
    render() {
        let tagIntroduction = [], tagBenefit = [];
        if (this.state.aboutUs.Detail) {
            if (this.state.introduction) {
                this.state.introduction.forEach((value, i) => {
                    tagIntroduction.push(<p key={i}><h4>{i + 1}. {value}</h4></p>)

                })
            }
            if (this.state.benefit) {
                this.state.benefit.forEach((value, i) => {
                    tagBenefit.push(<p key={i}><h4>{i + 1}. {value}</h4></p>)

                })
            }
        }
        return (
            <div id="aboutus">
                <HomeMenu />
                <Menu />
                <div className="row text-center timeline aboutus-bg" style={{ backgroundImage: "url(" + BGAboutUs + ")" }}>
                    <div className="section-header">
                        <div className="section-title text-center wow fadeInDown">
                            <h2>เกี่ยวกับเรา</h2>
                        </div>
                    </div>
                    <div className="col-sm-12 timeline-padding-body ">
                        <div>
                            <li>
                                <h3>นโยบายหลัก</h3>
                                {tagIntroduction}
                            </li>
                            <li>
                                <h3>สิ่งที่คุณจะได้รับ</h3>
                                {tagBenefit}
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}