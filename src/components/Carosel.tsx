import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Carosel = () => {
  const caroselData = [
    {
      src: "https://uimgs.com/1280x720/EFEFEF/-1.png",
      alt: "img-1",
      index: "1",
    },
    {
      src: "https://uimgs.com/1280x720/EFEFEF/-2.png",
      alt: "img-2",
      index: "2",
    },
    {
      src: "https://uimgs.com/1280x720/EFEFEF/-3.png",
      alt: "img-3",
      index: "3",
    },
  ];

  const [slide, setSlide] = useState(0);

  function handleNext() {
    {
      slide === caroselData.length - 1 ? setSlide(0) : setSlide(slide + 1);
    }
  }

  function handlePrev() {
    {
      slide === 0 ? setSlide(caroselData.length - 1) : setSlide(slide - 1);
    }
  }
  function handleSphere(selected: number) {
    setSlide(selected);
  }
  return (
    <div className="carosel-items">
      {caroselData.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          className={slide == idx ? "slide" : "slide slide-hidden"}
          key={idx}
        />
      ))}
      <FontAwesomeIcon
        icon={faArrowCircleLeft}
        className="arrow prev"
        onClick={handlePrev}
      />

      <FontAwesomeIcon
        icon={faArrowCircleRight}
        className="arrow next"
        onClick={handleNext}
      />
      <div className="indicator">
        {caroselData.map((_, idx) => (
          <div
            className={slide == idx ? "spheres spheres-selected" : "spheres"}
            key={idx}
            onClick={() => handleSphere(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carosel;
