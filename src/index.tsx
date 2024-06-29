import Navbar from "./components/navbar";
import "./index.css";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen">
        <div className="landing-content">
          <h1>Hi, {"{visitor}"}</h1>
          <h1>Hussain Ahmed Shaikh</h1>
        </div>

        <div className="blob"></div>
      </div>
    </div>
  );
}
