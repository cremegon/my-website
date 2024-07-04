import { Link } from "react-router-dom";

interface CardProps {
  title?: string;
  sub?: string;
  thumb?: string;
  id?: string;
  goto?: string;
}

const CardComp: React.FC<CardProps> = ({ title, sub, thumb, id, goto }) => {
  return (
    <Link to={{ pathname: `${goto}` }}>
      <div className="project-card" id={id}>
        <div className="thumb-container">
          <img
            src={import.meta.env.BASE_URL + thumb}
            alt="thumbnail"
            className="card-thumb"
          />
        </div>

        <div className="card-title">
          <h1>{title}</h1>
          <h3>{sub}</h3>
        </div>
      </div>
    </Link>
  );
};
export default CardComp;
