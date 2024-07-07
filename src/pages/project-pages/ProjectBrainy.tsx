import Carosel from "../../components/Carosel";
import { BrainyData, BrainyLofi } from "../../components/data/DataList";

export default function Brainy() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content brainy">
        <div className="title-content">
          <h1>Moodle LMS Re-design</h1>
        </div>

        <Carosel data={BrainyData} />

        <div className="text-content brainy">
          <h2>Objective:</h2>
          <p>
            Redesign a more user friendly version of Griffith College's Moodle
            Learning Management System (LMS). Remove cluttered elements of the
            previous UI and provide a more intuitive user experience for
            students of all schools and academic traits.
          </p>
          <h2>Approach:</h2>
          <p>
            In order to cater to a user-centric design, we used the following
            methods to gather quantitative and qualitative data:
            <ul>
              <li>Surveys</li>
              <li>One-on-One Interviews</li>
              <li>Secondary Case Study</li>
            </ul>
            <br />
            We created a <span>Survey</span> Monkey form that targetted
            non-leading questions and foremost focused on gathering data about
            user experiences and thought processes in general.
            <br />
            <br />
            Next, we conducted 10 One-to-One <span>interviews</span> with
            students of various age groups, gender, schools and personalities.
            It was important for us to have a varying sample size as the
            personality of every student was necessary to understand how a
            certain design would influence their decisions towards a more
            positive learning experience and to create a more rounded out
            persona.
            <br />
            <br />
            For example, a student more inclined towards a carefree party
            lifestyle, would not want to give deeper into a UI that is cluttered
            and unwelcoming, rather they would disassociate with the app further
            and be less inclined to focus on studies. A calender feature for
            such a person would then be the core of their academic reminders,
            therefore being a highlight of the core redesign requirements.
            <br />
            <br />
            Finally, we spear-headed <span>research</span> into the types of
            learning and the environment that different modes of class teaching
            have effects on students.
          </p>
          <h2>Analysis:</h2>

          <h4>Surveys</h4>
          <p>
            The data from the surveys showed that students' association with an
            LMS is tied to "strictness". It is associated with a utilitarian
            input and output of assignments and results.
            <br />
            <br />
            They associated it with clutered-ness and often a design that is
            like a rustic machine with many intricate parts that can be
            explored, but are not because they feel "too old" and almost
            "deserted"
          </p>

          <h4>Interviews</h4>
          <p>
            Interviews were successful in capturing a wide range of students and
            constructing a complex persona: "Maria Anakin Walkins".
          </p>
          <img
            src={
              import.meta.env.BASE_URL +
              "/assets/website-screens/brainy/persona1.JPG"
            }
            alt="persona"
            className="persona"
          />
          <p>
            Interviews ranging from CS, Arts and Law students had varying
            lifestyles and qualms from the current LMS.
            <br />
            <br />
            Students more academically geared complained that the UI's
            cluttered-ness makes the journey "zombie-like", where they were
            confused with the UI at first, but once they figured it out, they
            chose not to question it, not out of clarity but out of habit as it
            was very confusing at first but habitual now.
            <br />
            <br />
            It also did not feature elements that are essential to them either,
            like an accessable and clear calender that informed them of
            deadlines via different color schemes, or easy to use submission
            boxes for assignments as sometimes students are confused whether
            they submitted the assignment or only the draft.
          </p>
          <h4>Research</h4>
          <p>
            From various research papers, we concluded that learning occurs at 3
            levels:
            <ol>
              <li>Formal Learning</li>
              <li>Informal Learning</li>
              <li>Unformal Learning</li>
            </ol>
            <br />
            Firstly, with <span>Formal Learning</span>, the transfer of
            knowledge flows directly from material to lecturer to student. It is
            the mean by which the quality of education is determined primarily
            by interactions the lecturer has with the source material.
            <img
              src={
                import.meta.env.BASE_URL +
                "/assets/website-screens/brainy/diag1.JPG"
              }
              alt="diag1"
              className="diag"
            />
            If the teacher does not engage with the source material, then they
            become nothing less than the reflection of the course material
            itself. However, if the teacher chooses to bend/mold the course
            material according to their own understanding of students
            effectively grasping complex concepts with ease, then the lecturer's
            intuition pierces the boundaries of the source material and
            cultivates learning beyond the text and classroom.
            <br />
            <br />
            Therefore, it would be important for a redesign to clearly provide
            both course material and lecturer's slides clearly for them to call
            back to effective lectures.
            <img
              src={
                import.meta.env.BASE_URL +
                "/assets/website-screens/brainy/diag2.JPG"
              }
              alt="diag2"
              className="diag"
            />
            Secondly, with <span>Informal Learning</span>, the transfer of
            knowledge is done by successfully cultivating a discussion between
            students in a seminar style environment. By successfully identifying
            points of students, the teacher can insert crucial points that can
            circulate conversations between students and teachers in many
            combinations.
            <br />
            <br />
            Hence, a forum platform on the online LMS where students can
            continue effective conversations from the classroom online would
            supplement the learning even further.
            <img
              src={
                import.meta.env.BASE_URL +
                "/assets/website-screens/brainy/diag3.JPG"
              }
              alt="diag3"
              className="diag"
            />
            Lastly, with <span>Unformal Learning</span>, for students who have
            been stimulated from formal and/or informal learning strategies, an
            optional level of higher learning occurs when students choose to go
            outside the scope of the material and discussion and begin to
            research on topics out of their own accord, time and interests.
            <br />
            <br />
            In such a case, an LMS subpage that distinguishes bonus content for
            students who are willing to do so would be extremely beneficial.
          </p>

          <h2>Re-Design:</h2>
          <p>
            After gathering intel, we designed wireframes in Figma to cater to
            the kind of UI/UX changes out of the research analysis.
            <br />
            <br />
          </p>
          <div className="lofibrain-container">
            {BrainyLofi.map((item) => (
              <img
                src={import.meta.env.BASE_URL + item.src}
                alt={item.alt}
                className={item.class}
              />
            ))}
          </div>

          <p>
            <br />
            For the color palette and aesthetic of the app, we wanted to emulate
            a feeling of calm instead of rigidness with a grey color scheme.
            However, we also did not want the site to be oversaturated with
            color, as too much stimulation in a site meant for educative
            purposes may overwhelm students who are already engaged in mental
            activity.
            <img
              src={
                import.meta.env.BASE_URL +
                "/assets/website-screens/brainy/palette.JPG"
              }
              alt="diag3"
              className="diag"
            />
            So instead, we aimed for a less saturated color palette that
            emulated that of an indoor desk plant, evoking a sense of calm and
            organization, with elements having slightly rounded corners and
            large, easy to distinguish boundaries.
            <img
              src={
                import.meta.env.BASE_URL +
                "/assets/website-screens/brainy/brain2.JPG"
              }
              alt="diag3"
              className="diag"
            />
            For the font, we used "Poppins" as a sans-serif style, with ample
            kernelling between letters and no hooks, so that it easily flows
            down the viewership of users without too much focus.
            <br />
            <br />
            And lastly, we added much needed features such as a clear calender,
            to-do list and notification of assignment deadlines for simple and
            effective time management.
          </p>

          <h2>Outcome:</h2>
          <p>
            A successful redesign of an LMS, that our later interviewees and
            class agreed upon as an exponential boost in pleasant UI/UX design,
            which many students were keen to use if it were implemented
            immediately, claiming that the overview of their academic life felt
            much more positive looking at the re-design
          </p>

          <a
            target="_blank"
            href="https://drive.google.com/file/d/1YtgjaxBwaMOXnMA1xeXiRJDWCZtJgK3v/view?usp=sharing"
          >
            <div className="project-linked">visit the project here!</div>
          </a>
        </div>
      </div>
    </div>
  );
}
