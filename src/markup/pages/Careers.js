import React from 'react';

// components
import PageHeaderList from '../components/PageHeaderList';
import CareerAccordion from '../components/CareerAccordion';
import CareerForm from '../components/CareerForm';
import Button from '../components/Button';

// images
import icon_1 from '../../assets/images/icons/icon-9.png';
import icon_2 from '../../assets/images/icons/icon-10.png';
import icon_3 from '../../assets/images/icons/icon-11.png';
import icon_4 from '../../assets/images/icons/icon-12.png';
import icon_5 from '../../assets/images/icons/icon-13.png';
import icon_6 from '../../assets/images/icons/icon-14.png';

import intro_bg from '../../assets/images/intro-bg.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';
import signature from '../../assets/images/signature-white.png';

const Careers = () => {

    const career_accordion = [
        {
            heading: (
                <>
                    <h3 className="c-dark-2 f-w-500">Assistant Accountant</h3>
                    <p className="paragraph paragraph-sm f-w-500 c-primary txt-upper">05- 10 years experience</p>
                    <p className="teaser">We are looking for qualified candidates to fill the position of Accounts Executive (Online Quick-Books). Employees in this role assist in the development and implementation of accounting process controls and assist in the processing of A/R and A/P and execute and review automated and non-automated billing among other responsibilities.</p>
                </>
            ),
            content: (
                <>
                    <h3 className="heading-sm f-w-500">Job Description</h3>
                    <ul>
                        <li>
                            <h4><span className="f-w-500 c-dark">Division:</span> <span className="f-w-400 c-primary">Accounting & Finance</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Level:</span> <span className="f-w-400">Non-Management</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Type:</span> <span className="f-w-400">Contact</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">JobID:</span> <span className="f-w-400">31699</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">City/State:</span> <span className="f-w-400">Melbourne, New South Wales</span></h4>
                        </li>
                    </ul>
                    <ul className="dotted">
                        <li>Process multiple payroll cycles through ADP</li>
                        <li>Audit time and attendance data</li>
                        <li>Prepare reports and analyze reports</li>
                        <li>401k Administration</li>
                        <li>Other Senior level payroll duties</li>
                        <li>5+ years of advanced payroll experience</li>
                        <li>Experience within ADP</li>
                    </ul>
                    <CareerForm/>
                </>
            )
        },
        {
            heading: (
                <>
                    <h3 className="c-dark-2 f-w-500">Accounts Executive (Online Quick-Books)</h3>
                    <p className="paragraph paragraph-sm f-w-500 c-primary txt-upper">05- 10 years experience</p>
                    <p className="teaser">We are looking for qualified candidates to fill the position of Accounts Executive (Online Quick-Books). Employees in this role assist in the development and implementation of accounting process controls and assist in the processing of A/R and A/P and execute and review automated and non-automated billing among other responsibilities.</p>
                </>
            ),
            content: (
                <>
                    <h3 className="heading-sm f-w-500">Job Description</h3>
                    <ul>
                        <li>
                            <h4><span className="f-w-500 c-dark">Division:</span> <span className="f-w-400 c-primary">Accounting & Finance</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Level:</span> <span className="f-w-400">Non-Management</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Type:</span> <span className="f-w-400">Contact</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">JobID:</span> <span className="f-w-400">31699</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">City/State:</span> <span className="f-w-400">Melbourne, New South Wales</span></h4>
                        </li>
                    </ul>
                    <ul className="dotted">
                        <li>Process multiple payroll cycles through ADP</li>
                        <li>Audit time and attendance data</li>
                        <li>Prepare reports and analyze reports</li>
                        <li>401k Administration</li>
                        <li>Other Senior level payroll duties</li>
                        <li>5+ years of advanced payroll experience</li>
                        <li>Experience within ADP</li>
                    </ul>
                    <CareerForm/>
                </>
            )
        },
        {
            heading: (
                <>
                    <h3 className="c-dark-2 f-w-500">Manager Operations</h3>
                    <p className="paragraph paragraph-sm f-w-500 c-primary txt-upper">05- 10 years experience</p>
                    <p className="teaser">We are looking for qualified candidates to fill the position of Accounts Executive (Online Quick-Books). Employees in this role assist in the development and implementation of accounting process controls and assist in the processing of A/R and A/P and execute and review automated and non-automated billing among other responsibilities.</p>
                </>
            ),
            content: (
                <>
                    <h3 className="heading-sm f-w-500">Job Description</h3>
                    <ul>
                        <li>
                            <h4><span className="f-w-500 c-dark">Division:</span> <span className="f-w-400 c-primary">Accounting & Finance</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Level:</span> <span className="f-w-400">Non-Management</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Type:</span> <span className="f-w-400">Contact</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">JobID:</span> <span className="f-w-400">31699</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">City/State:</span> <span className="f-w-400">Melbourne, New South Wales</span></h4>
                        </li>
                    </ul>
                    <ul className="dotted">
                        <li>Process multiple payroll cycles through ADP</li>
                        <li>Audit time and attendance data</li>
                        <li>Prepare reports and analyze reports</li>
                        <li>401k Administration</li>
                        <li>Other Senior level payroll duties</li>
                        <li>5+ years of advanced payroll experience</li>
                        <li>Experience within ADP</li>
                    </ul>
                    <CareerForm/>
                </>
            )
        },
        {
            heading: (
                <>
                    <h3 className="c-dark-2 f-w-500">Senior Accounts Executive</h3>
                    <p className="paragraph paragraph-sm f-w-500 c-primary txt-upper">05- 10 years experience</p>
                    <p className="teaser">We are looking for qualified candidates to fill the position of Accounts Executive (Online Quick-Books). Employees in this role assist in the development and implementation of accounting process controls and assist in the processing of A/R and A/P and execute and review automated and non-automated billing among other responsibilities.</p>
                </>
            ),
            content: (
                <>
                    <h3 className="heading-sm f-w-500">Job Description</h3>
                    <ul>
                        <li>
                            <h4><span className="f-w-500 c-dark">Division:</span> <span className="f-w-400 c-primary">Accounting & Finance</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Level:</span> <span className="f-w-400">Non-Management</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">Type:</span> <span className="f-w-400">Contact</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">JobID:</span> <span className="f-w-400">31699</span></h4>
                        </li>
                        <li>
                            <h4><span className="f-w-500 c-dark">City/State:</span> <span className="f-w-400">Melbourne, New South Wales</span></h4>
                        </li>
                    </ul>
                    <ul className="dotted">
                        <li>Process multiple payroll cycles through ADP</li>
                        <li>Audit time and attendance data</li>
                        <li>Prepare reports and analyze reports</li>
                        <li>401k Administration</li>
                        <li>Other Senior level payroll duties</li>
                        <li>5+ years of advanced payroll experience</li>
                        <li>Experience within ADP</li>
                    </ul>
                    <CareerForm/>
                </>
            )
        }
    ];

    return (
        <>
            {/* page header list - start */}
            <PageHeaderList 
                items={[
                    {
                        text: 'About',
                        to: '/about',
                        active: false
                    },
                    {
                        text: 'Our Team',
                        to: '/team',
                        active: false
                    },
                    {
                        text: 'Careers',
                        to: '/careers',
                        active: true
                    }
                ]}
                addMarginTop
            />
            {/* page header list - end */}

            {/* icon text section - start */}
            <div className="icon-text-2">
                <div className="icon-text-2-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="icon-text-2-header">
                                    <h2 className="headin-lg">Calling All Accountants</h2>
                                    <p className="paragraph c-grey">Looking for a place that values flexibility, freedom and growth? Find out why Satgur boasts
                                        the world's most talented, friendly team of tax and accounting professionals.</p>
                                    <h3 className="heading-sm">Benefits of working at Satgur</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row icon-text-2-row">
                            <div className="col-lg-4">
                                <div className="icon-text-2-single">
                                    <div className="icon-circle icon-circle-lg-1">
                                        <img src={icon_1} alt="icon" />
                                    </div>
                                    <h4 className="c-dark-2">Flexible Lifestyle</h4>
                                    <p className="c-grey">Sed blandit lobortis metus quam pellentesque sedeu hendrerited este vel aliquet sapien onec ege lectus ac enim vestibulum  ctum  ut malesuada nibh.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-text-2-single">
                                    <div className="icon-circle icon-circle-lg-1">
                                        <img src={icon_2} alt="icon" />
                                    </div>
                                    <h4 className="c-dark-2">Enjoy the Perks</h4>
                                    <p className="c-grey">Sed blandit lobortis metus quam pellentesque sedeu hendrerited este vel aliquet sapien onec ege lectus ac enim vestibulum  ctum  ut malesuada nibh.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-text-2-single">
                                    <div className="icon-circle icon-circle-lg-1">
                                        <img src={icon_3} alt="icon" />
                                    </div>
                                    <h4 className="c-dark-2">Expert Training</h4>
                                    <p className="c-grey">Sed blandit lobortis metus quam pellentesque sedeu hendrerited este vel aliquet sapien onec ege lectus ac enim vestibulum  ctum  ut malesuada nibh.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-text-2-single">
                                    <div className="icon-circle icon-circle-lg-1">
                                        <img src={icon_4} alt="icon" />
                                    </div>
                                    <h4 className="c-dark-2">Rejuvenate</h4>
                                    <p className="c-grey">Sed blandit lobortis metus quam pellentesque sedeu hendrerited este vel aliquet sapien onec ege lectus ac enim vestibulum  ctum  ut malesuada nibh.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-text-2-single">
                                    <div className="icon-circle icon-circle-lg-1">
                                        <img src={icon_5} alt="icon" />
                                    </div>
                                    <h4 className="c-dark-2">Quality Holidays</h4>
                                    <p className="c-grey">Sed blandit lobortis metus quam pellentesque sedeu hendrerited este vel aliquet sapien onec ege lectus ac enim vestibulum  ctum  ut malesuada nibh.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-text-2-single">
                                    <div className="icon-circle icon-circle-lg-1">
                                        <img src={icon_6} alt="icon" />
                                    </div>
                                    <h4 className="c-dark-2">Industry Links</h4>
                                    <p className="c-grey">Sed blandit lobortis metus quam pellentesque sedeu hendrerited este vel aliquet sapien onec ege lectus ac enim vestibulum  ctum  ut malesuada nibh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image intro-bg">
                    <img src={intro_bg} alt="intro-bg" />
                </div>
            </div>
            {/* icon text section - end */}

            {/* cta section - start */}
            <div className="cta-section cta-section-signature b-primary">
                <div className="cta-section-wrapper section-wrapper" style={{backgroundImage: `url(${pattern1})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content txt-center">
                                <h2 className="c-white f-w-400 heading-60 mg-center">We’re the 2nd Largest Accounting Firm in the Melbourne Region and the Largest Firm in New South Wales.</h2>
                                <img src={signature} alt="signature" />
                                <p className="paragraph-sm c-white">CPA/PFS, CFP®, CGMA, CDFA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta section - end */}

            {/* career section - start */}
            <div className="career">
                <div className="career-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="career-heading">
                                <h2 className="heading-lg-1">Career Opportunities</h2>
                            </div>
                        </div>
                        <div className="row">
                            <CareerAccordion content={career_accordion} activeIndex={1} />
                        </div>
                    </div>
                </div>
            </div>
            {/* career section - end */}

            {/* cta section - start */}
            <div className="cta-section b-primary">
                <div className="cta-section-wrapper section-wrapper" style={{ backgroundImage: `url(${pattern1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content txt-center">
                                <h2 className="c-white f-w-400 heading-40 mg-center">Hire a professional CPA & Accounting firm.</h2>
                                <div className="button-group">
                                    <Button
                                        className='button-1 txt-upper'
                                        to='/contact'
                                        icon='far fa-envelope'
                                        text='book appointment'
                                    />
                                    <Button
                                        className='button-2 txt-upper'
                                        to='/contact'
                                        icon='fas fa-headphones'
                                        text='talk to an expert'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta section - end */}
        </>
    );
};

export default Careers;
