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
          <h1 className="head3">
            <span className="hide">
              //console.log("dwasfaasff")
              <br />
            </span>
            <span>
              My name is <span className="span-name">Hussain Ahmed Shaikh</span>{" "}
              {"<br />"} <br />
              and I'm a{" "}
              <span className="span-dev">
                frontend developer<span className="blinker">|</span>
              </span>
              who also deals with <span className="span-dev">data</span>;
            </span>
          </h1>
        </div>
        <div className="showcase-face">
          <div className="face"></div>
          <div className="items">
            <p>Web</p>
            <p>UI/UX</p>
            <p>Data</p>
          </div>
        </div>
      </div>

      <div className="blob"></div>
    </div>
  );
}
