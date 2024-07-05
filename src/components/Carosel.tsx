import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

interface CaroselProps {
  data?: { src: string; alt: string; index: string }[];
}

const Carosel: React.FC<CaroselProps> = ({ data = [] }) => {
  const caroselData = data;

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
          src={import.meta.env.BASE_URL + item.src}
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
