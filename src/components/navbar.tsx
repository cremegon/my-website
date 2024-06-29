import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidebar">
      <nav className="nav-main">
        <div className="icon-wrapper">
          <img
            className="nav-icon"
            src="./src/assets/nav-icon.png"
            alt="banner-pic"
          />
        </div>

        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
        </ul>
        <div className="blank-color">
          <a href="https://github.com/cremegon">
            <img
              src="./src/assets/github.png"
              alt=""
              className="github footer-img"
            />
          </a>

          <a href="https://www.linkedin.com/in/cremegon/">
            <img
              src="./src/assets/linkedin.png"
              alt=""
              className="linkedin footer-img"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
