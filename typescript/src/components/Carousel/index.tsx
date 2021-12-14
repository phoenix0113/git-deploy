import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

interface IProps {
  text: any;
  images: Array<any>;
}

const Carousel = ({ text, images }: IProps) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb custom-slick",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slide-content">
      <Slider {...settings}>
        {images.map((item, key) => (
          <div className="slide-image-content" key={key}>
            <img
              className="slide-image"
              src={item.image}
              alt={item.alt}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      <div className="text-content">
        <div className="text-subcontent">
          <div className="text-one">{text.title}</div>
          <div className="text-two">{text.date}</div>
          <div className="text-three">{text.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
