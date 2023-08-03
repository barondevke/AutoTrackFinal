import React from "react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer">
      <div id="footerWrapper">
        <div id="footerArrow">
          <div className="scroll-to-top" onClick={handleScrollToTop}>&#8593;</div>
        </div>
        <div id="getInTouch">
          <p>Contact Us</p>
        </div>
        <div id="footerTextGrid">
          <div className="footerTextItem">
            <h4 className="footerTextTitle">Call</h4>
            <p>+1 (123) 456-7890</p>
            <h4 className="footerTextTitle">Email</h4>
            <p>contact@autotrack.com</p> {/* Updated email */}
          </div>
          <div className="footerTextItem">
            <h4 className="footerTextTitle">Visit</h4>
            <address>
              <p>123 Street</p>
              <p>Nairobi, Kenya</p>
              <p>00800</p>
            </address>
          </div>
          <div className="footerTextItem">
            <ul className="footerSocials">
              <li><a href="https://twitter.com/">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="copywrite">© 2023 AutoTrack</p> {/* Updated copyright */}
      </div>
    </footer>
  );
}
