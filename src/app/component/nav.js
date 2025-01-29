'use client'


import { useEffect } from "react";
import Link from 'next/link';
import './nav.css'

export default function Nav() {

  useEffect(() => {

      // Initialize Wow.js after the component mounts
      if (typeof window !== 'undefined') {
        new WOW().init();
      }
      
    const menu = document.querySelector(".menu-989");
    const hamburger = document.querySelector(".hamburger-989");

    if (!menu || !hamburger) return;

    const toggleMenu = () => {
        if (menu.classList.contains("open-989")) {
            menu.style.height = "0px"; // Collapse
            setTimeout(() => menu.classList.remove("open-989"), 500); // Remove class after animation
        } else {
            menu.classList.add("open-989");
            menu.style.height = "520px"; // Expand
        }
    };

    hamburger.addEventListener("click", toggleMenu);

    return () => {
        hamburger.removeEventListener("click", toggleMenu);
    };
}, []);

  return (
    <nav className="nav-989">
    <div className="logo-989"><img src="\images-and-icon\LOGO 1.png" width={'90px'} alt="" /></div>
    <div className="menu-989">

      <a  href="/" className="link-989">Home</a>
      <a href="/about-us" className="link-989">About Us</a>
      <a href="/values" className="link-989">Values</a>
      <a href="/Goals" className="link-989">Goals & Objectives</a>
      <a href="/Services" className="link-989">Services</a>
      <a href="/Partners" className="link-989">Partners</a>
      <a href="/Team" className="link-989">Our Team</a>
    </div>
    <div className="hamburger-989">
      <i className="fas fa-bars"></i>
    </div>
  </nav>
  )
}
