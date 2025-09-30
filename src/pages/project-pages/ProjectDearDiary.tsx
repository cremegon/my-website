import Carosel from "../../components/Carosel";
import { DearDiaryData } from "../../components/data/DataList";

export default function DearDiary() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>
            Irish National Archive Collaborative Project - Lifetime Library
          </h1>
        </div>

        <Carosel data={DearDiaryData} />

        <div className="text-content nier">
          <h2>This website was made in React and Vite!</h2>
        </div>
      </div>
    </div>
  );
}
