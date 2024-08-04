import Carosel from "../../components/Carosel";
import { PreppyData } from "../../components/data/DataList";

export default function Preppy() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Django Webapp - Preppy</h1>
        </div>

        <Carosel data={PreppyData} />

        <div className="text-content nier">
          <h2>Objective:</h2>
          <p>
            Create a backend web app using a Django, that functions as a
            Discord-like forum where users can share posts and interact with one
            another.
            <br />
            <br />
            Once complete, it was so dockerize the app so that I may become
            familiar with Docker as well.
          </p>
          <h2>Approach:</h2>
          <p>
            I referenced a single tutorial that guided me though the structure
            of a Django backend in its models and views.
            <br />
            <br />
            Once done, I would do a 50/50 split of coding along the tutorial on
            a single topic, and then in the next few days, I would redo the same
            work from memory and trial/error in a new clone project.
            <br />
            <br />
            My main objective was not to replicate, but to understand the
            process and structure so that I may have full control to
            troubleshoot and create future projects of my own without any
            follow-alongs.
            <br />
            <br />
            The only follow-along was the Dockerization process.
          </p>
          <h2>Understanding:</h2>
          <p>
            I came to understand how Views and Models go hand in hand to process
            and store data. Templates were not difficult to understand as
            HTML/CSS are not a problem.
            <br />
            <br />I also came to use an ORM, which proved to be extremely
            convenient as SQL data processing was a question in my mind, but by
            practice was simplified through Django's inbuilt features to handle
            requests, filters and responses.
            <br />
            <br />
            It also helped me understand relational databases, as some models
            would need to call on other models to target certain data features
            when later processing templates, for examples the avatar icons and
            comments made by their respective users, as well as search filters
            that would find rooms/users depending on the topic name or user.
            <br />
            <br />
            One the other hand, Docker did not seem to be so difficult, as it
            was a matter of setting up installations and commands, afterwhich
            Docker itself took the heavy lifting of creating an image and
            container of the app.
          </p>
          <h2>Outcome:</h2>
          <p>
            A successful project where I was able to both familiarize, practice
            and apply a backend on my own, with a thorough knowledge of backend,
            HTTP requests and database management.
          </p>

          <a target="_blank" href="https://github.com/cremegon/django-webapp">
            <div className="project-linked">visit the project here!</div>
          </a>
        </div>
      </div>
    </div>
  );
}
