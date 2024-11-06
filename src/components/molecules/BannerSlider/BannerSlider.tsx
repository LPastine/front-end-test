import { useState, useEffect } from "react";
import "./BannerSlider.css";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    "/banner-01.png",
    "/banner-02.png",
    "/banner-01.png",
    "/banner-02.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="banner-slider">
      <div
        className="banner-slider__slide"
        style={{ backgroundImage: `url("${banners[currentSlide]}")` }}
      ></div>
      <div className="banner-slider__bullets">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`banner-slider__bullet ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
