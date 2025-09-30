import Carosel from "../../components/Carosel";
import { TasneemData } from "../../components/data/DataList";

export default function Tasneem() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>Dr. Tasneem's Insitute of Health - UI/UX Design</h1>
        </div>

        <Carosel data={TasneemData} />

        <div className="text-content nier">
          <h2>Objective:</h2>
          <p>
            The client had decided to re-vamp here previous web-design from the
            standard wordpress template and wanted something more robust and
            simple.
            <br />
            <br />
            She wanted to detach from the wordpress web design, with association
            that other clinic and smaller, less trusted institutes have been
            using Wordpress to design their sites. So she wants to stand out
            against other well-reputable competitors as well against poorly
            trusted clinics by assigning a web developer, to create a new custom
            site.
            <br />
            <br />
            She mentioned that the competitors have been using a cluttered
            layout in order to attract more click-rates, but given her standing
            as a long term presence in the market, she is not worried about that
            anymore, as word of mouth about her services have been very positive
            and now she wanted a simpler layout that gives off a feeling of
            finese.
            <br />
            <br />
            <span style={{ background: "yellow" }}>
              Her requirements were as follows:
            </span>{" "}
            <br />
            <br />
            1. A pastel color palette that gives a feeling of "softness". <br />
            2. A refreshing color palette that gives a feeling of "nature"{" "}
            <br />
            3. Minimalist layout and design that lists out all her services.{" "}
            <br />
            4. Simple to navigate site for new apprentices to visit her site and
            attend her training sessions.
          </p>
          <h2>Approach:</h2>
          <p>
            I started by researching first negatively reviewed competitors, and
            then afterwards postiviely reviewed competitors.
            <br />
            <br />
            I wanted to understand the kind of thing she was trying to move
            away, as well as the association that well-known instutitions who
            had client confidence. I noticed a recurring theme of cluttered-ness
            and splash images that were in themselves, "mini-advertisements".
            <br />
            <br />
            It felt repetitive to highlight achievements and repeating services,
            primarily to force clicks rather than give confidence to them, so I
            knew to stay away from images that were too cluttered in their own
            designs.
          </p>
          <h2>Analysis:</h2>
          <p>
            While working on the layout, I noticed that other sites never used
            bold, large texts, most likely to fit smaller texts to fill in the
            SEO-searches and make the site more "fuller and lively", however,
            since my client wanted to move away from these to begin with, I
            decided to double down on bolder, larger titles to experiment with
            the impression of confidence in the profession.
            <br />
            <br />I also noticed while working that beauty product and
            influencer palettes have been inclining towards a very "chic" color
            palette of pastel colors applying all at once.
          </p>
          <h2>Outcome:</h2>
          <p>
            The client was pleasantry surprised with the design. She mentioned
            talking to other beauticians about trending color palettes in the
            infleuncer market which was captured in the site.
            <br />
            <br />I chose to implement a pink-ish overlay to give a sense of
            softness, as well as a naturated by muted green implying plants and
            organic life to capture a sense of balance. In the sections of
            services I added a longer descriptor and kept the footer a section
            to visit itself rather than just the end of the site.
            <br />
            <br />I added bolder title texts to relay confidence and a unique
            alignment for each section to keep the site experience engaging.
          </p>
        </div>
      </div>
    </div>
  );
}
