import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ImageProps {
  data?: string;
  type?: string;
}

const InPagePic: React.FC<ImageProps> = ({ data, type }) => {
  const [max, setMax] = useState(false);

  function handleMax() {
    setMax(!max);
  }
  return (
    <>
      <div className={type}>
        <img
          src={import.meta.env.BASE_URL + data}
          alt="img"
          className="inpage"
          onClick={handleMax}
        />
      </div>
      {max && (
        <div className="modal">
          <div className="overlay" onClick={handleMax}>
            <div className="modal-content">
              <img
                src={import.meta.env.BASE_URL + data}
                alt="modal"
                className="modal-img"
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
    </>
  );
};

export default InPagePic;
