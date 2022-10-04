import './Navbar.css';
import React from "react";

export default function Navbar() {
  return (
    <>
      <script src="https://kit.fontawesome.com/6ec4c7a136.js" crossOrigin="anonymous"></script>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#"><b>D Store</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span ><i className="fa-sharp fa-solid fa-house"></i></span>
                  Home</a>
              </li>
              <li className="nav-item">
                <a id="about" className="nav-link" href="#">About Us</a>
              </li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          </li> */}
              <li className="nav-item">
                <a id="about" className="nav-link" href="#">Products</a>
              </li>
              {/* <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">Clothes</a></li>
            <li><a className="dropdown-item" href="#">Footwear</a></li>
            <li><a className="dropdown-item" href="#">Electronic Devices</a></li>
          </ul>  */}

              <li className="nav-item">
                <a id="about" className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit"><span><i class="fa-solid fa-magnifying-glass"></i></span></button>
            </form> */}
            <div className="buttons">
              <a href='' className='btn btn-outline-dark'>
                <i className='fa fa-sign-in me-1'></i> Login</a>
                <a href='' className='btn btn-outline-dark ms-2'>
                <i className='fa fa-user-plus me-1'></i> Register</a>
                <a href='' className='btn btn-outline-dark ms-2'>
                <i className='fa fa-shopping-cart me-1'></i> Cart (0)</a>
            </div>


      
          </div>
        </div>
      </nav>
    </>
  )
}
