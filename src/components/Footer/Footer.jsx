import React from 'react'
import classes from './Footer.module.css'
export default function Footer() {
  return (
    <footer className='bg-dark  py-3 text-white'>
      <div className="container">
        <div className="row">
        <div className="col-md-6 text-center">
            <div className={` my-2 ${classes["social-icons"]}`}>
                <i className="bi bi-facebook mx-2"></i>
                <i className="bi bi-google mx-2"></i>
                <i className="bi bi-twitter mx-2"></i>
                <i className="bi bi-whatsapp mx-2"></i>
                <i className="bi bi-linkedin mx-2"></i>
            </div>
          </div>
          <div className="col-md-6">
            <p className='p-small my-2 text-center '>جميع الحقوق محفوظة &copy; 2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
