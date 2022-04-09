import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ images, classes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {images.map(image => (
          <div className={classes.sliderImage} key={image.url}>
            <img src={image.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
