import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__text">© </p>

          <div className="footer__social-media">
            <a
              href="https://www.linkedin.com/in/alexgomez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/linkedInLogo.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
