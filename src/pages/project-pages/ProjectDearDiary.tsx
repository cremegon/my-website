import Carosel from "../../components/Carosel";
import { DearDiaryData } from "../../components/data/DataList";
import InPagePic from "../../components/InPagePic";

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
          <h2>Objective:</h2>
          <p>
            The project started as a personal-project to create a digital
            version of a practice that I personally have been doing for the past
            7 years.
            <br />
            <br />
            The idea was to write a "Death Diary" whose premise was to document
            my life in both mundane and personal ways as a means of preserving a
            snapshot of myself for friends, family and anyone into the future,
            as a means of carrying on legacies and lessons for the future. At
            the time of my death, I would have passed various diaries to people
            I would have entrusted and upon hearing it, they would allow my
            diary to be made public to close friends, family and the people at
            large.
            <br />
            <br />
            I decided to digitize the platform by making a fullstack web service
            that allows users to login and maintain a person documentation of
            their diaries. In this case, when a diary is completed, it is saved
            in a database and a backend API compiles it into a PDF with attached
            notes, pictures, a blurb etc and emails it via an email API service
            to the person it was entrusted to.
            <br />
            <br />
            Additionally, entrusted people's data and location would be kept
            active until the time of death, upon which the user's account would
            send a final email of all diaries to every entrustee and delete the
            account forever.
            <br />
            <br />
            However, as time went on, I decided to pitch the idea to
            stakeholders such as the Dublin City Council and Ireland's National
            Archive Repository and Service, as a means of preserving an accurate
            snapshot of national history, by giving citizens a public platform
            to voluntarily write diaries that will be preserved and made public
            as part of the national archive.
            <br />
            <br />
            Upon discussion and meetings with technical experts, council
            members, librarians and historians of Ireland,
            <span style={{ background: "yellow" }}>
              The following criterias were collaborated on:
            </span>{" "}
            <br />
            <br />
            1. A functioning local version of the web application must be
            proposed as proof of execution <br />
            <br />
            2. A mockup UI/UX design must be proposed with accessability to both
            young and especially older members of society. <br />
            <br />
            3. Legal frameworks must be discussed and proposed in order to
            protect citizen data, as well as filter content that might work
            against communities and national interest.
            <br />
            <br />
            4. Scalability options and budget estimates must be proposed after
            the initial 3 steps.
          </p>
          <h2>Approach:</h2>
          <p>
            While I was familiar with the modular, handwritten version of this
            idea, my initial plan was to first lay the backend foundation of all
            possible user interactions, accessability options, features, and
            security frameworks to make the site functional.
            <br />
            <br />
            The tech stack I decided to use was{" "}
            <span>
              {" "}
              React and TypeScript for frontend, ExpressJS and TypeScript for
              Backend and PostgreSQL and DBeaver for Database Management.
            </span>
            <br />
            <br />
            I first drew all the security and authentication features using JWT
            tokens and all security autherization and cookie reading done in the
            backend server for additional security.
            <br />
            <br />I set up a rate-limiter as a first measure to avoid any extra
            load on the backend server, even if it was running on my machine and
            designed various low-level and high-level system designs to plan
            features beyond that.
            <br />
            <br />
            Once security was sorted, I added basic route management and prop
            management using useContext and basic prop-drilling but decided to
            later make most fetch requests to the backend, in order to avoid
            system load of user's machines, as well as Cloud Storage for
            scalability and easy access.
            <br />
            <br />
            In doing so, I implemented <span>Redis</span> for effecient caching
            and immediate response times for fetch requests for a smooth user
            experience.
          </p>
          <h2>Analysis:</h2>
          <p>
            While making various F2B connections, I stumbled across many
            features such as chapter toggling, effective toggle management
            user-centric inputs and intuitive design that I initially could not
            scope out.
            <br />
            <br />
            Therefore, many of the project features were revamped and worked on
            multiple times throughout the span of this project.
            <br />
            <br />
            <InPagePic
              data="/assets/website-screens/deardiary/leveldesign.png"
              type="non-lofi"
            />
            After a basic version of the site was ready, I opened it to closed
            user-testing between experts and friends, who provided me with
            additional feedback, requests and improvements to be made in favour
            of the site, with positive reviews about the idea of the project.
            <br />
            <br />
            Additionally, I also conducted online and in-person
            surveys/interviews in order to understand wider audiences, to cater
            and work around their impressions of the idea of digital diaries
            preserving their legacies and memories.
          </p>
          <h2>Outcome:</h2>
          <p>
            Stakeholders recieved the project positively, with various feedback
            that proved to be vital for the accessibility of the site in both
            its features and visuals.
            <br />
            <br />
            An example of this was the feature to upload already existing PDF
            versions of the diary in case older users are more comfortable
            writing manual diaries, so a custom API was built to process that
            user interaction into the modular framework, as well as website
            designs being accessible in both size, recognition, shape language
            for stronger association between older audiences.
            <br />
            <br />
            Many new features were added on professional request as well, such
            as image and audio tagging to preserve voices and personal moments
            and in-total historians, librarians and testers were happy with the
            outcome.
            <br />
            <br />
            The next step is to further plan meetings with the Council and
            propose infrastructure and budgeting plans in order to run a pilot
            piece, to see if the project can be sustainable.
          </p>

          <a target="_blank" href="https://github.com/cremegon/dear-diary">
            <div className="project-linked">visit the project here!</div>
          </a>
        </div>
      </div>
    </div>
  );
}
