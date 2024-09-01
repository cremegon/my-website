import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidebar">
      <nav className="nav-main">
        <div className="icon-wrapper">
          <img
            className="nav-icon"
            src={import.meta.env.BASE_URL + "/assets/nav-icon.png"}
            alt=""
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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="blank-color">
          <a target="_blank" href="https://github.com/cremegon">
            <img
              src={import.meta.env.BASE_URL + "/assets/github.png"}
              alt=""
              className="footer-img github"
            />
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/cremegon/">
            <img
              src={import.meta.env.BASE_URL + "/assets/linkedin.png"}
              alt=""
              className="footer-img linkedin"
            />
          </a>
          <a target="_blank" href="https://www.behance.net/cremegon">
            <img
              src={import.meta.env.BASE_URL + "/assets/behance.png"}
              alt=""
              className="footer-img behance"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
