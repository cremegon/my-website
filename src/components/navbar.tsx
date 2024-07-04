import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidebar">
      <nav className="nav-main">
        <div className="icon-wrapper">
          <img className="nav-icon" src="/nav-icon.png" alt="" />
        </div>

        <ul className="links">
          <li>
            <Link to="/my-website">Home</Link>
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
              src="./src/assets/github.png"
              alt=""
              className="footer-img github"
            />
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/cremegon/">
            <img
              src="./src/assets/linkedin.png"
              alt=""
              className="footer-img linkedin"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
