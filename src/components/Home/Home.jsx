import React, {useEffect} from 'react'
import classes from './Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <header className={`p-1 ${classes.header}`} >
      <div className={`${classes["bg-img"]}`} style={{backgroundImage:`url("assets/images/header/header.png")`}}></div>
      <div className={`container`}>
      <div className={`p-3 m-2 ${classes["header-content"]}`}>
        <h1 className='' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">مرحبا بكم في شركة سيف ون للأعمال الهندسية</h1>
        <p className="my-4 " data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine">
          بشعور قوي بقيمة التنوع, نقوم بإنشاء تصميم بناء متين وفريد وحلول حصرية أخرى .
        </p>
        <a href="#" className="btn btn-primary text-black ">تابع المزيد</a>
      </div>
      </div>
    </header>
  )
}
