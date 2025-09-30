import Carosel from "../../components/Carosel";
import { HNGMData } from "../../components/data/DataList";

export default function HNGMLabs() {
  return (
    <div className="showcase-screen-content">
      <div className="page-content nier">
        <div className="title-content">
          <h1>HNGM Labs SaaS Client - UI/UX Design</h1>
        </div>

        <Carosel data={HNGMData} />

        <div className="text-content nier">
          <h2>Objective:</h2>
          <p>
            The client and their associates have been running a SaaS company,
            however they're old designed was reviewed by users and members of
            adjacent teams as "too cluttered".
            <br />
            <br />
            They mentioned that their previous design was intentially made so,
            as market competitors and trends saw that customers valued more
            visuals and texts that give a "fuller" impressions.
            <br />
            <br />
            However, with trends changing, they've seen how new startups have
            become competitors and are attracting more professional clients with
            minimalist designs.
            <br />
            <br />
            Their criteria was as follows: <br />
            <br />
            1. Provide a minimalist color palette and design that conveys the
            complexity of their work, but does not clutter the site. Large
            bodies of text are welcome, but only in parts where it was
            necessary.
            <br />
            2. "Less is More" philosophy. Provide a sense of premium service
            without being too loud. Give users a sense of curiosity and
            confidence towards our expertise.
          </p>
          <h2>Approach:</h2>
          <p>
            I started by immediately researching their competitors. I noticed
            that they had shifted to a more blockey, almost word-document like
            format, that was unusual, but I saw how shifting from loud,
            cluttered visuals, it made them stand out more.
            <br />
            <br />
            I also went beyond and looked into international SaaS providers and
            their templates, to grab international trends as well.
            <br />
            <br />
          </p>
          <h2>Analysis:</h2>
          <p>
            What I noticed from that is most minimalist palette designs have
            emerged primarily through the crypto service, fintech and web3
            sphere.
            <br />
            <br />
            Meta's latest choice of minimalist designs to market their new
            business analyzer tools as well as physical products like the
            Meta-quest, have started a new trend of this visual language that
            uses saturated sharp colors against either blacks or whites.
            <br />
            <br />
            I also noticed that most visuals relating to a service, where not
            related to the service at all.
            <br />
            <br />
            "Techy" visuals of nodes, macro-scale chip shots, were not as
            prevelant as nature themed visuals assigned to development services.
            It seems that the development of technology and its marketing have
            shifted to a harmony with the natural world, perhaps even to
            highlight its state of the art design to clients and stakeholders.
          </p>
          <h2>Outcome:</h2>
          <p>
            The client was happy with the new layout, I kept in mind to follow
            their minimalist request, but in places of details such as their
            services, I opted to compress larger and smaller bodies of text, in
            order to contrast the size, weight and simplicity of the picture
            next to it.
            <br />
            <br />
            As an addition, I also gave alternative color palettes to give a
            more fun mood/impression of the company of pages such as the
            "Connect" page, to give users more confidence in an almost new-age
            youthful and attuned approach to their development services.
            <br />
            <br />I balanced it out with plentiful negative spacing between
            scrolls to give "Less is More" impressions.
          </p>
        </div>
      </div>
    </div>
  );
}
