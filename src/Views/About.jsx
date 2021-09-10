import React from 'react'
import NavbarTop from '../Components/NavBarTop';
import '../Styles/About/about_styles.css';
import "../Styles/styles_base.css";
import profileImg from "../Assets/Img/profileImg.jpg";

function About() {
  return (
    <div>
      <NavbarTop about="active"/>
      <div className="about-main-container flex-column-center">
        <img src={profileImg} alt="Profile img" className="profile-img"/>
        <p className="margin-top-sm font-weight-bold font-size-lg text-align-center">Alfonso Martínez</p>
        <p className="font-weight-thing font-size-sm text-align-center">Frontend Developer</p>
        <a rel="noopener noreferrer" href="https://personal-portfolio-alfonso.vercel.app/" target="_blank" className="margin-top-lg know-more-btn font-weight-bold font-size-md color-black">Know more about me!</a>
      </div>
    </div>
  )
}

export default About