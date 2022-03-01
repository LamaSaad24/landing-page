import React, {useEffect} from 'react'
import classes from './Order.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Order() {
    useEffect(() => {
        AOS.init({duration: 500});
      }, [])
  return (
    <div className={` my-5 text-center ${classes.order}`} style={{height:"auto"}}>
        <div className="container ">
        <h2 className='my-2'> اطلب تصميمك</h2>
            <div className="row mt-5">
                <div className="col-md-3">
                    <div className={`${classes["order-item"]}`}>
                        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className={`  ${classes["order-item-icon"]}`}>
                        <i className="bi bi-pencil-square"></i>
                        </div>
                        <h3 className='my-2'>أرسل طلباتك</h3>
                        <p className='text-muted'>أرسل طلباتك التفصيلة عبر موقعنا</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`${classes["order-item"]}`}>
                        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className={`  ${classes["order-item-icon"]}`} id={`${classes["order-item-2"]}`}>
                        <i className="bi bi-bar-chart"></i>
                        </div>
                        <h3 className='my-2'>تحليل الطلب</h3>
                        <p className='text-muted'>احصل على عرض فني ومالي خلال 48 ساعة</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className={`${classes["order-item"]}`}>
                        <div className={`  ${classes["order-item-icon"]}`} id={`${classes["order-item-3"]}`}>
                        <i className="bi bi-currency-exchange"></i>
                        </div>
                        <h3 className='my-2'>الدفع الالكتروني</h3>
                        <p className='text-muted'>تحويل القيمة المقدرة وفق العرص المالي</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`${classes["order-item"]}`}>
                        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className={`  ${classes["order-item-icon"]}`} id={`${classes["order-item-4"]}`}>
                        <i className="bi bi-check2-square"></i>
                        </div>
                        <h3 className='my-2'> استلم التصميم </h3>
                        <p className='text-muted'>الحصول على التصميم المطلوب وفق المدة المحددة</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
