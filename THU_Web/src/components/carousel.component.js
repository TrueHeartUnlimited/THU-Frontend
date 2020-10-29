import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img from "gatsby-image"

export default function CarouselComponent(props) {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false}>
                <div class="carousel-slide">
                  <Img fluid={props.image[0].fluid} key={props.image[0].fluid.src} alt={props.image[0].title} />
                </div>
                <div class="carousel-slide">
                  <Img fluid={props.image[1].fluid} key={props.image[1].fluid.src} alt={props.image[1].title} />
                </div>
                <div class="carousel-slide">
                  <Img fluid={props.image[2].fluid} key={props.image[2].fluid.src} alt={props.image[2].title} />
                </div>
            </Carousel>
        </div>
    );
}
