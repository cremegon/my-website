import { Link } from "react-router-dom";

interface CardProps {
  title?: string;
  thumb?: string;
  id?: string;
  goto?: string;
}

const CardComp: React.FC<CardProps> = ({ title, thumb, id, goto }) => {
  return (
    <Link to={goto}>
      <div className="project-card" id={id}>
        <div className="thumb-container">
          <img src={thumb} alt="thumbnail" className="card-thumb" />
        </div>

        <div className="card-title">
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};
export default CardComp;
