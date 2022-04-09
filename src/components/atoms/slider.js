import React from "react";
import Slider from "react-slick";
import { getExtension } from "utils";

const SliderComponent = ({ images, classes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const videoTypeSupported = ["mp4"];
  const renderMedia = url =>
    videoTypeSupported.includes(getExtension(url)) ? (
      <div>
        <video controls>
          <source src={url} type="video/mp4" />
        </video>
      </div>
    ) : (
      <img src={url} alt="" />
    );

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {images.map(image => (
          <div className={classes.sliderImage} key={image.url}>
            {renderMedia(image.url)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
