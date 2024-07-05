import "./index.css";

export default function Home() {
  return (
    <div className="showcase-screen main">
      <div className="landing-content">
        <div className="showcase-title">
          <h1 className="head1">
            Hi, {"{visitor}"}
            <span>:</span>
          </h1>
          <h1 className="head2">
            <span>Hussain Ahmed Shaikh</span>
          </h1>
        </div>
        <div className="showcase-face">
          <div className="face"></div>
          <p>Web</p>
          <p>UI/UX</p>
          <p>Data</p>
        </div>
      </div>

      <div className="blob"></div>
    </div>
  );
}
