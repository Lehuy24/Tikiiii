import React from "react";
import { Image } from "antd";
import Slider from "react-slick";
function SlideCompoment({ arrImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay interval to 2000 milliseconds (2 seconds)
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`slider`}
            preview={false}
            width="100%"
            height="274px"
          />
        </div>
      ))}
    </Slider>
  );
}

export default SlideCompoment;
