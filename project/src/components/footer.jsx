import React, { Component } from 'react';
import footerLogo from '../static/img_footer_logo.png';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="inner-col">
                    <div><img src={footerLogo} alt=""/></div>
                    <div className="list-corp">
                        <ul>
                            <li><a href="#">Team of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <select name="" id="" className="lang-area">
                            <option value="">World Wide (ENG)</option>
                            <option value="">한국 (한국어)</option>
                        </select>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;