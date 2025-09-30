import Carosel from "../../components/Carosel";
import { HNGMData } from "../../components/data/DataList";

export default function HNGMLabs() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>HNGM Labs SaaS - UI/UX Design</h1>
        </div>

        <Carosel data={HNGMData} />

        <div className="text-content nier">
          <h2>This website was made in React and Vite!</h2>
        </div>
      </div>
    </div>
  );
}
