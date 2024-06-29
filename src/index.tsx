import Navbar from "./components/navbar";
import "./index.css";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen">
        <div className="landing-content">
          <div className="showcase-title">
          <h1 className="head1">Hi, {"{visitor}"}:</h1>
          <h1 className="head2"><span>Hussain Ahmed Shaikh</span></h1>
          </div>
          
        </div>
        <div className="showcase-bg layer"></div>
        <div className="blob"></div>
      </div>
    </div>
  );
}
