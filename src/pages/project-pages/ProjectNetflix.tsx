import Carosel from "../../components/Carosel";
import { NetflixData } from "../../components/data/DataList";

export default function Netflix() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Netflix Clone</h1>
        </div>

        <Carosel data={NetflixData} />

        <div className="text-content nier">
          <h2>Objective:</h2>
          <p>
            In order to refine my understanding of the fundamental JavaScript
            that the React framework is based on, I decided to challenge myself
            by replicating the netflix landing page using only raw JavaScript
            for functionality.
          </p>
          <h2>Approach:</h2>
          <p>
            I decided to review concepts and the structure of the DOM, in order
            to understand the underlying foundation upon which different
            elements can be targeted. It was also to understand the DOM history
            stack, that controls matters such as routing and data sharing
            between pages.
          </p>
          <h2>Analysis:</h2>
          <p>
            The DOM structure is a tree of nodes that have their own
            characteristics in the form of elements, by means of JavaScript
            inbuilt functions to get elements and queries from the document, we
            are able to manipulate the behavior of the site by manipulating the
            elements within.
          </p>
          <h2>Outcome:</h2>
          <p>
            A successful replication of the Netflix homepage, that was is
            identical to the original, as well as a newfound solid foundation of
            how browsers, WEB APIS and the backend works.
          </p>

          <a target="_blank" href="https://github.com/cremegon/netflix-clone">
            <div className="project-linked">visit the project here!</div>
          </a>
        </div>
      </div>
    </div>
  );
}
