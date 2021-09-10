import React from 'react';
import '../Styles/styles_base.css';
import '../Styles/styles.css';
import Icon from '../Assets/Img/icon.jpeg';
import SearchIcon from '../Assets/Img/search.png';
import { Link } from 'react-router-dom';

function NavBarTop(props) {
  const { home, search, about } = props;
  return (
    <div className='width-100percent bg-white navbar-top'>
      <img src={Icon} alt="Top Navbar Icon" className='navbar-top-icon'/>
      <p className="navbar-top-title">Countrypedia</p>
      <div className="navLinks-container width-100percent flex-row-center">
        <ul className='flex-row-space-around width-100percent margin-top-sm'>
          <li>
            <Link to="/" className={home ? home : ""} id="home_link">All</Link>
          </li>
          <li>
            <Link to="/Search" id="search_link" className={`search-link ${search ? search : ""}`}>Search</Link>
            <img src={SearchIcon} alt="Search Icon" className="search-icon" />
          </li>
          <li>
            <Link to="/About" id="info_link" className={about ? about : ""}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarTop
