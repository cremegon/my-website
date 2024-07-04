import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase-screen main">
        <div className="contact-content">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hussainahmed.s.shaikh@gmail.com
"
            target="_blank"
          >
            <div className="contact-title-holder">
              <div className="status-holder">
                <img
                  src="/src/assets/gmail-icon.png"
                  alt="status-icon"
                  className="status-icon"
                />
              </div>
              <h1 className="contact-title">{"<get>"} in touch</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}