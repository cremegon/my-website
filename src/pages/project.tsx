import Navbar from "../components/navbar";
import CardComp from "../components/card";

export default function Project() {
  const projectData = [
    {
      img: "/src/assets/website-screens/wridden/wridden1.png",
      title: "Wridden - Story Social App",
      goto: "/project/wridden",
      id: "1",
    },
    {
      img: "/src/assets/website-screens/hero/herocover.png",
      title: "Hero Website",
      goto: "/project/hero-website",
      id: "2",
    },
    {
      img: "/src/assets/website-screens/netflix/netflix1.png",
      title: "Netflix Clone App",
      goto: "/project/netflix-clone",
      id: "3",
    },
    {
      img: "/src/assets/thumb.png",
      title: "Some New Project",
      goto: "/project/random",
      id: "4",
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen main">
        <div className="project-content">
          <h1 className="project-title">
            Projects<span>:</span>
          </h1>
          <div className="card-layouts">
            {projectData.map((item) => (
              <CardComp
                title={item.title}
                thumb={item.img}
                id={item.id}
                goto={item.goto}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
