import CardComp from "../components/card";

export default function Project() {
  const projectData = [
    {
      img: "/assets/website-screens/userpilot/pilot1.png",
      title: "Userpilot Graphic Design",
      sub: "UI/Figma/InDesign",
      goto: "pilot",
      id: "6",
    },
    {
      img: "/assets/website-screens/wridden/wridden1.png",
      title: "Wridden - Story Social App",
      sub: "React/SQL/Figma",
      goto: "wridden",
      id: "1",
    },
    {
      img: "/assets/website-screens/brainy/brain7.JPG",
      title: "Brainy - LMS Design",
      sub: "UI/UX/Figma",
      goto: "brainy",
      id: "2",
    },
    {
      img: "/assets/website-screens/hero/herocover.PNG",
      title: "Hero Website",
      sub: "HTML/CSS/JavaScript",
      goto: "hero",
      id: "3",
    },
    {
      img: "/assets/website-screens/netflix/netflix1.PNG",
      title: "Netflix Clone App",
      sub: "HTML/CSS/JavaScript",
      goto: "netflix-clone",
      id: "4",
    },
    {
      img: "/assets/website-screens/web/web1.PNG",
      title: "This Website!",
      sub: "React",
      goto: "recursion",
      id: "5",
    },
  ];

  return (
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
              sub={item.sub}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
