import React, { useEffect } from 'react'
import classes from './Service.module.css'
import "../../assets/images/img.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Service(){

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])
  
    return (
      <section className={`${classes.services}`}>
        <div className="container py-5 mt-4">
          <h2 className='text-center'>خدماتنا</h2>
          <p className='text-center my-2 '>
             البناء والديكور وتنسيقات الحدائق بالصورة التي نتخيلها  <br/> نقدم أفضل الخدمات في المجال
          </p>
          <div className="row mt-4">
            <div className="col-md-4" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className={`${classes["service-item"]}`} >
                <span className={`${classes["service-item-icon"]}`}>
                  <img src="assets/images/services/art-tools.png" alt="arch icon" />
                </span>
                <h3 className='my-2'>ديكور</h3>
                <p className='my-3 text-black-50 p-small'>
                  التقنية للوصول إلى مبنى متكامل مستدام.
                  معايير الجودة , بإشراف مختصصين بالأمور الهندسية 
                  .نقوم ببناء مشاريعنا بدقة عالية
                </p>
                <a href="#" className="text-black text-decoration-none">قراءة المزيد</a>
              </div>
            </div>
            <div className="col-md-4 " data-aos="fade-up">
              <div className={`${classes["service-item"]}`} >
                <span className={`${classes["service-item-icon"]}`}>
                  <img src="assets/images/services/home.png" alt="home icon" />
                </span>
                <h3 className='my-2 '>تنسيق الحدائق</h3>
                <p className='my-3 p-small'>
                  التقنية للوصول إلى مبنى متكامل مستدام.
                  معايير الجودة , بإشراف مختصصين بالأمور الهندسية 
                  .نقوم ببناء مشاريعنا بدقة عالية
                </p>
                <a href="#" className="text-black text-decoration-none">قراءة المزيد</a>
              </div>
            </div>
            <div className="col-md-4 "  data-aos="fade-right">
              <div className={`${classes["service-item"]}`} >
                <span className={`${classes["service-item-icon"]}`}>
                  <img src="assets/images/services/arch.png" alt="home icon" />
                </span>
                <h3 className='my-2'>بناء وتعمير</h3>
                <p className='my-3 text-black-50 p-small'>
                  التقنية للوصول إلى مبنى متكامل مستدام.
                  معايير الجودة , بإشراف مختصصين بالأمور الهندسية 
                  .نقوم ببناء مشاريعنا بدقة عالية
                </p>
                <a href="#" className="text-black text-decoration-none">قراءة المزيد</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }