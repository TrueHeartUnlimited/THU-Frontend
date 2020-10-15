import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={1024}
        naturalSlideHeight={500}
        totalSlides={3}
        infinite={true}
        isPlaying={true}
        interval={5000}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack><FontAwesomeIcon icon={ faChevronCircleLeft }/></ButtonBack>
        <ButtonNext><FontAwesomeIcon icon={ faChevronCircleRight }/></ButtonNext>
      </CarouselProvider>
    );
  }
}
