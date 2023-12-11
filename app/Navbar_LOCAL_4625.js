"use client"
import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Nav = () => {
  return (
         
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="/" className="nav-item nav-link active">All</a>
                    <a href="/Men_clothes" className="nav-item nav-link">mens clothing</a>
                    <a href="/Jewelery" className="nav-item nav-link">jewelery</a>
                    <a href="/Electronics" className="nav-item nav-link">electronics</a>
                </div>
                
                <div className="navbar-nav">
                 {/* <img src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png" alt="Description of the image"></img> */}
                </div>

                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link">Order</a>
                </div>
                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link">Login</a>
                </div>
                
            </div>
        </div>
    </nav>
  );
};

export default Nav;

