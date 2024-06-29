import Navbar from "../components/navbar";

export default function Art() {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen">
        <div className="art-content">
          <h1 className="art-title">Art</h1>
        </div>
        <div className="showcase-bg layer"></div>
      </div>
    </div>
  );
}
