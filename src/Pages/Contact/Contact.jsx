import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaShare } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <>
        <div id="contact" className="contact">
          <div className="container" data-aos="fade-up" />

          <div className="section-header">
            <h2 className="text-dark">Contact</h2>
            <p className="text-dark">Need Help? <span>Contact Us</span></p>
          </div>

          <div className="google-map" style={{ margin: '20px auto', maxWidth: '1300px' }}>
            <iframe
              title="Google Map"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: '0', width: '100%', height: '450px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5299957131447!2d3.886553974138248!3d7.4064391122754385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d01aeb5318b%3A0x22835502d8135ca7!2sGreenPlus%20Pharmacy!5e0!3m2!1sen!2sng!4v1692415917405!5m2!1sen!2sng"
              allowFullScreen
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <FaMapMarkerAlt className="icon bi bi-map flex-shrink-0 text-dark" />
                <div>
                  <h3 className="text-dark">Address</h3>
                  <p className="text-dark">ICT hub, 6/7 Mokola Rd, beside Oando Filling Station, 234200, Ibadan, Oyo </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <FaEnvelope className="icon bi bi-envelope flex-shrink-0 text-dark" />
                <div>
                  <h3 className="text-dark">Email Us</h3>
                  <p className="text-dark">greenpluspharmacy02@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <FaPhone className="icon bi bi-telephone flex-shrink-0 text-dark" />
                <div>
                  <h3 className="text-dark">Call</h3>
                  <p className="text-dark">+234 913 239 9569</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <FaShare className="icon bi bi-share flex-shrink-0 text-dark" />
                <div>
                  <h3 className="text-dark">Opening Hours</h3>
                  <div><strong>Mon-Sat:</strong> 9AM - 9PM;
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form action="forms/contact.php" method="post" className="php-email-form p-3 p-md-4">
            <div className="row">
              <div className="col-xl-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-xl-6 form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                  required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center fs-5"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Contact;
