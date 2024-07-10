import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

interface CaroselProps {
  data?: { src: string; alt: string; index: string }[];
}

const Carosel: React.FC<CaroselProps> = ({ data = [] }) => {
  const caroselData = data;

  const [slide, setSlide] = useState(0);
  const [max, setMax] = useState(false);
  const [modalImg, setModalImg] = useState(0);

  function handleMax() {
    setMax(!max);
    console.log(max);
  }

  function handleNext() {
    if (slide === caroselData.length - 1) {
      setSlide(0);
      setModalImg(0);
    } else {
      setSlide(slide + 1);
      setModalImg(modalImg + 1);
    }
  }

  function handlePrev() {
    if (slide === 0) {
      setSlide(caroselData.length - 1);
      setModalImg(caroselData.length - 1);
    } else {
      setSlide(slide - 1);
      setModalImg(modalImg - 1);
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
          onClick={handleMax}
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
      {max && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <img
                src={import.meta.env.BASE_URL + caroselData[modalImg].src}
                alt="modal"
                className="modal-img"
              />
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
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="arrow-close"
                onClick={handleMax}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carosel;
