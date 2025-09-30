import Carosel from "../../components/Carosel";
import { TasneemData } from "../../components/data/DataList";

export default function Tasneem() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Dr. Tasneem's Insitute of Health - UI/UX Design</h1>
        </div>

        <Carosel data={TasneemData} />

        <div className="text-content nier">
          <h2>This website was made in React and Vite!</h2>
        </div>
      </div>
    </div>
  );
}
