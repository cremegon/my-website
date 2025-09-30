import Carosel from "../../components/Carosel";
import { LostPetsData } from "../../components/data/DataList";

export default function LostPets() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Lost Pet Finder</h1>
        </div>

        <Carosel data={LostPetsData} />

        <div className="text-content nier">
          <h2>This website was made in React and Vite!</h2>
        </div>
      </div>
    </div>
  );
}
