"use client"
import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Nav = () => {
  return (
         
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container-fluid navbar navbar-dark bg-primary">
            <a href="#" className="navbar-brand navbar navbar-dark bg-primary">Navbar</a>
            <div className=".bg-primary.bg-gradient
" id="navbarCollapse">
               
                <form className="d-flex">
                    <div className="input-group">
                        {/* <input type="text" className="form-control" placeholder="Search"></input> */}
                        {/* <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button> */}
                    </div>
                </form>
                <div className="navbar-nav">
                 {/* <img src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png" alt="Description of the image"></img> */}
                </div>
               
                
            </div>
        </div>
    </nav>
  );
};

export default Nav;
