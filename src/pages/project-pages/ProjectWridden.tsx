import Carosel from "../../components/Carosel";
import { WriddenData } from "../../components/data/DataList";
import Navbar from "../../components/navbar";

export default function Wridden() {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen-content">
        <div className="page-content wridden">
          <div className="title-content">
            <h1>Wridden Social App</h1>
          </div>

          <Carosel data={WriddenData} />

          <div className="text-content nier">
            <h2>Objective:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
              Laoreet id donec ultrices tincidunt. Tellus cras adipiscing enim
              eu turpis egestas pretium. Pellentesque massa placerat duis
              ultricies lacus sed. Aliquam ultrices sagittis orci a scelerisque
              purus semper eget. Odio morbi quis commodo odio aenean sed
              adipiscing. Eros in cursus turpis massa tincidunt dui ut ornare
              lectus. Aliquam nulla facilisi cras fermentum odio. Lorem sed
              risus ultricies tristique nulla aliquet enim. Congue quisque
              egestas diam in arcu cursus euismod quis. Purus non enim praesent
              elementum facilisis leo vel. Aenean euismod elementum nisi quis
              eleifend quam adipiscing. Sit amet aliquam id diam maecenas. Sed
              vulputate odio ut enim blandit volutpat maecenas volutpat. Massa
              eget egestas purus viverra accumsan in nisl nisi. Enim praesent
              elementum facilisis leo vel fringilla est.
            </p>
            <h2>Research:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
              Laoreet id donec ultrices tincidunt. Tellus cras adipiscing enim
              eu turpis egestas pretium. Pellentesque massa placerat duis
              ultricies lacus sed.
            </p>
            <h2>Approach:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
              Laoreet id donec ultrices tincidunt. Tellus cras adipiscing enim
              eu turpis egestas pretium. Pellentesque massa placerat duis
              ultricies lacus sed. Aliquam ultrices sagittis orci a scelerisque
              purus semper eget. Odio morbi quis commodo odio aenean sed
              adipiscing. Eros in cursus turp
            </p>
            <h2>Outcome:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
              Laoreet id donec ultrices tincidunt. Tellus cras adipiscing enim
              eu turpis egestas pretium. Pellentesque massa placerat duis
              ultricies lacus sed. Aliquam ultrices sagittis orci a scelerisque
              purus semper eget. Odio morbi quis commodo odio aenean sed
              adipiscing. Eros in cursus turp
            </p>

            <a href="/">
              <div className="project-linked">visit the project here!</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
