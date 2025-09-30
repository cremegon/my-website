import Carosel from "../../components/Carosel";
import { LostPetsData } from "../../components/data/DataList";

export default function LostPets() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Lost Pet Finder Client - UI/UX Design</h1>
        </div>

        <Carosel data={LostPetsData} />

        <div className="text-content nier">
          <h2>Objective:</h2>
          <p>
            Create an intuitive and immediately user-recognized design that
            helps users navigate the site easily, while also proposing a scheme
            that speaks authentically to the "Have You Seen this Pet" posters
            used previously in print.
            <br />
            <br />
            <span style={{ background: "yellow" }}>
              The client requested a few pointers at the start of the project:
            </span>
            <br />
            <br />
            1. Evokes the feeling of old lost posters. <br />
            2. Evokes a sense of comfort but also urgency.
          </p>
          <h2>Approach:</h2>
          <p>
            I started by researching posters used across lost posters that where
            typically stuck up to telephone poles in neighbour hoods, the font
            choice was typically serif, a picture of the pet in the center and a
            brief text attached below, with slits cut at the bottom with the
            owner's phone number.
            <br />
            <br />
            Therefore, I wanted to capture a simple template of picture and
            font-choice while incorporating graphic choices that were
            provocative of the slit numbers at the bottom of pages, and that
            also conveyed a sense of confusion and clarity. This is referred in
            the 2nd image of the collection with the picture of the dog and the
            "Lost" and "Found" titles to the right of it.
          </p>
          <h2>Analysis:</h2>
          <p>
            Doing extra research in the psychology of users and how layouts and
            colors can affect them in situations of distress and ease, I had to
            account for a color theme and template that would not make users
            anxious in-case they are using the site to find their pets, but also
            alert given the urgency of the matter to either them or another
            person.
            <br />
            <br />
            I decided to go for red tone that is not de-valued and
            over-saturated, but rather saturated and also valued. The reason is
            to avoid a slippery connection between a tone of red evoking "blood"
            but staying close to the line of "urgent", like an ambulance siren's
            red color.
            <br />
            <br />I also decided to not make the site too cluttered. Given the
            nature of urgency, I wanted to avoid users from thinking too much
            and immediately convey the intent of the graphics instead.
          </p>
          <h2>Outcome:</h2>
          <p>
            The client was very happy with the final design and mockup, they
            resonated with the serif font choice and the simple blockey
            template, as that was a part of their criteria mentioned at the
            start of the project.
          </p>
        </div>
      </div>
    </div>
  );
}
