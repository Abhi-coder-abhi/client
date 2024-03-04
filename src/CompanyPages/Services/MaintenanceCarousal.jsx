import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MaintenanceCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mt-0 md:mt-16 bg-red-500 pt-28 md:pt-4">
        <h2>Carousel Example</h2>
        <Slider {...settings}>
          <div>
            <div className="carousel-item ">Item 1</div>
          </div>
          <div>
            <div className="carousel-item">Item 2</div>
          </div>
          <div>
            <div className="carousel-item">Item 3</div>
          </div>
          <div>
            <div className="carousel-item">Item 4</div>
          </div>
          <div>
            <div className="carousel-item">Item 5</div>
          </div>
          {/* Add more items as needed */}
        </Slider>
      </div>
    </>
  );
};

export default MaintenanceCarousal;
