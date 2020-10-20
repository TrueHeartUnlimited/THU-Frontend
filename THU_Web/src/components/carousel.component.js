import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false}>
                <div class="carousel-slide">
                    <img src="../kangaroo-background.png" />
                </div>
                <div class="carousel-slide">
                    <img src="../history-2.png" />
                </div>
                <div class="carousel-slide">
                    <img src="../history-3.png" />
                </div>
            </Carousel>
        </div>
    );
}
