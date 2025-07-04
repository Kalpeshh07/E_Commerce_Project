import React from "react";
import { Link } from "react-router-dom";
import "../comp_css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faYoutube,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faGooglePay,
  faApplePay
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>SHOP</h4>
          <ul>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Trending Now</li>
            <li>Deals & Promotions</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li>Track Order</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Info</li>
            <li>FAQ</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
          <div className="social-icons">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon twitter" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icon instagram" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-icon youtube" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>STAY UPDATED</h4>
          <div className="subscribe-wrapper">
            <div className="subscribe-box">
              <input type="email" placeholder="Email address" />
              <button>GO</button>
            </div>
            <p className="subscribe-text">
              Sign up for product updates and offers
            </p>
          </div>
          <p className="admin-link">
            <Link to="/admin-Login" style={{color:"inherit"}}>Admin</Link>
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          <span className="copyright-text">© {new Date().getFullYear()} E-Commerce. All Rights Reserved.</span>
          <div className="copyright-links">
            <Link to="#" style={{color:"inherit"}}>Privacy</Link>
            <span className="divider">|</span>
            <Link to="#" style={{color:"inherit"}}>Terms</Link>
          </div>
        </div>
        <div className="payment-methods">
          <div className="payment-icon visa">
            <FontAwesomeIcon icon={faCcVisa} />
          </div>
          <div className="payment-icon mastercard">
            <FontAwesomeIcon icon={faCcMastercard} />
          </div>
          <div className="payment-icon paypal">
            <FontAwesomeIcon icon={faCcPaypal} />
          </div>
          <div className="payment-icon gpay">
            <FontAwesomeIcon icon={faGooglePay} />
          </div>
          <div className="payment-icon applepay">
            <FontAwesomeIcon icon={faApplePay} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
