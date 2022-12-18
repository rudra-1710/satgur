import React from 'react';

// components
import PageHeaderList from '../components/PageHeaderList';
import TeamMember from '../components/TeamMember';
import TestimonialSlider from '../components/TestimonialSlider';
import Button from '../components/Button';


// images
import team_img_1 from '../../assets/images/team/team-member-img-1.jpg';
import team_img_2 from '../../assets/images/team/team-member-img-2.jpg';
import team_img_3 from '../../assets/images/team/team-member-img-3.jpg';
import team_img_4 from '../../assets/images/team/team-member-img-4.jpg';
import team_img_5 from '../../assets/images/team/team-member-img-5.jpg';
import team_img_6 from '../../assets/images/team/team-member-img-6.jpg';
import team_img_7 from '../../assets/images/team/team-member-img-7.jpg';
import team_img_8 from '../../assets/images/team/team-member-img-8.jpg';
import team_img_9 from '../../assets/images/team/team-member-img-9.jpg';
import team_img_10 from '../../assets/images/team/team-member-img-10.jpg';
import team_img_11 from '../../assets/images/team/team-member-img-11.jpg';
import team_img_12 from '../../assets/images/team/team-member-img-12.jpg';

import testimonial_img_3 from '../../assets/images/testimonial-bg-3.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';

const Team = () => {

    const socials = [
        {
            href: '#',
            icon: 'fab fa-facebook-f'
        },
        {
            href: '#',
            icon: 'fab fa-linkedin-in'
        },
        {
            href: '#',
            icon: 'fab fa-google-plus-g'
        }
    ];

    const team_members = [
        {
            image: team_img_1,
            name: 'William J. Wilson',
            designation: 'CPA/PFS, CFP®, CGMA, CDFA',
            email: 'william@cbex.com',
            social: socials
        },
        {
            image: team_img_2,
            name: 'Pamela A. Jenice',
            designation: 'CPA',
            email: 'pamela@cbex.com',
            social: socials
        },
        {
            image: team_img_3,
            name: 'Jessica B. Wilde',
            designation: 'CPA, MBA',
            email: 'jessica@cbex.com',
            social: socials
        },
        {
            image: team_img_4,
            name: 'Stephanie P. Brooks',
            designation: 'CPA, MBA, CFE',
            email: 'stephanie@cbex.com',
            social: socials
        },
        {
            image: team_img_5,
            name: 'Mark S. Stevens',
            designation: 'CPA, MBA',
            email: 'mark@cbex.com',
            social: socials
        },
        {
            image: team_img_6,
            name: 'Elizabeth C. Martin',
            designation: 'CPA, CFE, EA, MBA',
            email: 'elizabeth@cbex.com',
            social: socials
        },
        {
            image: team_img_7,
            name: 'Kevin P. Foley',
            designation: 'CPA, CFE, EA, MBA',
            email: 'ekevin@cbex.com',
            social: socials
        },
        {
            image: team_img_8,
            name: 'Britney K. Spencer',
            designation: 'CPA',
            email: 'britney@cbex.com',
            social: socials
        },
        {
            image: team_img_9,
            name: 'Kelvin W. Brown',
            designation: 'CPA, MBA, CFE',
            email: 'kelvin@cbex.com',
            social: socials
        },
        {
            image: team_img_10,
            name: 'Chris A. Anderson',
            designation: 'CPA, MBA, CFE',
            email: 'chris@cbex.com',
            social: socials
        },
        {
            image: team_img_11,
            name: 'Bill A. Quinche',
            designation: 'Accountant, Technologist',
            email: 'bill@cbex.com',
            social: socials
        },
        {
            image: team_img_12,
            name: 'Martin J. White',
            designation: 'Office Assitant',
            email: 'martin@cbex.com',
            social: socials
        }
    ];

    const testimonials = [
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'john miller'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'david cole'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'anita sam'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'john miller'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'david cole'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'anita sam'
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
                        active: true
                    },
                    {
                        text: 'Careers',
                        to: '/careers',
                        active: false
                    }
                ]}
                addMarginTop
            />
            {/* page header list - end */}

            {/* team section - start */}
            <div className="team">
                <div className="team-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="team-header">
                                    <h2 className="headin-lg">Meet Our Accounting Pros!</h2>
                                    <p className="paragraph c-grey">Proud to say that many of these friendly faces have been with us since the very beginning. Satgur boasts
                                        the world's most talented, friendly team of tax and accounting professionals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row team-member-row gx-5">
                            { team_members.map((member, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 offset-md-0 col-10 offset-1" key={index}>
                                        <TeamMember
                                            image={member.image}
                                            name={member.name}
                                            designation={member.designation}
                                            email={member.email}
                                            social={member.social}
                                        />
                                    </div>
                                );
                            }) } 
                        </div>
                    </div>
                </div>
            </div>
            {/* team section - end */}

            {/* testimonial slider section - start */}
            <div className="testimonial testimonial-3">
                <div className='testimonial-wrapper b-primary-light-2'>
                    <div className="container">
                        <div className="row">
                            <div className="testimonial-heading-content">
                                <h2 className="f-w-400 heading-40">Hear from what others say about our company</h2>
                            </div>
                        </div>
                        <div className="row">
                            <TestimonialSlider testimonials={testimonials} />
                        </div>
                    </div>
                    <div className="background-img" style={{backgroundImage: `url(${testimonial_img_3})`}}></div>
                </div>
            </div>
            {/* testimonial slider section - end */}

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

export default Team;
