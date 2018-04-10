import React, { Component } from 'react'
import './../../css/proservice.css'
import Menu from '../Proservice/Menu'
import HomeMenu from '../Home/HomeMenu'
import Info from '../Proservice/Info'
import AboutUs from '../Proservice/AboutUs'
import DetailAboutUs from '../Proservice/DetailAboutUs'
import Service from '../Proservice/Service'
import Client from '../Proservice/Client'
import Contact from '../Proservice/Contact'
import Footer from '../Home/Footer'
import dataProservice from './../../../api/data-proservice.json';

export default class Proservice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: [],
            detailInfo: [],
            aboutUs: [],
            service: [],
            client: [],
            contact: []
        }
    }


    componentDidMount() {
        var data = dataProservice
        this.loadData(data.data.Proservice);
    }

    loadData(data) {
        this.setState({
            info: data.Info,
            detailInfo: data.DetailInfo,
            aboutUs: data.AboutUs,
            service: data.Service,
            client: data.Client,
            contact: data.Contact
        })
    }

    render() {
        return (
            <div id="proservice">
                <HomeMenu />
                <Menu />
                <Info name={this.state.info.Name} detail={this.state.info.Detail} />
                <DetailAboutUs name={this.state.detailInfo.Name} detail={this.state.detailInfo.Detail} />
                <Service name={this.state.service.Name} detail={this.state.service.Detail} />
                <Client name={this.state.client.Name} detail={this.state.client.Detail} />
                <Contact name={this.state.contact.Name} 
                        address={this.state.contact.Detail ? this.state.contact.Detail.Address : ""}
                        tel={this.state.contact.Detail ? this.state.contact.Detail.Tel : ""}
                        email={this.state.contact.Detail ? this.state.contact.Detail.Email : ""}
                        followUs={this.state.contact.Detail ? this.state.contact.Detail.FollowUs : []}
                        />
                <Footer />
            </div>
        )
    }
}