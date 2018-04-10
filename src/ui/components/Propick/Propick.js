import React, { Component } from 'react'
import './../../css/propick.css'
import Menu from '../Propick/Menu'
import HomeMenu from '../Home/HomeMenu'
import Info from '../Propick/Info'
import HowGood from '../Propick/HowGood'
import HowTo from '../Propick/HowTo'
import HowWork from '../Propick/HowWork'
import Service from '../Propick/Service'
import Contact from '../Propick/Contact'
import Delivery from '../Propick/Delivery'
import Footer from '../Home/Footer'
import fetch from 'isomorphic-fetch'
import dataPropick from './../../../api/data-propick.json'

export default class Propick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: [],
            howGood: [],
            howWork: [],
            service: [],
            howTo: [],
            delivery: [],
            contact: []
        }
        
    }

    componentDidMount(){
        var data = dataPropick.data.Propick
        this.loadData(data)
    }

    loadData(data){
        this.setState({
            info: data.Info,
            howGood: data.HowGood,
            howWork: data.HowWork,
            service: data.Service,
            howTo: data.HowTo,
            delivery: [],
            contact: data.Contact
        })
    }

    render() {
        return (
            <div id="propick">
                <HomeMenu />
                <Menu />
                <Info name={this.state.info.Name} detail={this.state.info.Detail} />
                <HowGood name={this.state.howGood.Name} detail={this.state.howGood.Detail} />
                <HowWork name={this.state.howWork.Name} detail={this.state.howWork.Detail} />
                <Service name={this.state.service.Name} detail={this.state.service.Detail} />
                <HowTo name={this.state.howTo.Name} detail={this.state.howTo.Detail} />
                <Delivery />
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