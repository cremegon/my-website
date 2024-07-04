import Carosel from "../../components/Carosel";
import { NierData } from "../../components/data/DataList";
import Navbar from "../../components/navbar";

export default function Nier() {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen-content">
        <div className="page-content nier">
          <div className="title-content">
            <h1>Yoko Taro - Hero Website</h1>
          </div>

          <Carosel data={NierData} />

          <div className="text-content nier">
            <h2>Objective:</h2>
            <p>
              For the course project, students were instructed to choose a
              fictional or non-fictional character to dedicate a website on,
              connected to their content, themes and subtexts; therefor, I chose
              Yoko Taro.
              <br />
              <br />
              Taro is well known for his bold, grim and experiential story
              telling in videogames, so in order to capture the essence of his
              works, I had to research the palette, shape design and UI/UX of
              his videogame catalogue in order to replicate the same thing.
            </p>
            <h2>Approach:</h2>
            <p>
              First and foremost, I began with creating a moodboard via the
              following:
              <br />
              <br />
              <ul>
                <li>The video-game title screens</li>
                <li>The UI of the video-games</li>
                <li>Color palette of character designs and world settings</li>
                <li>Subtextual themes of the story</li>
                <li>
                  UI design of original websites created by the publishers
                </li>
              </ul>
              <br />
              <br /> Once that was collected, I had to extract the bits of the
              design that were consistant throughout his games, while also
              selecting the most iconic and eye catching for a viewer.
              <br />
              <br />
              Additionally, I also visited websites for his precious games for
              Nier;Automata and Nier;Replicant to understand and replicate the
              styling done with the original website.
            </p>
            <h2>Analysis:</h2>
            <p>
              Taro's game designs share a theme of <span>faded colours</span>{" "}
              and <span>serif fonts</span>. He tends to keep his main colors
              muted towards the grey and likes to use a shade very close to
              black but not exactly either. Colors tend to be towards the warmer
              side with minimal UI embellishments and instead a very detailed
              artwork that is cut through by a solid color of bold serif-font
              families.
            </p>
            <h2>Outcome:</h2>
            <p>
              A successful homage to a creator that I very much look up to. I
              was fully satisfied with the end result that not only fits the
              theme of his works, but is also a responsive mobile and web
              friendly website design.
            </p>

            <a target="_blank" href="https://github.com/cremegon/hero-website">
              <div className="project-linked">visit the project here!</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
