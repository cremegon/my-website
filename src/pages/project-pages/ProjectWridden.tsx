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
              The objective of the application was to create a simple yet
              effective app for storytellers of all levels to write and share
              their work.
              <br />
              <br />
            </p>
            <h2>Research:</h2>
            <p>
              The primary source of research was academic case studies and
              interviews conducted with 10 individuals of various backgrounds,
              professions and ages. Once the data was collected, personas would
              be formed out of the collective wants, needs and nice-to-haves
              from the interviewee's input and the features of the app would be
              designed around a <span>user-centric methodology</span>. <br />
              <br />
              <span>A problem statement was clearly defined: </span>
              For a novice writer, keeping track of everything in a story can be
              a daunting task, especially in the process of writing. Getting
              feedback can be difficult. The app should provide an easy-to-use
              tool to solve these problems.
              <br />
              <br />
              <span>The vision statement that grounded it: </span> Create
              effective communication through simple stories.
              <br />
              <br />
              Context Scenarios followed shortly with the personas afterward.
            </p>
            <h2>Technology</h2>
            <p>
              The application was created through the React Native Framework.
              With the primary language being JavaScript & TypeScript alongside
              a basic authentication done through an async backend and SQL.
              <br />
              <br />
              For low-fidelity and high-fidelity designs, the primary technology
              used was Figma and coded in HTML/CSS.
            </p>
            <h2>Analysis:</h2>
            <p>
              From the two personas formed, the key requirements of the app were
              as follows:
              <ul>
                <li>
                  A pull-down graph interface that reminded users of time spent
                  and the arc they are in.
                </li>
                <li>
                  A repository of simple stories that mark the point of each arc
                  in a story's trajectory to teach new/younger users the
                  corner-stone of writing management.
                </li>
                <li>
                  A community hub to engage writers with one another, providing
                  feedback and making friends.
                </li>
                <li>
                  In-app story challenges and "Prompts of the Week" to promote
                  users to write together and share their stories.
                </li>
              </ul>
              <br />
              <br />
              Additionally, when discussing a layout they had in mind as to what
              an inviting app would look like, as well as the ideal and
              non-ideal layout of a "writing-app", the theme of the app was
              created accordingly.
              <br />
              <br />
              <img
                src="./src/assets/website-screens/wridden/lofi1.png"
                alt="lofi1"
                className="lofi"
              />
              <img
                src="./src/assets/website-screens/wridden/lofi2.png"
                alt="lofi2"
                className="lofi"
              />
              <img
                src="./src/assets/website-screens/wridden/lofi3.png"
                alt="lofi3"
                className="lofi"
              />
            </p>
            <h2>Design:</h2>
            <p>
              From user reports, the most welcoming color they associated an app
              with such descriptors were centered towards a "warm" palette.
              <br />
              <br />
            </p>
            <img
              src="./src/assets/website-screens/wridden/sitemap.png"
              alt=""
              className="sitemap"
            />
            <p>
              The following theme was then carefully selected with the accent
              color having least use, in order to be balanced carefully with
              more softer and grey tones, so that the app would be easy on the
              eye and close to the visual association to the users.
              <br />
              <br />
            </p>
            <img
              src="./src/assets/website-screens/wridden/color-palette1.png"
              alt=""
              className="palette"
            />
            <p>
              The app was refactored after the first pass, divided into reusable
              components. While props were initially used to pass data between
              screens, further React Hooks were used to streamline the process
              using "useEffect", "useContext" and "useState".
            </p>
            <h2>Outcome:</h2>
            <p>
              A functioning mobile app that achieved the design and
              functionality of the project. With the ability to write stories,
              save them, share them and to additionally create character
              profiles saved seperately, so that users could visit old and new
              characters at a later time to edit and refactor them back as
              inspiration in new chapters and stories.
            </p>
            <img
              src="./src/assets/website-screens/wridden/screens.png"
              alt=""
              className="app-screens"
            />

            <a
              target="_blank"
              href="https://github.com/cremegon/wridden-mobile-app"
            >
              <div className="project-linked">visit the project here!</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
