import React from "react";

export default function Footer () {

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
                    <p>Get in touch with us</p>
                </div>
                <div id="footerTextGrid">
                    <div className="footerTextItem">
                        <h4 className="footerTextTitle">Call</h4>
                        <p>+254 700000000</p>
                        <h4 className="footerTextTitle">Email</h4>
                        <p>aaaabbbbbcccc@gmail.com</p>
                    </div>
                    <div className="footerTextItem">
                    <h4 className="footerTextTitle">Visit</h4>
                        <address>
                            <p>Address Line 1</p>
                            <p>Address Line 2</p>
                            <p>Address Line 3</p>
                        </address>
                    </div>
                    <div className="footerTextItem">
                        <ul className="footerSocials">
                            <li><a href="https://twitter.com/">Twitter</a></li>
                            <li><a href="instagram.com">Instagram</a></li>
                            <li><a href="linkedin.com">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <p className="copywrite">copywrite</p>
            </div>
        </footer>
    )
}