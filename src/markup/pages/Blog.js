import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeaderList from '../components/PageHeaderList';
import BlogSingle from '../components/BlogSingle';
import SearchWidget from '../components/SearchWidget';
import CategoryWidget from '../components/CategoryWidget';
import Button from '../components/Button';

// images
import blog_single_1 from '../../assets/images/blog/blog-single-img-1.jpg';
import blog_single_2 from '../../assets/images/blog/blog-single-img-2.jpg';
import blog_single_3 from '../../assets/images/blog/blog-single-img-3.jpg';
import blog_single_4 from '../../assets/images/blog/blog-single-img-4.jpg';

import pattern1 from '../../assets/images/patterns/pattern.png';
import page_bg from '../../assets/images/patterns/pattern-4.png';

const Blog = () => {

    const blog = [
        {
            title: 'Highlights of the Tax Cuts and Job Act of 2019 in United States.',
            excerpt: 'On December 20, 2019, Congress passed the Tax Cuts and Jobs Act. This is the largest tax overhaul since 1986. There will be significant changes to the tax law, most of which take effect on January 1st, 2018. Below is a summary of the changes. Individual Taxes Tax Brackets: All tax brackets are reduced, with the top',
            image: blog_single_1,
            month: 'AUG',
            day: 25,
            to: '/blog-detail'
        },
        {
            title: 'Highlights of the Tax Cuts and Job Act of 2019 in United States.',
            excerpt: 'On December 20, 2019, Congress passed the Tax Cuts and Jobs Act. This is the largest tax overhaul since 1986. There will be significant changes to the tax law, most of which take effect on January 1st, 2018. Below is a summary of the changes. Individual Taxes Tax Brackets: All tax brackets are reduced, with the top',
            image: blog_single_2,
            month: 'AUG',
            day: 25,
            to: '/blog-detail'
        },
        {
            title: 'Highlights of the Tax Cuts and Job Act of 2019 in United States.',
            excerpt: 'On December 20, 2019, Congress passed the Tax Cuts and Jobs Act. This is the largest tax overhaul since 1986. There will be significant changes to the tax law, most of which take effect on January 1st, 2018. Below is a summary of the changes. Individual Taxes Tax Brackets: All tax brackets are reduced, with the top',
            image: blog_single_3,
            month: 'AUG',
            day: 25,
            to: '/blog-detail'
        },
        {
            title: 'Highlights of the Tax Cuts and Job Act of 2019 in United States.',
            excerpt: 'On December 20, 2019, Congress passed the Tax Cuts and Jobs Act. This is the largest tax overhaul since 1986. There will be significant changes to the tax law, most of which take effect on January 1st, 2018. Below is a summary of the changes. Individual Taxes Tax Brackets: All tax brackets are reduced, with the top',
            image: blog_single_4,
            month: 'AUG',
            day: 25,
            to: '/blog-detail'
        }
    ];

    return (
        <>
            {/* page header list - start */}
            <PageHeaderList 
                items={[
                    {
                        text: 'News',
                        to: '/blog',
                        active: true
                    },
                    {
                        text: 'Recent',
                        to: '/blog',
                        active: false
                    },
                    {
                        text: 'Popular',
                        to: '/blog',
                        active: false
                    },
                    {
                        text: 'Most Commented',
                        to: '/blog',
                        active: false
                    }
                ]}
                addMarginTop
            />
            {/* page header list - end */}

            {/* sidebar page section - start */}
            <div className="sidebar-page page-bg">
                <div className="sidebar-page-wrapper page-bg-wrapper">
                    <div className="container page-bg-content">
                        <div className="row gx-5">
                            <div className="col-lg-8">
                                {/* blog list section - start */}
                                <div className="blog-list">
                                    <div className="blog-list-wrapper">
                                        { blog.map((item, index) => {
                                            return (
                                                    <BlogSingle
                                                        key={index}
                                                        title={item.title}
                                                        excerpt={item.excerpt}
                                                        to={item.to}
                                                        image={item.image}
                                                        month={item.month}
                                                        day={item.day}
                                                    />
                                                );
                                            }) 
                                        }
                                    </div>
                                </div>
                                {/* blog list section - end */}
                                {/* blog pagination - start */}
                                <div className="blog-pagination">
                                    <ul>
                                        <li className="active">
                                            1
                                        </li>
                                        <li>
                                            <Link to="/blog">
                                                2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">
                                                3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">
                                                <i className="fas fa-angle-double-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* blog pagination - end */}
                            </div>
                            <div className="col-xxl-3 offset-xxl-1 col-lg-4">
                                {/* sidebar section - start */}
                                <div className="sidebar">
                                    <SearchWidget/>
                                    <CategoryWidget/>
                                </div>
                                {/* sidebar section - end */}
                            </div>
                        </div>
                    </div>
                    <div className="page-bg-wrapper-image" style={{backgroundImage: `url(${page_bg})`}}></div>
                </div>
            </div>
            {/* sidebar page section - end */}

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

export default Blog;
