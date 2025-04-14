import { useEffect } from "react";
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const closeIcon = document.getElementById("close-icon");
  
    const openMenu = () => {
      sideMenu.classList.add("active");
    };
  
    const closeMenu = () => {
      sideMenu.classList.remove("active");
    };
  
    const handleLinkClick = (e) => {
      // Handle only mobile view
      if (window.innerWidth <= 992) {
        const anchor = e.target.closest("a");
        if (!anchor) return;
        const parentLi = anchor.closest("li");
        if (!parentLi) return;
  
        const hasSubmenu = parentLi.querySelector(".submenu");
        if (hasSubmenu) {
          e.preventDefault(); // prevent link navigation
          parentLi.classList.toggle("open");
        }
      }
    };
  
    menuToggle?.addEventListener("click", openMenu);
    closeIcon?.addEventListener("click", closeMenu);
    sideMenu?.addEventListener("click", handleLinkClick); // delegated listener
  
    return () => {
      menuToggle?.removeEventListener("click", openMenu);
      closeIcon?.removeEventListener("click", closeMenu);
      sideMenu?.removeEventListener("click", handleLinkClick);
    };
  }, []);
      
  return (
    <>
     <header>
      <div className="container">
        <div className="mobile-header">
          <div className="menu-toggle" id="menu-toggle">&#9776;</div>
          <div className="logo">LOGO</div>
          <Link href="#" className="enrol-btn">Enrolment</Link>
        </div>

        <div className="desktop-header">
          <div className="logo">LOGO</div>
          <ul className="dropdowns">
            <li>
              <Link href="#">Qualifications <i className="fa-regular fa-chevron-down"></i></Link>
              <ul className="submenu">
                <li><Link href="#">UG Courses</Link></li>
                <li><Link href="#">PG Courses</Link></li>
              </ul>
            </li>
            <li>
              <Link href="#">Organizations <i className="fa-regular fa-chevron-down"></i></Link>
              <ul className="submenu">
                <li><Link href="#">Partners</Link></li>
                <li><Link href="#">Affiliations</Link></li>
              </ul>
            </li>
            <li>
              <Link href="#">Research & Analysis <i className="fa-regular fa-chevron-down"></i></Link>
              <ul className="submenu">
                <li><Link href="#">Reports</Link></li>
                <li><Link href="#">Papers</Link></li>
              </ul>
            </li>
            <li>
              <Link href="#">Lorem Ipsum <i className="fa-regular fa-chevron-down"></i></Link>
              <ul className="submenu">
                <li><Link href="#">Dolor</Link></li>
                <li><Link href="#">Sit Amet</Link></li>
              </ul>
            </li>
            <div>
              <Link href="#" className="enrol-btn">Enrolment</Link>
            </div>
          </ul>
        </div>
      </div>

      <div className="side-menu" id="side-menu">
        <div className="close-icon" id="close-icon">&times;</div>
        <ul className="dropdowns">
          <li>
            <Link href="#">Qualifications <i className="fa-regular fa-chevron-down"></i></Link>
            <ul className="submenu">
              <li><Link href="#">UG Courses</Link></li>
              <li><Link href="#">PG Courses</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#">Organizations <i className="fa-regular fa-chevron-down"></i></Link>
            <ul className="submenu">
              <li><Link href="#">Partners</Link></li>
              <li><Link href="#">Affiliations</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#">Research & Analysis <i className="fa-regular fa-chevron-down"></i></Link>
            <ul className="submenu">
              <li><Link href="#">Reports</Link></li>
              <li><Link href="#">Papers</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#">Lorem Ipsum <i className="fa-regular fa-chevron-down"></i></Link>
            <ul className="submenu">
              <li><Link href="#">Dolor</Link></li>
              <li><Link href="#">Sit Amet</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    </>
  )
}

export default Header;