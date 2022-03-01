import React, {useEffect, useState} from 'react'
import classes from './Navbar.module.css'

export default function Navbar() {

  const [navbar, setNavbar]= useState(false);


  const handleNavbarColor = () =>{
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
  }

  useEffect( () => {
    window.addEventListener("scroll", handleNavbarColor)
  })

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top  navbar-dark py-3 ${navbar ? "bg-white": "bg-transparent" }   ${classes["b-bottom"]} ${classes["header-navbar"]}`}>
        <div className="container">
          <a className="navbar-brand text-capitalize" href="/">logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active  text-white ${classes["active-link"]} `} aria-current="page" href="home">الصفحة الرئيسية</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="/projects">مشاريعنا</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">المعرض</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="/order">تواصل معنا</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="/about">من نحن</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="/service">الخدمات</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
