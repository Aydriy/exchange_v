import React from "react";
import logoExchange from '../../../image/logoExchange.png'

class Footer extends React.Component {
    render() {
        return (
            <footer>
               
            <div className="footer-wrap">
            <div className="container">
                <div className="footer-content">
                    <a href="../../index.html"><img src={logoExchange} alt="logo" className="footer-logo"  /></a>
                    <div className="footer-documentation">
                        <h2 className="footer-h2">документація</h2>
                        <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        </ul>
                    </div>
                    <div className="footer-documentation">
                        <h2 className="footer-h2">про нас</h2>
                        <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        </ul>
                    </div>
                    <div className="footer-documentation">
                        <h2 className="footer-h2">додатково</h2>
                        <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
           
        </footer>

        );
    }
}

export default Footer;
