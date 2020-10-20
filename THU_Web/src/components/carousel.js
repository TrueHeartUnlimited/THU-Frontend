import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={1024}
        naturalSlideHeight={240}
        totalSlides={5}
        infinite={true}
        isPlaying={true}
        interval={5000}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
          <Slide index={1}>I am the fourth Slide.</Slide>
          <Slide index={2}>I am the fifth Slide.</Slide>
        </Slider>
        <div class="flex" id="carousel-buttons">
            <ButtonBack><FontAwesomeIcon icon={ faArrowLeft }/></ButtonBack>
            <ButtonNext><FontAwesomeIcon icon={ faArrowRight }/></ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}
