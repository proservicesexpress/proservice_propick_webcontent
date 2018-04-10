import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      direction: 'next',
      interval: 5000,
      indicators: false,
      pauseOnHover: true,
      slide: true,
      wrap: true
    }
  }

  componentDidMount() {
    this.setState({ index: 0 })
  }

  handleSelect = (selectedIndex, e) => {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    // const images = [ScreenLogin, ScreenMarkLocation, ScreenChooseService, ScreenConfirm]
    let tagImage = [];
    if (this.props.item) {
      this.props.item.forEach((value, i) => {
        tagImage.push(
          <Carousel.Item key={i}>
            <img alt="propick" src={value.image} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        )
      });
    }
    return (

      <Carousel
        direction={this.state.direction}
        onSelect={this.handleSelect}
        interval={this.state.interval}
        slide={this.state.slide}
        wrap={this.state.wrap}
        pauseOnHover={this.state.pauseOnHover}>
        {tagImage}
      </Carousel>
    );
  }
}