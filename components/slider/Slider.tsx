'use client'
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = ({data, margin, items, breakpoints, renderer}: {
    data?: any[],
    margin: number,
    items: number,
    breakpoints: {[breakpoint: string]: {items: number}},
    renderer?: JSX.Element
}) => {
    return (
        <OwlCarousel className="owl-theme" lazyLoad={true}  loop margin={margin} items={items} responsive={breakpoints} autoplay={true} autoplayTimeout={3000}  >
            {data?.map((item, index) => (
                <div className="item" key={index}>
                    <img src={item.img} alt={`Slide ${index + 1}`} />
                </div>
            ))}
            {renderer}
        </OwlCarousel>
    );
};

export default Slider;
