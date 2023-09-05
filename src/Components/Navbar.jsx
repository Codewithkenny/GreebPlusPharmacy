import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthData } from "../Components/AuthContext";
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import {
  faPhone,
  faBars,
  faTimes,

} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import CartPopover from '../Components/Popover/CartPopover';
import UserPopover from '../Components/Popover/UserPopover';
import GreenPlusLogo from '../images/greenplus.png';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutUserAsync } from "../Components/LogoutUserAsync/LogoutUserAsync";
// import AuthControl from '../Components/AuthControl/AuthControl';
import LogoutButton from './LogoutButton/LogoutButton';


const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="container">
        <div className="phone-number">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <span>+234 913 239 9569</span>
        </div>

        <div className="banner">
          Welcome to our store!
        </div>
        <div className="social-icons">
          <Link
            to={{ pathname: "https://www.facebook.com/profile.php", search: "?id=100087504052959" }}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            to={{ pathname: "https://www.instagram.com/greenpluspharmacy_/" }}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/company/greenplus-pharmacy/", search: "?originalSubdomain=ng" }}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>

      </div>
    </div>
  );
};

function Navbar() {
  const [click, setClick] = useState(false);
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  const { user, logout } = AuthData();
  // const user = useSelector((state) => state.auth.user !== null);
  const [activeMenu, setActiveMenu] = useState(null)

  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = async () => {
    dispatch(LogoutUserAsync());
    // Perform UI changes after successful logout
    // For example, navigate to another page or update UI elements
  };

   
  

  const categories = [
    {
      name: 'Pain Management',
      subcategories: [
        'Anti-inflammatory',
        'Body Pains',
        'Fevers, Headaches & Migraine',
        'Joint Pain',
        'Muscle Relaxants',
        'Nerve Pain Treatment',
        'Supports & Compliance Aids'
      ]
    },
    {
      name: 'Cough & Cold',
      subcategories: [
        'Cold',
        'Cough',
        'Nasal Congestion',
        'Sore Throat'
      ]
    },
    {
      name: 'Chronic Disease',
      subcategories: [
        'Asthma',
        'Hypertension',
        'Diabetes',
        'High Cholesterol',
        'Prostate Health'
      ]
    },
    {
      name: 'Mother & Child',
      subcategories: [
        'Baby Care',
        'Children\'s Health'
      ]
    },
    {
      name: 'Vitamins and Supplement',
      subcategories: [
        'Bone and Joints',
        'Diet and Nutrition',
        'Sleep Aid',
        'Sport Nutrition',
        'Urinary Health',
        'Vitamins'
      ]
    },
    {
      name: 'Beauty and Grooming',
      subcategories: [
        'Feminine Hygiene',
        'Hair Care',
        'Make Up',
        'Oral Care',
        'Skincare'
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  return (
    <>
      <TopNav />
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={GreenPlusLogo} alt="" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
            className={click ? 'close-icon' : 'menu-icon'}
          />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle as={NavLink} id="dropdown-menu" className="nav-links custom-nav-link">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {categories.map((category, index) => (
                  <Dropdown key={category.name}>
                    <Dropdown.Toggle as={NavLink} to={category.path} className="nav-link">
                      {category.name}{" "}
                      <i className="bi bi-chevron-right submenu-chevron"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="right-submenu">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li key={subIndex}>
                          <NavLink to={`${category.path}/${subcategory.toLowerCase().replace(/\s/g, '-')}`} className="nav-link">
                            {subcategory}
                          </NavLink>
                        </li>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item">
            <div className="header-icons">
              {isAuthenticated ? (
                <>
                <span className='user=greeting'>Hello, {user.firstName}</span>
                <LogoutButton />
                  <CartPopover />
              
                </>
              ) : (
                
                <div>
                  <UserPopover />
                  <CartPopover />
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
