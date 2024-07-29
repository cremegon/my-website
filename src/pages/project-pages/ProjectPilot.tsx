import Carosel from "../../components/Carosel";
import { PilotData } from "../../components/data/DataList";

export default function UserPilot() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Userpilot Graphic Design</h1>
        </div>

        <Carosel data={PilotData} />

        <div className="text-content nier">
          <h2>Objective:</h2>
          <p>
            Study Userpilot's web and infographic design, replicating and
            creating an original design after alterations.
          </p>
          <h2>Approach:</h2>
          <p>
            I decided to sketch out patterns that re-occur in their graphic
            style.
            <br />
            <br />
            Once I identified the themes, I created mockups in Figma and
            InDesign. Refining them further with different color palettes that
            added more appeal as well as clarity to any users.
          </p>
          <h2>Analysis:</h2>
          <p>
            Most themes followed a recurring greyish/black palette that were
            lightly accented with warm red/pink/purple colors. However, some
            conventions were broken for the sake of color and eye flow in order
            to balance the zoomed-out picture from being too over and under
            saturated.
          </p>
          <h2>Outcome:</h2>
          <p>
            A successful study into Userpilot's UI that upskilled both my design
            analysis as well as proficiency in Figma and Adobe InDesign.
          </p>

          <a target="_blank" href="https://github.com/cremegon/">
            <div className="project-linked">visit the project here!</div>
          </a>
        </div>
      </div>
    </div>
  );
}
