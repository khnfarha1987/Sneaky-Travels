import React from 'react';
import './Styles/footer.css';
import HeadoutLogo from './Images/headout.png';
import Googlelogo from './Images/gplus-connect.png';
import Twitterlogo from './Images/twitter-connect.png';
import Facebooklogo from './Images/fb-connect.png';
import Pinterestlogo from './Images/pinterest-connect.png';
import Instagramlogo from './Images/instagram-connect.png';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src={HeadoutLogo} alt="Headout" />
        <p>Travel headout is building the future of how we experience our cities.</p>
        <p
          style={{
            color: '#2980b9',
            fontSize: '14px'
          }}
        >
        </p>
        <p>2023 &copy; Travel headout Inc.</p>
      </div>
      <div className="column-two">
        <h3>Region</h3>
        <ul>
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Middle East</li>
        </ul>
      </div>
      <div className="column-three">
        <h3>Team members</h3>
        <ul>
          <li>Farha Khan</li>
          <li>Qasim Muhammad</li>
          <li>Fotios Polymenakos</li>
        </ul>
      </div>
      <div className="column-four">
        <h3>Contact</h3>
        <p>Feel free to get in touch via email:</p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          khnfarha1987@gmail.com
        </p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          mq12113@gmail.com
        </p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          polymenakosuk@gmail.com
        </p>

        <div className="social-media-contact">
          <img
            src={Googlelogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Twitterlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Facebooklogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Pinterestlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Instagramlogo}
            className="social-connect"
            alt="Connect with us"
            style={{ width: '25px', paddingBottom: '2px' }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
