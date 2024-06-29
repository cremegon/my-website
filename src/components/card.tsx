import { Link } from "react-router-dom";

interface CardProps {
  title?: string;
  thumb?: string;
  id?: string;
}

const CardComp: React.FC<CardProps> = ({ title, thumb, id }) => {
  return (
    <Link to="/project/hero-website">
      <div className="project-card" id={id}>
        <img src={thumb} alt="thumbnail" className="card-thumb" />
        <div className="card-title">
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};
export default CardComp;
