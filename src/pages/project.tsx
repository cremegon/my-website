import Navbar from "../components/navbar";
import CardComp from "../components/card";

export default function Project() {
  const projectData = [
    {
      img: "./src/assets/thumb.png",
      title: "Wridden - Story Social App",
      id: "1",
    },
    {
      img: "./src/assets/thumb.png",
      title: "Hero Website",
      id: "2",
    },
    {
      img: "./src/assets/thumb.png",
      title: "Netflix Clone App",
      id: "3",
    },
    {
      img: "./src/assets/thumb.png",
      title: "Some New Project",
      id: "4",
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen">
        <div className="project-content">
          <h1 className="project-title">Projects:</h1>
          <div className="card-layouts">
            {projectData.map((item) => (
              <CardComp title={item.title} thumb={item.img} id={item.id} />
            ))}
          </div>
        </div>
        <div className="showcase-bg layer"></div>
      </div>
    </div>
  );
}
