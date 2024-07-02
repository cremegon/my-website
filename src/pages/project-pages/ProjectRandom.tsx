import Carosel from "../../components/Carosel";
import { RandomData } from "../../components/data/DataList";
import Navbar from "../../components/navbar";

export default function Random() {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen-content">
        <div className="page-content nier">
          <div className="title-content">
            <h1>Random</h1>
          </div>

          <Carosel data={RandomData} />

          <div className="text-content nier">
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
          </div>
        </div>
      </div>
    </div>
  );
}
