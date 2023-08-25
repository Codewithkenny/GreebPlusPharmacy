import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faDribbble, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-white text-center text-sm-start bg-success mt-5">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">About company</h5>
            <p>
              "Your Health, Our Priority. Quality Care Delivered."
            </p>
           
            <div className="mt-4">
              <Link
                to="#"
                className="btn btn-floating btn-primary btn-lg"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link
                to="#"
                className="btn btn-floating btn-primary btn-lg"
              >
                <FontAwesomeIcon icon={faDribbble} />
              </Link>
              <Link
                to="#"
                className="btn btn-floating btn-primary btn-lg"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                to="#"
                className="btn btn-floating btn-primary btn-lg"
              >
                <FontAwesomeIcon icon={faGooglePlusG} />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
            <div className="form-outline form-white mb-4">
              <input type="text" id="formControlLg" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="formControlLg">Search</label>
            </div>
            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
              <li className="mb-3">
                <span className="fa-li"><FontAwesomeIcon icon={faHome} /></span><span className="ms-2">ICT hub, 6/7 Mokola Rd, beside Oando Filling Station, 234200, Ibadan, Oyo</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><FontAwesomeIcon icon={faEnvelope} /></span><span className="ms-2">greenpluspharmacy02@gmail.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><FontAwesomeIcon icon={faPhone} /></span><span className="ms-2">+234 913 239 9569</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><FontAwesomeIcon icon={faPrint} /></span><span className="ms-2">+ 01 234 567 89</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <table className="table text-center text-white">
              <tbody className="font-weight-normal">
                <tr>
                  <td>Mon - Sat:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>12am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2021 Copyright:
        <a className="text-white" href="https://greenpluspharmacy.com/">GreenPlusPharmacy.com</a>
      </div>
    </footer>
  );
};

export default Footer;
