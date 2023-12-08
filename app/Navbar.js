"use client"
import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Nav = () => {
  return (
         
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">Navbar</a>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="/" class="nav-item nav-link active">Home</a>
                    <a href="/About" class="nav-item nav-link">About</a>
                    <a href="/Contact" class="nav-item nav-link">Contact</a>
                    <a href="/Product" class="nav-item nav-link">product</a>
                    <a href="/Beautyproduct" class="nav-item nav-link">Beautyproduct</a>
                </div>
                <form class="d-flex">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search"></input>
                        <button type="button" class="btn btn-secondary"><i class="bi-search"></i></button>
                    </div>
                </form>
                <div class="navbar-nav">
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

