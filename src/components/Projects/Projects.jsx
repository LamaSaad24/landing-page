import React from 'react'
import classes from './Projects.module.css'
import Slider from "react-slick";

export default function Projects() {
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "150px",
      slidesToShow: 2,
      speed: 500,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerPadding: "100px",
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerPadding: "70px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: "60px",
          }
        }
      ]
  };
  return (
    <section className={`${classes.projects}`} style={{backgroundImage : `url("assets/images/project/bg.png")`}}>
      <div className="container py-5 mt-4">
        <h2 className='text-center text-white'>آخر مشاريعنا</h2>
        <p className='text-center my-3'>البناء والديكور وتنسيقات الحدائق بالصورة التي تتخيلها نقدم أفضل الخدمات في المجال</p>
        <Slider {...settings}>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <div className={`${classes["project-item-img"]}`}>
                  <img src="assets/images/project/pro1.jfif"  alt="project one" />
 
                </div>               <p className='text-center my-3 p-small'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <div className={`${classes["project-item-img"]}`}>
                  <img src="assets/images/project/pro3.jfif"  alt="project two" />
 
                </div>               <p className='text-center my-3 p-small'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <div className={`${classes["project-item-img"]}`}>
                  <img src="assets/images/project/pro1.jfif"  alt="project three" />
                </div>
                <p className='text-center my-3 p-small'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <div className={`${classes["project-item-img"]}`}>
                  <img src="assets/images/project/pro2.png"  alt="project four" />
 
                </div>               <p className='text-center my-3 p-small'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
        </Slider>
      </div>
    </section>
  )
}
