import React from 'react'
import classes from './About.module.css'

export default function About() {
  return (
    <section className={`${classes.about}`}>
        <div className="container">
            <h2 className='text-center  py-5 mt-4'>من نحن</h2>
            <div className="row pt-3 mb-4">
                <div className="col-md-9">
                    <div className="py-3">
                        <ul>
                            <li className={` ${classes["list-item"]}`}>
                                <p className='text-black-50'>
                                هو أول مكتب هندسى إليكترونى – يعمل من خلال شبكة المعلومات الدولية – بالشرق الاوسط ، تم تسجيل فكرة المكتب بتاريخ 19-6-2005 لصالح مؤسسة المكتب م/ نيرمين بليغ عبد المنعم حنفى، و مفهومه الأساسى هو التعامل مع جميع العملاء و فريق العمل عن بعد – من خلال سبل التواصل المعروفة بشبكه المعلومات الدولية.
                                </p>
                            </li>
                            <li className={` ${classes["list-item"]}`}>
                                <p className='text-black-50'>
                                هو أول مكتب هندسى إليكترونى – يعمل من خلال شبكة المعلومات الدولية – بالشرق الاوسط ، تم تسجيل فكرة المكتب بتاريخ 19-6-2005 لصالح مؤسسة المكتب م/ نيرمين بليغ عبد المنعم حنفى، و مفهومه الأساسى هو التعامل مع جميع العملاء و فريق العمل عن بعد – من خلال سبل التواصل المعروفة بشبكه المعلومات الدولية.
                                </p>
                            </li>
                            <li className={` ${classes["list-item"]}`}>
                                <p className='text-black-50'>
                                هو أول مكتب هندسى إليكترونى – يعمل من خلال شبكة المعلومات الدولية – بالشرق الاوسط ، تم تسجيل فكرة المكتب بتاريخ 19-6-2005 لصالح مؤسسة المكتب م/ نيرمين بليغ عبد المنعم حنفى، و مفهومه الأساسى هو التعامل مع جميع العملاء و فريق العمل عن بعد – من خلال سبل التواصل المعروفة بشبكه المعلومات الدولية.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            كلمة مؤسسة المكتب
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body ">
                                لابد أن يكون لنا حلم وهدف ، لابد أن نحقق الإختلاف الهادف ، لنغير فكر العالم عن عروبتنا عن طريق الهندسة يمكننا بناء حضارة ، يمكننا أن نكسب احترام العالم.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            الــرؤيـة
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                الوصول الى جميع فئات العملاء من الشركات و المكاتب و الافراد ليمكننا تحقيق الهدف من المكتب و هو خدمة كل العملاء بالوطن العربى عن طريق التركيز على جوده العمل و دقته بعيدا عن الروتين و التأخير المتعارف عليه , لنصل الى راحه العميل.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            الـهـدف
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                انه يمكن الوصول الى معمار المستقبل بتكنولوجيا الحاضر , فلتكن معنا فى هذا الحاضر و المستقبل
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
