export default function Contact() {
  return (
    <div className="showcase-screen main">
      <div className="contact-content">
        <div className="contact-headtitle">
          <h1>Email & Connect</h1>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hussainahmed.s.shaikh@gmail.com
"
          target="_blank"
        >
          <div className="contact-title-holder">
            <div className="status-holder">
              <img
                src="assets/gmail-icon.png"
                alt="status-icon"
                className="status-icon"
              />
            </div>
            <h1 className="contact-title">{"<get>"} in touch</h1>
          </div>
        </a>
      </div>
    </div>
  );
}
