import Carosel from "../../components/Carosel";
import { RandomData } from "../../components/data/DataList";

export default function Random() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Recursion</h1>
        </div>

        <Carosel data={RandomData} />

        <div className="text-content nier">
          <h2>This website was made in React and Vite!</h2>
        </div>
      </div>
    </div>
  );
}
