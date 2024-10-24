import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__text">Alex Gomez © 2024</p>

          <div className="footer__social-media">
            <a
              href="https://www.linkedin.com/in/alex-gomez-87309b12b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedInLogo.png" alt="LinkedIn" style={{width: 50, height: 50}}/>
            </a>
            <a
              href = "/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/resumeIcon.png" alt="Resume"  style={{width: 50, height: 50}}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
